import type { Metadata } from "next";
import Link from "next/link";
import TaxCalculator from "../components/TaxCalculator";
import { taxScenarios } from "../lib/tax-engine";

export const metadata: Metadata = {
  title: "Income Tax Calculator 2026 - Federal & State Tax Estimator | CashCalcs",
  description:
    "Free income tax calculator for 2026. Calculate federal and state taxes, see your effective vs marginal rate, and get a full bracket breakdown.",
  keywords: [
    "income tax calculator",
    "federal tax calculator",
    "tax estimator 2026",
    "how much tax do I owe",
    "effective tax rate",
    "marginal tax rate",
    "tax brackets 2026",
    "state income tax calculator",
  ],
};

export default function TaxCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Income Tax{" "}
          <span className="text-indigo-600">Calculator</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Estimate your 2026 federal and state income taxes. See your effective rate,
          marginal rate, and exactly how progressive tax brackets work.
        </p>
        <p className="text-sm text-gray-400">
          Free calculator. Your data never leaves your browser.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <TaxCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Common Tax Scenarios
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {taxScenarios.map((s) => (
            <Link
              key={s.slug}
              href={`/tax-calculator/${s.slug}`}
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
          2026 Federal Tax Brackets
        </h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-indigo-50 text-left text-gray-700">
                  <th className="p-4">Tax Rate</th>
                  <th className="p-4">Single</th>
                  <th className="p-4">Married Filing Jointly</th>
                  <th className="p-4">Head of Household</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-50">
                  <td className="p-4 font-medium text-gray-900">10%</td>
                  <td className="p-4 text-gray-700">$0 - $11,925</td>
                  <td className="p-4 text-gray-700">$0 - $23,850</td>
                  <td className="p-4 text-gray-700">$0 - $17,000</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="p-4 font-medium text-gray-900">12%</td>
                  <td className="p-4 text-gray-700">$11,925 - $48,475</td>
                  <td className="p-4 text-gray-700">$23,850 - $96,950</td>
                  <td className="p-4 text-gray-700">$17,000 - $64,850</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="p-4 font-medium text-gray-900">22%</td>
                  <td className="p-4 text-gray-700">$48,475 - $103,350</td>
                  <td className="p-4 text-gray-700">$96,950 - $206,700</td>
                  <td className="p-4 text-gray-700">$64,850 - $103,350</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="p-4 font-medium text-gray-900">24%</td>
                  <td className="p-4 text-gray-700">$103,350 - $197,300</td>
                  <td className="p-4 text-gray-700">$206,700 - $394,600</td>
                  <td className="p-4 text-gray-700">$103,350 - $197,300</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="p-4 font-medium text-gray-900">32%</td>
                  <td className="p-4 text-gray-700">$197,300 - $250,525</td>
                  <td className="p-4 text-gray-700">$394,600 - $501,050</td>
                  <td className="p-4 text-gray-700">$197,300 - $250,500</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="p-4 font-medium text-gray-900">35%</td>
                  <td className="p-4 text-gray-700">$250,525 - $626,350</td>
                  <td className="p-4 text-gray-700">$501,050 - $751,600</td>
                  <td className="p-4 text-gray-700">$250,500 - $626,350</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900">37%</td>
                  <td className="p-4 text-gray-700">Over $626,350</td>
                  <td className="p-4 text-gray-700">Over $751,600</td>
                  <td className="p-4 text-gray-700">Over $626,350</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-sm text-gray-500 text-center">
          Brackets shown are for 2026 (estimated with inflation adjustments). Standard deductions: Single $15,700, Married $31,400, Head of Household $23,550.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Understanding Your Taxes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-indigo-600 mb-3">
              Effective vs Marginal Rate
            </h3>
            <p className="text-gray-700 text-sm">
              Your <strong>marginal rate</strong> is the tax on your next dollar earned (e.g., 22%). Your <strong>effective rate</strong> is total tax / taxable income (e.g., 15%). Because of progressive brackets, you never pay your marginal rate on all income. The first $11,925 is always taxed at 10% (single filers).
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-indigo-600 mb-3">
              Progressive Tax Brackets
            </h3>
            <p className="text-gray-700 text-sm">
              The US uses progressive taxation. If you earn $75,000, you don&apos;t pay 22% on all of it. You pay 10% on the first $11,925, 12% on $11,925-$48,475, and 22% on $48,475-$75,000. This means higher earners pay a larger percentage, but everyone benefits from lower rates on initial income.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-indigo-600 mb-3">
              Standard vs Itemized Deductions
            </h3>
            <p className="text-gray-700 text-sm">
              Most taxpayers take the standard deduction ($15,700 single, $31,400 married for 2026). You only itemize if mortgage interest, state/local taxes (capped at $10K), and charitable donations exceed the standard deduction. The calculator defaults to standard deduction but lets you add itemized amounts.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-indigo-600 mb-3">
              Pre-Tax Retirement Contributions
            </h3>
            <p className="text-gray-700 text-sm">
              Contributing to a 401(k) or traditional IRA reduces taxable income dollar-for-dollar. If you earn $75,000 and contribute $10,000 to a 401(k), you only pay tax on $65,000. This saves you $2,200 in federal tax (at the 22% bracket). Max 401(k) is $23,500/year (2025-2026).
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
            <h3 className="font-bold text-gray-900 mb-2">How much federal tax will I pay on $75,000?</h3>
            <p className="text-gray-700 text-sm">As a single filer with the standard deduction, you&apos;ll pay approximately $9,235 in federal income tax on $75,000 gross income (effective rate 15.6%). Add state tax (varies by state) and FICA (Social Security + Medicare, 7.65%) for total tax burden.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What is the difference between marginal and effective tax rate?</h3>
            <p className="text-gray-700 text-sm">Marginal rate is the tax bracket you&apos;re in (the rate on your last dollar earned). Effective rate is your total tax divided by taxable income. If you&apos;re in the 22% bracket, your effective rate might be 14% because lower brackets apply to initial income.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Do tax brackets include state taxes?</h3>
            <p className="text-gray-700 text-sm">No. Federal tax brackets are separate from state income tax. Nine states have no income tax (FL, TX, WA, NV, WY, SD, TN, AK, NH). California has the highest top rate (13.3%). This calculator lets you adjust state tax rate (0-13%).</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How can I lower my taxable income?</h3>
            <p className="text-gray-700 text-sm">Contribute to a 401(k) or traditional IRA (up to $23,500 + $7,000 respectively), contribute to an HSA ($4,300 individual, $8,550 family), claim all deductions (mortgage interest, charitable donations, student loan interest up to $2,500), and consider tax-loss harvesting in investment accounts.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Are Social Security and Medicare included in this calculator?</h3>
            <p className="text-gray-700 text-sm">No. This calculator shows federal income tax and state tax only. Add 7.65% for FICA taxes (6.2% Social Security + 1.45% Medicare) if you&apos;re an employee. Self-employed pay 15.3% (both employee and employer portions). High earners pay an additional 0.9% Medicare tax on income over $200K.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Income Tax Calculator 2026",
            description: "Free income tax calculator for 2026. Calculate federal and state taxes with full bracket breakdown.",
            url: "https://cashcalcs.com/tax-calculator",
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
                name: "How much federal tax will I pay on $75,000?",
                acceptedAnswer: { "@type": "Answer", text: "As a single filer with the standard deduction, you'll pay approximately $9,235 in federal income tax on $75,000 gross income (effective rate 15.6%). Add state tax and FICA for total burden." },
              },
              {
                "@type": "Question",
                name: "What is the difference between marginal and effective tax rate?",
                acceptedAnswer: { "@type": "Answer", text: "Marginal rate is the tax bracket you're in. Effective rate is total tax / taxable income. Progressive brackets mean effective rate is always lower than marginal." },
              },
              {
                "@type": "Question",
                name: "Do tax brackets include state taxes?",
                acceptedAnswer: { "@type": "Answer", text: "No. Federal tax brackets are separate from state income tax. Nine states have no income tax. California has the highest (13.3%)." },
              },
              {
                "@type": "Question",
                name: "How can I lower my taxable income?",
                acceptedAnswer: { "@type": "Answer", text: "Contribute to 401(k), traditional IRA, HSA. Claim mortgage interest, charitable donations, student loan interest. Consider tax-loss harvesting." },
              },
              {
                "@type": "Question",
                name: "Are Social Security and Medicare included in this calculator?",
                acceptedAnswer: { "@type": "Answer", text: "No. This shows federal income tax and state tax only. Add 7.65% for FICA if you're an employee, 15.3% if self-employed." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
