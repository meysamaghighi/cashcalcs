import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate Your Net Worth (Step-by-Step Guide) | CashCalcs",
  description:
    "Learn how to calculate your net worth in 5 simple steps. Includes what counts as assets vs liabilities, common mistakes, and benchmarks by age.",
  keywords: [
    "how to calculate net worth",
    "net worth formula",
    "what is net worth",
    "assets minus liabilities",
    "net worth guide",
  ],
};

export default function HowToCalculateNetWorth() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/net-worth" className="hover:text-gray-700">Net Worth Calculator</Link>
          {" > "}
          <span className="text-gray-900">How to Calculate Net Worth</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How to Calculate Your Net Worth (Step-by-Step)
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Net worth is the single most important number in personal finance. Here
          is exactly how to calculate yours in 5 minutes.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              The Formula
            </h2>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
              <p className="text-2xl font-bold text-orange-700">
                Net Worth = Total Assets - Total Liabilities
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              That is it. Add up everything you own, subtract everything you owe.
              The result is your net worth. It can be positive (you own more than
              you owe) or negative (you owe more than you own).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 1: List Your Assets
            </h2>
            <p className="text-gray-700 mb-3">
              Assets are everything you own that has monetary value:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4">
                <h3 className="font-bold text-emerald-800 mb-2">Cash and Savings</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Checking accounts</li>
                  <li>Savings accounts</li>
                  <li>Money market accounts</li>
                  <li>CDs (certificates of deposit)</li>
                  <li>Cash on hand</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 mb-2">Investments</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Brokerage accounts</li>
                  <li>401(k) and IRA balances</li>
                  <li>Roth IRA</li>
                  <li>HSA (Health Savings Account)</li>
                  <li>Stocks, bonds, mutual funds</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 mb-2">Property</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Primary residence (market value)</li>
                  <li>Rental properties</li>
                  <li>Land</li>
                  <li>REITs or real estate funds</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 mb-2">Other</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Vehicles (current market value)</li>
                  <li>Jewelry or collectibles</li>
                  <li>Business equity</li>
                  <li>Life insurance cash value</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 2: List Your Liabilities
            </h2>
            <p className="text-gray-700 mb-3">
              Liabilities are everything you owe:
            </p>
            <div className="bg-red-50 rounded-xl p-4">
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Mortgage</strong> — remaining balance, not the original loan amount</li>
                <li><strong>Student loans</strong> — federal and private</li>
                <li><strong>Auto loans</strong> — remaining balance</li>
                <li><strong>Credit card debt</strong> — current balances</li>
                <li><strong>Personal loans</strong> — including family loans</li>
                <li><strong>Medical debt</strong> — outstanding balances</li>
                <li><strong>Tax debt</strong> — any owed to IRS/state</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 3: Subtract and Get Your Number
            </h2>
            <p className="text-gray-700">
              Use our{" "}
              <Link href="/net-worth" className="text-orange-600 font-medium hover:underline">
                free net worth calculator
              </Link>{" "}
              to add your assets and liabilities. It will calculate your net
              worth, show you a breakdown by category, and give you a financial
              health score.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Net Worth Benchmarks by Age
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Age</th>
                    <th className="text-right py-3 text-gray-900">Median</th>
                    <th className="text-right py-3 text-gray-900">Average</th>
                    <th className="text-right py-3 text-gray-900">Rule of Thumb</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b"><td className="py-2">25</td><td className="text-right">$8,000</td><td className="text-right">$50,000</td><td className="text-right">0.5x salary</td></tr>
                  <tr className="border-b"><td className="py-2">30</td><td className="text-right">$10,000</td><td className="text-right">$76,000</td><td className="text-right">1x salary</td></tr>
                  <tr className="border-b"><td className="py-2">35</td><td className="text-right">$35,000</td><td className="text-right">$200,000</td><td className="text-right">2x salary</td></tr>
                  <tr className="border-b"><td className="py-2">40</td><td className="text-right">$80,000</td><td className="text-right">$400,000</td><td className="text-right">3x salary</td></tr>
                  <tr className="border-b"><td className="py-2">50</td><td className="text-right">$170,000</td><td className="text-right">$800,000</td><td className="text-right">6x salary</td></tr>
                  <tr><td className="py-2">60</td><td className="text-right">$270,000</td><td className="text-right">$1.2M</td><td className="text-right">8x salary</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Source: Federal Reserve Survey of Consumer Finances. Average is skewed by high earners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Common Mistakes
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Overvaluing your car.</strong> Use Kelley Blue Book, not what you paid. Cars depreciate fast.</li>
              <li><strong>Forgetting retirement accounts.</strong> Your 401(k) and IRA are assets even if you cannot touch them yet.</li>
              <li><strong>Ignoring small debts.</strong> That $500 medical bill and $200 store credit card count.</li>
              <li><strong>Using your home purchase price.</strong> Use current market value from Zillow or Redfin, not what you paid.</li>
              <li><strong>Not tracking regularly.</strong> Calculate quarterly, not once. The trend matters more than any single number.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              What is a Good Net Worth?
            </h2>
            <p className="text-gray-700">
              There is no single "good" number. What matters is: (1) is your net
              worth positive? (2) is it growing? If both answers are yes, you are
              on the right track. If your net worth is negative, focus on paying
              off high-interest debt first. Use our{" "}
              <Link href="/debt-payoff" className="text-blue-600 font-medium hover:underline">
                debt payoff calculator
              </Link>{" "}
              to make a plan.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/net-worth"
            className="inline-block px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors text-lg"
          >
            Calculate Your Net Worth Now
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Calculate Your Net Worth (Step-by-Step Guide)",
            description: "Learn how to calculate your net worth in 5 simple steps.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/how-to-calculate-net-worth",
          }),
        }}
      />
    </main>
  );
}
