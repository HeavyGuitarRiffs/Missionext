import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST() {
  try {
    // Increment the "coinbase_clicks" counter in Supabase
    const { error } = await supabase
      .from("coinbase_clicks")           // table name in Supabase
      .upsert(
        { id: 1, clicks: 1 },           // id=1 keeps a single row for the counter
        { onConflict: "id", increment: { clicks: 1 } }
      )

    if (error) throw error

    // Fetch the current clicks
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
    console.error("Supabase click error:", err)
    return NextResponse.json({ error: "Failed to record click" }, { status: 500 })
  }
}
