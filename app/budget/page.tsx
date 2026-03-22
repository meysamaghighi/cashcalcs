import type { Metadata } from "next";
import Link from "next/link";
import BudgetCalculator from "../components/BudgetCalculator";
import { budgetScenarios } from "../lib/budget-engine";
import RelatedCalculators from "../components/RelatedCalculators";

export const metadata: Metadata = {
  title: "50/30/20 Budget Calculator - Free Monthly Budget Planner | CashCalcs",
  description:
    "Free 50/30/20 budget calculator. Enter your income to see exactly how much to spend on needs, wants, and savings. Personalized budget breakdown with spending suggestions.",
  keywords: [
    "50/30/20 budget calculator",
    "budget calculator",
    "monthly budget planner",
    "50 30 20 rule",
    "budget breakdown",
    "how to budget",
    "budgeting tool",
    "personal budget calculator",
  ],
  openGraph: {
    title: "50/30/20 Budget Calculator - Free Monthly Budget Planner | CashCalcs",
    description:
      "Free 50/30/20 budget calculator. Enter your income to see exactly how much to spend on needs, wants, and savings. Personalized budget breakdown with spending suggestions.",
    type: "website",
  },
};

export default function BudgetPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          50/30/20 Budget{" "}
          <span className="text-amber-600">Calculator</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Enter your monthly income and get a personalized budget breakdown.
          See exactly how much to spend on needs, wants, and savings.
        </p>
        <p className="text-sm text-gray-400">
          Free budget planner with spending suggestions and savings projections
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <BudgetCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Budget Scenarios
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {budgetScenarios.map((s) => (
            <Link
              key={s.slug}
              href={`/budget/${s.slug}`}
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
          How the 50/30/20 Rule Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-red-600 mb-3">
              50% Needs
            </h3>
            <p className="text-gray-700 text-sm">
              Half your take-home pay goes to essentials you cannot avoid:
              housing, utilities, groceries, transportation, insurance, and
              minimum debt payments. If your needs exceed 50%, look for ways
              to reduce housing costs or refinance debt.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">
              30% Wants
            </h3>
            <p className="text-gray-700 text-sm">
              The things that make life enjoyable but are not strictly necessary:
              dining out, entertainment, streaming services, shopping, hobbies,
              and travel. This category is the most flexible and where most
              budget cuts happen.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-green-600 mb-3">
              20% Savings
            </h3>
            <p className="text-gray-700 text-sm">
              The money that builds your future: emergency fund, retirement
              contributions (401k, IRA), extra debt payments above minimums,
              and investments. This 20% is what separates wealth builders
              from paycheck-to-paycheck living.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          50/30/20 Budget by Income Level
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 text-gray-900">Annual Income</th>
                <th className="text-right py-3 text-gray-900">Monthly</th>
                <th className="text-right py-3 text-red-600">Needs (50%)</th>
                <th className="text-right py-3 text-blue-600">Wants (30%)</th>
                <th className="text-right py-3 text-green-600">Savings (20%)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[30000, 40000, 50000, 60000, 75000, 100000, 125000, 150000].map((income) => {
                const monthly = Math.round(income / 12);
                return (
                  <tr key={income} className="border-b border-gray-100">
                    <td className="py-2 font-medium">${(income / 1000)}K</td>
                    <td className="text-right">${monthly.toLocaleString()}</td>
                    <td className="text-right text-red-600">${Math.round(monthly * 0.5).toLocaleString()}</td>
                    <td className="text-right text-blue-600">${Math.round(monthly * 0.3).toLocaleString()}</td>
                    <td className="text-right text-green-600">${Math.round(monthly * 0.2).toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Budgeting Tips for 2026
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            The 50/30/20 budget rule, popularized by Senator Elizabeth Warren
            in her book "All Your Worth," is one of the simplest and most
            effective budgeting frameworks. It works because it is flexible
            enough to adapt to any income level while providing clear guardrails.
          </p>
          <p>
            The key insight is that you do not need to track every dollar. Instead,
            set up three accounts (checking for needs, a separate account for wants,
            and a savings/investment account) and automate transfers on payday.
            This system runs on autopilot and prevents overspending without
            constant willpower.
          </p>
        </div>
      </section>

      <RelatedCalculators current="/budget" />

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What is the 50/30/20 rule?</h3>
            <p className="text-gray-700 text-sm">The 50/30/20 rule is a simple budgeting framework where you allocate 50% of your after-tax income to needs (housing, food, utilities), 30% to wants (entertainment, dining out, hobbies), and 20% to savings and debt repayment. It was popularized by Senator Elizabeth Warren.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Should I use gross or net income?</h3>
            <p className="text-gray-700 text-sm">Use your net (after-tax) income, also called take-home pay. This is the amount that actually hits your bank account after taxes, health insurance, and other payroll deductions. If you are unsure, check your most recent pay stub for the net amount.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What if my needs are more than 50%?</h3>
            <p className="text-gray-700 text-sm">If your needs exceed 50%, first look at your biggest expense (usually housing). Consider if you can get a roommate, move to a cheaper area, or refinance. If that is not possible, adjust to 60/20/20 or 55/25/20. The key is still saving at least 15-20% of your income.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Is the 50/30/20 rule good for high earners?</h3>
            <p className="text-gray-700 text-sm">High earners ($100K+) should consider being more aggressive with savings. A 40/20/40 or 45/15/40 split accelerates wealth building. You do not need to spend 30% on wants just because you earn more. Lifestyle inflation is the biggest threat to high earners building wealth.</p>
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
              { "@type": "ListItem", position: 2, name: "Budget Calculator", item: "https://cashcalcs.com/budget" },
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
            name: "50/30/20 Budget Calculator",
            description: "Free budget calculator using the 50/30/20 rule.",
            url: "https://cashcalcs.com/budget",
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
                name: "What is the 50/30/20 rule?",
                acceptedAnswer: { "@type": "Answer", text: "The 50/30/20 rule allocates 50% of after-tax income to needs, 30% to wants, and 20% to savings and debt repayment." },
              },
              {
                "@type": "Question",
                name: "Should I use gross or net income?",
                acceptedAnswer: { "@type": "Answer", text: "Use your net (after-tax) take-home pay for the 50/30/20 budget calculation." },
              },
              {
                "@type": "Question",
                name: "What if my needs are more than 50%?",
                acceptedAnswer: { "@type": "Answer", text: "Try to reduce housing costs or adjust to 60/20/20. The key is still saving at least 15-20% of your income." },
              },
              {
                "@type": "Question",
                name: "Is the 50/30/20 rule good for high earners?",
                acceptedAnswer: { "@type": "Answer", text: "High earners should consider a more aggressive savings split like 40/20/40 to build wealth faster." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
