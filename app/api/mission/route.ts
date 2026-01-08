import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

// GET: fetch current mission count
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("mission_progress")
      .select("count")
      .eq("id", 1)
      .single()

    if (error) throw error

    return NextResponse.json({ mission: data?.count ?? 0 })
  } catch (err) {
    console.error("Mission GET error:", err)
    return NextResponse.json(
      { error: "Failed to fetch mission progress" },
      { status: 500 }
    )
  }
}

// POST: increment mission count
export async function POST() {
  try {
    // Use Supabase RPC or update query
    const { data, error } = await supabase
      .from("mission_progress")
      .update({ count: supabase.raw("count + 1") })
      .eq("id", 1)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ mission: data?.count ?? 0 })
  } catch (err) {
    console.error("Mission POST error:", err)
    return NextResponse.json(
      { error: "Failed to increment mission progress" },
      { status: 500 }
    )
  }
}
