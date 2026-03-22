import type { Metadata } from "next";
import Link from "next/link";
import SavingsCalculator from "../components/SavingsCalculator";
import { savingsGoals } from "../lib/savings-engine";
import RelatedCalculators from "../components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Savings Goal Calculator - Plan Any Goal with Compound Interest | CashCalcs",
  description:
    "Free savings goal calculator. Calculate how long to reach any savings goal with compound interest. Plan emergency fund, house down payment, vacation, or any financial target in 2026.",
  keywords: [
    "savings goal calculator",
    "savings calculator",
    "how long to save",
    "compound interest calculator",
    "emergency fund calculator",
    "down payment calculator",
    "monthly savings calculator",
  ],
  openGraph: {
    title: "Savings Goal Calculator | CashCalcs",
    description:
      "Free savings goal calculator with compound interest. Plan for emergency fund, house, vacation, car, wedding, or retirement.",
    type: "website",
  },
};

export default function SavingsGoalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          How Long Until You Reach Your{" "}
          <span className="text-emerald-600">Savings Goal?</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Enter your goal, monthly savings, and interest rate. See exactly when
          you will reach it and how much interest you will earn along the way.
        </p>
        <p className="text-sm text-gray-400">Free calculator with compound interest and deadline planning</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <SavingsCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Savings Goals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {savingsGoals.map((g) => (
            <Link key={g.slug} href={`/savings-goal/${g.slug}`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center">
              <p className="font-bold text-gray-900 text-sm">{g.name}</p>
              <p className="text-xs text-gray-500 mt-1">Goal: ${g.goalAmount.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Savings Growth Works</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-emerald-600 mb-3">Compound Interest</h3>
            <p className="text-gray-700 text-sm">
              When you earn interest on your savings, that interest gets added to your balance.
              Next month, you earn interest on the new, larger balance. Over time this snowball
              effect can add thousands to your savings.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-emerald-600 mb-3">Consistency Beats Amount</h3>
            <p className="text-gray-700 text-sm">
              Saving $200 every month for 5 years beats saving $5,000 once. Automating your
              savings on payday ensures you pay yourself first. Even small amounts grow
              significantly with compound interest.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Savings Goal Calculator</h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            This free calculator helps you plan any financial goal. Enter your target amount,
            how much you can save each month, and your expected annual return rate to see
            exactly how long it will take.
          </p>
          <p>
            You can also set a deadline to see how much you need to save monthly to hit your
            goal by a specific date. This is useful for goals with a known timeline.
          </p>
        </div>
      </section>

      <RelatedCalculators current="/savings-goal" />

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How much should I save each month?</h3>
            <p className="text-gray-700 text-sm">Financial experts recommend saving at least 20% of your income (the 50/30/20 rule). However, the right amount depends on your goals and timeline. Use the calculator above to find the exact monthly savings needed for your specific goal and deadline.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Where should I keep my savings?</h3>
            <p className="text-gray-700 text-sm">For short-term goals (under 3 years), use a high-yield savings account (currently 4-5% APY). For goals 5+ years away, consider investing in index funds for higher long-term returns (historically 7-10% annually). For goals in between, a mix of both works well.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How big should my emergency fund be?</h3>
            <p className="text-gray-700 text-sm">Most experts recommend 3-6 months of living expenses. If you have a stable job, 3 months is sufficient. If you are self-employed or have variable income, aim for 6 months. Keep it in a high-yield savings account for easy access.</p>
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
              { "@type": "ListItem", position: 2, name: "Savings Goal Calculator", item: "https://cashcalcs.com/savings-goal" },
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
            name: "Savings Goal Calculator",
            description: "Free savings goal calculator with compound interest.",
            url: "https://cashcalcs.com/savings-goal",
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
                name: "How much should I save each month?",
                acceptedAnswer: { "@type": "Answer", text: "Financial experts recommend saving at least 20% of your income (the 50/30/20 rule). The right amount depends on your goals and timeline." },
              },
              {
                "@type": "Question",
                name: "Where should I keep my savings?",
                acceptedAnswer: { "@type": "Answer", text: "For short-term goals (under 3 years), use a high-yield savings account (4-5% APY). For goals 5+ years away, consider index funds for higher returns (7-10% annually)." },
              },
              {
                "@type": "Question",
                name: "How big should my emergency fund be?",
                acceptedAnswer: { "@type": "Answer", text: "Most experts recommend 3-6 months of living expenses. If you have a stable job, 3 months is sufficient. If self-employed, aim for 6 months. Keep it in a high-yield savings account." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
