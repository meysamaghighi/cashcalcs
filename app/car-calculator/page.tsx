import type { Metadata } from "next";
import Link from "next/link";
import CarCalculator from "../components/CarCalculator";
import { carScenarios } from "../lib/car-engine";

export const metadata: Metadata = {
  title: "Car Affordability Calculator - How Much Car Can I Afford? | CashCalcs",
  description:
    "Free car affordability calculator. Calculate your max car price, monthly payment, insurance, and gas based on your income. See what you can really afford.",
  keywords: [
    "car affordability calculator",
    "how much car can I afford",
    "car payment calculator",
    "auto loan calculator",
    "car budget calculator",
    "monthly car payment",
    "car loan with insurance",
    "used car budget",
  ],
};

export default function CarCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-lime-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Car Affordability{" "}
          <span className="text-lime-600">Calculator</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Calculate how much car you can afford based on your income, including
          monthly payment, insurance, and gas costs.
        </p>
        <p className="text-sm text-gray-400">
          Free calculator. Your data never leaves your browser.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <CarCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Car Affordability Scenarios
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {carScenarios.map((s) => (
            <Link
              key={s.slug}
              href={`/car-calculator/${s.slug}`}
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
          Smart Car Buying Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-lime-600 mb-3">
              The 20/4/10 Rule
            </h3>
            <p className="text-gray-700 text-sm">
              Put down at least 20%, finance for no more than 4 years, and keep
              total car expenses (payment, insurance, gas, maintenance) under
              10% of gross income. This rule prevents you from becoming
              &quot;car poor&quot; and ensures you can afford the ongoing costs
              of vehicle ownership.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-lime-600 mb-3">
              The 15% Rule
            </h3>
            <p className="text-gray-700 text-sm">
              A simpler guideline: spend no more than 15% of your gross monthly
              income on car payments. On a $60,000 salary ($5,000/month), that
              is $750/month max. This leaves room for insurance, gas,
              maintenance, and repairs while still meeting other financial goals
              like retirement savings and emergency funds.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-lime-600 mb-3">
              New vs. Used Cars
            </h3>
            <p className="text-gray-700 text-sm">
              New cars lose 20-30% of value in the first year. A 3-5 year old
              used car offers the best value: significant depreciation has
              already occurred, but the car still has plenty of life left.
              Certified Pre-Owned (CPO) vehicles include warranties and
              inspections. Target reliable brands like Honda, Toyota, Mazda, and
              Subaru for longevity.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-lime-600 mb-3">
              Hidden Costs of Ownership
            </h3>
            <p className="text-gray-700 text-sm">
              Beyond the monthly payment, budget for insurance ($100-300/month),
              gas ($100-250/month), maintenance ($100/month average), and
              registration/taxes ($50-100/month). A $30,000 car with a $500
              payment might cost $900-1,200/month total. Luxury cars have higher
              insurance and maintenance costs — a BMW or Audi costs 50-100% more
              to maintain than a Honda.
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
            <h3 className="font-bold text-gray-900 mb-2">How much car can I afford on my salary?</h3>
            <p className="text-gray-700 text-sm">A common guideline is to spend no more than 15% of your gross monthly income on car payments. For total car expenses (payment, insurance, gas, maintenance), aim for under 20% of income. On a $50,000 salary ($4,167/month), that means a maximum car payment of $625/month and total expenses under $833/month.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What is the 20/4/10 rule for buying a car?</h3>
            <p className="text-gray-700 text-sm">The 20/4/10 rule says: put down at least 20% of the car&apos;s price, finance for no more than 4 years, and keep total car expenses under 10% of gross income. Following this rule prevents you from overspending on a depreciating asset and ensures you can comfortably afford the ongoing costs of car ownership.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Should I buy a new or used car?</h3>
            <p className="text-gray-700 text-sm">Used cars offer better value because new cars lose 20-30% of their value in the first year. A 3-5 year old car with 30,000-50,000 miles is the sweet spot: most depreciation has occurred, but the car has plenty of life left. Certified Pre-Owned (CPO) vehicles include warranties and inspections. If you want the latest technology and full warranty coverage, new cars make sense, but you&apos;ll pay a premium for that depreciation.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How long should I finance a car?</h3>
            <p className="text-gray-700 text-sm">Stick to 48-60 months (4-5 years) maximum. Longer loans (72-84 months) lower your monthly payment but cost significantly more in interest. You also risk owing more than the car is worth (being &quot;underwater&quot;) if you need to sell or trade it in. Shorter loans (36-48 months) save the most on interest and ensure you build equity faster.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What car expenses should I budget for?</h3>
            <p className="text-gray-700 text-sm">Beyond the monthly payment, budget for: insurance ($100-300/month depending on age, location, and car), gas ($100-250/month depending on commute and fuel efficiency), maintenance and repairs ($100/month average), registration and taxes ($50-100/month), and parking ($50-200/month if applicable). Total car ownership costs are typically 1.5-2x the monthly payment.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Car Affordability Calculator",
            description: "Free car affordability calculator with monthly payment, insurance, and gas cost breakdown.",
            url: "https://cashcalcs.com/car-calculator",
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
                name: "How much car can I afford on my salary?",
                acceptedAnswer: { "@type": "Answer", text: "Spend no more than 15% of gross monthly income on car payments. For total expenses, aim for under 20%. On $50,000 salary, that means max $625/month payment and under $833/month total." },
              },
              {
                "@type": "Question",
                name: "What is the 20/4/10 rule for buying a car?",
                acceptedAnswer: { "@type": "Answer", text: "Put down 20%, finance for max 4 years, keep total car expenses under 10% of gross income. This prevents overspending on a depreciating asset." },
              },
              {
                "@type": "Question",
                name: "Should I buy a new or used car?",
                acceptedAnswer: { "@type": "Answer", text: "Used cars offer better value. New cars lose 20-30% in year one. A 3-5 year old car with 30K-50K miles is the sweet spot for value and reliability." },
              },
              {
                "@type": "Question",
                name: "How long should I finance a car?",
                acceptedAnswer: { "@type": "Answer", text: "Stick to 48-60 months max. Longer loans cost more in interest and risk being underwater. Shorter loans save on interest and build equity faster." },
              },
              {
                "@type": "Question",
                name: "What car expenses should I budget for?",
                acceptedAnswer: { "@type": "Answer", text: "Budget for insurance ($100-300/mo), gas ($100-250/mo), maintenance ($100/mo avg), registration/taxes ($50-100/mo). Total ownership is typically 1.5-2x the payment." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
