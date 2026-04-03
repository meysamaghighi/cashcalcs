import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About CashCalcs - Free Financial Calculators & Guides",
  description:
    "CashCalcs provides 16 free financial calculators and 19 expert guides covering budgeting, debt payoff, retirement, taxes, and investing. No sign-up required. Built by MeyDev.",
  openGraph: {
    title: "About CashCalcs - Free Financial Calculators & Guides",
    description:
      "16 free calculators and 19 guides covering all aspects of personal finance. No accounts, no tracking, no cost.",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <span className="text-gray-900">About</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          About <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">CashCalcs</span>
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is CashCalcs?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CashCalcs is a free personal finance website offering 16 interactive calculators and 19 comprehensive guides to help you make smarter money decisions. Whether you're paying off debt, planning for retirement, or building your first budget, we provide simple, practical tools that run entirely in your browser.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Calculators</h2>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/debt-payoff" className="text-emerald-600 hover:text-emerald-700 font-medium">Debt Payoff</Link> - avalanche vs snowball strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/fire-calculator" className="text-emerald-600 hover:text-emerald-700 font-medium">FIRE Calculator</Link> - financial independence planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/budget" className="text-emerald-600 hover:text-emerald-700 font-medium">Budget Calculator</Link> - 50/30/20 rule breakdown</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/mortgage-calculator" className="text-emerald-600 hover:text-emerald-700 font-medium">Mortgage Calculator</Link> - home affordability analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/compound-interest" className="text-emerald-600 hover:text-emerald-700 font-medium">Compound Interest</Link> - long-term growth projections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/net-worth" className="text-emerald-600 hover:text-emerald-700 font-medium">Net Worth Tracker</Link> - assets minus liabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/retirement-calculator" className="text-emerald-600 hover:text-emerald-700 font-medium">Retirement Calculator</Link> - savings targets by age</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/tax-calculator" className="text-emerald-600 hover:text-emerald-700 font-medium">Tax Calculator</Link> - 2026 federal brackets</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/investment-calculator" className="text-emerald-600 hover:text-emerald-700 font-medium">Investment Returns</Link> - compound growth modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/savings-goal" className="text-emerald-600 hover:text-emerald-700 font-medium">Savings Goal</Link> - timeline to reach your target</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/loan-calculator" className="text-emerald-600 hover:text-emerald-700 font-medium">Loan Calculator</Link> - auto, personal, and student loans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/salary-calculator" className="text-emerald-600 hover:text-emerald-700 font-medium">Salary Calculator</Link> - hourly to annual conversions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/car-calculator" className="text-emerald-600 hover:text-emerald-700 font-medium">Car Affordability</Link> - budget for your vehicle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/inflation-calculator" className="text-emerald-600 hover:text-emerald-700 font-medium">Inflation Calculator</Link> - purchasing power over time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/subscription-tracker" className="text-emerald-600 hover:text-emerald-700 font-medium">Subscription Tracker</Link> - manage recurring costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span><Link href="/side-hustle" className="text-emerald-600 hover:text-emerald-700 font-medium">Side Hustle Calculator</Link> - income potential analysis</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              All calculators run locally in your browser with instant results. No waiting, no backend processing, no data collection.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Guides</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer 19 comprehensive <Link href="/guides" className="text-emerald-600 hover:text-emerald-700 font-medium">financial guides</Link> covering topics like saving strategies, investing basics, debt management, retirement planning, and tax optimization. Each guide is written in plain English with actionable steps you can implement today.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3 text-xl">✓</span>
                  <span><strong className="font-semibold text-gray-900">Free forever.</strong> No premium tiers, no paywalls, no trials that expire.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3 text-xl">✓</span>
                  <span><strong className="font-semibold text-gray-900">No sign-up required.</strong> Use every calculator and read every guide without creating an account.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3 text-xl">✓</span>
                  <span><strong className="font-semibold text-gray-900">Privacy first.</strong> All calculations run in your browser. We don't collect, store, or transmit your personal financial data.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3 text-xl">✓</span>
                  <span><strong className="font-semibold text-gray-900">Mobile friendly.</strong> Every tool works seamlessly on phones, tablets, and desktops.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Built This?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CashCalcs is built and maintained by <strong className="font-semibold">MeyDev</strong>, an independent developer passionate about making financial literacy accessible to everyone. As someone who's navigated student loans, budgeting, and investment planning, I built the tools I wished existed when I started my own financial journey.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Questions, feedback, or suggestions? Email me at{" "}
              <a href="mailto:meydev.studio@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                meydev.studio@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy & Data</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3 text-gray-700">
              <p>
                <strong className="font-semibold text-gray-900">No accounts, no personal data collection.</strong> CashCalcs does not require registration or store any of your financial information. All calculations happen locally in your browser.
              </p>
              <p>
                <strong className="font-semibold text-gray-900">localStorage only.</strong> Some calculators use your browser's localStorage to save your inputs for convenience (like subscription lists or budget categories). This data never leaves your device.
              </p>
              <p>
                <strong className="font-semibold text-gray-900">Anonymous analytics.</strong> We use Google Analytics to understand which tools are most helpful and how visitors find us. This collects anonymous usage data like page views and referral sources, but no personal or financial information.
              </p>
              <p>
                <strong className="font-semibold text-gray-900">Advertising.</strong> To keep the site free, we may display non-intrusive ads via Google AdSense. We do not use pop-ups, interstitials, or auto-playing video ads.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Disclaimer</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-gray-700">
              <p className="mb-3">
                <strong className="font-semibold text-gray-900">These calculators are for educational and informational purposes only.</strong> They are not a substitute for professional financial advice, tax advice, or legal counsel.
              </p>
              <p className="mb-3">
                Results are estimates based on the inputs you provide and standard formulas. Actual outcomes may vary depending on market conditions, tax laws, interest rates, and your personal circumstances.
              </p>
              <p>
                Always consult with a qualified financial advisor, accountant, or attorney before making significant financial decisions.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-3">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-emerald-50 mb-6 max-w-2xl mx-auto text-lg">
              Explore all 16 calculators and start making smarter money decisions today.
            </p>
            <Link href="/" className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg">
              Browse All Calculators
            </Link>
          </section>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About CashCalcs",
            description: "CashCalcs provides 16 free financial calculators and 19 expert guides covering budgeting, debt payoff, retirement, taxes, and investing.",
            url: "https://cashcalcs.com/about",
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
