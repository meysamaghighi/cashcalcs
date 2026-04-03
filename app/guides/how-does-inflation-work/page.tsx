import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Does Inflation Work? A Simple Explanation | CashCalcs",
  description:
    "Understand how inflation works, why prices rise, and how to protect your money. Learn about CPI, the Fed's role, and inflation-proof investment strategies.",
  keywords: [
    "how does inflation work",
    "what causes inflation",
    "inflation explained",
    "how to beat inflation",
    "CPI explained",
    "inflation and savings",
    "inflation protection",
  ],
  openGraph: {
    title: "How Does Inflation Work? A Simple Explanation | CashCalcs",
    description:
      "Understand how inflation works, why prices rise, and how to protect your money. Learn about CPI, the Fed's role, and inflation-proof investment strategies.",
    type: "article",
  },
  alternates: {
    canonical: "/guides/how-does-inflation-work",
  },
};

export default function InflationGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/inflation-calculator" className="hover:text-gray-700">Inflation Calculator</Link>
          {" > "}
          <span className="text-gray-900">How Does Inflation Work?</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How Does Inflation Work? A Simple Explanation
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Inflation is one of the most important economic concepts that affects everyone&apos;s
          daily life. Understanding it helps you make better decisions about saving, investing,
          and spending your money.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Is Inflation?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Inflation is the rate at which prices for goods and services increase over time.
              When inflation is 3%, something that costs $100 today will cost $103 next year.
              Your money doesn&apos;t lose value in a literal sense — you still have the same
              number of dollars — but each dollar buys less.
            </p>
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <p className="text-rose-800 text-sm">
                <strong>Example:</strong> A gallon of milk cost about $2.78 in 2000 and about
                $4.35 in 2024 — a 57% increase. That&apos;s inflation in action: the same product
                costs more dollars because each dollar is worth less.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Causes Inflation?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              There are three main causes:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-2">1. Demand-Pull Inflation</h3>
                <p className="text-sm text-gray-600">
                  When demand for goods and services exceeds supply, prices rise. This often
                  happens during economic booms when people have more money to spend. The
                  COVID-era stimulus checks contributed to this type of inflation.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-2">2. Cost-Push Inflation</h3>
                <p className="text-sm text-gray-600">
                  When the cost of producing goods increases (raw materials, labor, energy),
                  companies pass those costs to consumers. Supply chain disruptions and oil
                  price spikes are common triggers.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-2">3. Monetary Inflation</h3>
                <p className="text-sm text-gray-600">
                  When the money supply grows faster than the economy, each dollar becomes worth
                  less. Central banks can cause this by printing money or keeping interest rates
                  too low for too long.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How Is Inflation Measured?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              The two main measures in the United States:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-bold text-gray-900 mb-2">CPI (Consumer Price Index)</h3>
                <p className="text-sm text-gray-600">
                  Tracks the cost of a &quot;basket&quot; of goods and services (food, housing,
                  transportation, healthcare, etc.) that a typical consumer buys. Published monthly
                  by the Bureau of Labor Statistics.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-bold text-gray-900 mb-2">PCE (Personal Consumption Expenditures)</h3>
                <p className="text-sm text-gray-600">
                  The Federal Reserve&apos;s preferred measure. Broader than CPI and accounts for
                  the fact that consumers substitute cheaper alternatives when prices rise.
                  The Fed targets 2% PCE inflation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              US Inflation History
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Key inflation periods in US history:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-gray-500">
                    <th className="py-2 pr-4">Period</th>
                    <th className="py-2 pr-4">Rate</th>
                    <th className="py-2">Context</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b"><td className="py-2 pr-4">1930s</td><td className="py-2 pr-4 text-blue-600">-2% to -10%</td><td className="py-2">Great Depression (deflation)</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">1950s-60s</td><td className="py-2 pr-4">1-3%</td><td className="py-2">Post-war stability</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">1970s-80s</td><td className="py-2 pr-4 text-red-600">6-13%</td><td className="py-2">Oil crises, stagflation</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">1990s-2010s</td><td className="py-2 pr-4">2-3%</td><td className="py-2">Great Moderation era</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">2021-2022</td><td className="py-2 pr-4 text-red-600">7-9%</td><td className="py-2">Post-COVID supply + stimulus</td></tr>
                  <tr><td className="py-2 pr-4">2024-2026</td><td className="py-2 pr-4">2.5-3.5%</td><td className="py-2">Returning toward normal</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How Inflation Hurts Your Money
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Inflation is especially damaging to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li><strong>Cash savings:</strong> Money sitting in a checking account at 0.01% interest loses about 3% of its purchasing power every year</li>
              <li><strong>Fixed incomes:</strong> Retirees on fixed pensions see their buying power decline each year</li>
              <li><strong>Bonds:</strong> Fixed-rate bonds lose real value when inflation rises unexpectedly</li>
              <li><strong>Low-wage earners:</strong> When wages don&apos;t keep up with price increases, real income falls</li>
            </ul>
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mt-4">
              <p className="text-rose-800 text-sm">
                Use our <Link href="/inflation-calculator" className="font-bold underline">Inflation Calculator</Link> to
                see exactly how much purchasing power you&apos;ll lose over 10, 20, or 30 years.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Protect Your Money from Inflation
            </h2>
            <div className="space-y-3">
              {[
                { strategy: "Invest in stocks", detail: "The S&P 500 has historically returned ~10%/year, well above inflation. Index funds are the easiest way to own stocks." },
                { strategy: "Buy I Bonds", detail: "US government savings bonds that automatically adjust for inflation. Currently limited to $10,000/year per person." },
                { strategy: "Consider TIPS", detail: "Treasury Inflation-Protected Securities have their principal adjusted with CPI, guaranteeing a real return." },
                { strategy: "Own real estate", detail: "Property values and rents tend to rise with inflation. REITs offer a way to invest without buying property." },
                { strategy: "Use high-yield savings", detail: "For cash you need to keep liquid, earn 4-5% APY instead of 0.01% at a traditional bank." },
                { strategy: "Negotiate raises", detail: "If your salary doesn't grow at least as fast as inflation, you're effectively taking a pay cut each year." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-4">
                  <p className="font-bold text-gray-900 text-sm">{item.strategy}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The Rule of 72: A Quick Inflation Shortcut
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Divide 72 by the inflation rate to estimate how many years it takes for prices
              to double (or your purchasing power to halve):
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { rate: "2%", years: "36 years" },
                { rate: "3%", years: "24 years" },
                { rate: "4%", years: "18 years" },
                { rate: "5%", years: "14 years" },
                { rate: "7%", years: "10 years" },
                { rate: "10%", years: "7 years" },
              ].map((item) => (
                <div key={item.rate} className="bg-gray-50 rounded-xl p-3">
                  <p className="text-lg font-bold text-rose-600">{item.rate}</p>
                  <p className="text-xs text-gray-500">{item.years}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Calculate Your Inflation Impact</h2>
            <p className="text-gray-400 mb-4">
              See exactly how inflation affects your money over any time period.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/inflation-calculator"
                className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-colors"
              >
                Inflation Calculator
              </Link>
              <Link
                href="/investment-calculator"
                className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
              >
                Investment Calculator
              </Link>
              <Link
                href="/compound-interest"
                className="px-5 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors"
              >
                Compound Interest
              </Link>
            </div>
          </section>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How Does Inflation Work? A Simple Explanation",
            description: "Understand how inflation works, why prices rise, and how to protect your money.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs", url: "https://cashcalcs.com" },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "CashCalcs", item: "https://cashcalcs.com" },
              { "@type": "ListItem", position: 2, name: "Guides", item: "https://cashcalcs.com/guides" },
              { "@type": "ListItem", position: 3, name: "How Does Inflation Work" },
            ],
          }),
        }}
      />
    </main>
  );
}
