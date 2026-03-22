import type { Metadata } from "next";
import Link from "next/link";
import LoanCalculator from "../components/LoanCalculator";
import { loanScenarios } from "../lib/loan-engine";
import RelatedCalculators from "../components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Loan Calculator - Monthly Payment & Amortization | CashCalcs",
  description:
    "Free loan calculator with monthly payment, total interest, and amortization schedule. Calculate auto loans, personal loans, student loans, and more.",
  keywords: [
    "loan calculator",
    "loan payment calculator",
    "auto loan calculator",
    "personal loan calculator",
    "car payment calculator",
    "student loan calculator",
    "loan amortization",
    "monthly payment calculator",
  ],
  openGraph: {
    title: "Loan Calculator - Monthly Payment & Amortization | CashCalcs",
    description:
      "Free loan calculator with monthly payment, total interest, and amortization schedule. Calculate auto loans, personal loans, student loans, and more.",
    type: "website",
  },
};

export default function LoanCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Loan{" "}
          <span className="text-violet-600">Calculator</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Calculate your monthly loan payment, total interest, and see how extra
          payments save you money. Works for auto, personal, student, and any other loan.
        </p>
        <p className="text-sm text-gray-400">
          Free calculator. Your data never leaves your browser.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <LoanCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Loan Scenarios
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {loanScenarios.map((s) => (
            <Link
              key={s.slug}
              href={`/loan-calculator/${s.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center"
            >
              <p className="font-bold text-gray-900 text-sm">{s.name}</p>
              <p className="text-xs text-gray-500 mt-1">
                {s.description.slice(0, 55)}...
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Understanding Loans
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-violet-600 mb-3">
              How Loan Payments Work
            </h3>
            <p className="text-gray-700 text-sm">
              Most loans use amortization: your monthly payment stays the same,
              but the split between principal and interest changes over time.
              Early payments are mostly interest. As you pay down the balance,
              more of each payment goes toward principal.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-violet-600 mb-3">
              Fixed vs Variable Rate
            </h3>
            <p className="text-gray-700 text-sm">
              Fixed-rate loans keep the same rate for the entire term, making
              budgeting predictable. Variable-rate loans start lower but can
              increase. For most borrowers, fixed rate is safer. Variable rates
              only make sense if you plan to pay off the loan quickly.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-violet-600 mb-3">
              The Power of Extra Payments
            </h3>
            <p className="text-gray-700 text-sm">
              Even small extra payments make a big difference. Adding $100/month
              to a $25,000 loan at 8% saves $2,800 in interest and pays it off
              14 months early. Extra payments go directly to principal, which
              reduces the balance that generates interest each month.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-violet-600 mb-3">
              APR vs Interest Rate
            </h3>
            <p className="text-gray-700 text-sm">
              The interest rate is the cost of borrowing. APR (Annual Percentage
              Rate) includes fees and charges, giving you the true cost. Always
              compare APRs, not just interest rates. A lower rate with high fees
              can cost more than a slightly higher rate with no fees.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Average Loan Rates by Type (2026)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm">
            <thead>
              <tr className="border-b text-left text-gray-500">
                <th className="p-4">Loan Type</th>
                <th className="p-4 text-right">Typical Rate</th>
                <th className="p-4 text-right">Typical Term</th>
                <th className="p-4 text-right">Typical Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "Auto (new)", rate: "5.5-8%", term: "4-6 years", amount: "$30-45K" },
                { type: "Auto (used)", rate: "7-11%", term: "3-5 years", amount: "$20-30K" },
                { type: "Personal", rate: "6-36%", term: "2-7 years", amount: "$5-50K" },
                { type: "Student (federal)", rate: "5.5-8%", term: "10-25 years", amount: "$20-50K" },
                { type: "Student (private)", rate: "3-15%", term: "5-20 years", amount: "$10-100K" },
                { type: "Home Equity", rate: "7-10%", term: "5-30 years", amount: "$25-200K" },
                { type: "Debt Consolidation", rate: "7-25%", term: "2-7 years", amount: "$10-50K" },
              ].map((row) => (
                <tr key={row.type} className="border-b border-gray-50">
                  <td className="p-4 font-medium text-gray-900">{row.type}</td>
                  <td className="p-4 text-right text-violet-700">{row.rate}</td>
                  <td className="p-4 text-right text-gray-700">{row.term}</td>
                  <td className="p-4 text-right text-gray-700">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <RelatedCalculators current="/loan-calculator" />

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How is my monthly loan payment calculated?</h3>
            <p className="text-gray-700 text-sm">Your monthly payment is calculated using the standard amortization formula based on loan amount, interest rate, and term length. The formula ensures equal payments throughout the loan, with the interest-to-principal ratio shifting over time.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Should I choose a shorter or longer loan term?</h3>
            <p className="text-gray-700 text-sm">A shorter term means higher monthly payments but less total interest. A longer term lowers payments but costs more overall. For example, a $25,000 loan at 8% costs $5,500 in interest over 4 years but $10,800 over 7 years. Choose the shortest term you can comfortably afford.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Can I pay off my loan early without penalties?</h3>
            <p className="text-gray-700 text-sm">Most personal loans and auto loans have no prepayment penalties. Some lenders charge a fee for early payoff, typically 1-5% of the remaining balance. Always check your loan agreement. Federal student loans never have prepayment penalties.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://cashcalcs.com" },
              { "@type": "ListItem", position: 2, name: "Loan Calculator", item: "https://cashcalcs.com/loan-calculator" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Loan Calculator",
            description: "Free loan calculator with monthly payment, total interest, and amortization schedule.",
            url: "https://cashcalcs.com/loan-calculator",
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
                name: "How is my monthly loan payment calculated?",
                acceptedAnswer: { "@type": "Answer", text: "Your monthly payment is calculated using the standard amortization formula based on loan amount, interest rate, and term length." },
              },
              {
                "@type": "Question",
                name: "Should I choose a shorter or longer loan term?",
                acceptedAnswer: { "@type": "Answer", text: "A shorter term means higher payments but less total interest. A $25,000 loan at 8% costs $5,500 over 4 years but $10,800 over 7 years." },
              },
              {
                "@type": "Question",
                name: "Can I pay off my loan early without penalties?",
                acceptedAnswer: { "@type": "Answer", text: "Most personal and auto loans have no prepayment penalties. Some lenders charge 1-5% of remaining balance. Federal student loans never have penalties." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
