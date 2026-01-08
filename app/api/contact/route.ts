import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {
  try {
    const { platform } = await req.json()

    // Call the Supabase RPC function to increment contact clicks
    const { error } = await supabase.rpc("increment_contact", { p: platform })
    if (error) throw error

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact click error:", err)
    return NextResponse.json(
      { error: "Failed to record contact click" },
      { status: 500 }
    )
  }
}
