import type { Metadata } from "next";
import Link from "next/link";
import NetWorthCalculator from "../components/NetWorthCalculator";
import { networthScenarios } from "../lib/networth-engine";
import RelatedCalculators from "../components/RelatedCalculators";
import RelatedGuides from "../components/RelatedGuides";

export const metadata: Metadata = {
  title: "Net Worth Calculator - Track Your Total Wealth | CashCalcs",
  description:
    "Free net worth calculator. Add your assets and debts to see your total net worth, financial health score, and breakdown charts. Compare to benchmarks by age.",
  keywords: [
    "net worth calculator",
    "what is my net worth",
    "net worth tracker",
    "assets minus liabilities",
    "net worth by age",
    "financial health calculator",
    "wealth calculator",
    "personal net worth",
  ],
  openGraph: {
    title: "Net Worth Calculator - Track Your Total Wealth | CashCalcs",
    description:
      "Free net worth calculator. Add your assets and debts to see your total net worth, financial health score, and breakdown charts. Compare to benchmarks by age.",
    type: "website",
  },
};

export default function NetWorthPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Net Worth{" "}
          <span className="text-orange-600">Calculator</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Add your assets and debts to calculate your total net worth.
          See your financial health score and detailed breakdown.
        </p>
        <p className="text-sm text-gray-400">
          Free calculator with visual breakdowns. Your data never leaves your browser.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <NetWorthCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Net Worth Scenarios
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {networthScenarios.map((s) => (
            <Link
              key={s.slug}
              href={`/net-worth/${s.slug}`}
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
          Understanding Net Worth
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-orange-600 mb-3">
              What is Net Worth?
            </h3>
            <p className="text-gray-700 text-sm">
              Net worth is everything you own (assets) minus everything you owe
              (liabilities). It is the single best number to track your
              financial progress over time. A positive and growing net worth
              means you are building wealth.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-orange-600 mb-3">
              Net Worth by Age
            </h3>
            <p className="text-gray-700 text-sm">
              A common benchmark: your net worth should be your age times your
              annual income divided by 10. At 30 earning $60K, target $180K.
              At 40 earning $80K, target $320K. These are guidelines, not
              rules. Focus on consistent growth.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-orange-600 mb-3">
              Why Track Net Worth?
            </h3>
            <p className="text-gray-700 text-sm">
              Income tells you how much flows in. Net worth tells you how much
              stays. Many high earners have low net worth due to lifestyle
              inflation. Tracking net worth quarterly helps you spot problems
              early and stay motivated as the number grows.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-orange-600 mb-3">
              How to Grow Net Worth
            </h3>
            <p className="text-gray-700 text-sm">
              Three levers: increase assets (save and invest more), decrease
              liabilities (pay off debt), or both. The fastest path is usually
              paying off high-interest debt first, then investing the freed-up
              cash flow. Automate your savings so growth happens consistently.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Net Worth Calculator Guide for 2026
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Your net worth is the most important number in personal finance.
            It tells you exactly where you stand financially. Whether you are
            just starting your career, paying off student loans, saving for a
            house, or planning for retirement, knowing your net worth gives
            you a clear starting point and a way to measure progress.
          </p>
          <p>
            Use this calculator to add all your assets (bank accounts,
            investments, retirement accounts, property, vehicles) and subtract
            all your liabilities (mortgage, student loans, credit cards, auto
            loans). The result is your net worth. Track it monthly or
            quarterly to see your financial trajectory.
          </p>
        </div>
      </section>

      <RelatedCalculators current="/net-worth" />

      <RelatedGuides current="/net-worth" />

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What is net worth?</h3>
            <p className="text-gray-700 text-sm">Net worth is everything you own (assets) minus everything you owe (liabilities). It is the single best number to track your financial health. A positive net worth means you own more than you owe. A growing net worth means you are building wealth over time.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What should my net worth be at my age?</h3>
            <p className="text-gray-700 text-sm">A common rule of thumb: your net worth should equal your age times your annual pre-tax income divided by 10. For a 30-year-old earning $60,000, that means a target of $180,000. The median net worth at 30 is about $10,000, and at 40 about $80,000. Focus on growth over time rather than hitting exact benchmarks.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Is negative net worth normal?</h3>
            <p className="text-gray-700 text-sm">Yes, about 15% of American households have negative net worth. It is common for people in their 20s and 30s due to student loans. The important thing is having a plan to move toward positive net worth by paying down high-interest debt and building savings.</p>
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
              { "@type": "ListItem", position: 2, name: "Net Worth Calculator", item: "https://cashcalcs.com/net-worth" },
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
            name: "Net Worth Calculator",
            description:
              "Free net worth calculator. Track your assets, liabilities, and total wealth.",
            url: "https://cashcalcs.com/net-worth",
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
                name: "What is net worth?",
                acceptedAnswer: { "@type": "Answer", text: "Net worth is everything you own (assets) minus everything you owe (liabilities). It is the single best number to track your financial health." },
              },
              {
                "@type": "Question",
                name: "What should my net worth be at my age?",
                acceptedAnswer: { "@type": "Answer", text: "A common rule of thumb: your net worth should equal your age times your annual pre-tax income divided by 10. The median net worth at 30 is about $10,000, and at 40 about $80,000." },
              },
              {
                "@type": "Question",
                name: "Is negative net worth normal?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, about 15% of American households have negative net worth. It is common for people in their 20s and 30s due to student loans. The important thing is having a plan to move toward positive net worth." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
