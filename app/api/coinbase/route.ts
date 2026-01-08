import { supabase } from "@/lib/supabase"

export async function POST() {
  const { error } = await supabase
    .from("coinbase_clicks")
    .insert({})

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true })
}
