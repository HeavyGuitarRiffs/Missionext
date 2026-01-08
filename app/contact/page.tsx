"use client"

import { useEffect, useState } from "react"
import {
  Facebook,
  Twitter,
  MessageCircle,
  Mail,
  Github,
  MessageSquare,
  Instagram,
} from "lucide-react"

/* -------------------- */
/* Click tracking util  */
/* -------------------- */
function trackContact(platform: string) {
  fetch("http://localhost:4000/contact-click", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ platform }),
  }).catch(() => {})
}

/* -------------------- */
/* Social definitions  */
/* -------------------- */
const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61567041824297",
    Icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/eonkatsu/",
    Icon: Instagram,
  },
  {
    name: "X",
    href: "https://x.com/taitaotendo",
    Icon: Twitter,
  },
  {
    name: "WhatsApp",
    href: "https://whatsapp.com/dl/",
    Icon: MessageCircle,
    description:
      "Let's chat on WhatsApp! Fast, simple, and secure messaging and calls for free.",
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/u/AnimePixel214/s/NTBlSUaYl7",
    Icon: MessageSquare,
  },
  {
    name: "Email",
    href: "mailto:justmcfarlane@getMaxListeners.com",
    Icon: Mail,
  },
  {
    name: "GitHub",
    href: "https://github.com/HeavyGuitarRiffs",
    Icon: Github,
  },
  {
    name: "Discord",
    href: "https://discord.gg/thegreatmemereset2025",
    Icon: MessageSquare,
  },
  {
    name: "Microsoft Teams",
    href: "https://teams.live.com/l/invite/FEA-zQozd8RCn3VwwE?v=g1",
    Icon: MessageSquare,
    description: "Join me on Microsoft Teams",
  },
]

/* -------------------- */
/* Analytics component */
/* -------------------- */
type Stat = {
  platform: string
  count: number
}

function ContactAnalytics() {
  const [stats, setStats] = useState<Stat[]>([])

  useEffect(() => {
    fetch("http://localhost:4000/contact-stats")
      .then((r) => r.json())
      .then((d) => setStats(d))
      .catch(() => {})
  }, [])

  const total = stats.reduce((sum, s) => sum + s.count, 0)

  return (
    <div className="mt-16 w-full max-w-xl rounded-xl bg-zinc-900/80 p-6 text-left backdrop-blur">
      <h2 className="mb-4 text-lg font-bold text-white">
        📊 Contact Engagement
      </h2>

      <div className="space-y-3">
        {stats.map(({ platform, count }) => (
          <div
            key={platform}
            className="flex items-center justify-between text-sm text-zinc-300"
          >
            <span className="capitalize">{platform}</span>
            <span className="font-semibold text-emerald-400">
              {count}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-zinc-700 pt-3 text-sm text-zinc-400">
        Total Contact Clicks:{" "}
        <span className="font-semibold text-white">{total}</span>
      </div>
    </div>
  )
}

/* -------------------- */
/* Main page component */
/* -------------------- */
export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-center">
      <h1 className="mb-6 text-4xl font-extrabold text-white">
        Contact RefStack
      </h1>

      <p className="mb-10 max-w-xl text-lg text-zinc-300">
        Reach out through any platform below. Every click helps grow the mission.
      </p>

      {/* Social Icons */}
      <div className="grid grid-cols-3 gap-8 sm:grid-cols-4">
        {socials.map(({ name, href, Icon, description }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact(name)}
            className="group flex flex-col items-center gap-2 text-zinc-300 transition hover:text-emerald-400"
          >
            <Icon
              size={42}
              className="transition group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.8)]"
            />

            <span className="text-sm font-medium">{name}</span>

            {description && (
              <span className="max-w-[160px] text-xs text-zinc-400 opacity-0 transition group-hover:opacity-100">
                {description}
              </span>
            )}
          </a>
        ))}
      </div>

      {/* Analytics */}
      <ContactAnalytics />
    </div>
  )
}
