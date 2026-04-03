import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Dollar-Cost Averaging? Complete Investment Strategy Guide | CashCalcs",
  description:
    "Learn how dollar-cost averaging works, why it reduces risk, and when to use it. Includes real examples, performance data, and comparison to lump-sum investing.",
  keywords: [
    "dollar cost averaging",
    "DCA investing",
    "what is dollar cost averaging",
    "invest monthly",
    "automatic investing",
    "reduce investment risk",
    "lump sum vs DCA",
    "investing for beginners",
  ],
  openGraph: {
    title: "What Is Dollar-Cost Averaging? Complete Investment Strategy Guide",
    description:
      "Learn how dollar-cost averaging works, why it reduces risk, and when to use it. Includes real examples and performance comparisons.",
    type: "article",
  },
};

export default function WhatIsDollarCostAveraging() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Financial Guides</Link>
          {" > "}
          <span className="text-gray-900">Dollar-Cost Averaging</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          What Is Dollar-Cost Averaging? Complete Investment Strategy Guide
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Dollar-cost averaging (DCA) is the simplest, most proven investment strategy
          for beginners. Instead of trying to time the market, you invest a fixed amount
          regularly -- weekly, biweekly, or monthly -- regardless of market conditions.
          Here is why it works and how to use it.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Dollar-Cost Averaging Explained
            </h2>
            <p className="text-gray-700 mb-4">
              Dollar-cost averaging means investing a consistent dollar amount at regular
              intervals, no matter if the market is up, down, or sideways. You automate
              it and forget it.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-emerald-800 mb-2">Example: $500/Month Into S&P 500 ETF</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Month 1: S&P 500 at $400/share → Buy 1.25 shares</li>
                <li>Month 2: S&P 500 at $380/share → Buy 1.32 shares (market down, you buy more)</li>
                <li>Month 3: S&P 500 at $420/share → Buy 1.19 shares (market up, you buy less)</li>
                <li>Month 4: S&P 500 at $410/share → Buy 1.22 shares</li>
                <li><strong className="text-emerald-800">Total: $2,000 invested, 4.98 shares, average cost $401/share</strong></li>
              </ul>
              <p className="text-sm text-gray-700 mt-2">
                If you waited to invest all $2,000 at once in Month 1 at $400/share, you
                would have 5.0 shares. DCA gave you nearly the same result but removed
                the risk of bad timing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Why Dollar-Cost Averaging Works
            </h2>
            <p className="text-gray-700 mb-4">
              DCA is powerful because it removes emotion and timing risk from investing:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Removes market timing risk",
                  desc: "You never have to guess if now is a good time to invest. You invest automatically whether the market is at all-time highs or down 20%. Over decades, consistency beats timing.",
                },
                {
                  title: "Buys more when prices are low",
                  desc: "When the market drops, your fixed dollar amount buys more shares. When it rises, you buy fewer shares. You naturally buy the dip without trying.",
                },
                {
                  title: "Reduces emotional investing",
                  desc: "Automate DCA and you never panic sell during crashes or FOMO buy during rallies. Set it and forget it. Emotions destroy returns; automation protects them.",
                },
                {
                  title: "Makes investing accessible",
                  desc: "You do not need $10,000 to start. Invest $50, $100, or $500/month. Most brokers allow fractional shares, so even $25/month works.",
                },
                {
                  title: "Builds wealth through consistency",
                  desc: "Investing $500/month for 30 years at 10% returns = $1,130,244. Missing just 10 of the best market days over 30 years cuts returns by 50%. DCA keeps you invested.",
                },
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              DCA vs Lump-Sum Investing
            </h2>
            <p className="text-gray-700 mb-4">
              If you have $10,000 today, should you invest it all at once (lump-sum)
              or spread it over 10 months ($1,000/month DCA)?
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Factor</th>
                    <th className="text-left py-3 text-gray-900">Lump-Sum</th>
                    <th className="text-left py-3 text-gray-900">DCA</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">Historical performance</td>
                    <td>Wins 68% of the time</td>
                    <td>Wins 32% of the time</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Emotional comfort</td>
                    <td>High stress, fear of bad timing</td>
                    <td>Lower stress, gradual entry</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Downside protection</td>
                    <td>Full exposure to immediate crash</td>
                    <td>Spreads risk over time</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Opportunity cost</td>
                    <td>None (fully invested)</td>
                    <td>Uninvested cash earns 0-5%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Best for</td>
                    <td>Disciplined investors, rising markets</td>
                    <td>Nervous investors, volatile markets</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>The math favors lump-sum</strong> because markets go up 70% of the
              time. But <strong>the psychology favors DCA</strong> because it reduces regret
              and keeps you invested. If you would panic and sell after investing a lump-sum
              and seeing it drop 15%, DCA is better.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Real-World DCA Performance
            </h2>
            <p className="text-gray-700 mb-4">
              Here is what happens when you DCA into the S&P 500 over 20 years with
              different start dates:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 space-y-3">
              <div>
                <p className="font-bold text-blue-800">Scenario 1: Started Jan 2000 (Dot-Com Peak)</p>
                <p className="text-sm text-gray-700">
                  $500/month DCA from Jan 2000 to Dec 2019 = $120,000 invested. Final
                  value: $341,000 (9.3% annualized return). Market crashed -50% in first
                  2 years, but DCA kept buying low shares.
                </p>
              </div>
              <div>
                <p className="font-bold text-blue-800">Scenario 2: Started Jan 2009 (Great Recession Bottom)</p>
                <p className="text-sm text-gray-700">
                  $500/month DCA from Jan 2009 to Dec 2028 = $120,000 invested. Final
                  value: $520,000 (14.2% annualized return). Best-case timing with DCA.
                </p>
              </div>
              <div>
                <p className="font-bold text-blue-800">Scenario 3: Started Jan 2015 (Normal Market)</p>
                <p className="text-sm text-gray-700">
                  $500/month DCA from Jan 2015 to Dec 2024 = $60,000 invested. Final
                  value: $115,000 (11.8% annualized return). Even in normal conditions,
                  DCA works.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Lesson:</strong> DCA works in all market conditions if you stay
              consistent for 10+ years. The worst performers quit after 1-2 years of losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How to Set Up Dollar-Cost Averaging
            </h2>
            <p className="text-gray-700 mb-4">
              Setting up DCA takes 10 minutes and runs on autopilot forever:
            </p>
            <ol className="text-gray-700 space-y-3 list-decimal pl-6">
              <li>
                <strong>Open a brokerage account.</strong> Fidelity, Vanguard, Charles
                Schwab, or Robinhood. All offer automatic investing with no fees.
              </li>
              <li>
                <strong>Choose your investment.</strong> For beginners, pick a Total Stock
                Market ETF (VTI, ITOT) or S&P 500 ETF (VOO, SPY). One fund, maximum
                diversification.
              </li>
              <li>
                <strong>Decide your amount and frequency.</strong> Start with what you can
                afford: $50, $100, $200, $500/month. Match your paycheck schedule (biweekly
                or monthly).
              </li>
              <li>
                <strong>Set up automatic transfers.</strong> Link your bank account and
                schedule automatic transfers on payday. Money moves from checking to
                brokerage before you see it.
              </li>
              <li>
                <strong>Enable automatic investing.</strong> Most brokers let you auto-buy
                ETF shares on a schedule. Set it once and the brokerage buys shares
                automatically every period.
              </li>
              <li>
                <strong>Increase contributions over time.</strong> Whenever you get a
                raise, increase DCA by 1-2%. Going from $500 to $550/month barely affects
                lifestyle but compounds wealth.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              When to Use Dollar-Cost Averaging
            </h2>
            <p className="text-gray-700 mb-4">
              DCA is ideal in these situations:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>You are investing from earned income.</strong> Most people do not
                have $50,000 to invest at once. They earn $3,000/month and invest $300-500
                monthly. DCA is the only option and it works perfectly.
              </li>
              <li>
                <strong>You are new to investing and nervous.</strong> DCA removes fear
                of buying at the top. You invest regardless of market conditions, which
                keeps you in the game.
              </li>
              <li>
                <strong>You have a lump-sum but the market feels high.</strong> Spread
                $10,000 over 6-12 months if it helps you sleep at night. Psychology beats
                math if it keeps you invested.
              </li>
              <li>
                <strong>You want to automate and never think about it.</strong> Set DCA
                once and check your balance once a year. Perfect for hands-off investors.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              When NOT to Use Dollar-Cost Averaging
            </h2>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>You have a lump-sum and high risk tolerance.</strong> If you have
                $50,000 to invest, can handle seeing it drop 30%, and will not panic sell,
                lump-sum investing historically wins 68% of the time.
              </li>
              <li>
                <strong>You are timing the market.</strong> DCA is not market timing. If
                you are holding cash waiting for a crash, you are speculating, not investing.
                Just invest.
              </li>
              <li>
                <strong>Your investment horizon is under 5 years.</strong> DCA is for
                long-term wealth building. If you need the money in 2-3 years, keep it
                in a high-yield savings account, not stocks.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Common DCA Mistakes
            </h2>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Stopping during crashes.</strong> The best DCA periods are during
                bear markets. You buy shares at huge discounts. Stopping when scared defeats
                the purpose.
              </li>
              <li>
                <strong>Increasing contributions during rallies.</strong> FOMO makes people
                invest more when markets are up 30%. Stick to your fixed amount. Consistency
                beats chasing performance.
              </li>
              <li>
                <strong>Checking your balance too often.</strong> DCA is set-and-forget.
                Checking daily/weekly causes anxiety and bad decisions. Check quarterly
                or annually.
              </li>
              <li>
                <strong>Not increasing contributions over time.</strong> Investing $500/month
                for 30 years is good. Increasing to $600, $700, $800 as your income grows
                is transformational.
              </li>
              <li>
                <strong>Picking too many funds.</strong> Beginners buy 10 different ETFs.
                You only need 1-3 (Total Market, International, Bonds). Simplicity wins.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              DCA Example: 30 Years of Growth
            </h2>
            <p className="text-gray-700 mb-4">
              Here is what consistent DCA can do over a career:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Monthly Investment</th>
                    <th className="text-right py-3 text-gray-900">Total Invested</th>
                    <th className="text-right py-3 text-gray-900">Value at 10%/yr</th>
                    <th className="text-right py-3 text-gray-900">Gain</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">$200/month</td>
                    <td className="text-right">$72,000</td>
                    <td className="text-right">$452,098</td>
                    <td className="text-right">$380,098</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">$500/month</td>
                    <td className="text-right">$180,000</td>
                    <td className="text-right">$1,130,244</td>
                    <td className="text-right">$950,244</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">$1,000/month</td>
                    <td className="text-right">$360,000</td>
                    <td className="text-right">$2,260,487</td>
                    <td className="text-right">$1,900,487</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">$1,500/month</td>
                    <td className="text-right">$540,000</td>
                    <td className="text-right">$3,390,731</td>
                    <td className="text-right">$2,850,731</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              This assumes 10%/year average return (S&P 500 historical average). Past
              performance does not guarantee future results, but shows the power of
              consistent investing over decades.
            </p>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Calculate Your DCA Growth</h2>
            <p className="text-gray-400 mb-4">See how much your monthly investments could grow with compound interest over time.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/investment-calculator" className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors">Investment Calculator</Link>
              <Link href="/compound-interest" className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors">Compound Interest</Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/investment-calculator"
            className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors text-lg"
          >
            Calculate Your Investment Growth
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What Is Dollar-Cost Averaging? Complete Investment Strategy Guide",
            description: "Learn how dollar-cost averaging works, why it reduces risk, and when to use it. Includes real examples and performance comparisons.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/what-is-dollar-cost-averaging",
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
              { "@type": "ListItem", position: 3, name: "Dollar-Cost Averaging" },
            ],
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
                name: "What is dollar-cost averaging?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dollar-cost averaging (DCA) is an investment strategy where you invest a fixed dollar amount at regular intervals (weekly, monthly) regardless of market conditions. Instead of trying to time the market, you buy shares consistently. When prices are low, your fixed amount buys more shares. When prices are high, you buy fewer shares. This averages out your cost per share over time and reduces timing risk."
                }
              },
              {
                "@type": "Question",
                name: "Is dollar-cost averaging better than lump-sum investing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Historically, lump-sum investing wins 68% of the time because markets go up 70% of the time. However, dollar-cost averaging (DCA) is better for emotional comfort and reduces regret if you invest right before a crash. If you have a lump-sum and high risk tolerance, invest it all. If you are nervous or the market feels high, DCA over 6-12 months. For most people investing from earned income, DCA is the only option and it works perfectly."
                }
              },
              {
                "@type": "Question",
                name: "How much should I invest with dollar-cost averaging?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Invest whatever you can afford consistently: $50, $100, $200, $500, or more per month. Start with 10-20% of your take-home pay and increase 1% each year. Consistency matters more than the amount. Investing $200/month for 30 years at 10% returns = $452,000. Increasing to $500/month = $1.13 million. Set up automatic transfers on payday so you never see the money."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
