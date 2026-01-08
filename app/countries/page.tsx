import Link from "next/link"

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-24 dark:bg-black">
      <main className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Coinbase Supported Countries
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Coinbase services are available to users in these countries. Availability of features, trading pairs, and promotions may vary by region.
          </p>
        </header>

        {/* Countries List */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Countries
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Coinbase currently supports users in the following countries:
          </p>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 list-disc pl-5 text-zinc-700 dark:text-zinc-300">
            <li>United States</li>
            <li>United Kingdom</li>
            <li>Australia</li>
            <li>Canada</li>
            <li>Singapore</li>
            <li>Japan</li>
            <li>Germany</li>
            <li>France</li>
            <li>Italy</li>
            <li>Spain</li>
            <li>Netherlands</li>
            <li>Belgium</li>
            <li>Sweden</li>
            <li>Denmark</li>
            <li>Norway</li>
            <li>Finland</li>
            <li>Poland</li>
            <li>Portugal</li>
            <li>New Zealand</li>
            <li>Austria</li>
            <li>Switzerland</li>
            <li>Ireland</li>
            <li>Luxembourg</li>
          </ul>
        </section>

        {/* Notes */}
        <section className="rounded-lg border border-zinc-200 bg-zinc-100 p-5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          <p>
            Note: Some features, such as staking, derivatives, and crypto-to-fiat withdrawals, may not be available in all supported countries. Always verify availability and regulations in your region directly on the{" "}
            <Link
              href="https://www.coinbase.com/locations"
              className="font-medium underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              official Coinbase site
            </Link>
            .
          </p>
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
  )
}
