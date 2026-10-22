import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { z } from 'npm:zod@3'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend'
const TO = 'info@wijnhandelvanzoolingen.nl'
const FROM = 'Website Van Zoolingen <website@pcicaritasboaz.nl>'

const Body = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
})

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  try {
    const parsed = Body.safeParse(await req.json())
    if (!parsed.success) return json({ error: 'Ongeldige invoer' }, 400)
    const { name, email, message } = parsed.data

    const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)
    const { error: dbError } = await supabase.from('contact_submissions').insert({ name, email, message })
    if (dbError) console.error('insert failed', dbError.message)

    const res = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Deno.env.get('LOVABLE_API_KEY')}`,
        'X-Connection-Api-Key': Deno.env.get('RESEND_API_KEY')!,
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Nieuw bericht via website van ${name}`,
        html: `<p><strong>Naam:</strong> ${esc(name)}</p><p><strong>E-mail:</strong> ${esc(email)}</p><p><strong>Bericht:</strong></p><p>${esc(message).replace(/\n/g, '<br>')}</p>`,
      }),
    })
    if (!res.ok) {
      const body = await res.text()
      console.error(`Resend failed [${res.status}]: ${body}`)
      if (dbError) return json({ error: 'Verzenden mislukt' }, 500)
      return json({ success: true, emailed: false })
    }
    return json({ success: true, emailed: true })
  } catch (e) {
    console.error(e)
    return json({ error: 'Serverfout' }, 500)
  }
})
