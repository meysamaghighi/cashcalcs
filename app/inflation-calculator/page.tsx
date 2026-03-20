import type { Metadata } from "next";
import InflationCalculator from "../components/InflationCalculator";
import RelatedCalculators from "../components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Inflation Calculator - How Much Will Your Money Be Worth? | CashCalcs",
  description:
    "Free inflation calculator. See how inflation erodes your purchasing power over time and how much you'll need in the future to match today's value.",
  keywords: [
    "inflation calculator",
    "purchasing power calculator",
    "future value of money",
    "inflation rate calculator",
    "cost of inflation",
    "money value over time",
    "real value calculator",
  ],
  openGraph: {
    title: "Inflation Calculator - How Much Will Your Money Be Worth? | CashCalcs",
    description:
      "Free inflation calculator. See how inflation erodes your purchasing power over time and how much you'll need in the future to match today's value.",
    type: "website",
  },
};

const faqData = [
  {
    q: "What is inflation?",
    a: "Inflation is the rate at which the general level of prices for goods and services rises, causing purchasing power to fall. If inflation is 3%, something that costs $100 today will cost $103 next year.",
  },
  {
    q: "What is a good inflation rate?",
    a: "Most central banks target around 2% annual inflation. The US Federal Reserve targets 2% as measured by the Personal Consumption Expenditures (PCE) price index. Higher rates erode savings faster.",
  },
  {
    q: "How does inflation affect my savings?",
    a: "If your savings earn less interest than the inflation rate, you're losing purchasing power. For example, if inflation is 3% and your savings account pays 1%, you're effectively losing 2% per year in real terms.",
  },
  {
    q: "How can I protect my money from inflation?",
    a: "Common inflation hedges include investing in stocks (which historically outpace inflation), Treasury Inflation-Protected Securities (TIPS), real estate, I Bonds, and commodities. Keeping too much cash in low-interest accounts is one of the worst strategies during high inflation.",
  },
  {
    q: "What was the average US inflation rate historically?",
    a: "The average US inflation rate has been approximately 3.3% per year since 1914. However, it varies significantly — from deflation during the Great Depression to over 13% in 1980, and around 8-9% in 2022.",
  },
];

export default function InflationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          <span className="text-rose-600">Inflation</span> Calculator
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          See how inflation silently erodes your money over time. Find out how
          much you&apos;ll need in the future to maintain today&apos;s buying power.
        </p>
        <p className="text-sm text-gray-400">
          Free calculator with yearly breakdown and visual charts
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <InflationCalculator />
      </div>

      {/* SEO content */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 prose prose-gray max-w-none">
          <h2>Understanding the Impact of Inflation</h2>
          <p>
            Inflation is often called the &quot;silent tax&quot; because it gradually reduces
            the value of your money without you noticing. A dollar today buys less than a
            dollar did 10 years ago, and will buy even less 10 years from now.
          </p>
          <h3>The Rule of 72</h3>
          <p>
            A quick way to estimate how long it takes for inflation to cut your purchasing
            power in half: divide 72 by the inflation rate. At 3% inflation, your money
            loses half its value in about 24 years. At 7%, it takes only about 10 years.
          </p>
          <h3>Real vs. Nominal Returns</h3>
          <p>
            When evaluating investments, always consider <strong>real returns</strong> (after
            inflation) rather than nominal returns. An investment earning 7% with 3% inflation
            has a real return of approximately 4%. This is why keeping large sums in a 0.5%
            savings account during 3% inflation means you&apos;re losing about 2.5% per year
            in real purchasing power.
          </p>
          <h3>How to Beat Inflation</h3>
          <ul>
            <li><strong>Stocks:</strong> Historically return 7-10% annually, well above inflation</li>
            <li><strong>I Bonds:</strong> US government bonds that adjust for inflation automatically</li>
            <li><strong>TIPS:</strong> Treasury Inflation-Protected Securities indexed to CPI</li>
            <li><strong>Real estate:</strong> Property values and rents tend to rise with inflation</li>
            <li><strong>High-yield savings:</strong> At minimum, use accounts paying 4-5% APY</li>
          </ul>
        </div>
      </section>

      <RelatedCalculators current="/inflation-calculator" />

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
            "@type": "WebApplication",
            name: "Inflation Calculator",
            url: "https://cashcalcs.com/inflation-calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
    </main>
  );
}
