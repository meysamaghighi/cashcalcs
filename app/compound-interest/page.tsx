import type { Metadata } from "next";
import Link from "next/link";
import CompoundCalculator from "../components/CompoundCalculator";
import { compoundScenarios } from "../lib/compound-engine";

export const metadata: Metadata = {
  title: "Compound Interest Calculator - See Your Money Grow | CashCalcs",
  description:
    "Free compound interest calculator. Enter your investment, monthly contributions, and interest rate to see how your money grows over time. Interactive charts and year-by-year breakdowns.",
  keywords: [
    "compound interest calculator",
    "investment calculator",
    "compound interest",
    "interest calculator",
    "investment growth calculator",
    "savings growth calculator",
    "rule of 72",
    "how much will my money grow",
  ],
};

export default function CompoundInterestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Compound Interest{" "}
          <span className="text-teal-600">Calculator</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          See how your investments grow over time with compound interest.
          Adjust your starting amount, monthly contributions, and interest rate.
        </p>
        <p className="text-sm text-gray-400">
          Free calculator with interactive growth chart and year-by-year breakdown
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <CompoundCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Investment Scenarios
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {compoundScenarios.map((s) => (
            <Link
              key={s.slug}
              href={`/compound-interest/${s.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center"
            >
              <p className="font-bold text-gray-900 text-sm">{s.name}</p>
              <p className="text-xs text-gray-500 mt-1">
                {s.description.slice(0, 50)}...
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          How Compound Interest Works
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-teal-600 mb-3">
              Simple vs Compound
            </h3>
            <p className="text-gray-700 text-sm">
              Simple interest is calculated only on your original principal.
              Compound interest is calculated on your principal plus all
              previously earned interest. Over time, compound interest creates
              exponential growth while simple interest grows linearly.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-teal-600 mb-3">
              The Rule of 72
            </h3>
            <p className="text-gray-700 text-sm">
              Divide 72 by your annual interest rate to estimate how many years
              it takes to double your money. At 7%, your money doubles in about
              10.3 years. At 10%, it doubles in 7.2 years. At 4%, it takes 18
              years.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-teal-600 mb-3">
              Time is Your Greatest Asset
            </h3>
            <p className="text-gray-700 text-sm">
              Starting 10 years earlier can double your final balance even with
              the same monthly contribution. Someone investing $500/month from
              age 25 to 65 at 7% will have $1.2M. Starting at 35, they will
              have only $567K, less than half.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-teal-600 mb-3">
              Compounding Frequency
            </h3>
            <p className="text-gray-700 text-sm">
              More frequent compounding (daily vs annually) earns slightly more
              interest, but the difference is small. What matters far more is
              your contribution amount, interest rate, and time horizon. Do not
              obsess over compounding frequency.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Understanding Compound Interest in 2026
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Compound interest is often called the eighth wonder of the world.
            Albert Einstein allegedly said, "He who understands it, earns it; he
            who doesn't, pays it." Whether investing in the stock market, saving
            in a high-yield account, or paying off debt, compound interest is
            the most powerful force in personal finance.
          </p>
          <p>
            In 2026, high-yield savings accounts offer 4-5% APY, and the long-term
            average return of the S&P 500 is about 10% annually. Use this calculator
            to see the difference between saving in a bank account versus investing
            in the stock market over 10, 20, or 30 years.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Compound Interest Calculator",
            description: "Free compound interest calculator with interactive charts.",
            url: "https://cashcalcs.com/compound-interest",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
    </main>
  );
}
