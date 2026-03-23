import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Start Investing: A Beginner's Guide (2026) | CashCalcs",
  description:
    "Learn how to start investing from scratch. Covers brokerage accounts, index funds, asset allocation, and how much to invest. Simple, jargon-free guide for beginners.",
  keywords: [
    "how to start investing",
    "investing for beginners",
    "beginner investment guide",
    "how to invest money",
    "index fund investing",
    "first time investing",
    "stock market for beginners",
  ],
  openGraph: {
    title: "How to Start Investing: A Beginner's Guide (2026) | CashCalcs",
    description:
      "Learn how to start investing from scratch. Covers brokerage accounts, index funds, asset allocation, and how much to invest. Simple, jargon-free guide for beginners.",
    type: "article",
  },
};

export default function InvestingGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/investment-calculator" className="hover:text-gray-700">Investment Calculator</Link>
          {" > "}
          <span className="text-gray-900">How to Start Investing</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How to Start Investing: A Beginner&apos;s Guide
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Investing is the most reliable way to build wealth over time. You don&apos;t need
          a lot of money, a finance degree, or perfect timing. Here&apos;s everything you need
          to know to get started.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Step 1: Get Your Finances in Order First
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Before investing, make sure you have:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li><strong>An emergency fund</strong> — 3-6 months of expenses in a high-yield savings account</li>
              <li><strong>High-interest debt paid off</strong> — credit card debt at 20%+ APR should be eliminated first</li>
              <li><strong>A budget</strong> — know how much you can invest each month without straining your finances</li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
              <p className="text-green-800 text-sm">
                Use our <Link href="/savings-goal/emergency-fund" className="font-bold underline">Emergency Fund Calculator</Link> to
                figure out your target, and our <Link href="/budget" className="font-bold underline">Budget Calculator</Link> to
                find room for investing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Step 2: Open a Brokerage Account
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You need an account to buy investments. The main types:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-bold text-gray-900 mb-2">401(k) / 403(b)</h3>
                <p className="text-sm text-gray-600">
                  Employer-sponsored retirement account. Often includes an employer match — free money.
                  Always contribute at least enough to get the full match.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-bold text-gray-900 mb-2">Roth IRA</h3>
                <p className="text-sm text-gray-600">
                  Individual retirement account with tax-free growth. Contribute up to $7,000/year (2026).
                  Withdrawals in retirement are completely tax-free.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-bold text-gray-900 mb-2">Traditional IRA</h3>
                <p className="text-sm text-gray-600">
                  Tax-deductible contributions now, pay taxes on withdrawals in retirement.
                  Good if you expect a lower tax bracket in retirement.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-bold text-gray-900 mb-2">Taxable Brokerage</h3>
                <p className="text-sm text-gray-600">
                  No tax advantages, but no contribution limits or withdrawal penalties.
                  Use after maxing out retirement accounts.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Popular brokerages include Fidelity, Vanguard, Charles Schwab, and Robinhood.
              All offer $0 commission trades on stocks and ETFs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Step 3: Choose Your Investments
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              For most beginners, the simplest and most effective approach is index fund investing:
            </p>
            <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
              <h3 className="font-bold text-gray-900 mb-3">The Three-Fund Portfolio</h3>
              <p className="text-sm text-gray-600 mb-3">
                A popular, well-diversified portfolio using just three funds:
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>US Total Stock Market Index</strong> (e.g., VTI, VTSAX) — 60%</li>
                <li><strong>International Stock Index</strong> (e.g., VXUS, VTIAX) — 20%</li>
                <li><strong>US Bond Index</strong> (e.g., BND, VBTLX) — 20%</li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                Adjust the percentages based on your age and risk tolerance. Younger investors
                can hold more stocks; older investors typically want more bonds.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Why index funds?</strong> They have low fees (0.03-0.20% vs 1-2% for
              actively managed funds), instant diversification across hundreds or thousands of
              companies, and they consistently beat most professional fund managers over 10+ years.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Step 4: Invest Consistently
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              The most important factor in investing success isn&apos;t picking the right stocks —
              it&apos;s investing consistently over time. Set up automatic monthly contributions and
              don&apos;t try to time the market.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800 text-sm">
                <strong>Dollar cost averaging (DCA)</strong> means investing a fixed amount regularly,
                regardless of market conditions. When prices are high, you buy fewer shares. When
                prices are low, you buy more. This naturally smooths out market volatility.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
              <p className="text-green-800 text-sm">
                See how your monthly investments grow with our{" "}
                <Link href="/investment-calculator" className="font-bold underline">Investment Returns Calculator</Link>.
                Even <Link href="/investment-calculator/100-per-month" className="font-bold underline">$100/month</Link> can
                grow to over $150,000 in 30 years.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Step 5: Don&apos;t Touch It
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              The stock market will drop. Sometimes dramatically. The S&P 500 has dropped 30-50%
              multiple times in history, but it has always recovered and gone on to new highs.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm">
                <strong>The biggest mistake</strong> beginner investors make is selling during
                market downturns. If you invested $10,000 in the S&P 500 in January 2008 (right
                before the crash), it would have dropped to about $5,500 by March 2009. But if
                you held on, by 2026 that same $10,000 would be worth over $45,000.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How Much Should You Invest?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Common guidelines:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li><strong>Minimum:</strong> At least enough to get your employer&apos;s 401(k) match</li>
              <li><strong>Good target:</strong> 15% of your gross income for retirement</li>
              <li><strong>Aggressive:</strong> 25-50%+ if pursuing early retirement (FIRE)</li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
              <p className="text-green-800 text-sm">
                Not sure if you can afford to invest? Use our{" "}
                <Link href="/budget" className="font-bold underline">Budget Calculator</Link> to
                find savings, or explore <Link href="/side-hustle" className="font-bold underline">side hustle ideas</Link> for
                extra income to invest.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Common Beginner Mistakes to Avoid
            </h2>
            <div className="space-y-3">
              {[
                { mistake: "Trying to time the market", fix: "Invest consistently regardless of market conditions" },
                { mistake: "Picking individual stocks", fix: "Start with broad index funds for diversification" },
                { mistake: "Paying high fees", fix: "Choose index funds with expense ratios under 0.20%" },
                { mistake: "Checking your portfolio daily", fix: "Review quarterly at most; daily checks increase emotional decisions" },
                { mistake: "Waiting for the 'right time'", fix: "The best time to start is now. Time in market beats timing the market." },
                { mistake: "Not accounting for inflation", fix: "Your investments need to outpace inflation to grow your real wealth" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-4">
                  <p className="font-medium text-red-600 text-sm">{item.mistake}</p>
                  <p className="text-gray-700 text-sm mt-1">{item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Ready to See Your Numbers?</h2>
            <p className="text-gray-400 mb-4">
              Use our free calculators to plan your investment journey.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/investment-calculator"
                className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
              >
                Investment Calculator
              </Link>
              <Link
                href="/fire-calculator"
                className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors"
              >
                FIRE Calculator
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
            headline: "How to Start Investing: A Beginner's Guide",
            description: "Learn how to start investing from scratch with index funds, brokerage accounts, and dollar cost averaging.",
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
              { "@type": "ListItem", position: 3, name: "How to Start Investing" },
            ],
          }),
        }}
      />
    </main>
  );
}
