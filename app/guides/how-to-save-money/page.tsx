import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Save Money: 30 Proven Tips That Actually Work | CashCalcs",
  description:
    "Learn how to save money fast with 30 practical tips covering budgeting, cutting expenses, boosting income, and automating savings. No gimmicks, just proven strategies.",
  keywords: [
    "how to save money",
    "save money fast",
    "money saving tips",
    "how to save money monthly",
    "best ways to save money",
    "frugal living tips",
    "cut expenses",
    "reduce spending",
  ],
  openGraph: {
    title: "How to Save Money: 30 Proven Tips That Actually Work",
    description:
      "Learn how to save money fast with 30 practical tips covering budgeting, cutting expenses, boosting income, and automating savings.",
    type: "article",
  },
};

export default function HowToSaveMoney() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Financial Guides</Link>
          {" > "}
          <span className="text-gray-900">How to Save Money</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How to Save Money: 30 Proven Tips That Actually Work
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Saving money is not about deprivation. It is about making smarter choices,
          cutting waste, and automating good habits. Here are 30 actionable strategies
          that real people use to save thousands every year.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Budget & Track Your Spending
            </h2>
            <p className="text-gray-700 mb-4">
              You cannot improve what you do not measure. Start here:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Use the 50/30/20 rule",
                  desc: "Allocate 50% to needs, 30% to wants, 20% to savings. This simple framework keeps spending in check.",
                  link: "/budget",
                  linkText: "Try Budget Calculator",
                },
                {
                  title: "Track every dollar for 30 days",
                  desc: "Use an app (Mint, YNAB) or spreadsheet. Most people are shocked where their money actually goes -- $8/day on coffee is $240/month.",
                },
                {
                  title: "Set up spending alerts",
                  desc: "Get text alerts when your checking balance drops below a threshold. Prevents overdraft fees and keeps you aware.",
                },
                {
                  title: "Review subscriptions monthly",
                  desc: "Gym membership you never use? Streaming services you forgot about? Cancel unused subscriptions with our tracker.",
                  link: "/subscription-tracker",
                  linkText: "Subscription Tracker",
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
              Cut Big Expenses First
            </h2>
            <p className="text-gray-700 mb-4">
              Small savings add up, but big wins change your finances overnight.
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Negotiate rent or move",
                  desc: "Rent is your biggest expense. Moving to a place $300/month cheaper saves $3,600/year. Or negotiate a renewal discount.",
                },
                {
                  title: "Refinance high-interest debt",
                  desc: "Credit card at 24% APR? Refinance to a personal loan at 10%. Paying $5,000 debt saves $700+ in interest.",
                  link: "/debt-payoff",
                  linkText: "Debt Payoff Calculator",
                },
                {
                  title: "Drive a paid-off car longer",
                  desc: "The average car payment is $700/month. Keep driving your paid-off car for 2 more years and bank $16,800.",
                },
                {
                  title: "Shop around for insurance",
                  desc: "Get 3 quotes for car and home insurance annually. Same coverage, 20-30% cheaper rates. Takes 30 minutes, saves $500+/year.",
                },
                {
                  title: "Buy used, not new",
                  desc: "Cars, furniture, electronics, clothes. Buying used saves 30-70% and the quality is often identical. Check Facebook Marketplace, OfferUp, or Craigslist.",
                },
              ].map((tip, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{tip.desc}</p>
                  {tip.link && (
                    <Link href={tip.link} className="text-sm text-blue-600 hover:underline font-medium">
                      {tip.linkText}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Save on Food & Groceries
            </h2>
            <p className="text-gray-700 mb-4">
              Food is the second-biggest variable expense after rent. Small changes
              compound fast.
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Meal prep Sundays.</strong> Cook 5 lunches and 5 dinners on Sunday.
                Saves 10+ hours and $200-300/month vs. eating out or delivery.
              </li>
              <li>
                <strong>Shop with a list.</strong> Impulse buys add 20-30% to grocery bills.
                Stick to your list.
              </li>
              <li>
                <strong>Buy store brands.</strong> Generic cereal, milk, canned goods are
                30-50% cheaper and taste the same.
              </li>
              <li>
                <strong>Use cashback apps.</strong> Ibotta, Fetch Rewards, Rakuten give
                1-5% back on groceries. Free money for shopping you already do.
              </li>
              <li>
                <strong>Limit restaurant meals.</strong> Cut dining out from 8x/month to 4x/month.
                At $40/meal, that is $160/month saved ($1,920/year).
              </li>
              <li>
                <strong>Pack your lunch.</strong> Bringing lunch to work saves $10-15/day =
                $200-300/month for full-time workers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Automate Your Savings
            </h2>
            <p className="text-gray-700 mb-4">
              Willpower fails. Automation wins. Set it up once and forget it.
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Set up auto-transfers on payday.</strong> Move $200 (or 10-20% of paycheck)
                to savings the day you get paid. You will not miss what you do not see.
              </li>
              <li>
                <strong>Max out 401(k) match.</strong> If your employer matches 5%, contribute
                at least 5%. That is instant 100% return. Free money.
              </li>
              <li>
                <strong>Round-up apps.</strong> Acorns, Qapital, or bank round-ups save spare
                change automatically. $1-3/day adds up to $500-1,000/year.
              </li>
              <li>
                <strong>Direct deposit to multiple accounts.</strong> Split your paycheck:
                80% to checking, 20% to savings. Never see the savings portion.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Earn More Money
            </h2>
            <p className="text-gray-700 mb-4">
              Cutting expenses has limits. Earning more has no ceiling.
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Negotiate your salary.</strong> A $5,000 raise (10% on $50K) is
                $416/month for life, with no extra hours. Ask for raises annually.
              </li>
              <li>
                <strong>Start a side hustle.</strong> Freelancing, tutoring, dog walking,
                Uber, selling crafts on Etsy. Even $500/month extra is $6,000/year saved.
              </li>
              <li>
                <strong>Sell unused items.</strong> Clothes, electronics, furniture, books.
                Average household has $1,000-3,000 in resellable items collecting dust.
              </li>
              <li>
                <strong>Take on overtime or extra shifts.</strong> If your job offers OT,
                one extra shift per week is 4 shifts/month = $500-1,000+ extra.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Smart Spending Habits
            </h2>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Use the 48-hour rule.</strong> For non-essential purchases over $50,
                wait 48 hours. If you still want it, buy it. 80% of the time, the urge fades.
              </li>
              <li>
                <strong>Unsubscribe from marketing emails.</strong> Every promo email is
                trying to make you spend. Out of sight, out of mind.
              </li>
              <li>
                <strong>Use cash for discretionary spending.</strong> Withdraw $200 cash for
                entertainment/dining each month. When it is gone, you are done. Cash hurts more than cards.
              </li>
              <li>
                <strong>Buy in bulk (wisely).</strong> Costco or Sam's Club saves 20-40% on
                non-perishables, toiletries, and household items. Do not bulk-buy perishables you will not use.
              </li>
              <li>
                <strong>Use the library.</strong> Books, movies, audiobooks, even tool rentals
                and museum passes. All free. Saves $20-50/month vs. buying/streaming.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How Much Should You Save?
            </h2>
            <p className="text-gray-700 mb-4">
              General guidelines based on income and age:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Income Level</th>
                    <th className="text-right py-3 text-gray-900">Savings Rate</th>
                    <th className="text-right py-3 text-gray-900">Example</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">Entry-level ($30K-50K)</td>
                    <td className="text-right">10-15%</td>
                    <td className="text-right">$300-625/month</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Mid-career ($50K-100K)</td>
                    <td className="text-right">15-20%</td>
                    <td className="text-right">$625-1,667/month</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">High-earner ($100K+)</td>
                    <td className="text-right">20-30%</td>
                    <td className="text-right">$1,667-2,500+/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Use our{" "}
              <Link href="/savings-goal" className="text-purple-600 font-medium hover:underline">
                savings goal calculator
              </Link>{" "}
              to set targets based on your income and goals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Start Small, Build Momentum
            </h2>
            <p className="text-gray-700 mb-4">
              You do not need to implement all 30 tips at once. Start with 3-5 that
              feel easiest and build from there. Small wins create momentum.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-emerald-800 mb-2">Example: Save $500/Month</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Cut dining out from 8x to 4x/month: <strong>$160 saved</strong></li>
                <li>Cancel 3 unused subscriptions: <strong>$40 saved</strong></li>
                <li>Pack lunch 3x/week: <strong>$120 saved</strong></li>
                <li>Shop insurance, save 20%: <strong>$50 saved</strong></li>
                <li>Side hustle 5 hours/week at $25/hr: <strong>$500 earned</strong></li>
              </ul>
              <p className="text-sm text-emerald-800 font-bold mt-3">
                Total: $370 saved + $500 earned = $870/month ($10,440/year)
              </p>
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Track Your Progress</h2>
            <p className="text-gray-400 mb-4">Use our free tools to set goals, track savings, and build your budget.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/savings-goal" className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors">Savings Goal</Link>
              <Link href="/budget" className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors">Budget Calculator</Link>
              <Link href="/subscription-tracker" className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-colors">Subscription Tracker</Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/savings-goal"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors text-lg"
          >
            Set Your Savings Goal
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Save Money: 30 Proven Tips That Actually Work",
            description: "Learn how to save money fast with 30 practical tips covering budgeting, cutting expenses, boosting income, and automating savings.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/how-to-save-money",
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
              { "@type": "ListItem", position: 3, name: "How to Save Money" },
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
                name: "How can I save money fast?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To save money fast: 1) Cut your three biggest expenses (rent, car, food) by 10-20%, 2) Cancel unused subscriptions, 3) Pack lunch instead of eating out, 4) Automate savings transfers on payday, 5) Start a side hustle to earn extra income. These five actions can save $500-1,000/month."
                }
              },
              {
                "@type": "Question",
                name: "What is the 50/30/20 budget rule?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The 50/30/20 rule allocates your after-tax income as: 50% to needs (rent, utilities, food, insurance), 30% to wants (dining out, entertainment, hobbies), and 20% to savings and debt payoff. It is a simple framework to balance spending and saving."
                }
              },
              {
                "@type": "Question",
                name: "How much should I save per month?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aim to save 10-20% of your gross income per month. For someone earning $50,000/year, that is $416-833/month. If you are starting out, begin with 10% and increase 1% each year until you reach 20%. Include 401(k) contributions, IRA, and emergency fund in this calculation."
                }
              },
              {
                "@type": "Question",
                name: "What are the biggest money wasters?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The top money wasters are: 1) Eating out and food delivery ($300-600/month average), 2) Unused subscriptions ($20-100/month), 3) Impulse purchases, 4) High-interest debt payments, 5) Buying new instead of used, 6) Not shopping around for insurance. Cutting these can save $500-1,000/month."
                }
              },
              {
                "@type": "Question",
                name: "How do I automate my savings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Automate savings by: 1) Setting up automatic transfers from checking to savings on payday (start with $100-200), 2) Maxing your employer 401(k) match (typically 3-6% of salary), 3) Using direct deposit to split your paycheck between checking and savings, 4) Using round-up apps like Acorns that save spare change automatically."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
