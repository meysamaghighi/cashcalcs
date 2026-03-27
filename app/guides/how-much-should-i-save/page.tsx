import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Should I Save? Benchmarks by Age & Income | CashCalcs",
  description:
    "How much should you save per month? Complete guide to savings benchmarks by age, income level, and financial goals. Emergency fund, retirement, and wealth-building targets.",
  keywords: [
    "how much should i save",
    "how much to save per month",
    "savings by age",
    "how much should i have saved",
    "savings rate by income",
    "emergency fund amount",
    "retirement savings by age",
    "how much money should i save",
  ],
  openGraph: {
    title: "How Much Should I Save? Benchmarks by Age & Income",
    description:
      "Complete guide to savings benchmarks by age, income level, and financial goals. Emergency fund, retirement, and wealth-building targets.",
    type: "article",
  },
};

export default function HowMuchShouldISave() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Financial Guides</Link>
          {" > "}
          <span className="text-gray-900">How Much Should I Save</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How Much Should I Save? Benchmarks by Age and Income
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          There is no one-size-fits-all answer, but benchmarks help you know if you
          are on track. Here is how much you should save based on your age, income,
          and financial goals.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              The 20% Rule: General Savings Target
            </h2>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-4">
              <p className="text-xl font-bold text-emerald-800 mb-2">
                Save 20% of Your Gross Income
              </p>
              <p className="text-sm text-gray-700">
                Financial experts recommend saving at least 20% of your pre-tax income
                for long-term financial security. This includes retirement contributions,
                emergency fund, and other savings.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Annual Income</th>
                    <th className="text-right py-3 text-gray-900">20% Savings</th>
                    <th className="text-right py-3 text-gray-900">Monthly</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">$40,000</td>
                    <td className="text-right">$8,000/year</td>
                    <td className="text-right font-medium">$667/month</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">$60,000</td>
                    <td className="text-right">$12,000/year</td>
                    <td className="text-right font-medium">$1,000/month</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">$80,000</td>
                    <td className="text-right">$16,000/year</td>
                    <td className="text-right font-medium">$1,333/month</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">$100,000</td>
                    <td className="text-right">$20,000/year</td>
                    <td className="text-right font-medium">$1,667/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              If 20% feels impossible, start with 10% and increase 1% per year. The
              key is to start, even if it is small.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Emergency Fund: Your First Savings Goal
            </h2>
            <p className="text-gray-700 mb-4">
              Before investing or paying extra on low-interest debt, build an emergency
              fund. This is your financial safety net.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Your Situation</th>
                    <th className="text-right py-3 text-gray-900">Target</th>
                    <th className="text-right py-3 text-gray-900">Example ($3K/mo expenses)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">Dual income, stable jobs</td>
                    <td className="text-right">3 months</td>
                    <td className="text-right">$9,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Single income, stable job</td>
                    <td className="text-right">4-6 months</td>
                    <td className="text-right">$12,000-18,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Self-employed / freelancer</td>
                    <td className="text-right">6-9 months</td>
                    <td className="text-right">$18,000-27,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Single parent</td>
                    <td className="text-right">6-9 months</td>
                    <td className="text-right">$18,000-27,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4">
              Start with a <strong>$1,000 starter emergency fund</strong>, then work
              up to 3-6 months of expenses. Use our{" "}
              <Link href="/guides/how-to-build-emergency-fund" className="text-emerald-600 font-medium hover:underline">
                emergency fund guide
              </Link>{" "}
              for step-by-step instructions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Retirement Savings by Age
            </h2>
            <p className="text-gray-700 mb-4">
              Fidelity Investments provides age-based benchmarks. By age 30, you should
              have 1x your salary saved. By 67, you should have 10x your salary.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Age</th>
                    <th className="text-right py-3 text-gray-900">Target</th>
                    <th className="text-right py-3 text-gray-900">If You Earn $60K</th>
                    <th className="text-right py-3 text-gray-900">If You Earn $100K</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2 font-medium">30</td>
                    <td className="text-right">1x salary</td>
                    <td className="text-right">$60,000</td>
                    <td className="text-right">$100,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">35</td>
                    <td className="text-right">2x salary</td>
                    <td className="text-right">$120,000</td>
                    <td className="text-right">$200,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">40</td>
                    <td className="text-right">3x salary</td>
                    <td className="text-right">$180,000</td>
                    <td className="text-right">$300,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">45</td>
                    <td className="text-right">4x salary</td>
                    <td className="text-right">$240,000</td>
                    <td className="text-right">$400,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">50</td>
                    <td className="text-right">6x salary</td>
                    <td className="text-right">$360,000</td>
                    <td className="text-right">$600,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">55</td>
                    <td className="text-right">7x salary</td>
                    <td className="text-right">$420,000</td>
                    <td className="text-right">$700,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">60</td>
                    <td className="text-right">8x salary</td>
                    <td className="text-right">$480,000</td>
                    <td className="text-right">$800,000</td>
                  </tr>
                  <tr className="border-b bg-emerald-50">
                    <td className="py-2 font-bold">67</td>
                    <td className="text-right font-bold">10x salary</td>
                    <td className="text-right font-bold">$600,000</td>
                    <td className="text-right font-bold">$1,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Source: Fidelity Investments. Assumes you save 15% annually starting at age 25,
              with 50% employer match on first 5%, and retire at 67.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Monthly Savings by Income Level
            </h2>
            <p className="text-gray-700 mb-4">
              Here is how much you should aim to save per month based on your household
              income, following the 20% rule:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 mb-2">Entry-Level ($30K-50K)</h3>
                <p className="text-2xl font-bold text-blue-900 mb-1">$500-833/mo</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>10-15% savings rate</li>
                  <li>Focus: emergency fund + 401(k) match</li>
                  <li>Start with $100/month, increase yearly</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-xl p-5">
                <h3 className="font-bold text-emerald-800 mb-2">Mid-Career ($50K-100K)</h3>
                <p className="text-2xl font-bold text-emerald-900 mb-1">$833-1,667/mo</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>15-20% savings rate</li>
                  <li>Focus: max 401(k) match, IRA, emergency fund</li>
                  <li>Should have 2-4x salary saved by 40</li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-xl p-5">
                <h3 className="font-bold text-indigo-800 mb-2">High-Earner ($100K+)</h3>
                <p className="text-2xl font-bold text-indigo-900 mb-1">$1,667-2,500+/mo</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>20-30% savings rate</li>
                  <li>Focus: max 401(k), backdoor Roth, taxable brokerage</li>
                  <li>Should have 6-10x salary by retirement</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Where Should Your Savings Go?
            </h2>
            <p className="text-gray-700 mb-4">
              Prioritize your savings in this order for maximum financial security:
            </p>
            <div className="space-y-3">
              {[
                {
                  step: "1",
                  title: "$1,000 starter emergency fund",
                  desc: "Keep this in a high-yield savings account. Covers minor emergencies like car repairs or medical copays.",
                },
                {
                  step: "2",
                  title: "Employer 401(k) match",
                  desc: "Contribute enough to get the full match (typically 3-6% of salary). This is instant 50-100% return on your money.",
                },
                {
                  step: "3",
                  title: "Pay off high-interest debt",
                  desc: "Credit cards at 20%+ APR, payday loans, high-interest personal loans. Use the debt avalanche method to save the most on interest.",
                  link: "/debt-payoff",
                },
                {
                  step: "4",
                  title: "Full emergency fund (3-6 months)",
                  desc: "Build your emergency fund to cover 3-6 months of essential expenses in a high-yield savings account.",
                  link: "/guides/how-to-build-emergency-fund",
                },
                {
                  step: "5",
                  title: "Max out retirement accounts",
                  desc: "Max 401(k) ($23,500 in 2026), Roth IRA ($7,000), HSA ($4,300). These offer tax benefits and compound growth.",
                  link: "/retirement-calculator",
                },
                {
                  step: "6",
                  title: "Pay off low-interest debt",
                  desc: "Mortgages, car loans, student loans under 5% interest. These are optional -- investing may yield higher returns.",
                },
                {
                  step: "7",
                  title: "Taxable investment accounts",
                  desc: "Once retirement is maxed and debt is managed, invest additional savings in index funds for long-term wealth.",
                  link: "/investment-calculator",
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl shadow-sm p-5 flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700 text-sm mb-2">{item.desc}</p>
                    {item.link && (
                      <Link href={item.link} className="text-sm text-purple-600 hover:underline font-medium">
                        Learn more
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              What If I Am Behind?
            </h2>
            <p className="text-gray-700 mb-4">
              Do not panic. Many people start late. Here is how to catch up:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Increase savings rate aggressively.</strong> If you are 40 with
                no retirement savings, aim for 25-30% savings rate instead of 15-20%.
              </li>
              <li>
                <strong>Take advantage of catch-up contributions.</strong> At age 50+,
                you can contribute an extra $7,500 to 401(k)s ($31,000 total) and $1,000
                to IRAs ($8,000 total).
              </li>
              <li>
                <strong>Delay retirement by 2-5 years.</strong> Working until 69 instead
                of 67 gives you 2 more years to save and 2 fewer years of withdrawals.
                This can increase your retirement security by 20-30%.
              </li>
              <li>
                <strong>Maximize Social Security.</strong> Delaying benefits from 67 to
                70 increases monthly payments by 24%. If you live to 85+, you come out ahead.
              </li>
              <li>
                <strong>Cut expenses now.</strong> Downsize your home, drive a paid-off
                car, eliminate non-essentials. Bank the difference.
              </li>
            </ul>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Plan Your Savings Strategy</h2>
            <p className="text-gray-400 mb-4">Use our free calculators to set goals and track your progress.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/savings-goal" className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors">Savings Goal</Link>
              <Link href="/retirement-calculator" className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">Retirement Planner</Link>
              <Link href="/fire-calculator" className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors">FIRE Calculator</Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/savings-goal"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors text-lg"
          >
            Calculate Your Savings Goal
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How Much Should I Save? Benchmarks by Age and Income",
            description: "Complete guide to savings benchmarks by age, income level, and financial goals. Emergency fund, retirement, and wealth-building targets.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/how-much-should-i-save",
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
              { "@type": "ListItem", position: 3, name: "How Much Should I Save" },
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
                name: "How much should I save per month?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aim to save 20% of your gross income per month. For a $60,000 salary, that is $1,000/month. If starting out, begin with 10% ($500/month) and increase 1% per year. Include 401(k) contributions, emergency fund, and other savings in this 20%."
                }
              },
              {
                "@type": "Question",
                name: "How much should I have saved by age 30?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "By age 30, you should have 1x your annual salary saved for retirement. If you earn $60,000, that is $60,000 saved. If you are behind, increase your savings rate to 20-25% and take advantage of employer 401(k) matches."
                }
              },
              {
                "@type": "Question",
                name: "How much emergency fund do I need?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Save 3-6 months of essential expenses for an emergency fund. For someone with $3,000/month in rent, utilities, food, and insurance, that is $9,000-18,000. Start with a $1,000 starter fund, then build up to the full amount. Keep it in a high-yield savings account."
                }
              },
              {
                "@type": "Question",
                name: "How much should I have saved by retirement?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "By age 67, aim to have 10x your annual salary saved. For someone earning $60,000, that is $600,000. For $100,000 earners, that is $1,000,000. This assumes you save 15% annually starting at age 25 and retire at 67."
                }
              },
              {
                "@type": "Question",
                name: "What if I am behind on retirement savings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If behind, increase your savings rate to 25-30%, max out catch-up contributions at age 50+ ($31,000 to 401(k), $8,000 to IRA), delay retirement by 2-5 years, and delay Social Security until age 70 for 24% higher monthly benefits. Working 2 more years can increase retirement security by 20-30%."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
