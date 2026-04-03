import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "$100,000 Salary After Taxes: Complete Breakdown by State | CashCalcs",
  description:
    "What does a $100K salary look like after taxes? Complete breakdown by state, monthly take-home pay, comparison to median income, and strategies to maximize your take-home.",
  keywords: [
    "100 000 a year after taxes",
    "100 000 salary after taxes",
    "100k a year after taxes",
    "100 000 after tax",
    "100k take home pay",
    "six figure salary after taxes",
  ],
  openGraph: {
    title: "$100,000 Salary After Taxes: Complete Breakdown by State",
    description:
      "Complete breakdown of what a $100K salary looks like after federal and state taxes. Monthly take-home, state comparisons, and tips to maximize your paycheck.",
    type: "article",
  },
  alternates: {
    canonical: "/guides/100k-salary-after-tax",
  },
};

export default function SalaryAfterTax100k() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Financial Guides</Link>
          {" > "}
          <span className="text-gray-900">$100K Salary After Taxes</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          $100,000 Salary After Taxes: What You Really Take Home
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          A six-figure salary sounds impressive, but how much do you actually
          keep after federal and state taxes? Here is the complete breakdown
          for 2026.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Federal Taxes on $100K
            </h2>
            <p className="text-gray-700 mb-4">
              For the 2026 tax year, a single filer earning $100,000 pays
              federal income tax at these marginal rates:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Income Range</th>
                    <th className="text-center py-3 text-gray-900">Rate</th>
                    <th className="text-right py-3 text-gray-900">Tax Owed</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b"><td className="py-2">$0 - $11,925</td><td className="text-center">10%</td><td className="text-right">$1,193</td></tr>
                  <tr className="border-b"><td className="py-2">$11,925 - $48,475</td><td className="text-center">12%</td><td className="text-right">$4,386</td></tr>
                  <tr className="border-b"><td className="py-2">$48,475 - $100,000</td><td className="text-center">22%</td><td className="text-right">$11,336</td></tr>
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-gray-300 font-bold">
                    <td className="py-2" colSpan={2}>Total Federal Income Tax</td>
                    <td className="text-right">$16,915</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Plus FICA (Social Security + Medicare): $7,650. Total federal
              withholding: <strong>$24,565</strong>.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-4">
              <p className="text-xl font-bold text-emerald-800 text-center">
                Federal Take-Home: $75,435/year ($6,286/month)
              </p>
              <p className="text-sm text-gray-600 text-center mt-2">
                Effective federal tax rate: 24.6%
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              State-by-State Take-Home Pay
            </h2>
            <p className="text-gray-700 mb-4">
              State income tax makes a huge difference. Here is what you take
              home in the top 10 most populated states:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">State</th>
                    <th className="text-center py-3 text-gray-900">State Tax</th>
                    <th className="text-right py-3 text-gray-900">Annual Take-Home</th>
                    <th className="text-right py-3 text-gray-900">Monthly</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b bg-emerald-50"><td className="py-2">Texas</td><td className="text-center">$0</td><td className="text-right font-bold">$75,435</td><td className="text-right">$6,286</td></tr>
                  <tr className="border-b bg-emerald-50"><td className="py-2">Florida</td><td className="text-center">$0</td><td className="text-right font-bold">$75,435</td><td className="text-right">$6,286</td></tr>
                  <tr className="border-b"><td className="py-2">Pennsylvania</td><td className="text-center">$3,070</td><td className="text-right">$72,365</td><td className="text-right">$6,030</td></tr>
                  <tr className="border-b"><td className="py-2">Ohio</td><td className="text-center">$3,150</td><td className="text-right">$72,285</td><td className="text-right">$6,024</td></tr>
                  <tr className="border-b"><td className="py-2">Georgia</td><td className="text-center">$5,400</td><td className="text-right">$70,035</td><td className="text-right">$5,836</td></tr>
                  <tr className="border-b"><td className="py-2">North Carolina</td><td className="text-center">$4,750</td><td className="text-right">$70,685</td><td className="text-right">$5,891</td></tr>
                  <tr className="border-b"><td className="py-2">Illinois</td><td className="text-center">$4,950</td><td className="text-right">$70,485</td><td className="text-right">$5,874</td></tr>
                  <tr className="border-b"><td className="py-2">New York</td><td className="text-center">$6,150</td><td className="text-right">$69,285</td><td className="text-right">$5,774</td></tr>
                  <tr className="border-b bg-red-50"><td className="py-2">California</td><td className="text-center">$7,800</td><td className="text-right font-bold">$67,635</td><td className="text-right">$5,636</td></tr>
                  <tr className="border-b bg-red-50"><td className="py-2">New Jersey</td><td className="text-center">$3,220</td><td className="text-right">$72,215</td><td className="text-right">$6,018</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Assumes single filer, standard deduction, no other deductions. Your actual take-home may vary.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-gray-700">
                <strong>Pro tip:</strong> Living in a no-income-tax state saves
                you $3,000-$7,800/year on a $100K salary. That is $300-$650 extra
                per month without changing your lifestyle.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Monthly, Weekly, and Daily Breakdown
            </h2>
            <p className="text-gray-700 mb-4">
              Here is how a $100K salary breaks down after taxes (using Texas/Florida
              as the example with no state tax):
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 mb-2">Before Taxes</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Annual: $100,000</li>
                  <li>Monthly: $8,333</li>
                  <li>Biweekly: $3,846</li>
                  <li>Weekly: $1,923</li>
                  <li>Daily: $385 (260 work days)</li>
                  <li>Hourly: $48.08 (2,080 hours)</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-xl p-5">
                <h3 className="font-bold text-emerald-800 mb-2">After Taxes</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Annual: $75,435</li>
                  <li>Monthly: $6,286</li>
                  <li>Biweekly: $2,901</li>
                  <li>Weekly: $1,451</li>
                  <li>Daily: $290 (260 work days)</li>
                  <li>Hourly: $36.27 (2,080 hours)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How $100K Compares to Median Income
            </h2>
            <p className="text-gray-700 mb-4">
              In 2026, the median household income in the U.S. is approximately
              $75,000. A $100,000 salary puts you in the 67th percentile --
              you earn more than 2 out of 3 American households.
            </p>
            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="font-bold text-purple-800 mb-2">Key Comparisons</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>33% above median:</strong> $100K is 1.33x the typical household income.</li>
                <li><strong>Comfortable living:</strong> In most U.S. cities, $100K provides a comfortable middle-class lifestyle for a family of 3-4.</li>
                <li><strong>Not rich, not poor:</strong> You are solidly middle to upper-middle class, not wealthy by coastal standards.</li>
                <li><strong>Regional differences:</strong> In San Francisco or NYC, $100K feels like $60K. In Dallas or Atlanta, it feels like $120K.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              7 Ways to Maximize Your Take-Home Pay
            </h2>
            <ol className="text-gray-700 space-y-3 list-decimal list-inside">
              <li>
                <strong>Max out 401(k) contributions.</strong> Contribute $23,500
                (2026 limit) pre-tax. This reduces taxable income to $76,500, saving
                $5,170 in federal taxes.
              </li>
              <li>
                <strong>Use an HSA if eligible.</strong> Contribute $4,300 (2026
                individual limit) pre-tax for medical expenses. Saves $945 in taxes.
              </li>
              <li>
                <strong>Itemize deductions if possible.</strong> Mortgage interest,
                property taxes, and charitable donations can exceed the $15,000 standard
                deduction.
              </li>
              <li>
                <strong>Claim all tax credits.</strong> Child Tax Credit ($2,000/child),
                education credits, and energy-efficiency credits lower your tax bill.
              </li>
              <li>
                <strong>Adjust W-4 withholding.</strong> If you get a large refund,
                you are over-withholding. Keep more money in your paycheck instead of
                giving Uncle Sam an interest-free loan.
              </li>
              <li>
                <strong>Side hustle deductions.</strong> If you freelance or consult,
                deduct home office, equipment, travel, and software expenses.
              </li>
              <li>
                <strong>Consider relocation.</strong> Moving from California to Texas
                saves $7,800/year in state taxes on $100K -- that is a 10% raise for free.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              What Should You Do With a $100K Salary?
            </h2>
            <p className="text-gray-700 mb-4">
              Use the 50/30/20 rule as a starting framework:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 mb-2">50% Needs</h3>
                <p className="text-2xl font-bold text-blue-900 mb-1">$3,143/mo</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>Rent/mortgage: $1,500</li>
                  <li>Utilities: $200</li>
                  <li>Groceries: $500</li>
                  <li>Transportation: $400</li>
                  <li>Insurance: $300</li>
                  <li>Min debt payments: $243</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 mb-2">30% Wants</h3>
                <p className="text-2xl font-bold text-amber-900 mb-1">$1,886/mo</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>Dining out: $500</li>
                  <li>Entertainment: $300</li>
                  <li>Travel: $400</li>
                  <li>Hobbies: $300</li>
                  <li>Shopping: $386</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4">
                <h3 className="font-bold text-emerald-800 mb-2">20% Savings</h3>
                <p className="text-2xl font-bold text-emerald-900 mb-1">$1,257/mo</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>401(k): $700</li>
                  <li>Roth IRA: $350</li>
                  <li>Emergency fund: $207</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Use our{" "}
              <Link href="/budget" className="text-amber-600 font-medium hover:underline">
                50/30/20 budget calculator
              </Link>{" "}
              to customize this for your situation.
            </p>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Calculate Your Take-Home Pay</h2>
            <p className="text-gray-400 mb-4">See your exact paycheck breakdown by state, deductions, and filing status.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/salary-calculator" className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">Salary Calculator</Link>
              <Link href="/tax-calculator" className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors">Tax Calculator</Link>
              <Link href="/budget" className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors">Budget Calculator</Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/salary-calculator"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors text-lg"
          >
            Calculate Your Take-Home Pay
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "$100,000 Salary After Taxes: What You Really Take Home",
            description: "Complete breakdown of what a $100K salary looks like after federal and state taxes.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/100k-salary-after-tax",
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
              { "@type": "ListItem", position: 3, name: "$100K Salary After Taxes" },
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
                name: "How much is $100,000 a year after taxes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A $100,000 salary after federal taxes is approximately $75,435 per year ($6,286/month) for a single filer with no state income tax. With state taxes, take-home ranges from $67,635 (California) to $75,435 (Texas/Florida). This assumes standard deduction and typical FICA withholding."
                }
              },
              {
                "@type": "Question",
                name: "What is the monthly take-home pay on a $100K salary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On a $100,000 salary, you take home approximately $6,286 per month after federal taxes (no state tax), or $5,636-$6,286/month depending on your state. California has the lowest take-home ($5,636/month), while Texas and Florida have the highest ($6,286/month)."
                }
              },
              {
                "@type": "Question",
                name: "Is $100,000 a year a good salary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, $100,000 is a good salary -- it is 33% above the median U.S. household income and places you in the 67th percentile. It provides a comfortable middle-class lifestyle in most U.S. cities, though purchasing power varies significantly by region (stronger in the South/Midwest, weaker in San Francisco and NYC)."
                }
              },
              {
                "@type": "Question",
                name: "How can I maximize my take-home pay on a $100K salary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Maximize 401(k) contributions ($23,500 limit saves $5,170 in taxes), use an HSA ($4,300 limit saves $945), itemize deductions if above $15,000, claim all tax credits, adjust W-4 to avoid over-withholding, deduct side hustle expenses, and consider relocating to a no-income-tax state (saves $3,000-$7,800/year)."
                }
              },
              {
                "@type": "Question",
                name: "Which state has the lowest taxes on a $100K salary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Texas, Florida, Nevada, Washington, Tennessee, South Dakota, Wyoming, Alaska, and New Hampshire have no state income tax, giving you the highest take-home pay ($75,435/year on $100K). California has the highest state tax ($7,800), reducing take-home to $67,635/year."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
