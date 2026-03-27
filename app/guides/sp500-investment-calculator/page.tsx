import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "S&P 500 Investment Returns Calculator - Historical Growth | CashCalcs",
  description:
    "Calculate how much your S&P 500 investment could grow over 10, 20, or 30 years. Based on historical average returns of 10% annually. See what $10K, $50K, or $100K invested in the S&P 500 becomes.",
  keywords: [
    "S&P 500 calculator",
    "S&P 500 returns",
    "S&P 500 investment calculator",
    "50000 invested in S&P 500",
    "100000 invested in S&P 500",
    "S&P 500 historical returns",
    "index fund calculator",
    "stock market returns calculator",
  ],
  openGraph: {
    title: "S&P 500 Investment Returns Calculator - Historical Growth | CashCalcs",
    description:
      "Calculate how much your S&P 500 investment could grow over 10, 20, or 30 years. Based on historical average returns of 10% annually.",
    type: "article",
  },
};

export default function SP500Guide() {
  const scenarios = [
    { initial: 10000, years: 10, result: 25937 },
    { initial: 10000, years: 20, result: 67275 },
    { initial: 10000, years: 30, result: 174494 },
    { initial: 50000, years: 10, result: 129687 },
    { initial: 50000, years: 20, result: 336375 },
    { initial: 50000, years: 30, result: 872470 },
    { initial: 100000, years: 10, result: 259374 },
    { initial: 100000, years: 20, result: 672750 },
    { initial: 100000, years: 30, result: 1744940 },
  ];

  const withContributions = [
    { monthly: 100, years: 10, total: 20655 },
    { monthly: 100, years: 20, total: 75937 },
    { monthly: 100, years: 30, total: 226049 },
    { monthly: 500, years: 10, total: 103274 },
    { monthly: 500, years: 20, total: 379687 },
    { monthly: 500, years: 30, total: 1130243 },
    { monthly: 1000, years: 10, total: 206549 },
    { monthly: 1000, years: 20, total: 759375 },
    { monthly: 1000, years: 30, total: 2260487 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Guides</Link>
          {" > "}
          <span className="text-gray-900">S&P 500 Investment Returns</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          S&P 500 Investment Returns Calculator
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          How much could your money grow if you invest in the S&P 500? This guide
          breaks down historical returns and shows exactly what $10,000, $50,000,
          or $100,000 invested in the S&P 500 becomes over 10, 20, and 30 years.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Historical S&P 500 Returns
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-xl font-bold text-green-700 mb-2">
                Average Annual Return: ~10%
              </p>
              <p className="text-sm text-gray-700">
                From 1928 to 2024, the S&P 500 has returned approximately 10% per year
                on average, including dividends. After adjusting for inflation (typically
                3%), the real return is closer to 7% annually.
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              The S&P 500 is a stock market index that tracks the 500 largest US
              companies. When you invest in an S&P 500 index fund (like VOO, IVV,
              or SPY), you own a tiny piece of Apple, Microsoft, Amazon, Google,
              and 496 other companies. This diversification reduces risk while
              capturing the overall growth of the US economy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Lump Sum Investment Growth
            </h2>
            <p className="text-gray-700 mb-4">
              If you invest a one-time amount and let it grow at 10% annually (the
              historical average), here is what it becomes:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Initial Investment</th>
                    <th className="text-right py-3 text-gray-900">10 Years</th>
                    <th className="text-right py-3 text-gray-900">20 Years</th>
                    <th className="text-right py-3 text-gray-900">30 Years</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2 font-medium">$10,000</td>
                    <td className="text-right">${scenarios[0].result.toLocaleString()}</td>
                    <td className="text-right">${scenarios[1].result.toLocaleString()}</td>
                    <td className="text-right">${scenarios[2].result.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">$50,000</td>
                    <td className="text-right">${scenarios[3].result.toLocaleString()}</td>
                    <td className="text-right">${scenarios[4].result.toLocaleString()}</td>
                    <td className="text-right">${scenarios[5].result.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">$100,000</td>
                    <td className="text-right">${scenarios[6].result.toLocaleString()}</td>
                    <td className="text-right">${scenarios[7].result.toLocaleString()}</td>
                    <td className="text-right">${scenarios[8].result.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Based on 10% average annual return. Past performance does not guarantee future results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              With Monthly Contributions
            </h2>
            <p className="text-gray-700 mb-4">
              Most people do not invest a lump sum. Instead, they invest a fixed
              amount monthly (dollar-cost averaging). Here is how much you accumulate
              investing $100, $500, or $1,000 per month:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Monthly Investment</th>
                    <th className="text-right py-3 text-gray-900">10 Years</th>
                    <th className="text-right py-3 text-gray-900">20 Years</th>
                    <th className="text-right py-3 text-gray-900">30 Years</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2 font-medium">$100/month</td>
                    <td className="text-right">${withContributions[0].total.toLocaleString()}</td>
                    <td className="text-right">${withContributions[1].total.toLocaleString()}</td>
                    <td className="text-right">${withContributions[2].total.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">$500/month</td>
                    <td className="text-right">${withContributions[3].total.toLocaleString()}</td>
                    <td className="text-right">${withContributions[4].total.toLocaleString()}</td>
                    <td className="text-right">${withContributions[5].total.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">$1,000/month</td>
                    <td className="text-right">${withContributions[6].total.toLocaleString()}</td>
                    <td className="text-right">${withContributions[7].total.toLocaleString()}</td>
                    <td className="text-right">${withContributions[8].total.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              You contribute a total of $12,000 over 10 years ($100/month), $24,000 over 20 years, etc.
              The rest is compound growth.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Real vs Nominal Returns
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 mb-2">Nominal Returns (10%)</h3>
                <p className="text-sm text-gray-700">
                  The raw, before-inflation return. If you invest $100,000 and it grows
                  to $259,374 in 10 years, that is a 10% nominal return.
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4">
                <h3 className="font-bold text-orange-800 mb-2">Real Returns (~7%)</h3>
                <p className="text-sm text-gray-700">
                  After adjusting for inflation (typically 3%). Your $259,374 in
                  10 years has the purchasing power of about $193,000 in today's dollars.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Always consider inflation when planning long-term. A million dollars in
              30 years sounds great, but inflation means it will not buy as much as
              a million today. Our{" "}
              <Link href="/inflation-calculator" className="text-green-600 font-medium hover:underline">
                inflation calculator
              </Link>{" "}
              helps you adjust for this.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Best S&P 500 Index Funds
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li><strong>VOO (Vanguard S&P 500 ETF)</strong> - 0.03% expense ratio, $100+ billion in assets</li>
              <li><strong>IVV (iShares Core S&P 500 ETF)</strong> - 0.03% expense ratio, $400+ billion in assets</li>
              <li><strong>SPY (SPDR S&P 500 ETF Trust)</strong> - 0.09% expense ratio, most liquid ETF in the world</li>
              <li><strong>FXAIX (Fidelity 500 Index Fund)</strong> - 0.015% expense ratio, mutual fund version</li>
              <li><strong>SWPPX (Schwab S&P 500 Index Fund)</strong> - 0.02% expense ratio, no minimum</li>
            </ul>
            <p className="text-gray-700 mt-4">
              All five funds track the same index and deliver nearly identical returns.
              Choose based on your brokerage. Vanguard investors typically use VOO,
              Fidelity investors use FXAIX, etc. The difference in expense ratios
              (0.02% vs 0.09%) is negligible for most investors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Key Takeaways
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>The S&P 500 has averaged 10% annual returns over the past 95+ years</li>
              <li>$10,000 invested for 30 years becomes $174,494 (at 10% annually)</li>
              <li>Monthly contributions accelerate growth through dollar-cost averaging</li>
              <li>Expect 7% real returns after inflation (3% average inflation)</li>
              <li>Index funds like VOO have expense ratios under 0.05%</li>
              <li>Past performance does not guarantee future results, but history shows long-term growth</li>
            </ul>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Calculate Your Investment Growth</h2>
            <p className="text-gray-400 mb-4">Use our free calculators to plan your S&P 500 investment strategy.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/investment-calculator" className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors">Investment Calculator</Link>
              <Link href="/compound-interest" className="px-5 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors">Compound Interest</Link>
              <Link href="/retirement-calculator" className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">Retirement Calculator</Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/investment-calculator"
            className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors text-lg"
          >
            Try Our Investment Calculator
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "S&P 500 Investment Returns Calculator - Historical Growth",
            description: "Calculate how much your S&P 500 investment could grow over 10, 20, or 30 years. Based on historical average returns of 10% annually.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/sp500-investment-calculator",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the average return of the S&P 500?",
                acceptedAnswer: { "@type": "Answer", text: "The S&P 500 has historically returned about 10% per year on average since 1928, including dividends. After adjusting for inflation (typically 3%), the real return is closer to 7% annually." },
              },
              {
                "@type": "Question",
                name: "How much would $50,000 invested in the S&P 500 be worth in 20 years?",
                acceptedAnswer: { "@type": "Answer", text: "At the historical average return of 10% per year, $50,000 invested in the S&P 500 would grow to approximately $336,375 in 20 years." },
              },
              {
                "@type": "Question",
                name: "What is the best S&P 500 index fund?",
                acceptedAnswer: { "@type": "Answer", text: "Popular S&P 500 index funds include VOO (Vanguard, 0.03% fee), IVV (iShares, 0.03% fee), SPY (SPDR, 0.09% fee), FXAIX (Fidelity, 0.015% fee), and SWPPX (Schwab, 0.02% fee). All track the same index with nearly identical returns." },
              },
            ],
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
              { "@type": "ListItem", position: 3, name: "S&P 500 Investment Calculator" },
            ],
          }),
        }}
      />
    </main>
  );
}
