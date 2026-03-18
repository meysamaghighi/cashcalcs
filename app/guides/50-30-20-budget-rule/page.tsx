import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 50/30/20 Budget Rule Explained (With Examples) | CashCalcs",
  description:
    "Learn the 50/30/20 budget rule with real examples. How to split your income into needs, wants, and savings. Includes budget breakdowns for every income level.",
  keywords: [
    "50/30/20 rule",
    "50 30 20 budget",
    "budget rule",
    "how to budget",
    "budgeting for beginners",
    "personal budget",
    "needs wants savings",
  ],
};

export default function BudgetRuleGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/budget" className="hover:text-gray-700">Budget Calculator</Link>
          {" > "}
          <span className="text-gray-900">50/30/20 Rule</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          The 50/30/20 Budget Rule: A Complete Guide
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          The 50/30/20 rule is the simplest budgeting framework that actually works.
          Split your after-tax income into three buckets: 50% needs, 30% wants,
          20% savings. Here is everything you need to know.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Where Did the 50/30/20 Rule Come From?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The rule was popularized by Senator Elizabeth Warren and her daughter
              Amelia Warren Tyagi in their 2005 book "All Your Worth: The Ultimate
              Lifetime Money Plan." They analyzed decades of financial data and found
              that people who allocated roughly half their income to needs, a third to
              wants, and a fifth to savings consistently built wealth without feeling
              deprived.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The Three Categories Explained
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">50% Needs</h3>
                <p className="text-gray-700 mb-3">
                  Essentials you must pay regardless of lifestyle choices. If you lost your
                  job, these are the bills you would still need to cover.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>Rent or mortgage payment</li>
                  <li>Utilities (electric, gas, water, internet)</li>
                  <li>Groceries (not dining out)</li>
                  <li>Health insurance and medical bills</li>
                  <li>Car payment, gas, and car insurance</li>
                  <li>Minimum debt payments</li>
                  <li>Childcare</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">30% Wants</h3>
                <p className="text-gray-700 mb-3">
                  Things that improve your quality of life but are not essential for survival.
                  The test: could you live without it if you absolutely had to?
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>Dining out and takeout</li>
                  <li>Streaming services (Netflix, Spotify, etc.)</li>
                  <li>Shopping and new clothes</li>
                  <li>Gym membership</li>
                  <li>Vacations and travel</li>
                  <li>Hobbies and entertainment</li>
                  <li>Upgrading from a basic phone plan to premium</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">20% Savings & Debt Repayment</h3>
                <p className="text-gray-700 mb-3">
                  Money that builds your future. This is the category that separates
                  people who build wealth from those who live paycheck to paycheck.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>Emergency fund (aim for 3-6 months of expenses)</li>
                  <li>401(k) and IRA contributions</li>
                  <li>Extra debt payments above minimums</li>
                  <li>Brokerage investments</li>
                  <li>Saving for a house down payment</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              50/30/20 by Income Level
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Income</th>
                    <th className="text-right py-3 text-red-600">Needs</th>
                    <th className="text-right py-3 text-blue-600">Wants</th>
                    <th className="text-right py-3 text-green-600">Savings</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b"><td className="py-2">$3,000/mo ($36K)</td><td className="text-right text-red-600">$1,500</td><td className="text-right text-blue-600">$900</td><td className="text-right text-green-600">$600</td></tr>
                  <tr className="border-b"><td className="py-2">$4,000/mo ($48K)</td><td className="text-right text-red-600">$2,000</td><td className="text-right text-blue-600">$1,200</td><td className="text-right text-green-600">$800</td></tr>
                  <tr className="border-b"><td className="py-2">$5,000/mo ($60K)</td><td className="text-right text-red-600">$2,500</td><td className="text-right text-blue-600">$1,500</td><td className="text-right text-green-600">$1,000</td></tr>
                  <tr className="border-b"><td className="py-2">$6,500/mo ($78K)</td><td className="text-right text-red-600">$3,250</td><td className="text-right text-blue-600">$1,950</td><td className="text-right text-green-600">$1,300</td></tr>
                  <tr className="border-b"><td className="py-2">$8,333/mo ($100K)</td><td className="text-right text-red-600">$4,167</td><td className="text-right text-blue-600">$2,500</td><td className="text-right text-green-600">$1,667</td></tr>
                  <tr><td className="py-2">$12,500/mo ($150K)</td><td className="text-right text-red-600">$6,250</td><td className="text-right text-blue-600">$3,750</td><td className="text-right text-green-600">$2,500</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              When to Modify the 50/30/20 Rule
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The 50/30/20 split is a starting point, not a rigid rule. Here are
                common situations where you should adjust:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>High cost of living:</strong> In cities like San Francisco or New York, needs may take 55-65% of income. Cut wants to compensate but protect the 20% savings.</li>
                <li><strong>Aggressive debt payoff:</strong> Switch to 50/20/30 where 30% goes to debt elimination. Once debt-free, move to a high savings rate.</li>
                <li><strong>FIRE goals:</strong> Early retirement seekers often use 30/10/60 or 40/10/50 splits. A 50%+ savings rate lets you retire in 15-17 years.</li>
                <li><strong>Low income:</strong> If 50% does not cover needs, focus on increasing income (side hustles, skill building) while saving even a small amount consistently.</li>
                <li><strong>High income:</strong> Earning $150K+ means you do not need 30% for wants. Shift to 40/15/45 and accelerate wealth building.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Start Using the 50/30/20 Rule Today
            </h2>
            <ol className="text-gray-700 space-y-3 list-decimal list-inside">
              <li><strong>Calculate your after-tax income.</strong> Check your pay stub for the net amount deposited each month.</li>
              <li><strong>List all your needs.</strong> Total up rent, utilities, groceries, insurance, transportation, and minimum debt payments.</li>
              <li><strong>Check if needs exceed 50%.</strong> If so, identify what you can reduce. Housing is usually the biggest lever.</li>
              <li><strong>Set up automated savings.</strong> On payday, automatically transfer 20% to a savings or investment account. Pay yourself first.</li>
              <li><strong>Use what is left for wants.</strong> The remaining 30% is your guilt-free spending money. Enjoy it without stress.</li>
            </ol>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/budget"
            className="inline-block px-8 py-4 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-colors text-lg"
          >
            Try the 50/30/20 Budget Calculator
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The 50/30/20 Budget Rule: A Complete Guide",
            description: "Learn the 50/30/20 budget rule with real examples for every income level.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/50-30-20-budget-rule",
          }),
        }}
      />
    </main>
  );
}
