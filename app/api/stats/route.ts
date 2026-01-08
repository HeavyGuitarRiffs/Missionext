import { supabase } from "@/lib/supabase"

export async function GET() {
  try {
    // Count total Coinbase clicks
    const { count: coinbaseCount, error: coinbaseError } = await supabase
      .from("coinbase_clicks")
      .select("*", { count: "exact", head: true })

    if (coinbaseError) throw coinbaseError

    // Get current mission count
    const { data: missionData, error: missionError } = await supabase
      .from("mission_progress")
      .select("count")
      .eq("id", 1)
      .single()

    if (missionError) throw missionError

    return Response.json({
      coinbase_clicks: coinbaseCount ?? 0,
      mission: missionData?.count ?? 0,
    })
  } catch (err) {
    console.error("Stats GET error:", err)
    return Response.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    )
  }
}
