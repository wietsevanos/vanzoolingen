#!/usr/bin/env node
// Post-build script: download all Lovable CDN assets referenced via
// `*.asset.json` pointer files into the dist/ output, so the site can be
// served as a fully self-contained static bundle on any host (DirectAdmin,
// Apache, nginx, S3, etc.) without depending on Lovable's CDN.

import { readdir, readFile, mkdir, writeFile, stat, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const distDir = resolve(projectRoot, "dist");
const srcDir = resolve(projectRoot, "src");

// Origin that serves the CDN assets. Override with ASSET_ORIGIN env var if needed.
const ASSET_ORIGIN =
  process.env.ASSET_ORIGIN ||
  "https://id-preview--02f06138-4d42-4cee-98bb-7505344555f4.lovable.app";

if (!existsSync(distDir)) {
  console.error("[postbuild-static] dist/ not found. Run `vite build` first.");
  process.exit(1);
}

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

async function findAssetPointers() {
  const pointers = [];
  for await (const file of walk(srcDir)) {
    if (file.endsWith(".asset.json")) pointers.push(file);
  }
  return pointers;
}

async function downloadAsset(pointerPath) {
  const json = JSON.parse(await readFile(pointerPath, "utf8"));
  if (!json.url || !json.url.startsWith("/__l5e/")) return null;

  const target = join(distDir, json.url);
  if (existsSync(target)) {
    const s = await stat(target);
    if (s.size > 0) return { url: json.url, status: "cached" };
  }

  const remote = ASSET_ORIGIN + json.url;
  const res = await fetch(remote);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${remote}: HTTP ${res.status}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, buf);
  return { url: json.url, status: "downloaded", bytes: buf.length };
}

async function copySpaFallback() {
  // SPA fallback: copy index.html to 404.html so deep-link refreshes work on
  // hosts that don't support .htaccess rewrites (GitHub Pages, etc.). On
  // Apache/DirectAdmin, the .htaccess in public/ also handles SPA routing.
  const indexHtml = join(distDir, "index.html");
  const notFound = join(distDir, "404.html");
  if (existsSync(indexHtml) && !existsSync(notFound)) {
    await copyFile(indexHtml, notFound);
    console.log("[postbuild-static] Wrote 404.html SPA fallback");
  }
}

async function main() {
  console.log(`[postbuild-static] Origin: ${ASSET_ORIGIN}`);
  const pointers = await findAssetPointers();
  console.log(`[postbuild-static] Found ${pointers.length} asset pointers`);

  let downloaded = 0;
  let cached = 0;
  let totalBytes = 0;
  const failures = [];

  await Promise.all(
    pointers.map(async (p) => {
      try {
        const result = await downloadAsset(p);
        if (!result) return;
        if (result.status === "downloaded") {
          downloaded += 1;
          totalBytes += result.bytes || 0;
        } else {
          cached += 1;
        }
      } catch (err) {
        failures.push({ pointer: p, error: err.message });
      }
    })
  );

  await copySpaFallback();

  console.log(
    `[postbuild-static] Downloaded ${downloaded} new (${(
      totalBytes / 1024
    ).toFixed(1)} KB), reused ${cached} cached`
  );
  if (failures.length) {
    console.error(`[postbuild-static] ${failures.length} failures:`);
    for (const f of failures) console.error(" -", f.pointer, "->", f.error);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("[postbuild-static] Fatal:", err);
  process.exit(1);
});