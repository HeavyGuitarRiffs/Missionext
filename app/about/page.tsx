import { LogOut, PhoneOutgoing } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/pings.png"
        alt="Crypto background"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6">
        <h1 className="mb-6 text-4xl font-extrabold text-white drop-shadow-lg">
          About M|$S|ON3X+
        </h1>

        <p className="mb-6 max-w-2xl text-lg text-white/95 drop-shadow">
          M|$S|ON3X+ is your hub for curated referral perks and promotional opportunities
          across top crypto exchanges. Our goal is to help you discover rewards, airdrops,
          staking options, and trading promotions that maximize your earning potential.
        </p>

        <p className="mb-6 max-w-2xl text-lg text-white/95 drop-shadow">
          Stay updated with new offers, promotions, and competitions on platforms like
          Coinbase, Gemini, and BingX. We highlight the best ways to grow your
          crypto portfolio, participate in weekly drops, and make the most of new
          derivatives, perpetuals, and staking opportunities.
        </p>

        <p className="max-w-2xl text-lg text-white/95 drop-shadow">
          Our mission is to provide a simple, centralized place for all crypto enthusiasts
          to access referral bonuses and promotions in a safe and transparent way.
        </p>

        {/* Bottom image (larger invite) */}
        <div className="mt-10">
          <Image
            src="/images/invite12.png"
            alt="RefStack Invite"
            width={250}
            height={250}
            className="mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
