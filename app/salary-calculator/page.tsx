import type { Metadata } from "next";
import Link from "next/link";
import SalaryCalculator from "../components/SalaryCalculator";
import { salaryScenarios } from "../lib/salary-engine";

export const metadata: Metadata = {
  title: "Salary Calculator - Hourly to Annual, Weekly to Monthly | CashCalcs",
  description:
    "Free salary calculator: convert between hourly, weekly, biweekly, monthly, and annual pay. See how much you make per hour, day, week, month, and year.",
  keywords: [
    "salary calculator",
    "hourly to salary",
    "salary to hourly",
    "annual salary calculator",
    "how much do I make a year",
    "hourly to annual",
    "wage calculator",
    "pay calculator",
    "20 an hour is how much a year",
  ],
};

export default function SalaryCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Salary{" "}
          <span className="text-cyan-600">Calculator</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Convert your pay between hourly, weekly, biweekly, monthly, and annual.
          Adjust hours and weeks to match your schedule.
        </p>
        <p className="text-sm text-gray-400">
          Free calculator. Your data never leaves your browser.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <SalaryCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Common Salary Conversions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {salaryScenarios.map((s) => (
            <Link
              key={s.slug}
              href={`/salary-calculator/${s.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center"
            >
              <p className="font-bold text-gray-900 text-sm">{s.name}</p>
              <p className="text-xs text-gray-500 mt-1">
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Quick Reference: Hourly to Annual
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm">
            <thead>
              <tr className="border-b text-left text-gray-500">
                <th className="p-4">Hourly Rate</th>
                <th className="p-4 text-right">Weekly (40h)</th>
                <th className="p-4 text-right">Monthly</th>
                <th className="p-4 text-right">Annual</th>
              </tr>
            </thead>
            <tbody>
              {[10, 12, 15, 18, 20, 22, 25, 30, 35, 40, 50, 60, 75, 100].map(
                (rate) => (
                  <tr key={rate} className="border-b border-gray-50">
                    <td className="p-4 font-medium text-gray-900">
                      ${rate}/hr
                    </td>
                    <td className="p-4 text-right text-gray-700">
                      ${(rate * 40).toLocaleString()}
                    </td>
                    <td className="p-4 text-right text-gray-700">
                      ${Math.round((rate * 40 * 52) / 12).toLocaleString()}
                    </td>
                    <td className="p-4 text-right text-cyan-700 font-medium">
                      ${(rate * 40 * 52).toLocaleString()}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Salary Conversion Explained
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-cyan-600 mb-3">
              Hourly to Annual
            </h3>
            <p className="text-gray-700 text-sm">
              Multiply your hourly rate by the number of hours you work per week,
              then multiply by 52 (weeks per year). For example: $25/hour x 40
              hours x 52 weeks = $52,000/year.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-cyan-600 mb-3">
              Annual to Hourly
            </h3>
            <p className="text-gray-700 text-sm">
              Divide your annual salary by 52 weeks, then divide by hours per
              week. For example: $75,000 / 52 / 40 = $36.06/hour. This helps
              compare salaried positions with hourly jobs.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-cyan-600 mb-3">
              Biweekly Paychecks
            </h3>
            <p className="text-gray-700 text-sm">
              Most Americans are paid biweekly (every two weeks), resulting in 26
              paychecks per year. Divide your annual salary by 26 to get your
              biweekly gross pay. Two months per year you get three paychecks
              instead of two.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-cyan-600 mb-3">
              Unpaid Time Off
            </h3>
            <p className="text-gray-700 text-sm">
              If you do not get paid time off, adjust weeks per year accordingly.
              Working 48 weeks (4 weeks unpaid vacation) at $25/hour = $48,000
              instead of $52,000. This is common for contractors and freelancers.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How do I convert hourly wage to annual salary?</h3>
            <p className="text-gray-700 text-sm">Multiply your hourly rate by hours worked per week, then by 52 weeks. For full-time (40 hours): hourly rate x 2,080 = annual salary. $20/hour = $41,600/year.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Is salary before or after taxes?</h3>
            <p className="text-gray-700 text-sm">Salary and hourly rates are typically quoted as gross pay (before taxes). Your actual take-home pay (net) will be 20-35% less after federal income tax, state tax, Social Security (6.2%), and Medicare (1.45%).</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How many working hours are in a year?</h3>
            <p className="text-gray-700 text-sm">A standard full-time work year is 2,080 hours (40 hours/week x 52 weeks). With 2 weeks paid vacation, actual working hours are 2,000. With federal holidays (11 days), it drops to about 1,912 hours.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Salary Calculator",
            description: "Free salary calculator: convert between hourly, weekly, biweekly, monthly, and annual pay.",
            url: "https://cashcalcs.com/salary-calculator",
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
                name: "How do I convert hourly wage to annual salary?",
                acceptedAnswer: { "@type": "Answer", text: "Multiply your hourly rate by hours worked per week, then by 52 weeks. For full-time (40 hours): hourly rate x 2,080 = annual salary." },
              },
              {
                "@type": "Question",
                name: "Is salary before or after taxes?",
                acceptedAnswer: { "@type": "Answer", text: "Salary and hourly rates are typically quoted as gross pay (before taxes). Take-home pay is 20-35% less after federal, state, Social Security, and Medicare taxes." },
              },
              {
                "@type": "Question",
                name: "How many working hours are in a year?",
                acceptedAnswer: { "@type": "Answer", text: "A standard full-time work year is 2,080 hours (40 hours/week x 52 weeks). With vacation and holidays, actual working hours are around 1,912." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
