import type { Metadata } from "next";
import Link from "next/link";
import DebtCalculator from "../components/DebtCalculator";
import { debtTypes } from "../lib/debt-engine";
import RelatedCalculators from "../components/RelatedCalculators";
import RelatedGuides from "../components/RelatedGuides";

export const metadata: Metadata = {
  title: "Debt Payoff Calculator - Avalanche vs Snowball | CashCalcs",
  description:
    "Free debt payoff calculator. Compare avalanche and snowball methods, see your debt-free date and interest savings.",
  keywords: [
    "debt payoff calculator",
    "debt free calculator",
    "avalanche vs snowball",
    "debt snowball calculator",
    "debt avalanche calculator",
    "pay off debt faster",
    "credit card payoff calculator",
    "student loan payoff calculator",
  ],
  openGraph: {
    title: "Debt Payoff Calculator - Avalanche vs Snowball | CashCalcs",
    description:
      "Free debt payoff calculator. Compare avalanche and snowball methods, see your debt-free date and interest savings.",
    type: "website",
  },
  alternates: {
    canonical: "/debt-payoff",
  },
};

export default function DebtPayoffPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Debt Payoff <span className="text-blue-600">Calculator</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Enter your debts, compare avalanche vs snowball strategies, and find
          your debt-free date. See how extra payments save you thousands.
        </p>
        <p className="text-sm text-gray-400">Free, no sign-up required. Your data stays in your browser.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <DebtCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Payoff Calculators by Debt Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {debtTypes.map((dt) => (
            <Link key={dt.slug} href={`/debt-payoff/${dt.slug}`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center">
              <p className="font-bold text-gray-900 text-sm">{dt.name}</p>
              <p className="text-xs text-gray-500">{dt.commonRates}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Avalanche vs Snowball: Which Method Is Best?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">Avalanche Method</h3>
            <p className="text-gray-700 text-sm mb-3">
              Pay minimums on everything, then put all extra money toward the debt with the <strong>highest interest rate</strong>.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>+ Saves the most money in total interest</li>
              <li>+ Mathematically optimal</li>
              <li>- Can feel slow if highest-rate debt is large</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">Snowball Method</h3>
            <p className="text-gray-700 text-sm mb-3">
              Pay minimums on everything, then put all extra money toward the debt with the <strong>smallest balance</strong>.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>+ Quick wins boost motivation</li>
              <li>+ Fewer debts to track sooner</li>
              <li>- Costs more in total interest</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pay Off Debt Faster in 2026</h2>
        <div className="max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            The average American household carries $104,000 in debt. The two most popular strategies
            are the avalanche method (highest interest first) and the snowball method (smallest balance first).
            The avalanche saves more money; the snowball has higher completion rates.
          </p>
          <p>
            Even $100 extra per month on $20,000 of credit card debt at 22% saves over $14,000 in interest.
            Use the calculator above to see the exact impact for your situation.
          </p>
        </div>
      </section>

      <RelatedCalculators current="/debt-payoff" />

      <RelatedGuides current="/debt-payoff" />

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What is the avalanche method?</h3>
            <p className="text-gray-700 text-sm">The avalanche method means paying minimums on all debts and putting extra money toward the debt with the highest interest rate. Once that debt is paid off, you move to the next highest rate. This method saves the most money on interest over time.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What is the snowball method?</h3>
            <p className="text-gray-700 text-sm">The snowball method means paying minimums on all debts and putting extra money toward the smallest balance first. Once paid off, you roll that payment into the next smallest debt. This method provides quick wins that keep you motivated.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How much extra should I pay toward debt each month?</h3>
            <p className="text-gray-700 text-sm">Any extra amount helps. Even $50 extra per month can save thousands in interest and shave years off your payoff timeline. The more you can pay above minimums, the faster you become debt-free. Use the calculator above to see the exact impact.</p>
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
              { "@type": "ListItem", position: 2, name: "Debt Payoff Calculator", item: "https://cashcalcs.com/debt-payoff" },
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
            name: "Debt Payoff Calculator",
            description: "Free debt payoff calculator. Compare avalanche and snowball methods.",
            url: "https://cashcalcs.com/debt-payoff",
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
                name: "What is the avalanche method?",
                acceptedAnswer: { "@type": "Answer", text: "The avalanche method means paying minimums on all debts and putting extra money toward the debt with the highest interest rate. Once that debt is paid off, you move to the next highest rate. This method saves the most money on interest over time." },
              },
              {
                "@type": "Question",
                name: "What is the snowball method?",
                acceptedAnswer: { "@type": "Answer", text: "The snowball method means paying minimums on all debts and putting extra money toward the smallest balance first. Once paid off, you roll that payment into the next smallest debt. This method provides quick wins that keep you motivated." },
              },
              {
                "@type": "Question",
                name: "How much extra should I pay toward debt each month?",
                acceptedAnswer: { "@type": "Answer", text: "Any extra amount helps. Even $50 extra per month can save thousands in interest and shave years off your payoff timeline." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
