import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Create a Budget: Step-by-Step Guide for Beginners | CashCalcs",
  description:
    "Learn how to create a personal budget from scratch. Step-by-step guide covering budget methods (50/30/20, zero-based, envelope), tracking expenses, setting categories, and adjusting monthly.",
  keywords: [
    "how to create a budget",
    "budgeting for beginners",
    "personal budget",
    "monthly budget",
    "budget template",
    "zero based budget",
    "how to budget money",
    "budgeting tips",
  ],
  openGraph: {
    title: "How to Create a Budget: Step-by-Step Guide for Beginners",
    description:
      "Learn how to create a personal budget from scratch. Step-by-step guide covering budget methods, tracking expenses, and building a system that works.",
    type: "article",
  },
  alternates: {
    canonical: "/guides/how-to-create-a-budget",
  },
};

export default function HowToCreateABudget() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Financial Guides</Link>
          {" > "}
          <span className="text-gray-900">How to Create a Budget</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How to Create a Budget: Step-by-Step Guide for Beginners
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Creating a budget is the foundation of financial health. It is not about
          restriction -- it is about awareness and control. Here is how to build a
          budget that actually works, step by step.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Why You Need a Budget
            </h2>
            <p className="text-gray-700 mb-4">
              A budget is a spending plan that ensures your money goes where you
              want it to go. Without one:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>You overspend without realizing it.</strong> Small leaks
                (daily coffee, impulse purchases) add up to hundreds per month.
              </li>
              <li>
                <strong>You cannot save consistently.</strong> Saving "whatever
                is left" usually means saving nothing.
              </li>
              <li>
                <strong>You live paycheck to paycheck.</strong> Unexpected
                expenses (car repair, medical bill) become crises.
              </li>
              <li>
                <strong>You feel stressed about money.</strong> Not knowing
                where your money goes creates constant anxiety.
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              A budget fixes all of this. Studies show people who budget save 2-3x
              more than those who do not, and report lower financial stress.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 1: Calculate Your After-Tax Income
            </h2>
            <p className="text-gray-700 mb-4">
              Start with your monthly take-home pay (after taxes, 401k, insurance).
              This is the money you actually have to work with.
            </p>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-2">How to calculate:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Salaried: Annual salary / 12 = gross monthly income. Subtract taxes, deductions.</li>
                <li>Hourly: Hours per week x hourly rate x 4.33 = gross monthly. Subtract taxes.</li>
                <li>Irregular income (freelance, commission): Average last 3-6 months of take-home pay.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                Use our{" "}
                <Link href="/salary-calculator" className="text-purple-600 font-medium hover:underline">
                  salary calculator
                </Link>{" "}
                to see your exact after-tax monthly income by state.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 2: Track Your Current Spending
            </h2>
            <p className="text-gray-700 mb-4">
              Before you can budget, you need to know where your money currently
              goes. Track every dollar for 30 days:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Method 1: Banking app",
                  desc: "Most banks categorize transactions automatically. Review last month's spending by category (groceries, dining, gas, etc.).",
                },
                {
                  title: "Method 2: Budgeting app",
                  desc: "Apps like Mint, YNAB (You Need A Budget), or EveryDollar sync with your accounts and auto-categorize. Free and painless.",
                },
                {
                  title: "Method 3: Spreadsheet",
                  desc: "Old-school but effective. Create columns: Date, Category, Amount. Log every transaction for 30 days. Painful but eye-opening.",
                },
                {
                  title: "What you'll discover:",
                  desc: "Most people are shocked. $200/month on dining out. $80 on subscriptions they forgot about. $150 on impulse Amazon purchases. Awareness is the first step to change.",
                },
              ].map((tip, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-gray-700 text-sm">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 3: Choose Your Budgeting Method
            </h2>
            <p className="text-gray-700 mb-4">
              There are several popular budgeting frameworks. Pick the one that
              feels most natural to you:
            </p>
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-bold text-emerald-800 mb-2">50/30/20 Rule (Best for Beginners)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Allocate your after-tax income: <strong>50% needs, 30% wants, 20% savings/debt.</strong>
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                  <li><strong>Needs (50%):</strong> Rent, utilities, groceries, insurance, minimum debt payments, transportation.</li>
                  <li><strong>Wants (30%):</strong> Dining out, entertainment, hobbies, streaming services, travel.</li>
                  <li><strong>Savings/Debt (20%):</strong> Emergency fund, retirement, extra debt payments, investments.</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  Use our{" "}
                  <Link href="/budget" className="text-emerald-600 font-medium hover:underline">
                    50/30/20 budget calculator
                  </Link>{" "}
                  to see your exact allocations based on your income.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 mb-2">Zero-Based Budget (Most Control)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Every dollar gets a job. Income minus expenses equals zero.
                </p>
                <p className="text-sm text-gray-700">
                  You allocate every dollar to a specific category before the month
                  starts. $3,000 income? Assign $1,200 rent, $500 groceries, $200
                  savings, etc. until you reach $0 remaining. Nothing is unplanned.
                  Popular with YNAB users.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-amber-800 mb-2">Envelope Method (Cash-Based)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Withdraw cash and divide it into envelopes for each category.
                </p>
                <p className="text-sm text-gray-700">
                  $400 for groceries, $200 for dining out, $100 for entertainment.
                  When an envelope is empty, you stop spending in that category.
                  Works great for variable expenses. Digital version: use separate
                  bank accounts or prepaid debit cards.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 4: Set Up Your Categories
            </h2>
            <p className="text-gray-700 mb-4">
              Break your spending into categories. Here is a starter list:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Category</th>
                    <th className="text-left py-3 text-gray-900">Examples</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2 font-medium">Housing</td>
                    <td className="py-2">Rent/mortgage, property tax, HOA, renter's insurance</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Utilities</td>
                    <td className="py-2">Electric, gas, water, trash, internet, phone</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Food</td>
                    <td className="py-2">Groceries, dining out, coffee shops, food delivery</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Transportation</td>
                    <td className="py-2">Car payment, gas, insurance, maintenance, public transit</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Insurance</td>
                    <td className="py-2">Health, life, disability, car, home/renters</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Debt Payments</td>
                    <td className="py-2">Credit cards, student loans, personal loans</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Savings</td>
                    <td className="py-2">Emergency fund, retirement (401k, IRA), investments</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Entertainment</td>
                    <td className="py-2">Streaming services, hobbies, books, gym membership</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Personal Care</td>
                    <td className="py-2">Haircuts, toiletries, clothing, dry cleaning</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Start with 8-12 categories. Too many gets overwhelming. Too few loses detail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 5: Assign Dollar Amounts
            </h2>
            <p className="text-gray-700 mb-4">
              Using your tracking data from Step 2, assign a monthly spending limit
              to each category. Be realistic -- your first budget is a draft.
            </p>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-3">Example: $4,000/month after-tax income</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <div className="flex justify-between"><span>Rent</span><strong>$1,200</strong></div>
                <div className="flex justify-between"><span>Utilities</span><strong>$150</strong></div>
                <div className="flex justify-between"><span>Groceries</span><strong>$400</strong></div>
                <div className="flex justify-between"><span>Dining Out</span><strong>$200</strong></div>
                <div className="flex justify-between"><span>Transportation (car, gas, insurance)</span><strong>$450</strong></div>
                <div className="flex justify-between"><span>Health Insurance</span><strong>$200</strong></div>
                <div className="flex justify-between"><span>Debt Payments</span><strong>$300</strong></div>
                <div className="flex justify-between"><span>Savings & Retirement</span><strong>$500</strong></div>
                <div className="flex justify-between"><span>Entertainment</span><strong>$300</strong></div>
                <div className="flex justify-between"><span>Personal Care</span><strong>$100</strong></div>
                <div className="flex justify-between"><span>Miscellaneous</span><strong>$200</strong></div>
                <div className="flex justify-between border-t-2 border-gray-300 pt-2 mt-2 font-bold"><span>Total</span><span>$4,000</span></div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 6: Track and Adjust Monthly
            </h2>
            <p className="text-gray-700 mb-4">
              Your first budget will not be perfect. Track your actual spending
              each month and adjust:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Week 1:</strong> Review spending mid-month. Are you on
                track? Overspending in dining? Cut back the second half.
              </li>
              <li>
                <strong>Week 4:</strong> End-of-month review. Compare budget vs
                actual. Where did you overspend? Where did you save?
              </li>
              <li>
                <strong>Adjust next month:</strong> If you consistently overspend
                in groceries, increase that category and decrease elsewhere. Iterate.
              </li>
              <li>
                <strong>Be flexible:</strong> Some months have irregular expenses
                (car registration, holiday gifts). Budget for these as "sinking funds."
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Common Budget Mistakes to Avoid
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: "Forgetting irregular expenses",
                  desc: "Car insurance (semi-annual), Amazon Prime (annual), holiday gifts, car maintenance. Budget 1/12th of annual costs each month.",
                },
                {
                  title: "Being too restrictive",
                  desc: "A budget with $0 for fun will fail. Build in money for dining out, hobbies, entertainment. Sustainability beats perfection.",
                },
                {
                  title: "Not tracking daily",
                  desc: "Waiting until month-end to check your budget is too late. Check your spending weekly (or use auto-tracking apps).",
                },
                {
                  title: "Ignoring small subscriptions",
                  desc: "Spotify, Netflix, gym, cloud storage, news subscriptions. $10/month each adds up to $600/year. Audit quarterly.",
                  link: "/subscription-tracker",
                  linkText: "Use Subscription Tracker",
                },
                {
                  title: "Giving up after one bad month",
                  desc: "You will overspend sometimes. That is normal. Adjust and keep going. Budgeting is a skill that improves with practice.",
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

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Tools to Make Budgeting Easier
            </h2>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Budgeting apps:</strong> Mint (free, auto-syncs accounts),
                YNAB ($99/year, zero-based method), EveryDollar (free or $130/year).
              </li>
              <li>
                <strong>Spreadsheet templates:</strong> Google Sheets or Excel.
                Free templates available. Customize to your needs.
              </li>
              <li>
                <strong>CashCalcs calculators:</strong> Use our{" "}
                <Link href="/budget" className="text-purple-600 font-medium hover:underline">
                  50/30/20 budget calculator
                </Link>{" "}
                to see recommended allocations based on your income.
              </li>
              <li>
                <strong>Automatic alerts:</strong> Set up low-balance alerts with
                your bank ($500 remaining, etc.). Prevents overspending.
              </li>
            </ul>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Start Your Budget Today</h2>
            <p className="text-gray-400 mb-4">Use our free calculator to create a 50/30/20 budget in 2 minutes.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/budget" className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors">Budget Calculator</Link>
              <Link href="/subscription-tracker" className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-colors">Track Subscriptions</Link>
              <Link href="/savings-goal" className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors">Set Savings Goal</Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/budget"
            className="inline-block px-8 py-4 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-colors text-lg"
          >
            Calculate Your Budget
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Create a Budget: Step-by-Step Guide for Beginners",
            description: "Learn how to create a personal budget from scratch. Step-by-step guide covering budget methods, tracking expenses, and building a system that works.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/how-to-create-a-budget",
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
              { "@type": "ListItem", position: 3, name: "How to Create a Budget" },
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
                name: "How do I create a budget for the first time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To create your first budget: 1) Calculate your monthly after-tax income, 2) Track all spending for 30 days to see where money goes, 3) Choose a method (50/30/20 rule is simplest for beginners), 4) Set up 8-12 spending categories, 5) Assign dollar limits to each category, 6) Track actual spending and adjust monthly. Use a budgeting app like Mint or YNAB, or a simple spreadsheet."
                }
              },
              {
                "@type": "Question",
                name: "What is the 50/30/20 budget rule?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The 50/30/20 rule divides after-tax income into three buckets: 50% for needs (rent, utilities, groceries, insurance), 30% for wants (dining out, entertainment, hobbies), and 20% for savings and debt payoff. It is the simplest budgeting framework for beginners and provides clear guidelines without complex tracking."
                }
              },
              {
                "@type": "Question",
                name: "What is a zero-based budget?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A zero-based budget means every dollar of income is assigned to a specific category before the month begins, so income minus expenses equals zero. If you earn $3,000, you allocate every dollar to rent, groceries, savings, entertainment, etc. until you reach $0 remaining. This method provides maximum control and ensures no money is wasted."
                }
              },
              {
                "@type": "Question",
                name: "How many budget categories should I have?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start with 8-12 budget categories. Common categories include housing, utilities, food, transportation, insurance, debt payments, savings, entertainment, and personal care. Too many categories (20+) becomes overwhelming to track. Too few (3-5) loses useful detail. Adjust based on what works for you."
                }
              },
              {
                "@type": "Question",
                name: "How often should I review my budget?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Review your budget weekly (quick check: are you on track?) and monthly (full review: compare budget vs actual spending, adjust next month's allocations). Use a budgeting app for automatic tracking, or manually log expenses daily. Mid-month check-ins help catch overspending early before it derails your whole month."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
