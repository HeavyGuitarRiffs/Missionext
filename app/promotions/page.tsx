import Link from "next/link"

export default function PerksPage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bitcoin.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-zinc-50/90 dark:bg-black/85" />

      {/* Content */}
      <div className="relative px-6 py-24">
        <main className="mx-auto max-w-4xl space-y-14">
          {/* Header */}
          <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Crypto Perks & Promotions
            </h1>
            <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              A curated list of promotions, airdrops, trading incentives, and
              yield opportunities that provide real value to everyday users.
            </p>
          </header>

          {/* What this page is */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              What you’ll find here
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
              <li>Exchange signup bonuses and trading promotions</li>
              <li>Verified weekly drops and prize draws</li>
              <li>Stablecoin staking and low-risk yield options</li>
              <li>Major exchange product launches and updates</li>
            </ul>
          </section>

          {/* Weekly Drop */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Weekly Trading Drop
            </h2>

            <div className="rounded-lg border bg-white/90 p-6 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
              <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                Some exchanges run weekly prize draws rewarding active spot traders
                with multiple chances to win major crypto prizes.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
                <li>
                  Earn <strong>5 entries</strong> for every{" "}
                  <strong>$25 traded</strong> on the spot market
                </li>
                <li>
                  Earn <strong>2 bonus entries</strong> for each individual trade
                </li>
                <li>
                  Maximum of <strong>25 total entries</strong> per user each week
                </li>
              </ul>

              <div className="mt-6 space-y-2">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  Prize Pool
                </h3>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
                  <li>
                    <strong>100 winners</strong> — 1 SOL each
                  </li>
                  <li>
                    <strong>2 winners</strong> — 1 BTC each
                  </li>
                  <li>
                    <strong>1 grand winner</strong> — 2 BTC
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Exchanges */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Exchanges I monitor
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                ["Coinbase", "Staking opportunities (USDC), promotions, and new product launches like perpetuals, derivatives, and tokenized stock contracts."],
                ["Gemini", "Compliance-focused rewards, staking programs, and regulated product offerings."],
                ["BingX", "Weekly trading competitions, referral bonuses, and derivatives incentives."],
                ["Bitget", "Airdrops, launchpad rewards, and copy-trading promotions."],
              ].map(([name, desc]) => (
                <div
                  key={name}
                  className="rounded-lg border bg-white/90 p-5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80"
                >
                  <h3 className="text-lg font-medium">{name}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Yield */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              USDC Staking & Stable Yield
            </h2>
            <p className="max-w-3xl text-zinc-700 dark:text-zinc-300">
              Stablecoin staking, especially USDC, can provide predictable yield
              without market volatility. Platforms with competitive APYs and
              limited-time boosts are highlighted here.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="rounded-lg border border-zinc-200 bg-zinc-100/90 p-5 text-sm text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400">
            This page is for informational purposes only and does not constitute
            financial advice. Promotions, rewards, and availability vary by
            region and may change at any time.
          </section>

          {/* Footer */}
          <footer className="pt-6">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-900 underline dark:text-zinc-100"
            >
              ← Back to home
            </Link>
          </footer>
        </main>
      </div>
    </div>
  )
}
