import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Build an Emergency Fund (Step-by-Step Guide 2026) | CashCalcs",
  description:
    "Learn how to build an emergency fund from scratch. How much to save, where to keep it, and step-by-step tips to build 3-6 months of expenses.",
  keywords: [
    "emergency fund",
    "how to build an emergency fund",
    "emergency savings",
    "how much emergency fund",
    "3 months expenses",
    "6 months expenses",
    "rainy day fund",
    "emergency fund calculator",
  ],
  openGraph: {
    title: "How to Build an Emergency Fund (Step-by-Step Guide 2026) | CashCalcs",
    description:
      "Learn how to build an emergency fund from scratch. How much to save, where to keep it, and step-by-step tips to build 3-6 months of expenses.",
    type: "article",
  },
};

export default function EmergencyFundGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/savings-goal" className="hover:text-gray-700">Savings Goal Calculator</Link>
          {" > "}
          <span className="text-gray-900">Emergency Fund Guide</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How to Build an Emergency Fund
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          An emergency fund is money set aside for unexpected expenses: job loss,
          medical bills, car repairs, or home emergencies. It is the foundation
          of financial security. Here is how to build one, even if you are
          starting from zero.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Much Do You Need?
          </h2>
          <p className="text-gray-700 mb-4">
            The standard advice is <strong>3-6 months of essential expenses</strong>,
            not income. Essential expenses include rent/mortgage, utilities, food,
            transportation, insurance, and minimum debt payments.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="p-4">Your Situation</th>
                  <th className="p-4 text-right">Recommended</th>
                  <th className="p-4 text-right">If Expenses = $3,000/mo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { situation: "Dual income, stable jobs", months: "3 months", amount: "$9,000" },
                  { situation: "Single income, stable job", months: "4-6 months", amount: "$12,000-18,000" },
                  { situation: "Self-employed / freelancer", months: "6-9 months", amount: "$18,000-27,000" },
                  { situation: "Single parent", months: "6-9 months", amount: "$18,000-27,000" },
                  { situation: "Irregular income", months: "6-12 months", amount: "$18,000-36,000" },
                ].map((row) => (
                  <tr key={row.situation} className="border-b border-gray-50">
                    <td className="p-4 font-medium text-gray-900">{row.situation}</td>
                    <td className="p-4 text-right text-emerald-700">{row.months}</td>
                    <td className="p-4 text-right text-gray-700">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700">
            Start with a <strong>$1,000 starter fund</strong> if saving 3-6 months
            feels overwhelming. This covers most minor emergencies and gives you
            momentum to keep going.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Step-by-Step: Building Your Emergency Fund
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Calculate your monthly essential expenses",
                desc: "Add up rent, utilities, groceries, transportation, insurance, and minimum debt payments. This is your baseline number.",
              },
              {
                step: "2",
                title: "Set your target",
                desc: "Multiply your monthly essentials by 3, 4, or 6 depending on your situation (see table above). Write this number down. It is your goal.",
              },
              {
                step: "3",
                title: "Open a separate savings account",
                desc: "Keep your emergency fund separate from your checking account. A high-yield savings account (HYSA) earns 4-5% APY while keeping your money accessible. Do not invest your emergency fund in stocks.",
              },
              {
                step: "4",
                title: "Automate a monthly transfer",
                desc: "Set up an automatic transfer on payday. Even $100/month builds to $1,200/year. Treat it like a bill you pay to your future self.",
              },
              {
                step: "5",
                title: "Boost with windfalls",
                desc: "Tax refunds, bonuses, birthday money, side hustle income, selling unused items: direct these straight to your emergency fund to accelerate progress.",
              },
              {
                step: "6",
                title: "Only use it for real emergencies",
                desc: "A sale on a new TV is not an emergency. Job loss, medical bills, car breakdown, emergency home repair: these are emergencies. If you use the fund, rebuild it as soon as possible.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Where to Keep Your Emergency Fund
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-xl p-5">
              <h3 className="font-bold text-emerald-800 mb-2">Good Options</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>High-yield savings account (HYSA)</strong> - 4-5% APY, FDIC insured, instant access</li>
                <li><strong>Money market account</strong> - Similar rates, may have check-writing ability</li>
                <li><strong>Short-term CDs</strong> - Slightly higher rates, but penalties for early withdrawal</li>
              </ul>
            </div>
            <div className="bg-rose-50 rounded-xl p-5">
              <h3 className="font-bold text-rose-800 mb-2">Bad Options</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Stocks or crypto</strong> - Can lose 30-50% right when you need the money</li>
                <li><strong>Under the mattress</strong> - Loses value to inflation, no protection</li>
                <li><strong>Regular checking account</strong> - Too easy to spend, earns 0%</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Long Will It Take?
          </h2>
          <p className="text-gray-700 mb-4">
            If your target is $15,000 (5 months of $3,000 expenses), here is how
            long it takes at different savings rates:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="p-4">Monthly Savings</th>
                  <th className="p-4 text-right">Time to $15,000</th>
                  <th className="p-4 text-right">With 5% HYSA Interest</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { monthly: "$100", time: "12.5 years", withInterest: "~10 years" },
                  { monthly: "$250", time: "5 years", withInterest: "~4.5 years" },
                  { monthly: "$500", time: "2.5 years", withInterest: "~2.3 years" },
                  { monthly: "$750", time: "20 months", withInterest: "~19 months" },
                  { monthly: "$1,000", time: "15 months", withInterest: "~14.5 months" },
                ].map((row) => (
                  <tr key={row.monthly} className="border-b border-gray-50">
                    <td className="p-4 font-medium text-gray-900">{row.monthly}</td>
                    <td className="p-4 text-right text-gray-700">{row.time}</td>
                    <td className="p-4 text-right text-emerald-700">{row.withInterest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Emergency Fund vs. Paying Off Debt
          </h2>
          <p className="text-gray-700 mb-4">
            This is one of the most common personal finance questions. The
            balanced approach:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
            <li>Build a <strong>$1,000 starter emergency fund</strong> first</li>
            <li>Aggressively pay off high-interest debt (credit cards at 20%+)</li>
            <li>Build your full 3-6 month emergency fund</li>
            <li>Continue paying off remaining debt while investing</li>
          </ol>
          <p className="text-gray-700">
            Without any emergency fund, you will put unexpected expenses on a
            credit card, adding to the debt you are trying to pay off. The $1,000
            starter fund breaks this cycle.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Counts as an Emergency?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-emerald-700 mb-2">Real Emergencies</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Job loss or significant income reduction</li>
                <li>Unexpected medical or dental bills</li>
                <li>Car repair needed for work commute</li>
                <li>Emergency home repair (roof leak, broken furnace)</li>
                <li>Unexpected travel for family emergency</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-rose-700 mb-2">Not Emergencies</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Holiday or birthday gifts</li>
                <li>Vacations or entertainment</li>
                <li>Sales or deals too good to pass up</li>
                <li>Routine car maintenance (oil change, tires)</li>
                <li>Annual insurance premiums (these are predictable)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Try These Calculators</h2>
          <p className="text-gray-400 mb-4">Put this knowledge into action with our free tools.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/savings-goal" className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors">Savings Goal</Link>
            <Link href="/budget" className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors">Budget Calculator</Link>
            <Link href="/investment-calculator" className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors">Investment Calculator</Link>
          </div>
        </section>

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-emerald-800 mb-2">
            Plan Your Emergency Fund
          </h2>
          <p className="text-gray-700 mb-4">
            Use our savings goal calculator to set your target and track your
            progress.
          </p>
          <Link
            href="/savings-goal/emergency-fund"
            className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Emergency Fund Calculator
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Build an Emergency Fund (Step-by-Step Guide 2026)",
            description:
              "Learn how to build an emergency fund from scratch. How much to save, where to keep it, and tips to build 3-6 months of expenses.",
            url: "https://cashcalcs.com/guides/how-to-build-emergency-fund",
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
