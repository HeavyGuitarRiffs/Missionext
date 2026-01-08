"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

const TARGET = 12

export default function Home() {
  const [clicks, setClicks] = useState<number>(0)
  const [mission, setMission] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  // Fetch stats from Supabase
  useEffect(() => {
    async function loadStats() {
      try {
        // Get total Coinbase clicks
        const { count: coinbaseCount, error: coinbaseError } = await supabase
          .from("coinbase_clicks")
          .select("*", { count: "exact", head: true })
        if (coinbaseError) throw coinbaseError
        setClicks(coinbaseCount ?? 0)

        // Get mission progress
        const { data: missionData, error: missionError } = await supabase
          .from("mission_progress")
          .select("count")
          .eq("id", 1)
          .single()
        if (missionError) throw missionError
        setMission(missionData?.count ?? 0)
      } catch (err) {
        console.error("Failed to fetch stats:", err)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [])

  const missionProgress = Math.min((mission / TARGET) * 100, 100)

  // Increment mission in Supabase
  async function confirmSignup() {
    try {
      await supabase.rpc("increment_mission", { p: "mission" }) // RPC function you created
      const { data: updatedMission } = await supabase
        .from("mission_progress")
        .select("count")
        .eq("id", 1)
        .single()
      setMission(updatedMission?.count ?? mission)
    } catch (err) {
      console.error("Failed to increment mission:", err)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/bitcoin3.png"
        alt="Bitcoin background"
        fill
        priority
        className="absolute inset-0 -z-10 object-cover object-[70%_center]"
      />

      {/* Foreground */}
      <div className="relative z-20 flex min-h-screen items-center justify-center">
        <main className="flex w-full max-w-5xl flex-col items-center gap-16 px-6 py-32 text-center">

          {/* Brand Header */}
          <div className="flex items-center gap-4">
            <Image
              src="/missionext.png"
              alt="Mi$$|()N3Xt logo"
              width={56}
              height={56}
              priority
            />
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 drop-shadow">
              Mi$$|ON3Xt
            </h1>
          </div>

          {/* Subheading */}
          <p className="max-w-3xl text-2xl text-zinc-900 drop-shadow-sm">
            Complete the mission. Earn{" "}
            <span className="font-bold">$30 in crypto</span>{" "}
            when you trade $20 on{" "}
            <span className="font-bold">Coinbase</span>.
          </p>

          {/* CTA */}
          <Link
            href="https://coinbase.com/join/ME3KDML?src=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-zinc-950 px-12 py-6 text-2xl font-semibold text-white transition hover:bg-zinc-800"
          >
            Claim your $30 →
          </Link>

          {/* Stats */}
          <div className="grid w-full max-w-4xl grid-cols-1 gap-12 md:grid-cols-2 pt-10">

            {/* Mission Goal */}
            <div className="space-y-4">
              <div className="flex justify-between text-lg font-bold text-zinc-950">
                <span>🎯 Mission Goal</span>
                <span>{mission} / {TARGET}</span>
              </div>

              <Progress value={missionProgress} />

              <p className="text-sm text-zinc-800">
                {loading
                  ? "Loading mission status…"
                  : mission < TARGET
                    ? `${TARGET - mission} confirmed signups remaining`
                    : "Mission complete 🎉"}
              </p>

              {/* Confirm Signup */}
              <Button
                type="button"
                variant="outline"
                className="pointer-events-auto"
                onClick={confirmSignup}
              >
                + Confirm Signup
              </Button>
            </div>

            {/* Total Clicks */}
            <div className="rounded-xl bg-black/40 p-6 text-white text-center backdrop-blur">
              <div className="text-5xl font-extrabold text-emerald-400">
                {clicks}
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                Total referral clicks
              </p>
            </div>

          </div>

          <p className="text-sm text-zinc-800">
            Bonus requires a qualifying trade. Available in supported countries.
          </p>
        </main>
      </div>
    </div>
  )
}
