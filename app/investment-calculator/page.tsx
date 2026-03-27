import type { Metadata } from "next";
import Link from "next/link";
import InvestmentCalculator from "../components/InvestmentCalculator";
import { investmentScenarios } from "../lib/investment-engine";
import RelatedCalculators from "../components/RelatedCalculators";
import RelatedGuides from "../components/RelatedGuides";

export const metadata: Metadata = {
  title: "Investment Returns Calculator - How Much Will My Investments Grow? | CashCalcs",
  description:
    "Free investment returns calculator. See how your investments grow with compound returns. Compare scenarios, adjust for inflation, and plan your financial future.",
  keywords: [
    "investment calculator",
    "investment returns calculator",
    "compound growth calculator",
    "stock market returns",
    "how much will my investment grow",
    "investment growth calculator",
    "retirement investment calculator",
  ],
  openGraph: {
    title: "Investment Returns Calculator - How Much Will My Investments Grow? | CashCalcs",
    description:
      "Free investment returns calculator. See how your investments grow with compound returns. Compare scenarios, adjust for inflation, and plan your financial future.",
    type: "website",
  },
};

const faqData = [
  {
    q: "What is a good annual return on investments?",
    a: "The S&P 500 has historically returned about 10% annually before inflation (7% after inflation). A balanced portfolio of stocks and bonds typically returns 6-8%. Individual returns depend on your asset allocation, risk tolerance, and time horizon.",
  },
  {
    q: "How does compound interest work with investments?",
    a: "Compound returns means you earn returns on your returns. If you invest $10,000 and earn 8%, you have $10,800. Next year, you earn 8% on $10,800 ($864), not just the original $10,000 ($800). Over decades, this compounding effect becomes the dominant driver of wealth.",
  },
  {
    q: "Should I invest a lump sum or dollar cost average?",
    a: "Research shows lump sum investing outperforms dollar cost averaging (DCA) about two-thirds of the time, because markets tend to rise over time. However, DCA (investing a fixed amount regularly) reduces the risk of investing at a market peak and is psychologically easier for many people.",
  },
  {
    q: "Why should I adjust for inflation?",
    a: "Inflation reduces the purchasing power of future money. $1 million in 30 years won't buy as much as $1 million today. At 3% inflation, it would be worth only about $412,000 in today's purchasing power. Always consider real (inflation-adjusted) returns when planning.",
  },
  {
    q: "How much should I invest monthly?",
    a: "A common guideline is to invest at least 15% of your gross income for retirement. The exact amount depends on your goals, timeline, and current savings. Even small amounts add up significantly over time — $200/month at 8% for 30 years grows to over $300,000.",
  },
];

export default function InvestmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Investment Returns{" "}
          <span className="text-green-600">Calculator</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          See how your investments grow over time with compound returns.
          Adjust for inflation to see real purchasing power.
        </p>
        <p className="text-sm text-gray-400">
          Free calculator with stacked growth charts and yearly breakdown
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <InvestmentCalculator />
      </div>

      {/* Scenarios */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Popular Investment Scenarios
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {investmentScenarios.map((s) => (
            <Link
              key={s.slug}
              href={`/investment-calculator/${s.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5"
            >
              <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
              <p className="text-sm text-gray-500">{s.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO content */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 prose prose-gray max-w-none">
          <h2>The Power of Compound Returns</h2>
          <p>
            Albert Einstein reportedly called compound interest the &quot;eighth wonder of the
            world.&quot; Whether or not the quote is accurate, the math is undeniable. The longer
            your money stays invested, the more powerful compounding becomes.
          </p>
          <h3>Time Is Your Greatest Asset</h3>
          <p>
            Consider two investors: Alice invests $500/month starting at age 25, while Bob starts
            at 35. Both earn 8% annually and retire at 65. Alice contributes $240,000 over 40 years
            and ends with about $1.74 million. Bob contributes $180,000 over 30 years and ends with
            about $745,000. That extra 10 years of compounding more than doubles the final amount.
          </p>
          <h3>Asset Allocation Matters</h3>
          <p>
            Your expected return depends on your portfolio mix. Stocks historically return more than
            bonds but with higher volatility. A common rule of thumb is to subtract your age from 110
            to get your stock allocation percentage. A 30-year-old might hold 80% stocks and 20% bonds,
            gradually shifting to more bonds over time.
          </p>
        </div>
      </section>

      <RelatedCalculators current="/investment-calculator" />

      <RelatedGuides current="/investment-calculator" />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <details key={i} className="bg-white rounded-xl shadow-sm p-5 group">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                {faq.q}
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://cashcalcs.com" },
              { "@type": "ListItem", position: 2, name: "Investment Calculator", item: "https://cashcalcs.com/investment-calculator" },
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
            name: "Investment Returns Calculator",
            url: "https://cashcalcs.com/investment-calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
    </main>
  );
}
