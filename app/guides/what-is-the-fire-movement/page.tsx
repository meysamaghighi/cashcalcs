import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is the FIRE Movement? (Beginner's Guide 2026) | CashCalcs",
  description:
    "Learn about the FIRE movement (Financial Independence, Retire Early). Covers Lean FIRE, Fat FIRE, Coast FIRE, Barista FIRE, the 4% rule, and how to get started.",
  keywords: [
    "what is FIRE movement",
    "financial independence retire early",
    "FIRE movement explained",
    "how to retire early",
    "4 percent rule",
    "lean fire vs fat fire",
    "coast fire",
  ],
  openGraph: {
    title: "What is the FIRE Movement? (Beginner's Guide 2026) | CashCalcs",
    description:
      "Learn about the FIRE movement (Financial Independence, Retire Early). Covers Lean FIRE, Fat FIRE, Coast FIRE, Barista FIRE, the 4% rule, and how to get started.",
    type: "article",
  },
};

export default function WhatIsFireGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/fire-calculator" className="hover:text-gray-700">FIRE Calculator</Link>
          {" > "}
          <span className="text-gray-900">What is FIRE?</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          What is the FIRE Movement?
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          FIRE stands for <strong>Financial Independence, Retire Early</strong>.
          It is a lifestyle movement focused on extreme savings and investing so
          you can stop working for money decades before the traditional retirement
          age of 65.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Core Idea
          </h2>
          <p className="text-gray-700 mb-4">
            The math behind FIRE is straightforward: if your investments generate
            enough passive income to cover your living expenses, you never need
            to work again. This is called your <strong>FIRE number</strong>.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-sm text-indigo-800 mb-4">
            <strong>FIRE Number = Annual Expenses / Withdrawal Rate</strong>
            <br />
            Example: $50,000 expenses / 4% = $1,250,000 needed
          </div>
          <p className="text-gray-700">
            Once you accumulate your FIRE number in investments, you can
            withdraw 4% per year to cover expenses indefinitely. This is known
            as the <strong>4% rule</strong>, based on the Trinity Study which
            found that a 4% withdrawal rate has historically survived 30+ year
            retirement periods.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Types of FIRE
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-green-700 mb-1">Lean FIRE</h3>
              <p className="text-gray-700 text-sm">
                Retire with minimal expenses, typically under $40,000/year.
                Requires a smaller portfolio ($750K-$1M) but means living
                frugally. Best for minimalists and those in low-cost areas.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-indigo-700 mb-1">Regular FIRE</h3>
              <p className="text-gray-700 text-sm">
                The standard approach: save 25x your annual expenses. For
                someone spending $50,000/year, the target is $1.25M. Allows a
                comfortable but not luxurious lifestyle.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-purple-700 mb-1">Fat FIRE</h3>
              <p className="text-gray-700 text-sm">
                Retire with above-average spending, $100,000+/year. Requires
                $2.5M+ and is typically pursued by high earners. No need to
                cut back on lifestyle.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-amber-700 mb-1">Coast FIRE</h3>
              <p className="text-gray-700 text-sm">
                Save enough that compound growth alone will reach your FIRE
                number by age 65, even if you never invest another dollar. After
                reaching Coast FIRE, you only need to earn enough for current
                expenses.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-rose-700 mb-1">Barista FIRE</h3>
              <p className="text-gray-700 text-sm">
                Semi-retire with a part-time job covering some expenses while
                investments cover the rest. Named after the idea of working at
                a coffee shop for health insurance and spending money.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Savings Rate Drives Everything
          </h2>
          <p className="text-gray-700 mb-4">
            Your savings rate — the percentage of after-tax income you save — is
            the single most important factor in reaching FIRE. Here is how
            savings rate maps to years until retirement:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">Savings Rate</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">Years to FIRE</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["10%", "~51 years", "Traditional retirement"],
                  ["20%", "~37 years", "Slightly early"],
                  ["30%", "~28 years", "Retire in your 50s"],
                  ["40%", "~22 years", "Retire around 50"],
                  ["50%", "~17 years", "Retire in your 40s"],
                  ["60%", "~12.5 years", "Aggressive FIRE"],
                  ["70%", "~8.5 years", "Very aggressive"],
                  ["80%", "~5.5 years", "Extreme frugality"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-indigo-700">{row[0]}</td>
                    <td className="py-3 px-4 font-medium text-gray-900">{row[1]}</td>
                    <td className="py-3 px-4 text-gray-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Assumes 7% real investment returns and 4% withdrawal rate. Starting from $0.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Get Started
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Track your spending.</strong> Use the <Link href="/budget" className="text-amber-600 hover:underline font-medium">50/30/20 budget calculator</Link> to optimize what you measure. Know exactly where every dollar goes for at least one month.</li>
            <li><strong>Calculate your FIRE number.</strong> Use the <Link href="/fire-calculator" className="text-indigo-600 hover:underline font-medium">FIRE calculator</Link> to find your target. Annual expenses times 25 (using the 4% rule) is your target portfolio size.</li>
            <li><strong>Maximize your savings rate.</strong> Cut the big three: housing (downsize or house hack), transportation (buy used or go car-free), and food (cook at home).</li>
            <li><strong>Invest consistently.</strong> Put savings into low-cost index funds (like VTSAX or VTI). Use the <Link href="/investment-calculator" className="text-green-600 hover:underline font-medium">investment calculator</Link> to project growth with monthly contributions.</li>
            <li><strong>Increase income.</strong> Negotiate raises, switch jobs, or explore <Link href="/side-hustle" className="text-emerald-600 hover:underline font-medium">side hustles</Link>. Every extra dollar saved accelerates your timeline.</li>
            <li><strong>Stay the course.</strong> The hardest part is maintaining discipline over 10-20 years. The math works — trust the process.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Common Criticisms of FIRE
          </h2>
          <div className="space-y-3 text-gray-700">
            <div>
              <h3 className="font-bold text-gray-900">
                &quot;You are just living cheaply and calling it retirement&quot;
              </h3>
              <p>
                Lean FIRE does require frugality, but Fat FIRE allows a very
                comfortable lifestyle. FIRE is not about deprivation — it is
                about intentional spending on what matters to you.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">
                &quot;What about healthcare?&quot;
              </h3>
              <p>
                This is a real concern in the US. Options include ACA marketplace
                plans, health sharing ministries, part-time work with benefits
                (Barista FIRE), or budgeting $500-1,000/month for premiums.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">
                &quot;The 4% rule might not work&quot;
              </h3>
              <p>
                The original study was for 30-year retirements. Early retirees
                may want a more conservative 3.5% rate or plan to be flexible
                (reduce spending in down markets). Many FIRE practitioners also
                earn some income from hobbies or part-time work.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Try These Calculators</h2>
          <p className="text-gray-400 mb-4">Put this knowledge into action with our free tools.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/fire-calculator" className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors">FIRE Calculator</Link>
            <Link href="/investment-calculator" className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors">Investment Calculator</Link>
            <Link href="/retirement-calculator" className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">Retirement Calculator</Link>
          </div>
        </section>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 text-center">
          <p className="text-lg font-bold text-gray-900 mb-2">
            Calculate your FIRE date
          </p>
          <p className="text-gray-600 mb-4">
            Enter your income, expenses, and savings to see when you can reach
            financial independence.
          </p>
          <Link
            href="/fire-calculator"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Open FIRE Calculator
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What is the FIRE Movement? (Beginner's Guide 2026)",
            description: "Learn about FIRE (Financial Independence, Retire Early), the 4% rule, and different FIRE strategies.",
            url: "https://cashcalcs.com/guides/what-is-the-fire-movement",
            publisher: {
              "@type": "Organization",
              name: "CashCalcs",
              url: "https://cashcalcs.com",
            },
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
              { "@type": "ListItem", position: 3, name: "What Is the FIRE Movement" },
            ],
          }),
        }}
      />
    </main>
  );
}
