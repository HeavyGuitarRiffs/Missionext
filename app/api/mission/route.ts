import { supabase } from "@/lib/supabase"

export async function POST() {
  const { error } = await supabase.rpc("increment_mission")
  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  const { data } = await supabase
    .from("mission_progress")
    .select("progress")
    .single()

  return Response.json({ mission: data?.progress ?? 0 })
}

export async function GET() {
  const { data } = await supabase
    .from("mission_progress")
    .select("progress")
    .single()

  return Response.json({ mission: data?.progress ?? 0 })
}
