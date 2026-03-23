import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Pay Off Student Loans Faster (2026 Guide) | CashCalcs",
  description:
    "Strategies to pay off student loans faster: refinancing, extra payments, income-driven plans, forgiveness programs, and the math behind each option.",
  keywords: [
    "pay off student loans",
    "student loan repayment",
    "student loan payoff strategies",
    "student loan refinance",
    "income driven repayment",
    "student loan forgiveness",
    "how to pay off student debt",
  ],
  openGraph: {
    title: "How to Pay Off Student Loans Faster (2026 Guide) | CashCalcs",
    description:
      "Strategies to pay off student loans faster: refinancing, extra payments, income-driven plans, forgiveness programs, and the math behind each option.",
    type: "article",
  },
};

export default function StudentLoanGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/loan-calculator" className="hover:text-gray-700">Loan Calculator</Link>
          {" > "}
          <span className="text-gray-900">Student Loan Payoff Guide</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How to Pay Off Student Loans Faster
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          The average US student loan debt is $37,000 with a 10-year repayment
          plan. But with the right strategy, you can pay it off years early and
          save thousands in interest. Here are the most effective approaches.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Know Your Numbers First
          </h2>
          <p className="text-gray-700 mb-4">
            Before choosing a strategy, gather these details for every loan:
          </p>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <ul className="text-gray-700 space-y-2">
              <li><strong>Total balance</strong> - what you owe across all loans</li>
              <li><strong>Interest rate</strong> - federal loans: 5.5-8%; private loans: 3-15%</li>
              <li><strong>Loan servicer</strong> - who you send payments to</li>
              <li><strong>Monthly minimum</strong> - the required payment</li>
              <li><strong>Federal vs. private</strong> - this determines which strategies apply</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Strategy 1: Make Extra Payments
          </h2>
          <p className="text-gray-700 mb-4">
            The simplest and most effective approach. Use the <Link href="/debt-payoff" className="text-blue-600 hover:underline font-medium">debt payoff calculator</Link> to
            see exactly how much extra payments save. Even small extra payments
            compound over time:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="p-4">Extra/Month</th>
                  <th className="p-4 text-right">Interest Saved</th>
                  <th className="p-4 text-right">Years Saved</th>
                  <th className="p-4 text-right">Payoff Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { extra: "$0 (minimum only)", saved: "$0", years: "0", time: "10 years" },
                  { extra: "$50", saved: "$1,800", years: "1.5", time: "8.5 years" },
                  { extra: "$100", saved: "$3,100", years: "2.5", time: "7.5 years" },
                  { extra: "$200", saved: "$5,100", years: "3.8", time: "6.2 years" },
                  { extra: "$500", saved: "$7,700", years: "5.5", time: "4.5 years" },
                ].map((row) => (
                  <tr key={row.extra} className="border-b border-gray-50">
                    <td className="p-4 font-medium text-gray-900">{row.extra}</td>
                    <td className="p-4 text-right text-emerald-700">{row.saved}</td>
                    <td className="p-4 text-right text-emerald-700">{row.years}</td>
                    <td className="p-4 text-right text-gray-700">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic">
            Based on $37,000 at 5.5% interest, standard 10-year repayment.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
            <p className="text-sm text-amber-800">
              <strong>Important:</strong> Tell your servicer to apply extra payments
              to principal, not advance your due date. Some servicers apply extra
              payments to future payments by default, which does not save interest.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Strategy 2: Refinance to a Lower Rate
          </h2>
          <p className="text-gray-700 mb-4">
            If you have good credit (700+) and stable income, refinancing can
            lower your rate by 1-3%. This works for both federal and private loans,
            but refinancing federal loans into private means losing access to
            forgiveness programs and income-driven plans.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-xl p-5">
              <h3 className="font-bold text-emerald-800 mb-2">When to Refinance</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Credit score 700+ with steady income</li>
                <li>Current rate is above 6-7%</li>
                <li>Not pursuing Public Service Loan Forgiveness</li>
                <li>Have a private loan with a high rate</li>
              </ul>
            </div>
            <div className="bg-rose-50 rounded-xl p-5">
              <h3 className="font-bold text-rose-800 mb-2">When NOT to Refinance</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>You work in public service (PSLF eligibility)</li>
                <li>You may need income-driven repayment</li>
                <li>Your income is unstable</li>
                <li>Your federal rate is already low (under 4%)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Strategy 3: Avalanche vs. Snowball Method
          </h2>
          <p className="text-gray-700 mb-4">
            If you have multiple loans, the order you pay them off matters:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-blue-700 mb-2">Avalanche Method</h3>
              <p className="text-sm text-gray-700 mb-2">
                Pay minimums on all loans, then throw extra money at the
                <strong> highest interest rate</strong> loan first.
              </p>
              <p className="text-sm text-emerald-700 font-medium">
                Saves the most money mathematically.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-purple-700 mb-2">Snowball Method</h3>
              <p className="text-sm text-gray-700 mb-2">
                Pay minimums on all loans, then throw extra money at the
                <strong> smallest balance</strong> loan first.
              </p>
              <p className="text-sm text-purple-700 font-medium">
                Builds momentum with quick wins.
              </p>
            </div>
          </div>
          <p className="text-gray-700">
            Both work. Avalanche saves more money; snowball provides psychological
            wins. Choose the one you will actually stick with. Use our{" "}
            <Link href="/debt-payoff" className="text-blue-600 underline hover:text-blue-800">
              debt payoff calculator
            </Link>{" "}
            to compare both methods with your actual loans.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Strategy 4: Federal Loan Forgiveness Programs
          </h2>
          <p className="text-gray-700 mb-4">
            If you have federal student loans, several forgiveness programs exist:
          </p>
          <div className="space-y-3">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-1">Public Service Loan Forgiveness (PSLF)</h3>
              <p className="text-sm text-gray-700">
                Work for a qualifying employer (government, nonprofit) and make 120
                qualifying payments (10 years). Remaining balance is forgiven
                tax-free. You must be on an income-driven repayment plan.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-1">Income-Driven Repayment (IDR) Forgiveness</h3>
              <p className="text-sm text-gray-700">
                After 20-25 years of income-driven payments, remaining balance is
                forgiven. The forgiven amount may be taxable. Plans include SAVE,
                PAYE, IBR, and ICR.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-1">Teacher Loan Forgiveness</h3>
              <p className="text-sm text-gray-700">
                Teach full-time for 5 consecutive years in a qualifying low-income
                school. Up to $17,500 forgiven for STEM and special education
                teachers; $5,000 for others.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Quick Wins: Extra Money for Loan Payments
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <ul className="text-gray-700 space-y-2">
              <li><strong>Tax refund</strong> - Average refund is $3,000. Apply it to your highest-rate loan.</li>
              <li><strong>Side hustle income</strong> - Even $200/month from a{" "}
                <Link href="/side-hustle" className="text-blue-600 underline hover:text-blue-800">side hustle</Link>
                {" "}cuts years off repayment.</li>
              <li><strong>Employer match</strong> - Some employers offer student loan repayment benefits ($100-300/month).</li>
              <li><strong>Round up payments</strong> - If your payment is $393, round to $400. Small amounts compound.</li>
              <li><strong>Bi-weekly payments</strong> - Pay half your monthly amount every two weeks. This equals 13 full payments per year instead of 12.</li>
              <li><strong>Student loan interest deduction</strong> - Deduct up to $2,500/year in interest from your taxes. Use the savings for extra payments.</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-900 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Try These Calculators</h2>
          <p className="text-gray-400 mb-4">Put this knowledge into action with our free tools.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/debt-payoff" className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">Debt Payoff Calculator</Link>
            <Link href="/loan-calculator" className="px-5 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-medium transition-colors">Loan Calculator</Link>
            <Link href="/side-hustle" className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors">Side Hustle Calculator</Link>
          </div>
        </section>

        <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-violet-800 mb-2">
            Calculate Your Payoff Plan
          </h2>
          <p className="text-gray-700 mb-4">
            See exactly how extra payments, refinancing, or changing your term
            affects your student loan payoff.
          </p>
          <Link
            href="/loan-calculator/student-loan"
            className="inline-block px-6 py-3 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition-colors"
          >
            Student Loan Calculator
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Pay Off Student Loans Faster (2026 Guide)",
            description:
              "Strategies to pay off student loans faster: refinancing, extra payments, income-driven plans, and forgiveness programs.",
            url: "https://cashcalcs.com/guides/how-to-pay-off-student-loans",
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
