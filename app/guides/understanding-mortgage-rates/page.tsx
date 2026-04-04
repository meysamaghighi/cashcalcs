import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Understanding Mortgage Rates: How They Work (2026 Guide) | CashCalcs",
  description:
    "Learn how mortgage rates work, what determines your rate, fixed vs adjustable mortgages, how 1% affects your payment, when to lock, and refinancing strategies.",
  keywords: [
    "mortgage rates explained",
    "how do mortgage rates work",
    "fixed vs adjustable mortgage",
    "ARM vs fixed rate",
    "what affects mortgage rates",
    "mortgage rate factors",
    "how to get best mortgage rate",
    "mortgage refinancing",
  ],
  openGraph: {
    title: "Understanding Mortgage Rates: How They Work (2026 Guide) | CashCalcs",
    description:
      "Learn how mortgage rates work, what determines your rate, fixed vs adjustable mortgages, how 1% affects your payment, when to lock, and refinancing strategies.",
    type: "article",
  },
  alternates: {
    canonical: "/guides/understanding-mortgage-rates",
  },
};

export default function MortgageRatesGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Financial Guides</Link>
          {" > "}
          <span className="text-gray-900">Understanding Mortgage Rates</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Understanding Mortgage Rates: How They Work
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Your mortgage rate is the interest rate charged on your home loan. It determines
          your monthly payment and how much you pay over the life of the loan. A seemingly
          small difference in rate -- 6.0% vs 7.0% -- can cost tens of thousands of dollars.
          Here is everything you need to know.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is a Mortgage Rate?
          </h2>
          <p className="text-gray-700 mb-4">
            A mortgage rate is the annual cost of borrowing money to buy a home, expressed
            as a percentage. If you borrow $300,000 at 6.5% for 30 years, you will pay
            $1,896/month in principal and interest, and $382,633 in total interest over
            the life of the loan.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
            <strong>Key Point:</strong> Your rate is locked when you close, not when you
            apply. Rates can change daily. Use the <Link href="/mortgage-calculator" className="text-blue-700 hover:underline font-medium">mortgage calculator</Link> to
            see how different rates affect your payment.
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How 1% Changes Everything
          </h2>
          <p className="text-gray-700 mb-4">
            Here is what a $300,000 30-year fixed mortgage costs at different rates.
            Notice how 1% changes your monthly payment by ~$180 and total interest by ~$65,000:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="p-4">Interest Rate</th>
                  <th className="p-4 text-right">Monthly Payment</th>
                  <th className="p-4 text-right">Total Interest</th>
                  <th className="p-4 text-right">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rate: "5.5%", monthly: "$1,703", interest: "$313,000", total: "$613,000" },
                  { rate: "6.0%", monthly: "$1,799", interest: "$347,500", total: "$647,500" },
                  { rate: "6.5%", monthly: "$1,896", interest: "$382,600", total: "$682,600" },
                  { rate: "7.0%", monthly: "$1,996", interest: "$418,500", total: "$718,500" },
                  { rate: "7.5%", monthly: "$2,098", interest: "$455,200", total: "$755,200" },
                  { rate: "8.0%", monthly: "$2,201", interest: "$492,400", total: "$792,400" },
                ].map((row) => (
                  <tr key={row.rate} className="border-b border-gray-50">
                    <td className="p-4 font-medium text-gray-900">{row.rate}</td>
                    <td className="p-4 text-right text-gray-700 font-bold">{row.monthly}</td>
                    <td className="p-4 text-right text-rose-600">{row.interest}</td>
                    <td className="p-4 text-right text-gray-700">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700">
            The difference between 5.5% and 8.0% is <strong>$179,400 in extra interest</strong> and
            $498/month. This is why getting the best rate matters so much.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Fixed vs Adjustable Rate (ARM)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-blue-700 mb-3 text-lg">Fixed-Rate Mortgage</h3>
              <p className="text-gray-700 text-sm mb-3">
                Your rate never changes. A 6.5% 30-year fixed stays 6.5% for all 30 years.
                Your payment is predictable and stable.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Predictable payments for life of loan</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Protected if rates rise</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Easier to budget and plan</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">-</span>
                  <span className="text-gray-700">Higher initial rate than ARMs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">-</span>
                  <span className="text-gray-700">Cannot drop without refinancing</span>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4 text-sm text-blue-900">
                <strong>Best for:</strong> Long-term homeowners (7+ years), first-time buyers,
                those who value stability over risk
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-purple-700 mb-3 text-lg">Adjustable Rate (ARM)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Your rate is fixed for an initial period (3, 5, 7, or 10 years), then adjusts
                annually. A 5/1 ARM is fixed for 5 years, then adjusts yearly based on market rates.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Lower initial rate (0.5-1% less than fixed)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Can drop if rates fall</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Good if you plan to sell before adjustment</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">-</span>
                  <span className="text-gray-700">Payment can spike after fixed period</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">-</span>
                  <span className="text-gray-700">Unpredictable long-term budgeting</span>
                </div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mt-4 text-sm text-purple-900">
                <strong>Best for:</strong> Short-term homeowners (moving in 5-7 years), those
                expecting income growth, risk-tolerant buyers
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Determines Your Mortgage Rate?
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">1.</span>
                <span>The Federal Reserve and Bond Markets</span>
              </h3>
              <p className="text-gray-700 text-sm">
                Mortgage rates follow the 10-year Treasury bond yield. When the Fed raises interest
                rates to fight inflation, mortgage rates rise. When the Fed cuts rates to boost the
                economy, mortgage rates fall. You cannot control this.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">2.</span>
                <span>Your Credit Score</span>
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Higher credit score = lower rate. Lenders see you as lower risk. The difference
                between 760+ and 620 credit can be 1.5-2% in rate.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs bg-gray-50 rounded-lg">
                  <thead>
                    <tr className="border-b text-left text-gray-500">
                      <th className="p-2">Credit Score</th>
                      <th className="p-2 text-right">Typical Rate</th>
                      <th className="p-2 text-right">$300K Monthly Payment</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="p-2">760-850</td>
                      <td className="p-2 text-right text-green-700 font-bold">6.0%</td>
                      <td className="p-2 text-right">$1,799</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-2">700-759</td>
                      <td className="p-2 text-right">6.3%</td>
                      <td className="p-2 text-right">$1,854</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-2">660-699</td>
                      <td className="p-2 text-right">6.8%</td>
                      <td className="p-2 text-right">$1,951</td>
                    </tr>
                    <tr>
                      <td className="p-2">620-659</td>
                      <td className="p-2 text-right text-rose-700 font-bold">7.5%</td>
                      <td className="p-2 text-right">$2,098</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 text-sm mt-2">
                Improving your score from 660 to 760 saves $147/month and $53,000 over 30 years.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">3.</span>
                <span>Down Payment Size</span>
              </h3>
              <p className="text-gray-700 text-sm">
                20% down = best rates. Less than 20% requires PMI (private mortgage insurance) and
                often a higher rate. 10% down might add 0.25-0.5% to your rate. 3.5% FHA down adds
                even more cost via mortgage insurance premiums.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">4.</span>
                <span>Loan Term (15-Year vs 30-Year)</span>
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                15-year mortgages have rates 0.5-0.75% lower than 30-year loans because the lender
                gets repaid faster (less risk). But the monthly payment is much higher.
              </p>
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Example ($300K loan at 6.0% 30-year vs 5.25% 15-year):</strong><br />
                30-year: $1,799/month, $347,500 total interest<br />
                15-year: $2,406/month, $133,000 total interest<br />
                Savings: $214,500 in interest, but $607/month higher payment
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">5.</span>
                <span>Loan Type and Property</span>
              </h3>
              <p className="text-gray-700 text-sm">
                Conventional loans (Fannie/Freddie) have the best rates. FHA and VA loans have
                different rate structures. Jumbo loans (above $766,550 in 2026) often have higher
                rates. Investment properties and condos get 0.5-1% rate premiums.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">6.</span>
                <span>Debt-to-Income Ratio (DTI)</span>
              </h3>
              <p className="text-gray-700 text-sm">
                Your monthly debt payments divided by gross income. Below 36% is ideal. Above 43%
                gets harder to qualify and may result in higher rates. Paying down debt before
                applying improves your rate.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Mortgage Points: Buying Down Your Rate
          </h2>
          <p className="text-gray-700 mb-4">
            You can pay <strong>discount points</strong> upfront to lower your rate. One point
            costs 1% of the loan amount and typically reduces your rate by 0.25%.
          </p>
          <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Example: $300,000 Loan</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Base rate:</strong> 6.5% = $1,896/month</li>
              <li><strong>Buy 1 point ($3,000):</strong> 6.25% = $1,847/month (save $49/month)</li>
              <li><strong>Buy 2 points ($6,000):</strong> 6.0% = $1,799/month (save $97/month)</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <strong>Break-even analysis:</strong> Buying 1 point for $3,000 to save $49/month breaks
            even in 61 months (5 years). If you plan to keep the mortgage longer than 5 years, points
            save money. If you refinance or move sooner, you lose money.
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When to Lock Your Rate
          </h2>
          <p className="text-gray-700 mb-4">
            Mortgage rates change daily. A <strong>rate lock</strong> guarantees your rate for
            30-60 days while your loan processes. Here is the strategy:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="font-bold text-green-700 mb-1">When to Lock</h3>
              <ul className="text-sm space-y-1">
                <li>You found a rate you are happy with</li>
                <li>Rates are rising or expected to rise</li>
                <li>You are within 30-45 days of closing</li>
                <li>Economic news suggests inflation/rate increases</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="font-bold text-blue-700 mb-1">When to Float (Not Lock)</h3>
              <ul className="text-sm space-y-1">
                <li>Rates are falling or expected to fall</li>
                <li>You have more than 60 days until closing</li>
                <li>Economic data suggests rate cuts ahead</li>
                <li>You are willing to gamble for a better rate</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-sm mt-4">
            Most buyers lock as soon as they go under contract. The risk of rates rising 0.25-0.5%
            outweighs the potential gain of rates dropping.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When to Refinance Your Mortgage
          </h2>
          <p className="text-gray-700 mb-4">
            Refinancing means replacing your current mortgage with a new one, usually to get a
            lower rate. The rule of thumb: refinance if you can drop your rate by 0.75-1% and
            plan to stay in the home long enough to recoup closing costs (typically 2-3% of loan).
          </p>
          <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Refinance Example</h3>
            <p className="text-sm text-gray-700 mb-2">
              Current mortgage: $300,000 at 7.0% = $1,996/month<br />
              Refinance to: $300,000 at 6.0% = $1,799/month<br />
              <strong>Savings: $197/month, $2,364/year</strong>
            </p>
            <p className="text-sm text-gray-700">
              Closing costs: $6,000 (2% of loan) / $197/month = break-even in 30 months.
              If you stay 3+ years, refinancing saves money.
            </p>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-sm text-indigo-900">
            <strong>Tip:</strong> Use the <Link href="/mortgage-calculator" className="text-indigo-700 hover:underline font-medium">mortgage calculator</Link> to
            compare your current payment vs refinance payment. Use the <Link href="/loan-calculator" className="text-indigo-700 hover:underline font-medium">loan calculator</Link> to
            calculate break-even on closing costs.
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Get the Best Mortgage Rate
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2">Before You Shop</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Improve credit score</strong> - Pay down credit cards, fix errors, wait 6-12 months if under 700</li>
                <li><strong>Save 20% down</strong> - Avoids PMI and gets best rates</li>
                <li><strong>Lower DTI</strong> - Pay off car loans, student loans, credit cards before applying</li>
                <li><strong>Stable income</strong> - 2+ years at current job helps</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-2">While Shopping</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Get 3-5 quotes</strong> - Rates vary 0.25-0.5% between lenders</li>
                <li><strong>Shop within 14 days</strong> - Multiple applications count as one credit inquiry</li>
                <li><strong>Compare APR, not just rate</strong> - APR includes fees and closing costs</li>
                <li><strong>Negotiate</strong> - Use competing offers as leverage</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 rounded-2xl p-6 text-center mb-10">
          <h2 className="text-xl font-bold text-white mb-3">Try These Calculators</h2>
          <p className="text-gray-400 mb-4">See how rates affect your mortgage payment and total cost.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/mortgage-calculator" className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">Mortgage Calculator</Link>
            <Link href="/loan-calculator" className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors">Loan Calculator</Link>
          </div>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            Calculate Your Mortgage Payment
          </h2>
          <p className="text-gray-700 mb-4">
            Enter your loan amount, rate, and term to see your monthly payment and total interest.
          </p>
          <Link
            href="/mortgage-calculator"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
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
            headline: "Understanding Mortgage Rates: How They Work (2026 Guide)",
            description:
              "Learn how mortgage rates work, what determines your rate, fixed vs adjustable mortgages, how 1% affects your payment, when to lock, and refinancing strategies.",
            url: "https://cashcalcs.com/guides/understanding-mortgage-rates",
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
              { "@type": "ListItem", position: 3, name: "Understanding Mortgage Rates" },
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
                name: "What is a good mortgage rate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A good mortgage rate depends on current market conditions. As of 2026, rates between 6.0-7.0% for a 30-year fixed mortgage are typical. Your personal 'good rate' depends on your credit score (760+ gets best rates), down payment (20%+ is ideal), and loan type. Compare offers from 3-5 lenders and aim for 0.25-0.5% below the national average for your credit tier."
                }
              },
              {
                "@type": "Question",
                name: "Should I choose a fixed or adjustable rate mortgage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Choose fixed-rate if you plan to stay in the home 7+ years, value payment stability, or believe rates will rise. Fixed rates lock your payment for the life of the loan. Choose adjustable-rate (ARM) if you plan to move or refinance within 5-7 years, want a lower initial payment, or expect rates to fall. ARMs start 0.5-1% lower but can increase after the fixed period ends."
                }
              },
              {
                "@type": "Question",
                name: "How much does 1% change in mortgage rate affect my payment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On a $300,000 30-year mortgage, a 1% rate increase raises your monthly payment by approximately $180 and adds $65,000 in total interest over the loan life. For example: 6.0% costs $1,799/month and $347,500 interest, while 7.0% costs $1,996/month and $418,500 interest. Even 0.25% differences ($45/month) add up to $16,000 over 30 years."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
