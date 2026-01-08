import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST() {
  try {
    // Increment the counter row with id=1
    const { error: upsertError } = await supabase
      .from("coinbase_clicks")
      .upsert(
        { id: 1, clicks: 1 },       // row to insert if it doesn't exist
        { onConflict: "id", increment: { clicks: 1 } } // increment clicks if exists
      )

    if (upsertError) throw upsertError

    // Fetch current clicks
    const { data, error: selectError } = await supabase
      .from("coinbase_clicks")
      .select("clicks")
      .eq("id", 1)
      .single()

    if (selectError) throw selectError

    return NextResponse.json({
      success: true,
      clicks: data?.clicks ?? 0,
    })
  } catch (err) {
    console.error("Coinbase click error:", err)
    return NextResponse.json(
      { error: "Failed to increment clicks" },
      { status: 500 }
    )
  }
}
