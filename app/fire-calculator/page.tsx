import type { Metadata } from "next";
import Link from "next/link";
import FireCalculator from "../components/FireCalculator";
import { fireScenarios } from "../lib/fire-engine";

export const metadata: Metadata = {
  title: "FIRE Calculator - When Can You Retire? | CashCalcs",
  description:
    "Free FIRE calculator. Enter your income, expenses, and savings to find your financial independence date. Compare Lean FIRE, Coast FIRE, Fat FIRE, and Barista FIRE strategies.",
  keywords: [
    "FIRE calculator",
    "financial independence calculator",
    "when can I retire",
    "early retirement calculator",
    "FIRE number",
    "4% rule calculator",
    "coast fire calculator",
    "lean fire calculator",
  ],
};

export default function FirePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          When Can You <span className="text-indigo-600">Retire?</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Enter your income, expenses, and savings. See your FIRE number,
          retirement age, and how different strategies change your timeline.
        </p>
        <p className="text-sm text-gray-400">Free FIRE calculator with Lean, Coast, Fat, and Barista FIRE variants</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <FireCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore FIRE Scenarios</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {fireScenarios.map((s) => (
            <Link key={s.slug} href={`/fire-calculator/${s.slug}`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center">
              <p className="font-bold text-gray-900 text-sm">{s.name}</p>
              <p className="text-xs text-gray-500 mt-1">{s.description.slice(0, 60)}...</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is FIRE?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-indigo-600 mb-3">The 4% Rule</h3>
            <p className="text-gray-700 text-sm">
              The 4% rule states you can safely withdraw 4% of your portfolio each year in
              retirement. Your FIRE number is your annual expenses divided by 0.04 (or multiplied by 25).
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-indigo-600 mb-3">The Savings Rate</h3>
            <p className="text-gray-700 text-sm">
              At a 10% savings rate, it takes about 51 years to retire. At 50%, about 17 years.
              At 75%, just 7 years. Increasing your savings rate has a double effect: more invested and lower expenses.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Achieve Financial Independence</h2>
        <div className="max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            FIRE is a movement focused on extreme savings and investment to retire decades before 65.
            The core principle: save a large percentage of income, invest in low-cost index funds, and live off returns.
          </p>
          <p>
            Your savings rate matters more than your income. Someone earning $50,000 with a 50% savings rate will
            reach FIRE faster than someone earning $200,000 with a 10% savings rate.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What is FIRE (Financial Independence, Retire Early)?</h3>
            <p className="text-gray-700 text-sm">FIRE is a movement focused on aggressive saving and investing to achieve financial independence decades earlier than traditional retirement. The goal is to accumulate enough investments that passive income covers your living expenses, typically using the 4% rule (you can safely withdraw 4% of your portfolio annually).</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How much money do I need to retire early?</h3>
            <p className="text-gray-700 text-sm">A common rule of thumb is 25 times your annual expenses. If you spend $40,000 per year, you need $1,000,000 invested. This is based on the 4% safe withdrawal rate from the Trinity Study. Use our calculator above to find your exact FIRE number.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What is the difference between Lean FIRE and Fat FIRE?</h3>
            <p className="text-gray-700 text-sm">Lean FIRE means retiring on a minimal budget (under $40,000/year), requiring a smaller portfolio but a frugal lifestyle. Fat FIRE means retiring with a comfortable or luxurious budget ($100,000+/year), requiring a much larger portfolio. Coast FIRE means you have enough invested that compound growth alone will fund retirement by a traditional age.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "FIRE Calculator",
            description: "Free FIRE calculator. Find your financial independence date.",
            url: "https://cashcalcs.com/fire-calculator",
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
                name: "What is FIRE (Financial Independence, Retire Early)?",
                acceptedAnswer: { "@type": "Answer", text: "FIRE is a movement focused on aggressive saving and investing to achieve financial independence decades earlier than traditional retirement. The goal is to accumulate enough investments that passive income covers your living expenses, typically using the 4% rule." },
              },
              {
                "@type": "Question",
                name: "How much money do I need to retire early?",
                acceptedAnswer: { "@type": "Answer", text: "A common rule of thumb is 25 times your annual expenses. If you spend $40,000 per year, you need $1,000,000 invested. This is based on the 4% safe withdrawal rate from the Trinity Study." },
              },
              {
                "@type": "Question",
                name: "What is the difference between Lean FIRE and Fat FIRE?",
                acceptedAnswer: { "@type": "Answer", text: "Lean FIRE means retiring on a minimal budget (under $40,000/year). Fat FIRE means retiring with a comfortable budget ($100,000+/year). Coast FIRE means you have enough invested that compound growth alone will fund retirement by a traditional age." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
