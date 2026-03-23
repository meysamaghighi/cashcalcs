import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much House Can I Afford? (2026 Guide) | CashCalcs",
  description:
    "Learn how much house you can afford based on your income, debts, and down payment. Includes the 28/36 rule, income requirements by home price, and tips to afford more.",
  keywords: [
    "how much house can I afford",
    "home affordability calculator",
    "28/36 rule",
    "mortgage affordability",
    "income needed to buy a house",
    "first time home buyer guide",
  ],
  openGraph: {
    title: "How Much House Can I Afford? (2026 Guide) | CashCalcs",
    description:
      "Learn how much house you can afford based on your income, debts, and down payment. Includes the 28/36 rule, income requirements by home price, and tips to afford more.",
    type: "article",
  },
};

export default function HowMuchHouseGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/mortgage-calculator" className="hover:text-gray-700">Mortgage Calculator</Link>
          {" > "}
          <span className="text-gray-900">How Much House Can I Afford</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How Much House Can I Afford?
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          The answer depends on your income, existing debts, down payment, and
          local costs like property tax and insurance. Here is a practical guide
          to figuring out your budget.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The 28/36 Rule
          </h2>
          <p className="text-gray-700 mb-4">
            Most lenders use the <strong>28/36 rule</strong> to determine how
            much you can borrow:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>28% front-end ratio</strong>: Your total housing costs
              (mortgage, taxes, insurance, HOA) should not exceed 28% of your
              gross monthly income.
            </li>
            <li>
              <strong>36% back-end ratio</strong>: Your total debt payments
              (housing + car loans + student loans + credit cards) should not
              exceed 36% of your gross monthly income.
            </li>
          </ul>
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-sm text-sky-800">
            <strong>Example:</strong> With a $100,000 household income ($8,333/month
            gross), your maximum housing payment is $2,333/month (28%) and
            maximum total debt is $3,000/month (36%).
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Income Needed by Home Price
          </h2>
          <p className="text-gray-700 mb-4">
            Assuming 20% down, 6.75% rate, 30-year term, with taxes and
            insurance, here is roughly what you need to earn:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">Home Price</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">Down Payment</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">Monthly Payment</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">Income Needed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["$250,000", "$50,000", "~$1,750", "~$75,000"],
                  ["$350,000", "$70,000", "~$2,400", "~$103,000"],
                  ["$500,000", "$100,000", "~$3,350", "~$144,000"],
                  ["$750,000", "$150,000", "~$4,900", "~$210,000"],
                  ["$1,000,000", "$200,000", "~$6,500", "~$279,000"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">{row[0]}</td>
                    <td className="py-3 px-4 text-gray-600">{row[1]}</td>
                    <td className="py-3 px-4 text-gray-600">{row[2]}</td>
                    <td className="py-3 px-4 font-medium text-sky-700">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Estimates assume 1.25% property tax, $2,000/year insurance, no PMI, no other debts.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Factors That Affect Affordability
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold text-gray-900">Down Payment</h3>
              <p>
                A larger down payment means a smaller loan and lower monthly
                payments. Putting 20% down also eliminates PMI, saving
                $100-200/month. FHA loans allow as little as 3.5% down but
                require mortgage insurance for the life of the loan.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Interest Rate</h3>
              <p>
                Every 1% increase in rate adds roughly $200/month per $300,000
                borrowed. A 6% rate vs 7% rate on a $400,000 loan means $260
                more per month and over $93,000 more in total interest.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Existing Debt</h3>
              <p>
                Car payments, student loans, and credit card minimums reduce
                your borrowing power. A $500/month car payment reduces the home
                you can afford by roughly $70,000-80,000. Use the <Link href="/debt-payoff" className="text-blue-600 hover:underline font-medium">debt payoff calculator</Link> to
                eliminate high-interest debt before applying for a mortgage.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Credit Score</h3>
              <p>
                A score of 740+ gets the best rates. Below 680, you may pay
                0.5-1.5% higher rates, which on a $400,000 loan costs
                $100-400 more per month.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Location</h3>
              <p>
                Property taxes vary dramatically: 0.3% in Hawaii to 2.5% in
                New Jersey. On a $500,000 home, that is a difference of
                $11,000/year in taxes alone.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tips to Afford More House
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Pay off debt first.</strong> Eliminating a $400/month car payment frees up roughly $55,000-65,000 in borrowing power.</li>
            <li><strong>Improve your credit score.</strong> Even a 40-point increase can save 0.25-0.5% on your rate, worth $50-100/month.</li>
            <li><strong>Save a bigger down payment.</strong> Going from 10% to 20% down eliminates PMI and reduces your loan amount.</li>
            <li><strong>Consider a 15-year mortgage.</strong> Rates are typically 0.5-0.75% lower, though monthly payments are higher.</li>
            <li><strong>Look at different areas.</strong> Moving 15-20 minutes further from city center can drop prices 20-30%.</li>
            <li><strong>Buy below your maximum.</strong> Just because you qualify for $500,000 does not mean you should spend it. Leave room for savings and emergencies.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hidden Costs of Homeownership
          </h2>
          <p className="text-gray-700 mb-3">
            Your mortgage is not your only housing cost. Budget for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Maintenance:</strong> 1-2% of home value per year ($5,000-10,000 on a $500K home)</li>
            <li><strong>Closing costs:</strong> 2-5% of purchase price ($10,000-25,000 on a $500K home)</li>
            <li><strong>HOA fees:</strong> $200-500/month in condos and planned communities</li>
            <li><strong>Utilities:</strong> Often higher than renting — larger space, lawn care, etc.</li>
            <li><strong>Furnishing:</strong> A new home often needs $5,000-15,000 in furniture and appliances</li>
          </ul>
        </section>

        <section className="bg-gray-900 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Try These Calculators</h2>
          <p className="text-gray-400 mb-4">Put this knowledge into action with our free tools.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/mortgage-calculator" className="px-5 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition-colors">Mortgage Calculator</Link>
            <Link href="/car-calculator" className="px-5 py-2 bg-lime-500 hover:bg-lime-600 text-white rounded-lg font-medium transition-colors">Car Calculator</Link>
            <Link href="/savings-goal" className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors">Savings Goal</Link>
          </div>
        </section>

        <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 text-center">
          <p className="text-lg font-bold text-gray-900 mb-2">
            Ready to calculate?
          </p>
          <p className="text-gray-600 mb-4">
            Use our free mortgage calculator to see your exact monthly payment.
          </p>
          <Link
            href="/mortgage-calculator"
            className="inline-block px-6 py-3 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 transition-colors"
          >
            Open Mortgage Calculator
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How Much House Can I Afford? (2026 Guide)",
            description: "Learn how much house you can afford based on your income, debts, and down payment.",
            url: "https://cashcalcs.com/guides/how-much-house-can-i-afford",
            publisher: {
              "@type": "Organization",
              name: "CashCalcs",
              url: "https://cashcalcs.com",
            },
          }),
        }}
      />
    </main>
  );
}
