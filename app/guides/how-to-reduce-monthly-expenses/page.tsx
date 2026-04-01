import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Reduce Monthly Expenses: Cut Bills by $500+ (2026) | CashCalcs",
  description:
    "Practical strategies to cut your monthly bills by $500+. Audit spending, negotiate bills, switch plans, and automate savings across housing, food, and subscriptions.",
  keywords: [
    "how to reduce monthly expenses",
    "cut monthly bills",
    "lower monthly expenses",
    "reduce spending",
    "save on monthly bills",
    "lower bills",
    "cut expenses fast",
    "reduce household expenses",
  ],
  openGraph: {
    title: "How to Reduce Monthly Expenses: Cut Bills by $500+ (2026) | CashCalcs",
    description:
      "Practical strategies to cut your monthly bills by $500+. Audit spending, negotiate bills, switch plans, and automate savings across housing, food, and subscriptions.",
    type: "article",
  },
};

export default function HowToReduceMonthlyExpenses() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Guides</Link>
          {" > "}
          <span className="text-gray-900">How to Reduce Monthly Expenses</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How to Reduce Monthly Expenses
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          The average household can cut monthly expenses by $500-1,000 without
          sacrificing quality of life. Here is a practical, room-by-room guide
          to lowering your bills and keeping more money every month.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Step 1: Audit Your Current Spending
          </h2>
          <p className="text-gray-700 mb-4">
            You can not reduce what you do not track. Start by reviewing your
            last 3 months of bank and credit card statements. Categorize every
            expense into these buckets:
          </p>
          <div className="bg-white rounded-xl shadow-sm p-5">
            <ul className="text-gray-700 space-y-2">
              <li><strong>Housing:</strong> rent/mortgage, utilities, internet, phone</li>
              <li><strong>Transportation:</strong> car payment, insurance, gas, maintenance, transit</li>
              <li><strong>Food:</strong> groceries, dining out, delivery, coffee</li>
              <li><strong>Insurance:</strong> health, auto, home, life</li>
              <li><strong>Subscriptions:</strong> streaming, gym, apps, memberships</li>
              <li><strong>Debt:</strong> credit cards, student loans, personal loans</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
            <p className="text-green-800 text-sm">
              Use our <Link href="/budget" className="font-bold underline">Budget Calculator</Link> to
              track and categorize your spending automatically using the 50/30/20 rule.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Housing: Your Biggest Opportunity
          </h2>
          <p className="text-gray-700 mb-4">
            Housing is typically 30-40% of your budget. Even a 5-10% reduction
            can save hundreds per month.
          </p>
          <div className="space-y-3">
            {[
              {
                strategy: "Negotiate rent (for renters)",
                savings: "$50-200/month",
                how: "Contact your landlord 2-3 months before lease renewal. Offer to sign a longer lease, pay a few months upfront, or handle minor repairs yourself in exchange for 5-10% rent reduction."
              },
              {
                strategy: "Refinance mortgage (for owners)",
                savings: "$100-500/month",
                how: "If rates have dropped 0.5%+ since you bought, refinance. Use our mortgage calculator to compare your current payment with a refinanced loan at today's rates."
              },
              {
                strategy: "Get a roommate",
                savings: "$300-800/month",
                how: "Splitting rent, utilities, and internet can cut housing costs by 30-50%. Rent out a spare bedroom or move into a shared house."
              },
              {
                strategy: "Move to a lower-cost area",
                savings: "$200-1,000/month",
                how: "If remote work is an option, consider relocating to a city or neighborhood with 20-40% lower rent. Even moving 10-15 miles can make a difference."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{item.strategy}</h3>
                  <span className="text-emerald-700 font-bold text-sm">{item.savings}</span>
                </div>
                <p className="text-gray-700 text-sm">{item.how}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
            <p className="text-green-800 text-sm">
              Use our <Link href="/mortgage-calculator" className="font-bold underline">Mortgage Calculator</Link> to
              see how refinancing can lower your monthly payment.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Transportation: The Second Biggest Expense
          </h2>
          <p className="text-gray-700 mb-4">
            After housing, transportation is the next largest expense for most
            households. Here is how to cut it:
          </p>
          <div className="space-y-3">
            {[
              {
                strategy: "Sell your car and go car-free",
                savings: "$400-800/month",
                how: "If you live in a walkable city with good transit, sell your car. Between payments, insurance, gas, and maintenance, the average car costs $700/month. Use rideshare/transit instead."
              },
              {
                strategy: "Trade down to a cheaper car",
                savings: "$200-500/month",
                how: "Sell your financed car and buy a reliable used car (Toyota, Honda) for $5,000-10,000 cash. Eliminate the car payment and lower insurance costs."
              },
              {
                strategy: "Shop for cheaper car insurance",
                savings: "$30-100/month",
                how: "Get quotes from 3-5 insurers every year. Increase your deductible from $500 to $1,000. Drop collision/comprehensive on cars worth under $3,000."
              },
              {
                strategy: "Bike or walk for short trips",
                savings: "$30-80/month",
                how: "Use a bike for trips under 3 miles. Saves gas, reduces car wear, and improves fitness. Even replacing 30% of car trips can cut gas bills significantly."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{item.strategy}</h3>
                  <span className="text-emerald-700 font-bold text-sm">{item.savings}</span>
                </div>
                <p className="text-gray-700 text-sm">{item.how}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
            <p className="text-green-800 text-sm">
              Use our <Link href="/car-calculator" className="font-bold underline">Car Affordability Calculator</Link> to
              see if your current car is taking too big a bite out of your budget.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Food: Easy Wins Without Sacrifice
          </h2>
          <p className="text-gray-700 mb-4">
            The average household spends $600-1,000/month on food. Cutting this
            by 30-50% is possible without eating ramen every day.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-emerald-700 mb-2">High-Impact Changes</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Pack lunch 4 days/week</strong> — save $200/month vs buying lunch ($12/day)</li>
                <li><strong>Meal prep on Sundays</strong> — batch cook 5-7 dinners, saves time and money</li>
                <li><strong>Cut food delivery to once/week max</strong> — delivery fees + tips add 30-50% to food costs</li>
                <li><strong>Shop with a list (no impulse buys)</strong> — reduces grocery spending by 15-25%</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-blue-700 mb-2">Grocery Hacks</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Buy store brands</strong> — same quality, 20-40% cheaper</li>
                <li><strong>Shop at Aldi or Costco</strong> — 30% cheaper than traditional grocers</li>
                <li><strong>Plan meals around sales</strong> — buy chicken at $1.99/lb, not $5.99/lb</li>
                <li><strong>Freeze bulk purchases</strong> — buy meat/bread on sale, freeze portions</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            <strong>Realistic savings:</strong> Cut dining out from 12x/month to 4x/month,
            meal prep 4 dinners/week, pack lunch 4 days/week. Total savings: <strong>$300-500/month</strong>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Subscriptions: The Hidden Budget Killer
          </h2>
          <p className="text-gray-700 mb-4">
            The average household has 5-12 active subscriptions costing $50-200/month.
            Many are forgotten or underused.
          </p>
          <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
            <h3 className="font-bold text-gray-900 mb-3">Audit Your Subscriptions</h3>
            <p className="text-gray-700 text-sm mb-3">
              Review your credit card statements for recurring charges. Cancel anything you:
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>1. Have not used in the last 30 days</li>
              <li>2. Can replace with a free alternative</li>
              <li>3. Pay for but share with others (ask them to split or cancel)</li>
              <li>4. Forgot you were paying for</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-xl p-4">
              <h3 className="font-bold text-emerald-800 mb-2">Keep (High Value)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>One streaming service ($15-20/month)</li>
                <li>Internet (essential, negotiate rate)</li>
                <li>Phone plan (switch to Mint Mobile or Visible for $15-25/month)</li>
                <li>Gym (if you go 3+ times/week)</li>
              </ul>
            </div>
            <div className="bg-rose-50 rounded-xl p-4">
              <h3 className="font-bold text-rose-800 mb-2">Cut or Downgrade</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Extra streaming services — rotate monthly instead</li>
                <li>Gym (if you go under 2x/week — use free YouTube workouts)</li>
                <li>Meal kit delivery — meal prep is 50% cheaper</li>
                <li>Cloud storage — use free Google Drive/OneDrive tier</li>
              </ul>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
            <p className="text-green-800 text-sm">
              Use our <Link href="/subscription-tracker" className="font-bold underline">Subscription Tracker</Link> to
              see exactly how much you spend on subscriptions and what to cancel.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Utilities: Small Changes, Big Savings
          </h2>
          <div className="space-y-3">
            {[
              { tip: "Lower thermostat by 2-3 degrees in winter, raise 2-3 in summer", savings: "$20-50/month" },
              { tip: "Use LED bulbs (90% less energy than incandescent)", savings: "$5-15/month" },
              { tip: "Unplug devices when not in use (phantom drain costs $10-20/month)", savings: "$10-20/month" },
              { tip: "Take shorter showers (5 minutes vs 15 minutes saves hot water)", savings: "$10-25/month" },
              { tip: "Negotiate internet/cable bill every year (threaten to cancel)", savings: "$20-60/month" },
              { tip: "Switch to budget billing (average out high/low months)", savings: "Better budgeting" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-4 flex justify-between items-center">
                <p className="text-gray-700 text-sm flex-1">{item.tip}</p>
                <span className="text-emerald-700 font-bold text-sm ml-4 whitespace-nowrap">{item.savings}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Insurance: Shop Around Every Year
          </h2>
          <p className="text-gray-700 mb-4">
            Most people overpay for insurance because they set it and forget it.
            Shopping around takes 30 minutes and can save $500-1,500/year.
          </p>
          <div className="space-y-3">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-2">Auto Insurance</h3>
              <p className="text-gray-700 text-sm mb-2">
                Get quotes from 3-5 insurers every year. Rates vary wildly between companies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Raise deductible from $500 to $1,000 (save 10-20%)</li>
                <li>Bundle auto + home for multi-policy discount (save 15-25%)</li>
                <li>Drop collision on cars worth under $3,000</li>
              </ul>
              <p className="text-emerald-700 font-bold text-sm mt-2">Potential savings: $30-100/month</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-2">Health Insurance</h3>
              <p className="text-gray-700 text-sm mb-2">
                Review your plan during open enrollment. A higher-deductible plan + HSA can
                save $100-300/month if you are healthy.
              </p>
              <p className="text-emerald-700 font-bold text-sm mt-2">Potential savings: $50-300/month</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-2">Homeowners/Renters Insurance</h3>
              <p className="text-gray-700 text-sm mb-2">
                Shop around, increase deductible, and remove coverage for items you no longer own.
              </p>
              <p className="text-emerald-700 font-bold text-sm mt-2">Potential savings: $10-50/month</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your Action Plan: Cut $500+/Month in 30 Days
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <ol className="list-decimal ml-5 text-gray-700 space-y-2">
              <li><strong>Week 1:</strong> Audit spending, cancel 3-5 unused subscriptions (save $50-150/month)</li>
              <li><strong>Week 2:</strong> Meal prep, pack lunch 4 days, cut dining out in half (save $200-400/month)</li>
              <li><strong>Week 3:</strong> Get 3 auto insurance quotes, negotiate internet bill (save $50-100/month)</li>
              <li><strong>Week 4:</strong> Implement utility savings (LED bulbs, lower thermostat, shorter showers) (save $30-80/month)</li>
            </ol>
            <p className="text-gray-700 font-bold mt-4">
              Total estimated savings: <span className="text-emerald-700">$330-730/month</span> ($4,000-8,700/year)
            </p>
          </div>
        </section>

        <section className="bg-gray-900 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track Your Progress</h2>
          <p className="text-gray-400 mb-4">Use our free calculators to see where your money goes and how much you can save.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/budget" className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors">Budget Calculator</Link>
            <Link href="/subscription-tracker" className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-colors">Subscription Tracker</Link>
            <Link href="/mortgage-calculator" className="px-5 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition-colors">Mortgage Calculator</Link>
          </div>
        </section>

        <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-emerald-800 mb-2">
            Put Your Savings to Work
          </h2>
          <p className="text-gray-700 mb-4">
            Once you free up $300-700/month, direct it toward debt payoff,
            emergency fund, or investing for the future.
          </p>
          <Link
            href="/savings-goal"
            className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Savings Goal Calculator
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Reduce Monthly Expenses: Cut Bills by $500+",
            description:
              "Practical strategies to cut your monthly bills by $500+ across housing, transportation, food, subscriptions, utilities, and insurance.",
            url: "https://cashcalcs.com/guides/how-to-reduce-monthly-expenses",
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
              { "@type": "ListItem", position: 3, name: "How to Reduce Monthly Expenses" },
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
                name: "How can I reduce my monthly expenses quickly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To reduce monthly expenses quickly: 1) Cancel 3-5 unused subscriptions (save $50-150), 2) Pack lunch 4 days/week instead of buying ($200 savings), 3) Get 3 auto insurance quotes and switch to the cheapest ($30-100 savings), 4) Cut dining out in half ($100-200 savings), 5) Negotiate internet/phone bills ($20-60 savings). Total potential savings: $400-710/month."
                }
              },
              {
                "@type": "Question",
                name: "What are the three biggest household expenses to cut?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The three biggest household expenses are: 1) Housing (30-40% of budget) — negotiate rent, refinance mortgage, or get a roommate to save $100-800/month, 2) Transportation (15-20%) — sell your car, trade down, or shop for cheaper insurance to save $50-500/month, 3) Food (10-15%) — meal prep and cut dining out to save $200-500/month. Combined, these three can reduce expenses by $350-1,800/month."
                }
              },
              {
                "@type": "Question",
                name: "How much can I save by canceling subscriptions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The average household has 5-12 active subscriptions costing $50-200/month. By auditing and canceling unused services (extra streaming platforms, gym memberships used under 2x/week, meal kits, cloud storage), you can save $50-150/month. Keep only high-value subscriptions you use regularly, and rotate streaming services monthly instead of paying for all simultaneously."
                }
              },
              {
                "@type": "Question",
                name: "How do I negotiate my rent or bills?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To negotiate rent: contact your landlord 2-3 months before lease renewal, offer to sign a longer lease or pay a few months upfront, or handle minor repairs yourself in exchange for 5-10% rent reduction. For bills like internet/cable: call your provider, say you are considering canceling, ask for the retention department, and request their best available rate. Threatening to switch providers often unlocks 20-40% discounts."
                }
              },
              {
                "@type": "Question",
                name: "What is the fastest way to cut food costs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The fastest way to cut food costs: 1) Pack lunch 4 days/week instead of buying ($200/month savings), 2) Meal prep 5-7 dinners on Sunday (saves time and prevents expensive takeout), 3) Cut food delivery to once/week max (delivery fees add 30-50% to costs), 4) Shop with a list to avoid impulse purchases (reduces spending by 15-25%), 5) Buy store brands instead of name brands (20-40% cheaper). Realistic total savings: $300-500/month."
                }
              },
            ]
          }),
        }}
      />
    </main>
  );
}
