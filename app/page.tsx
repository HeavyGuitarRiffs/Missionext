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
        const { count } = await supabase
          .from("coinbase_clicks")
          .select("*", { count: "exact", head: true })

        setClicks(count ?? 0)

        const { data } = await supabase
          .from("mission_progress")
          .select("count")
          .eq("id", 1)
          .single()

        setMission(data?.count ?? 0)
      } catch (err) {
        console.error("Failed to fetch stats:", err)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [])

  const missionProgress = Math.min((mission / TARGET) * 100, 100)

  async function confirmSignup() {
    try {
      await supabase.rpc("increment_mission")

      const { data } = await supabase
        .from("mission_progress")
        .select("count")
        .eq("id", 1)
        .single()

      setMission(data?.count ?? mission)
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

      <div className="relative z-20 flex min-h-screen justify-center">
        <main className="flex w-full max-w-6xl flex-col items-center gap-16 px-6 py-32 text-center">

          {/* BRAND */}
          <div className="flex items-center gap-4">
            <Image
              src="/missionext.png"
              alt="Mi$$|ON3Xt logo"
              width={56}
              height={56}
              priority
            />
            <h1
              className="text-5xl lg:text-6xl font-extrabold tracking-[0.2em] text-white drop-shadow"
              style={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              MI$$|ON3XT
            </h1>
          </div>

          {/* HERO TEXT */}
          <div className="max-w-5xl space-y-8">
            <h2
              className="
                text-white
                font-extrabold
                leading-[1.05]
                tracking-[0.15em]
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-9xl
              "
              style={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              BITCOIN.
              <br />
              <span className="block mt-6 text-emerald-400">
                DIGITAL&nbsp;GOLD.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-zinc-200 max-w-3xl mx-auto">
              Get <span className="font-bold text-white">$30 free in 2 days</span>{" "}
              when you trade $20.
              <br />
              Stake it like a savings account.
              <br />
              Grow extra income over time.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="https://coinbase.com/join/ME3KDML?src=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-500 px-12 py-6 text-2xl font-bold text-black transition hover:bg-emerald-400"
          >
            Claim your $30 →
          </Link>

          {/* INFO CARDS */}
          <div className="mt-12 grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2 gap-8">

            {/* LEFT: DCA */}
            <div className="rounded-2xl bg-black/50 backdrop-blur p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                $30 / week → Bitcoin growth
              </h3>

              <p className="text-sm text-zinc-300 mb-6">
                Dollar-cost averaging over 12 months
              </p>

              <div className="space-y-3">
                {[
                  30, 65, 105, 150, 210, 280,
                  360, 450, 560, 690, 840, 1020
                ].map((value, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Month {i + 1}</span>
                      <span className="text-emerald-400">${value}</span>
                    </div>
                    <div className="h-2 rounded bg-zinc-800">
                      <div
                        className="h-2 rounded bg-emerald-500"
                        style={{ width: `${(value / 1020) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: SAAS */}
            <div className="rounded-2xl bg-black/50 backdrop-blur p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                What $30 can buy today
              </h3>

              <p className="text-sm text-zinc-300 mb-6">
                Turn rewards into skills or income
              </p>

              <ul className="space-y-4">
                {[
                  { name: "Adobe Creative Cloud", note: "Design & video" },
                  { name: "ChatGPT Plus", note: "AI productivity" },
                  { name: "Notion", note: "Second brain" },
                  { name: "Figma", note: "UI / UX design" },
                  { name: "GitHub Copilot", note: "AI coding" },
                ].map((tool, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center rounded-lg bg-white/5 px-4 py-3"
                  >
                    <span className="font-medium">{tool.name}</span>
                    <span className="text-xs text-zinc-400">{tool.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* STATS */}
          <div className="grid w-full max-w-4xl grid-cols-1 md:grid-cols-2 gap-12 pt-12">

            <div className="space-y-4">
              <div className="flex justify-between text-lg font-bold text-white">
                <span>🎯 Mission Goal</span>
                <span>{mission} / {TARGET}</span>
              </div>

              <Progress value={missionProgress} />

              <p className="text-sm text-zinc-300">
                {loading
                  ? "Loading mission status…"
                  : mission < TARGET
                    ? `${TARGET - mission} signups remaining`
                    : "Mission complete 🎉"}
              </p>

              <Button type="button" variant="outline" onClick={confirmSignup}>
                + Confirm Signup
              </Button>
            </div>

            <div className="rounded-xl bg-black/40 p-6 text-white text-center backdrop-blur">
              <div className="text-5xl font-extrabold text-emerald-400">
                {clicks}
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                Total referral clicks
              </p>
            </div>
          </div>

          <p className="text-sm text-zinc-400">
            Bonus requires a qualifying trade. Available in supported countries.
          </p>
        </main>
      </div>
    </div>
  )
}
