#!/usr/bin/env node
// Post-build script: turn Lovable asset pointers into normal static files.
// It downloads every `*.asset.json` image into `dist/assets/static-media/`
// and rewrites the built HTML/JS/CSS so DirectAdmin/Apache never has to serve
// `/__l5e/...` URLs.

import { readdir, readFile, mkdir, writeFile, stat, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const distDir = resolve(projectRoot, "dist");
const srcDir = resolve(projectRoot, "src");

const localAssetDir = join(distDir, "assets", "static-media");
const TEXT_EXTENSIONS = new Set([
  ".html",
  ".js",
  ".css",
  ".json",
  ".map",
  ".txt",
  ".xml",
  ".svg",
]);

// Origins that can serve the immutable uploaded assets. ASSET_ORIGIN can be
// used when running this from another environment.
const ASSET_ORIGINS = [
  process.env.ASSET_ORIGIN,
  "https://sharp-vines-square.lovable.app",
  "https://02f06138-4d42-4cee-98bb-7505344555f4.lovableproject.com",
  "https://id-preview--02f06138-4d42-4cee-98bb-7505344555f4.lovable.app",
].filter(Boolean);

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

function localNameForAsset(json) {
  const sourceName = json.original_filename || basename(json.url);
  const safeName = sourceName.replace(/[^a-zA-Z0-9._-]/g, "-");
  return `${json.asset_id}-${safeName}`;
}

async function fetchAsset(url) {
  const errors = [];
  for (const origin of ASSET_ORIGINS) {
    const remote = origin + url;
    try {
      const res = await fetch(remote, {
        headers: { "User-Agent": "Mozilla/5.0 static-export" },
      });
      if (res.ok) return { remote, buffer: Buffer.from(await res.arrayBuffer()) };
      errors.push(`${remote}: HTTP ${res.status}`);
    } catch (err) {
      errors.push(`${remote}: ${err.message}`);
    }
  }
  throw new Error(errors.join("; "));
}

async function downloadAsset(pointerPath) {
  const json = JSON.parse(await readFile(pointerPath, "utf8"));
  if (!json.url || !json.url.startsWith("/__l5e/")) return null;

  const localName = localNameForAsset(json);
  const localUrl = `/assets/static-media/${localName}`;
  const target = join(localAssetDir, localName);
  if (existsSync(target)) {
    const s = await stat(target);
    if (s.size > 0) return { url: json.url, localUrl, status: "cached" };
  }

  const { buffer: buf } = await fetchAsset(json.url);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, buf);
  return { url: json.url, localUrl, status: "downloaded", bytes: buf.length };
}

async function rewriteBuiltFiles(replacements) {
  let changedFiles = 0;
  for await (const file of walk(distDir)) {
    if (!TEXT_EXTENSIONS.has(extname(file))) continue;

    const before = await readFile(file, "utf8");
    let after = before;
    for (const [from, to] of replacements) {
      after = after.replaceAll(from, to);
    }

    if (after !== before) {
      await writeFile(file, after);
      changedFiles += 1;
    }
  }
  return changedFiles;
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
  console.log(`[postbuild-static] Origins: ${ASSET_ORIGINS.join(", ")}`);
  const pointers = await findAssetPointers();
  console.log(`[postbuild-static] Found ${pointers.length} asset pointers`);

  let downloaded = 0;
  let cached = 0;
  let totalBytes = 0;
  const failures = [];
  const replacements = new Map();

  await Promise.all(
    pointers.map(async (p) => {
      try {
        const result = await downloadAsset(p);
        if (!result) return;
        replacements.set(result.url, result.localUrl);
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

  if (failures.length) {
    console.error(`[postbuild-static] ${failures.length} failures:`);
    for (const f of failures) console.error(" -", f.pointer, "->", f.error);
    process.exit(1);
  }

  const rewritten = await rewriteBuiltFiles(replacements);

  await copySpaFallback();

  console.log(
    `[postbuild-static] Downloaded ${downloaded} new (${(
      totalBytes / 1024
    ).toFixed(1)} KB), reused ${cached} cached, rewrote ${rewritten} built files`
  );
}

main().catch((err) => {
  console.error("[postbuild-static] Fatal:", err);
  process.exit(1);
});