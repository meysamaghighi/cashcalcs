import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate Your Debt-to-Income Ratio (DTI) | CashCalcs",
  description:
    "Step-by-step guide to calculating your debt-to-income ratio. Learn what lenders look for, how DTI affects mortgage approval, and proven strategies to lower your ratio.",
  keywords: [
    "debt to income ratio",
    "DTI ratio",
    "how to calculate debt to income ratio",
    "debt to income ratio mortgage",
    "good debt to income ratio",
    "front end DTI",
    "back end DTI",
    "lower debt to income ratio",
  ],
  openGraph: {
    title: "How to Calculate Your Debt-to-Income Ratio (DTI)",
    description:
      "What is a good DTI ratio? How does it affect mortgage approval? Learn the formula, see examples, and discover strategies to lower your ratio.",
    type: "article",
  },
  alternates: {
    canonical: "/guides/debt-to-income-ratio",
  },
};

export default function DebtToIncomeRatioGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Financial Guides</Link>
          {" > "}
          <span className="text-gray-900">Debt-to-Income Ratio</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How to Calculate Your Debt-to-Income Ratio
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Your debt-to-income ratio (DTI) is one of the most important numbers in
          personal finance. Lenders use it to decide if you qualify for a mortgage,
          auto loan, or credit. Here is what it means and how to calculate yours.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              What Is Debt-to-Income Ratio?
            </h2>
            <p className="text-gray-700 mb-4">
              Debt-to-income ratio (DTI) measures how much of your gross monthly
              income goes toward debt payments. It is expressed as a percentage.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-2">DTI Formula:</h3>
              <p className="text-gray-700 mb-3 text-center text-lg">
                <strong>DTI = (Total Monthly Debt Payments / Gross Monthly Income) × 100</strong>
              </p>
              <p className="text-sm text-gray-700">
                <strong>Total Monthly Debt Payments</strong> includes: mortgage/rent,
                car loans, student loans, credit cards, personal loans, child support,
                alimony.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Gross Monthly Income</strong> is your income <em>before</em> taxes
                and deductions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How to Calculate Your DTI: Step-by-Step
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-2">Step 1: Calculate Gross Monthly Income</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Add up all income sources <em>before</em> taxes and deductions:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                  <li>Salary/wages (annual salary ÷ 12)</li>
                  <li>Side hustle income</li>
                  <li>Rental income</li>
                  <li>Investment income (dividends, interest)</li>
                  <li>Child support/alimony received</li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  <strong>Example:</strong> $75,000 annual salary = $6,250/month gross income
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-2">Step 2: Add Up Monthly Debt Payments</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Sum all recurring debt obligations:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                  <li>Mortgage or rent payment</li>
                  <li>Car loan payments</li>
                  <li>Student loan payments</li>
                  <li>Credit card minimum payments</li>
                  <li>Personal loan payments</li>
                  <li>Child support/alimony paid</li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  <strong>Example:</strong> $1,500 mortgage + $350 car loan + $200 student loan + $100 credit card minimum = $2,150 total debt payments
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-2">Step 3: Divide and Multiply by 100</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>DTI = ($2,150 / $6,250) × 100 = 34.4%</strong>
                </p>
                <p className="text-sm text-gray-700">
                  This borrower spends 34.4% of gross income on debt payments. This
                  is a good DTI ratio (see thresholds below).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Front-End vs Back-End DTI
            </h2>
            <p className="text-gray-700 mb-4">
              Lenders look at two types of DTI ratios when evaluating mortgage applications:
            </p>
            <div className="space-y-3">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-bold text-emerald-800 mb-2">Front-End DTI (Housing Ratio)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Percentage of gross income that goes toward <em>housing costs only</em>:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                  <li>Mortgage principal + interest</li>
                  <li>Property taxes</li>
                  <li>Homeowners insurance</li>
                  <li>HOA fees (if applicable)</li>
                  <li>Private mortgage insurance (PMI, if applicable)</li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  <strong>Formula:</strong> (Monthly Housing Costs / Gross Monthly Income) × 100
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Example:</strong> ($1,800 housing costs / $6,250 income) × 100 = 28.8%
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 mb-2">Back-End DTI (Total Debt Ratio)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Percentage of gross income that goes toward <em>all debt payments</em>
                  (housing costs + car loans + student loans + credit cards + other debt).
                </p>
                <p className="text-sm text-gray-700 mt-3">
                  <strong>Formula:</strong> (Total Monthly Debt Payments / Gross Monthly Income) × 100
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Example:</strong> ($2,150 total debt / $6,250 income) × 100 = 34.4%
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Which matters more?</strong> Lenders care most about back-end DTI,
              but they check both. When people say "DTI ratio," they usually mean back-end DTI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              What Is a Good Debt-to-Income Ratio?
            </h2>
            <p className="text-gray-700 mb-4">
              Lenders use DTI to assess your ability to repay debt. Here are the thresholds:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">DTI Ratio</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Rating</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">0-36%</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-bold">Excellent</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      You are in great financial shape. Lenders see you as low-risk.
                      Likely to qualify for best interest rates.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">37-43%</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-bold">Acceptable</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      You can likely still qualify for a mortgage, but rates may be higher.
                      Manageable debt load with good credit.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">44-49%</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">Risky</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Hard to qualify for most loans. If approved, expect high interest rates.
                      Difficult to manage unexpected expenses.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">50%+</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">High Risk</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Very difficult to get approved for new credit. More than half your income
                      goes to debt. Focus on debt reduction immediately.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>FHA loans</strong> allow DTI up to 50% with compensating factors (high
              credit score, large down payment). <strong>Conventional loans</strong> prefer
              DTI below 43%. <strong>Most lenders</strong> use 36% as the "comfortable" threshold.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How DTI Affects Mortgage Approval
            </h2>
            <p className="text-gray-700 mb-4">
              Your DTI ratio directly impacts your ability to buy a home:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "DTI determines how much you can borrow",
                  desc: "Lenders calculate the maximum mortgage payment you can afford based on your income and existing debts. Lower DTI = higher loan approval amount.",
                },
                {
                  title: "DTI affects interest rates",
                  desc: "DTI below 36% often qualifies for the best rates. DTI above 43% may result in higher rates or require manual underwriting.",
                },
                {
                  title: "DTI impacts loan type eligibility",
                  desc: "Conventional loans (Fannie Mae/Freddie Mac) cap DTI at 43-50%. FHA loans allow up to 50% with strong credit. VA loans are more flexible but still review DTI.",
                },
                {
                  title: "DTI can override high credit score",
                  desc: "Even with 800+ credit, DTI above 50% will likely result in denial. Lenders worry about your ability to handle monthly payments.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-4">
              Use our{" "}
              <Link href="/mortgage-calculator" className="text-sky-600 font-medium hover:underline">
                mortgage calculator
              </Link>{" "}
              to estimate monthly payments and see how they affect your DTI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              What Does NOT Count Toward DTI?
            </h2>
            <p className="text-gray-700 mb-4">
              Not all monthly expenses are included in DTI calculations:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Expenses that DO NOT count:</h3>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>Utilities (electricity, gas, water, internet)</li>
                <li>Groceries and food</li>
                <li>Health insurance premiums</li>
                <li>Car insurance</li>
                <li>Cell phone bills</li>
                <li>Subscriptions (Netflix, Spotify, gym memberships)</li>
                <li>Daycare or childcare costs</li>
                <li>Medical bills (unless in collections and on credit report)</li>
              </ul>
              <p className="text-sm text-gray-700 mt-3">
                <strong>Why?</strong> DTI only counts <em>debt obligations</em> that appear
                on your credit report or are legally binding (like child support).
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              This means you can have $2,000/month in living expenses that do not affect
              your DTI at all. However, lenders still want to see you can afford both
              your debt payments <em>and</em> living expenses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How to Lower Your Debt-to-Income Ratio
            </h2>
            <p className="text-gray-700 mb-4">
              There are two ways to lower DTI: reduce debt payments or increase income.
              Here are proven strategies:
            </p>
            <div className="space-y-3">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-bold text-emerald-800 mb-2">Strategy 1: Pay Down Debt</h3>
                <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                  <li><strong>Pay off small balances first:</strong> Eliminate credit cards or loans with the lowest balances. This removes entire monthly payments from your DTI.</li>
                  <li><strong>Target high-payment debts:</strong> Paying off a $500/month car loan has more DTI impact than paying down a $5,000 credit card with $100 minimum payment.</li>
                  <li><strong>Make extra payments:</strong> Even reducing balances by 10-20% can lower minimum payments enough to improve DTI.</li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  <strong>Example:</strong> Paying off a $300/month car loan drops DTI from 40% to 35% (assuming $6,000 monthly income).
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 mb-2">Strategy 2: Increase Your Income</h3>
                <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                  <li><strong>Get a raise:</strong> A $6,000 annual raise ($500/month) lowers DTI by ~6% (if monthly debt is $2,000).</li>
                  <li><strong>Start a side hustle:</strong> An extra $500/month drops DTI from 40% to 36% (assuming $5,000 base income and $2,000 debt).</li>
                  <li><strong>Include all income:</strong> Bonuses, commissions, rental income, and freelance work count if documented (usually need 2 years of tax returns).</li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-amber-800 mb-2">Strategy 3: Refinance High-Payment Debt</h3>
                <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                  <li><strong>Extend loan terms:</strong> Refinancing a 3-year car loan to 5 years lowers monthly payments (but increases total interest).</li>
                  <li><strong>Consolidate debt:</strong> A personal loan at 10% APR can lower payments compared to credit cards at 24% APR.</li>
                  <li><strong>Student loan income-driven repayment:</strong> If you have federal student loans, income-driven plans cap payments at 10-15% of discretionary income.</li>
                </ul>
                <p className="text-sm text-red-600 mt-3">
                  <strong>Warning:</strong> Refinancing to lower payments often costs more
                  in interest over time. Only use if you need to qualify for a mortgage soon.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <h3 className="font-bold text-purple-800 mb-2">Strategy 4: Delay Large Purchases</h3>
                <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                  <li><strong>Do not buy a car before applying for a mortgage:</strong> A $400/month car payment can disqualify you from a $300,000 home loan.</li>
                  <li><strong>Avoid new credit cards:</strong> Even if you pay in full, lenders count the minimum payment in DTI calculations.</li>
                  <li><strong>Wait to finance furniture or appliances:</strong> Store financing with $0 payments still shows as debt and affects DTI.</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Use our{" "}
              <Link href="/debt-payoff" className="text-blue-600 font-medium hover:underline">
                debt payoff calculator
              </Link>{" "}
              to see how extra payments affect your timeline and monthly obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              DTI vs Credit Score: What Is the Difference?
            </h2>
            <p className="text-gray-700 mb-4">
              DTI and credit score are both critical, but they measure different things:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Debt-to-Income Ratio</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Credit Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">What it measures</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Your ability to afford monthly payments
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Your history of repaying debt on time
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Formula</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      (Monthly Debt / Monthly Income) × 100
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Payment history (35%), utilization (30%), age (15%), mix (10%), inquiries (10%)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Shown on credit report?</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      No -- lenders calculate it
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Yes -- appears on all credit reports
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">How to improve</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Pay off debt or increase income
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Pay on time, lower utilization, keep old accounts open
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Impact on loans</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Determines loan approval and max amount
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Determines interest rate and loan terms
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Both matter.</strong> You need good credit (700+) <em>and</em> low DTI
              (below 43%) to qualify for the best mortgage rates. High credit with high DTI
              = denial. Low DTI with bad credit = high interest rates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Real-World DTI Examples
            </h2>
            <p className="text-gray-700 mb-4">
              Here are three scenarios showing how DTI affects mortgage qualification:
            </p>
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-bold text-emerald-800 mb-2">Example 1: Low DTI (Strong Approval)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Annual income:</strong> $90,000 ($7,500/month)</li>
                  <li><strong>Monthly debts:</strong> $300 car loan + $150 student loan + $50 credit card = $500</li>
                  <li><strong>DTI:</strong> ($500 / $7,500) × 100 = 6.7%</li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  <strong>Verdict:</strong> Excellent DTI. Can qualify for a $2,000/month mortgage
                  payment and still stay under 36% DTI. Likely approved for best rates.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-amber-800 mb-2">Example 2: Moderate DTI (Borderline)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Annual income:</strong> $60,000 ($5,000/month)</li>
                  <li><strong>Monthly debts:</strong> $400 car loan + $350 student loan + $200 credit cards = $950</li>
                  <li><strong>Proposed mortgage:</strong> $1,200/month</li>
                  <li><strong>DTI with mortgage:</strong> ($950 + $1,200) / $5,000 × 100 = 43%</li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  <strong>Verdict:</strong> Right at the conventional loan limit. May qualify
                  with strong credit (720+) and 20% down payment. FHA loan more likely.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-800 mb-2">Example 3: High DTI (Denial Risk)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Annual income:</strong> $50,000 ($4,167/month)</li>
                  <li><strong>Monthly debts:</strong> $500 car loan + $400 student loan + $300 credit cards = $1,200</li>
                  <li><strong>Proposed mortgage:</strong> $1,400/month</li>
                  <li><strong>DTI with mortgage:</strong> ($1,200 + $1,400) / $4,167 × 100 = 62.4%</li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  <strong>Verdict:</strong> DTI too high. Likely denied by all lenders. Must
                  pay off $600+/month in existing debt or increase income before qualifying.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Calculate Your Affordable Mortgage</h2>
            <p className="text-gray-400 mb-4">See how your income, debts, and down payment affect how much house you can afford.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/mortgage-calculator" className="px-5 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition-colors">Mortgage Calculator</Link>
              <Link href="/budget" className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors">Budget Calculator</Link>
              <Link href="/debt-payoff" className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">Debt Payoff Calculator</Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/loan-calculator"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors text-lg"
          >
            Compare Loan Options
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Calculate Your Debt-to-Income Ratio",
            description: "Step-by-step guide to calculating DTI ratio, understanding what lenders look for, and strategies to lower your ratio for mortgage approval.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/debt-to-income-ratio",
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
              { "@type": "ListItem", position: 3, name: "Debt-to-Income Ratio" },
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
                name: "What is a good debt-to-income ratio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A DTI ratio below 36% is considered excellent and qualifies you for the best interest rates. 37-43% is acceptable for most loans. 44-49% is risky and may result in higher rates or denial. Above 50% is high risk and very difficult to get approved for new credit. Lenders prefer DTI under 43% for conventional mortgages and under 50% for FHA loans."
                }
              },
              {
                "@type": "Question",
                name: "How does DTI affect my mortgage application?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "DTI directly determines how much you can borrow. Lenders calculate the maximum mortgage payment you can afford based on your income and existing debts. DTI below 36% qualifies for best rates. DTI above 43% may require manual underwriting or result in denial. Even with excellent credit (800+), DTI above 50% will likely result in denial because lenders worry about your ability to handle monthly payments."
                }
              },
              {
                "@type": "Question",
                name: "How can I lower my debt-to-income ratio quickly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The fastest ways to lower DTI are: (1) Pay off small balances completely to remove entire monthly payments, (2) Increase income with a raise, side hustle, or second job, (3) Refinance high-payment debt to extend terms and lower monthly payments, (4) Delay large purchases like cars until after mortgage approval. Paying off a $300/month car loan can drop DTI from 40% to 35% instantly. An extra $500/month in income can lower DTI by 6-8%."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
