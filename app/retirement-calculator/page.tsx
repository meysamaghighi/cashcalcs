import type { Metadata } from "next";
import Link from "next/link";
import RetirementCalculator from "../components/RetirementCalculator";
import { retirementScenarios } from "../lib/retirement-engine";
import RelatedCalculators from "../components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Retirement Calculator - How Much Do You Need to Retire? | CashCalcs",
  description:
    "Free retirement calculator with Social Security and 4% rule. Calculate your retirement nest egg, monthly income, and if you're on track to retire comfortably.",
  keywords: [
    "retirement calculator",
    "how much to retire",
    "retirement savings calculator",
    "4% rule calculator",
    "Social Security calculator",
    "retirement income calculator",
    "early retirement calculator",
    "retirement planning",
  ],
  openGraph: {
    title: "Retirement Calculator - How Much Do You Need to Retire? | CashCalcs",
    description:
      "Free retirement calculator with Social Security and 4% rule. Calculate your retirement nest egg, monthly income, and if you're on track to retire comfortably.",
    type: "website",
  },
};

export default function RetirementCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Can You Afford to{" "}
          <span className="text-blue-600">Retire?</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Calculate your retirement nest egg, monthly income from savings and Social Security,
          and find out if you&apos;re on track to retire comfortably.
        </p>
        <p className="text-sm text-gray-400">Free calculator with 4% withdrawal rule and inflation adjustment</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <RetirementCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Retirement Scenarios</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {retirementScenarios.map((s) => (
            <Link key={s.slug} href={`/retirement-calculator/${s.slug}`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center">
              <p className="font-bold text-gray-900 text-sm">{s.name}</p>
              <p className="text-xs text-gray-500 mt-1">Calculate your plan</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Retirement Planning Works</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">The 4% Rule</h3>
            <p className="text-gray-700 text-sm">
              The 4% rule is a retirement withdrawal strategy. If you withdraw 4% of your retirement
              savings annually (adjusted for inflation), your money should last 30+ years. This means
              you need 25x your annual expenses saved to retire. For $60,000/year in expenses, that&apos;s
              $1.5 million in savings.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">Social Security</h3>
            <p className="text-gray-700 text-sm">
              Social Security provides a guaranteed income stream in retirement. The average benefit is
              around $2,000/month. You can claim as early as 62 (reduced benefits) or delay until 70
              (increased benefits by 8% per year). Full retirement age is 66-67 depending on your birth year.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">Compound Interest</h3>
            <p className="text-gray-700 text-sm">
              Time is your greatest asset in retirement savings. $1,000/month invested from age 30 to 65
              at 7% annual return grows to $1.8 million. Starting 10 years later at age 40 with the same
              contribution only grows to $750,000. Start as early as possible and let compound interest
              do the heavy lifting.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">Tax-Advantaged Accounts</h3>
            <p className="text-gray-700 text-sm">
              Maximize 401(k) and IRA contributions for tax-deferred or tax-free growth. Employer 401(k)
              match is free money—contribute at least enough to get the full match. Roth IRA contributions
              grow tax-free and can be withdrawn tax-free in retirement. Those 50+ can make catch-up
              contributions ($7,500 extra for 401(k), $1,000 for IRA in 2026).
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Retirement Calculator</h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            This free calculator helps you plan for retirement by projecting your nest egg and monthly
            income. Enter your current age, desired retirement age, current savings, and monthly
            contribution to see if you&apos;re on track.
          </p>
          <p>
            The calculator uses the 4% safe withdrawal rule to estimate monthly income from your savings.
            Combined with your expected Social Security benefit, you&apos;ll see your total retirement income.
            If there&apos;s a gap between your desired income and projected income, the calculator shows
            how much you need to save monthly to close that gap.
          </p>
          <p>
            Inflation is factored in—your desired income is in today&apos;s dollars, and the calculator adjusts
            for inflation at retirement. The default 7% annual return assumes a balanced stock/bond portfolio,
            and the 3% inflation rate is the historical average.
          </p>
        </div>
      </section>

      <RelatedCalculators current="/retirement-calculator" />

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How much money do I need to retire?</h3>
            <p className="text-gray-700 text-sm">The 4% rule suggests you need 25x your annual expenses. If you need $60,000/year to live, you need $1.5 million saved. However, Social Security reduces this. If you receive $2,000/month ($24,000/year) from Social Security, you only need to cover $36,000 from savings, requiring $900,000 saved instead.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What is the 4% rule and is it still valid?</h3>
            <p className="text-gray-700 text-sm">The 4% rule says you can withdraw 4% of your retirement savings annually (adjusted for inflation) and your money will last 30+ years. It&apos;s based on historical stock/bond returns. Some experts suggest 3-3.5% for more conservative planning, especially with lower expected returns and longer life expectancies. This calculator uses 4% as the standard benchmark.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">When should I claim Social Security?</h3>
            <p className="text-gray-700 text-sm">You can claim at 62 (reduced benefits), at full retirement age 66-67 (full benefits), or delay until 70 (increased benefits by 8% per year). If you&apos;re healthy and can afford to wait, delaying maximizes lifetime benefits. If you need income or have health concerns, claiming earlier makes sense. Use your life expectancy and financial needs to decide.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Can I retire early at 55 or 60?</h3>
            <p className="text-gray-700 text-sm">Early retirement is possible but requires aggressive saving. You&apos;ll need to cover 100% of expenses until Social Security at 62+ and Medicare at 65. Expect healthcare costs of $1,000+/month before Medicare. Also, 401(k) withdrawals before 59½ incur a 10% penalty (though there are some exceptions like Rule of 55 or 72(t) distributions). Early retirement needs a larger nest egg to cover more years.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What if I&apos;m starting late on retirement savings?</h3>
            <p className="text-gray-700 text-sm">If you&apos;re 50+ and behind on savings, take advantage of catch-up contributions: extra $7,500/year to 401(k) and $1,000/year to IRA. Maximize contributions now, cut expenses, and consider working a few extra years to 67 or 70. Even starting at 50, aggressive saving for 15-20 years can still build a solid nest egg. Use the calculator to see what monthly contribution you need to reach your goal.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Retirement Calculator",
            description: "Free retirement calculator with Social Security and 4% rule. Calculate your nest egg and monthly income.",
            url: "https://cashcalcs.com/retirement-calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
                name: "How much money do I need to retire?",
                acceptedAnswer: { "@type": "Answer", text: "The 4% rule suggests you need 25x your annual expenses. If you need $60,000/year, you need $1.5 million saved. Social Security reduces this requirement." },
              },
              {
                "@type": "Question",
                name: "What is the 4% rule and is it still valid?",
                acceptedAnswer: { "@type": "Answer", text: "The 4% rule says you can withdraw 4% of your retirement savings annually and your money will last 30+ years. Some experts suggest 3-3.5% for more conservative planning." },
              },
              {
                "@type": "Question",
                name: "When should I claim Social Security?",
                acceptedAnswer: { "@type": "Answer", text: "You can claim at 62 (reduced), 66-67 (full), or delay until 70 (increased by 8%/year). Delaying maximizes lifetime benefits if you're healthy and can afford to wait." },
              },
              {
                "@type": "Question",
                name: "Can I retire early at 55 or 60?",
                acceptedAnswer: { "@type": "Answer", text: "Early retirement requires aggressive saving. You'll need to cover expenses until Social Security at 62+ and Medicare at 65, including healthcare costs of $1,000+/month." },
              },
              {
                "@type": "Question",
                name: "What if I'm starting late on retirement savings?",
                acceptedAnswer: { "@type": "Answer", text: "If you're 50+, take advantage of catch-up contributions (extra $7,500 to 401k, $1,000 to IRA). Maximize contributions and consider working a few extra years." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
