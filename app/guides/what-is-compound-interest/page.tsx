import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Compound Interest? Explained with Real Examples | CashCalcs",
  description:
    "Understand compound interest simply: how it works, compound vs simple interest, the Rule of 72, why starting early matters, and how it applies to both savings and debt. With real calculations.",
  keywords: [
    "what is compound interest",
    "compound interest explained",
    "compound interest formula",
    "how compound interest works",
    "compound vs simple interest",
    "rule of 72",
    "compound interest calculator",
    "power of compound interest",
  ],
  openGraph: {
    title: "What is Compound Interest? Explained with Real Examples",
    description:
      "Understand compound interest: how it works, the Rule of 72, and why starting early can make you hundreds of thousands richer.",
    type: "article",
  },
  alternates: {
    canonical: "/guides/what-is-compound-interest",
  },
};

export default function WhatIsCompoundInterest() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Financial Guides</Link>
          {" > "}
          <span className="text-gray-900">What is Compound Interest?</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          What is Compound Interest? Explained with Real Examples
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Compound interest is the most powerful force in personal finance. Albert
          Einstein allegedly called it "the eighth wonder of the world." Understanding
          it is the difference between retiring comfortably and working until 70.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              The Simple Definition
            </h2>
            <p className="text-gray-700 mb-4">
              Compound interest is when you earn interest on your interest. Instead
              of earning a flat return each year, your earnings grow exponentially
              because each year's gains generate their own gains.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h3 className="font-bold text-emerald-800 mb-2">Simple Example:</h3>
              <p className="text-sm text-gray-700">
                You invest $1,000 at 10% annual interest. Year 1: you earn $100
                (10% of $1,000), bringing your total to $1,100. Year 2: you earn
                $110 (10% of $1,100), not $100. Year 3: you earn $121 (10% of $1,210).
                Your earnings grow each year because you are earning interest on
                previous interest.
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              This compounding effect is subtle in the first few years but becomes
              dramatic over decades. It is why starting early is so critical.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Compound vs Simple Interest
            </h2>
            <p className="text-gray-700 mb-4">
              To understand compound interest, compare it to simple interest:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Year</th>
                    <th className="text-right py-3 text-gray-900">Simple Interest (10%)</th>
                    <th className="text-right py-3 text-gray-900">Compound Interest (10%)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">0 (Start)</td>
                    <td className="text-right">$1,000</td>
                    <td className="text-right">$1,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">1</td>
                    <td className="text-right">$1,100</td>
                    <td className="text-right">$1,100</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">5</td>
                    <td className="text-right">$1,500</td>
                    <td className="text-right">$1,611</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">10</td>
                    <td className="text-right">$2,000</td>
                    <td className="text-right">$2,594</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">20</td>
                    <td className="text-right">$3,000</td>
                    <td className="text-right">$6,727</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">30</td>
                    <td className="text-right">$4,000</td>
                    <td className="text-right">$17,449</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              With simple interest, you earn $100/year forever. With compound
              interest, you earn $100 year 1, $110 year 2, $121 year 3, and by
              year 30 you are earning $1,586 per year. That is the power of compounding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              The Compound Interest Formula
            </h2>
            <p className="text-gray-700 mb-4">
              The mathematical formula for compound interest is:
            </p>
            <div className="bg-white rounded-xl shadow-sm p-5 text-center">
              <p className="text-lg font-mono text-gray-900 mb-3">
                A = P(1 + r/n)<sup>nt</sup>
              </p>
              <div className="text-sm text-gray-700 text-left space-y-1">
                <p><strong>A</strong> = final amount</p>
                <p><strong>P</strong> = principal (starting amount)</p>
                <p><strong>r</strong> = annual interest rate (as decimal, e.g. 0.08 for 8%)</p>
                <p><strong>n</strong> = number of times interest compounds per year</p>
                <p><strong>t</strong> = number of years</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              You do not need to memorize this. Use our{" "}
              <Link href="/compound-interest" className="text-purple-600 font-medium hover:underline">
                compound interest calculator
              </Link>{" "}
              to see results instantly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              The Rule of 72: Quick Mental Math
            </h2>
            <p className="text-gray-700 mb-4">
              The Rule of 72 lets you quickly estimate how long it takes your
              money to double:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-2 text-center text-lg">
                Years to Double = 72 / Interest Rate
              </h3>
              <div className="space-y-2 text-sm text-gray-700 mt-4">
                <div className="flex justify-between">
                  <span>6% return:</span>
                  <span className="font-medium">72 / 6 = <strong>12 years</strong> to double</span>
                </div>
                <div className="flex justify-between">
                  <span>8% return:</span>
                  <span className="font-medium">72 / 8 = <strong>9 years</strong> to double</span>
                </div>
                <div className="flex justify-between">
                  <span>10% return:</span>
                  <span className="font-medium">72 / 10 = <strong>7.2 years</strong> to double</span>
                </div>
                <div className="flex justify-between">
                  <span>12% return:</span>
                  <span className="font-medium">72 / 12 = <strong>6 years</strong> to double</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              The S&P 500 historically returns ~10% annually. Using the Rule of 72:
              your money doubles every 7.2 years. $10,000 becomes $20,000 in 7.2
              years, $40,000 in 14.4 years, $80,000 in 21.6 years, $160,000 in
              28.8 years. Four doublings in 30 years turns $10K into $160K.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              The Power of Starting Early
            </h2>
            <p className="text-gray-700 mb-4">
              The single biggest factor in compound growth is time. Here is why
              starting 10 years earlier changes everything:
            </p>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-3">Example: Age 25 vs Age 35</h3>
              <p className="text-sm text-gray-700 mb-3">
                Both investors put $500/month into an index fund earning 8% annually.
                Both stop at age 65. Who ends up with more?
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <p className="font-bold text-emerald-700">Investor A: Starts at 25</p>
                  <p className="text-sm text-gray-700">Invests $500/month for 40 years (age 25-65)</p>
                  <p className="text-sm text-gray-700">Total contributed: <strong>$240,000</strong></p>
                  <p className="text-sm text-gray-700">Final balance at 65: <strong>$1,745,503</strong></p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-bold text-red-700">Investor B: Starts at 35</p>
                  <p className="text-sm text-gray-700">Invests $500/month for 30 years (age 35-65)</p>
                  <p className="text-sm text-gray-700">Total contributed: <strong>$180,000</strong></p>
                  <p className="text-sm text-gray-700">Final balance at 65: <strong>$745,179</strong></p>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-900 mt-4">
                Result: Starting 10 years earlier turns $60,000 more in contributions
                into $1,000,324 more in final value. That is the power of compound interest.
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              Use our{" "}
              <Link href="/investment-calculator" className="text-purple-600 font-medium hover:underline">
                investment calculator
              </Link>{" "}
              to see your own age-specific projections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Compound Frequency: Daily vs Monthly vs Yearly
            </h2>
            <p className="text-gray-700 mb-4">
              Interest can compound at different frequencies. More frequent
              compounding means slightly faster growth:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Compounding</th>
                    <th className="text-right py-3 text-gray-900">$10,000 at 8% for 20 years</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">Annually (1x/year)</td>
                    <td className="text-right font-medium">$46,610</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Quarterly (4x/year)</td>
                    <td className="text-right font-medium">$48,595</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Monthly (12x/year)</td>
                    <td className="text-right font-medium">$49,268</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Daily (365x/year)</td>
                    <td className="text-right font-medium">$49,665</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              More frequent compounding helps, but the difference is small. Going
              from annual to daily adds ~6% over 20 years. The bigger factors are
              interest rate and time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Compound Interest Works Against You Too
            </h2>
            <p className="text-gray-700 mb-4">
              Compound interest applies to debt just like it does to savings. Credit
              card debt at 24% APR compounds against you:
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-2">Example: $5,000 credit card debt at 24% APR</h3>
              <p className="text-sm text-gray-700 mb-2">
                If you only pay the minimum ($125/month), it will take 7.5 years
                to pay off and cost $5,690 in interest. Total paid: $10,690 for
                a $5,000 purchase.
              </p>
              <p className="text-sm text-gray-700 font-medium">
                But if you pay $300/month instead, you pay it off in 20 months and
                pay only $945 in interest. Paying extra saves $4,745 and 5+ years.
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              Use our{" "}
              <Link href="/debt-payoff" className="text-red-600 font-medium hover:underline">
                debt payoff calculator
              </Link>{" "}
              to see how extra payments destroy compound interest on your debt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Where Compound Interest Matters Most
            </h2>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Retirement accounts (401k, IRA):</strong> Decades of
                compounding turns modest monthly contributions into millions. Max
                out employer match for instant 100% return.
              </li>
              <li>
                <strong>Index funds:</strong> The S&P 500 averages ~10% annually
                over long periods. $500/month for 40 years at 10% = $3.16 million.
              </li>
              <li>
                <strong>High-yield savings accounts:</strong> Online banks pay
                4-5% on savings (vs 0.1% at big banks). Small difference compounds
                to thousands over decades.
              </li>
              <li>
                <strong>Dividend reinvestment:</strong> Automatically reinvesting
                stock dividends buys more shares, which pay more dividends, which
                buy more shares. Compounding in action.
              </li>
              <li>
                <strong>Debt (works against you):</strong> Credit cards (18-29% APR),
                payday loans (400% APR), and personal loans compound debt fast. Pay
                these off aggressively.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How to Maximize Compound Interest
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: "Start today, not tomorrow",
                  desc: "Every year you wait costs tens of thousands in lost compound growth. Even $50/month starting now beats $500/month starting in 10 years.",
                },
                {
                  title: "Invest consistently (dollar-cost averaging)",
                  desc: "Automatic monthly contributions to index funds smooth out market volatility and ensure you never stop compounding.",
                  link: "/savings-goal",
                  linkText: "Set Monthly Savings Goal",
                },
                {
                  title: "Reinvest all earnings",
                  desc: "Do not withdraw interest, dividends, or capital gains. Let them reinvest and compound. Every dollar you pull out is a dollar that cannot grow.",
                },
                {
                  title: "Maximize time, not timing",
                  desc: "Time in the market beats timing the market. A mediocre investor who starts at 25 beats a genius investor who starts at 35.",
                },
                {
                  title: "Pay off high-interest debt first",
                  desc: "Credit card debt at 24% compounds faster than any investment return. Killing debt is a guaranteed 24% return.",
                  link: "/debt-payoff",
                  linkText: "Debt Payoff Calculator",
                },
              ].map((tip, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{tip.desc}</p>
                  {tip.link && (
                    <Link href={tip.link} className="text-sm text-purple-600 hover:underline font-medium">
                      {tip.linkText}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">See Compound Interest in Action</h2>
            <p className="text-gray-400 mb-4">Use our free calculators to project your own compound growth.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/compound-interest" className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors">Compound Interest</Link>
              <Link href="/investment-calculator" className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors">Investment Returns</Link>
              <Link href="/savings-goal" className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors">Savings Goal</Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/compound-interest"
            className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors text-lg"
          >
            Calculate Compound Interest
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What is Compound Interest? Explained with Real Examples",
            description: "Understand compound interest: how it works, compound vs simple interest, the Rule of 72, and why starting early can make you hundreds of thousands richer.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/what-is-compound-interest",
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
              { "@type": "ListItem", position: 3, name: "What is Compound Interest?" },
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
                name: "What is compound interest in simple terms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Compound interest is when you earn interest on your interest. Instead of earning a flat return each year, your gains generate their own gains. Example: $1,000 at 10% earns $100 year 1 (total $1,100), then $110 year 2 (10% of $1,100), then $121 year 3. Your earnings grow exponentially over time."
                }
              },
              {
                "@type": "Question",
                name: "What is the difference between simple and compound interest?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Simple interest earns a fixed amount each period based only on the original principal. Compound interest earns on both principal and accumulated interest. Example: $1,000 at 10% simple interest earns $100/year forever ($4,000 after 30 years). Compound interest earns $100 year 1, but $1,586 by year 30, reaching $17,449 total. Compound interest grows exponentially, simple interest grows linearly."
                }
              },
              {
                "@type": "Question",
                name: "What is the Rule of 72?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Rule of 72 is a quick way to estimate how long it takes money to double with compound interest. Divide 72 by the interest rate. At 8% annual return: 72 / 8 = 9 years to double. At 10%: 72 / 10 = 7.2 years to double. The S&P 500 averages ~10%, so your money doubles roughly every 7 years."
                }
              },
              {
                "@type": "Question",
                name: "Why is starting early so important for compound interest?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Compound interest grows exponentially, so time is the biggest factor. Example: Investing $500/month at 8% from age 25-65 (40 years) grows to $1.75 million. Starting at age 35 instead (30 years) only grows to $745,000 -- $1 million less, despite only 10 fewer years. The first 10 years provide decades for compounding to multiply your gains."
                }
              },
              {
                "@type": "Question",
                name: "Does compound interest work on debt too?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Compound interest works against you on debt. Credit card debt at 24% APR compounds monthly. A $5,000 balance paying only minimums takes 7.5 years to pay off and costs $5,690 in interest (total paid: $10,690). Paying $300/month instead of minimums pays it off in 20 months and saves $4,745 in interest. High-interest debt should be paid aggressively."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
