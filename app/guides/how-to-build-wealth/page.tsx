import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Build Wealth in Your 20s and 30s (2026 Guide) | CashCalcs",
  description:
    "Learn proven strategies to build wealth in your 20s and 30s. Start investing early, maximize compound interest, increase income, avoid lifestyle creep, and reach financial freedom faster.",
  keywords: [
    "how to build wealth in your 20s",
    "how to build wealth in your 30s",
    "building wealth young",
    "wealth building strategies",
    "get rich in your 20s",
    "financial freedom 30s",
    "compound interest",
    "early investing",
  ],
  openGraph: {
    title: "How to Build Wealth in Your 20s and 30s (2026 Guide) | CashCalcs",
    description:
      "Learn proven strategies to build wealth in your 20s and 30s. Start investing early, maximize compound interest, increase income, avoid lifestyle creep, and reach financial freedom faster.",
    type: "article",
  },
  alternates: {
    canonical: "/guides/how-to-build-wealth",
  },
};

export default function BuildWealthGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Financial Guides</Link>
          {" > "}
          <span className="text-gray-900">How to Build Wealth in Your 20s and 30s</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How to Build Wealth in Your 20s and 30s
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Your 20s and 30s are the most powerful wealth-building years of your life.
          Time is your biggest advantage: money invested today has decades to compound.
          Start now, follow these proven strategies, and you can build serious wealth
          long before retirement age.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Power of Starting Early
          </h2>
          <p className="text-gray-700 mb-4">
            The difference between starting at 25 versus 35 is massive. Here is what
            investing $500/month looks like at 7% annual returns:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="p-4">Starting Age</th>
                  <th className="p-4 text-right">Total Invested</th>
                  <th className="p-4 text-right">Value at 65</th>
                  <th className="p-4 text-right">Earnings</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { age: "25", invested: "$240,000", value: "$1,265,000", earnings: "$1,025,000" },
                  { age: "30", invested: "$210,000", value: "$787,000", earnings: "$577,000" },
                  { age: "35", invested: "$180,000", value: "$487,000", earnings: "$307,000" },
                ].map((row) => (
                  <tr key={row.age} className="border-b border-gray-50">
                    <td className="p-4 font-medium text-gray-900">{row.age}</td>
                    <td className="p-4 text-right text-gray-700">{row.invested}</td>
                    <td className="p-4 text-right text-green-700 font-bold">{row.value}</td>
                    <td className="p-4 text-right text-emerald-600">{row.earnings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700">
            Starting at 25 instead of 35 gives you <strong>$778,000 more at retirement</strong>,
            even though you only invested $60,000 more. This is compound interest at work.
            Use the <Link href="/compound-interest" className="text-purple-600 hover:underline font-medium">compound interest calculator</Link> to
            see your own timeline.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            10 Wealth-Building Strategies for Your 20s and 30s
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                1. Get the Free Money: Employer 401(k) Match
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                If your employer offers a 401(k) match, contribute enough to get the full match.
                A 50% match on 6% of salary is an instant 50% return. If you make $60,000, that is
                $1,800/year in free money.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800">
                <strong>Action:</strong> Check your benefits portal today. Set up auto-contribution
                to at least the match percentage.
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                2. Pay Off High-Interest Debt First
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Credit card debt at 20% APR destroys wealth faster than investing builds it.
                Kill high-interest debt aggressively before investing beyond the employer match.
                Use the <Link href="/debt-payoff" className="text-blue-600 hover:underline font-medium">debt payoff calculator</Link> to
                make a plan.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
                <strong>Priority order:</strong> 1) Emergency fund ($1,000), 2) Employer match,
                3) Credit cards 15%+, 4) Full emergency fund, 5) Everything else
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                3. Build a 3-6 Month Emergency Fund
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Life happens: layoffs, medical bills, car repairs. Without an emergency fund, you will
                derail your wealth plan by selling investments at a loss or adding credit card debt.
                Keep 3-6 months of expenses in a high-yield savings account (4-5% APY).
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                4. Invest Early and Consistently
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Open a Roth IRA (if eligible) or continue 401(k) contributions beyond the match.
                Start with index funds (S&P 500, total market) for low fees and broad diversification.
                Automate monthly contributions so you never skip.
              </p>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-sm text-indigo-800">
                <strong>Target:</strong> Save 15-20% of gross income. At $60K salary, that is $9,000-12,000/year.
                Track progress with the <Link href="/investment-calculator" className="text-indigo-600 hover:underline font-medium">investment calculator</Link>.
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                5. Increase Your Income
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                You can only cut expenses so far, but income has no ceiling. In your 20s and 30s,
                focus on career growth: develop high-value skills, switch jobs for 10-20% raises,
                negotiate aggressively, start a side hustle. A $10,000 raise invested annually
                becomes $600,000+ by retirement.
              </p>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                <li>Job hopping: averages 10-20% raises vs. 3% annual raises</li>
                <li>Side hustles: freelancing, tutoring, selling products online</li>
                <li>Skill building: coding, data analysis, sales, management</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                6. Live Below Your Means
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                You do not need to be extreme, but keep a gap between income and spending. The bigger
                the gap, the faster you build wealth. Aim to save at least 20% of take-home pay.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                7. Avoid Lifestyle Creep
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Every time you get a raise, your first instinct is to upgrade your life: nicer car,
                bigger apartment, more dining out. Instead, bank 50-75% of every raise and lifestyle
                upgrade with the rest. This is how six-figure earners stay broke.
              </p>
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-800">
                <strong>Example:</strong> $5,000 raise = invest $3,750, upgrade lifestyle $1,250.
                You still feel the raise, but you are turbocharging wealth.
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                8. Automate Everything
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Set up automatic transfers on payday: 401(k) contribution, Roth IRA transfer,
                savings account deposit. Pay your future self first. What is left over is spending money.
                Automation removes willpower from the equation.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                9. Avoid Expensive Mistakes
              </h3>
              <p className="text-gray-700 text-sm">
                Big purchases derail wealth: new cars (buy 3-5 years used), house too soon
                (rent until you have 20% down + 6mo emergency fund), expensive weddings
                ($30K+ hurts), unnecessary grad school debt. One bad decision can cost
                $50,000-200,000 in lost wealth.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                10. Track Your Net Worth
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Use the <Link href="/net-worth" className="text-purple-600 hover:underline font-medium">net worth calculator</Link> quarterly.
                Watching the number grow is motivating. Wealth = assets (savings, investments, home equity)
                minus liabilities (debt). Target: net worth = age x income / 10 as a baseline.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Wealth Milestones by Age
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-2">Age 25</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Net worth: $0-$25,000 (student loans are OK)</li>
                <li>Emergency fund: $1,000 minimum, building to 3 months</li>
                <li>Investing: contributing to 401(k) match at minimum</li>
                <li>Income: focus on skill-building and first career jumps</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-5">
              <h3 className="font-bold text-purple-900 mb-2">Age 30</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Net worth: $50,000-$100,000 (1x annual salary target)</li>
                <li>Emergency fund: 3-6 months of expenses fully funded</li>
                <li>Investing: 15%+ of income, Roth IRA maxed if eligible</li>
                <li>Income: negotiating aggressively, side hustle explored</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-5">
              <h3 className="font-bold text-green-900 mb-2">Age 35</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Net worth: $150,000-$300,000 (2x annual salary target)</li>
                <li>Investing: $200,000+ in retirement accounts, compounding hard</li>
                <li>Debt: high-interest debt eliminated, only mortgage/student loans remain</li>
                <li>Income: peak earning years approaching, wealth accelerating</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-sm mt-4">
            These are benchmarks, not requirements. Everyone starts from different places.
            The key is consistent progress: save more this year than last year, invest more
            this year than last year. Use the <Link href="/fire-calculator" className="text-indigo-600 hover:underline font-medium">FIRE calculator</Link> to
            map your own path to financial independence.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Math: How $500/Month Becomes $1.2M
          </h2>
          <p className="text-gray-700 mb-4">
            Let us make this concrete. You are 25, earning $55,000/year. You invest
            $500/month ($6,000/year) in a Roth IRA and low-cost index funds.
            Assuming 7% average annual returns (historical S&P 500 average):
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="p-4">Age</th>
                  <th className="p-4 text-right">Years Invested</th>
                  <th className="p-4 text-right">Total Invested</th>
                  <th className="p-4 text-right">Portfolio Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { age: "30", years: "5", invested: "$30,000", value: "$35,800" },
                  { age: "35", years: "10", invested: "$60,000", value: "$86,700" },
                  { age: "40", years: "15", invested: "$90,000", value: "$158,000" },
                  { age: "50", years: "25", invested: "$150,000", value: "$405,000" },
                  { age: "60", years: "35", invested: "$210,000", value: "$896,000" },
                  { age: "65", years: "40", invested: "$240,000", value: "$1,265,000" },
                ].map((row) => (
                  <tr key={row.age} className="border-b border-gray-50">
                    <td className="p-4 font-medium text-gray-900">{row.age}</td>
                    <td className="p-4 text-right text-gray-600">{row.years}</td>
                    <td className="p-4 text-right text-gray-700">{row.invested}</td>
                    <td className="p-4 text-right text-green-700 font-bold">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700">
            By age 40, you are already a six-figure investor. By 50, you have nearly half a million.
            And you still have 15 years of compounding left. This is not get-rich-quick -- this is
            get-rich-certain with time and consistency.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Common Mistakes to Avoid
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-rose-50 rounded-xl p-5">
              <h3 className="font-bold text-rose-800 mb-2">Waiting to Start</h3>
              <p className="text-sm text-gray-700">
                &quot;I will start investing when I make more money.&quot; Wrong. Start with $50/month
                if that is all you have. The habit and compound interest matter more than the amount.
              </p>
            </div>
            <div className="bg-rose-50 rounded-xl p-5">
              <h3 className="font-bold text-rose-800 mb-2">Chasing Hot Stocks</h3>
              <p className="text-sm text-gray-700">
                Individual stocks, crypto YOLO plays, meme investments: these are gambling, not
                wealth-building. Boring index funds beat 90% of active investors long-term.
              </p>
            </div>
            <div className="bg-rose-50 rounded-xl p-5">
              <h3 className="font-bold text-rose-800 mb-2">Lifestyle Inflation</h3>
              <p className="text-sm text-gray-700">
                Earning $100K but spending $95K is the same wealth outcome as earning $50K and
                spending $45K. Control the spending side or income growth means nothing.
              </p>
            </div>
            <div className="bg-rose-50 rounded-xl p-5">
              <h3 className="font-bold text-rose-800 mb-2">Ignoring Employer Benefits</h3>
              <p className="text-sm text-gray-700">
                401(k) match, HSA contributions, stock purchase plans: these are part of your
                compensation. Not using them is leaving 5-10% of your salary on the table.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 rounded-2xl p-6 text-center mb-10">
          <h2 className="text-xl font-bold text-white mb-3">Try These Calculators</h2>
          <p className="text-gray-400 mb-4">Put this knowledge into action with our free tools.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/compound-interest" className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors">Compound Interest</Link>
            <Link href="/investment-calculator" className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors">Investment Calculator</Link>
            <Link href="/fire-calculator" className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors">FIRE Calculator</Link>
            <Link href="/savings-goal" className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors">Savings Goal</Link>
          </div>
        </section>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-green-800 mb-2">
            Start Building Wealth Today
          </h2>
          <p className="text-gray-700 mb-4">
            Calculate how much your monthly investments will grow over time.
          </p>
          <Link
            href="/investment-calculator"
            className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
          >
            Open Investment Calculator
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Build Wealth in Your 20s and 30s (2026 Guide)",
            description:
              "Learn proven strategies to build wealth in your 20s and 30s. Start investing early, maximize compound interest, increase income, avoid lifestyle creep, and reach financial freedom faster.",
            url: "https://cashcalcs.com/guides/how-to-build-wealth",
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
              { "@type": "ListItem", position: 3, name: "How to Build Wealth in Your 20s and 30s" },
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
                name: "How much should I save in my 20s?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aim to save 15-20% of your gross income in your 20s. At a minimum, contribute enough to get your full employer 401(k) match, build a $1,000 emergency fund, then work toward 3-6 months of expenses saved. Even $200-300/month invested from age 25 becomes $500,000+ by retirement due to compound interest."
                }
              },
              {
                "@type": "Question",
                name: "Is it too late to start building wealth at 30?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, 30 is not too late. You still have 35+ years until retirement for compound interest to work. Investing $500/month from age 30 at 7% returns grows to $787,000 by age 65. While starting at 25 would yield more, starting at 30 is far better than waiting until 40. Focus on maximizing savings rate and income growth in your 30s."
                }
              },
              {
                "@type": "Question",
                name: "What is the best investment for young adults?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For young adults in their 20s and 30s, low-cost index funds (S&P 500 or total stock market) in tax-advantaged accounts are best. Prioritize: 1) 401(k) up to employer match, 2) Roth IRA ($7,000/year limit), 3) Max 401(k) ($23,500/year limit), 4) Taxable brokerage. Avoid individual stocks, crypto speculation, and high-fee funds. Time and consistency beat stock-picking."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
