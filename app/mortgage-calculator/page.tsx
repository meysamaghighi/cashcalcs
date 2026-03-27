import type { Metadata } from "next";
import Link from "next/link";
import MortgageCalculator from "../components/MortgageCalculator";
import { mortgageScenarios } from "../lib/mortgage-engine";
import RelatedCalculators from "../components/RelatedCalculators";
import RelatedGuides from "../components/RelatedGuides";

export const metadata: Metadata = {
  title: "Mortgage Calculator - Monthly Payment & Amortization | CashCalcs",
  description:
    "Free mortgage calculator with monthly payment breakdown, amortization schedule, PMI, taxes, and insurance. See how much house you can afford.",
  keywords: [
    "mortgage calculator",
    "home loan calculator",
    "monthly mortgage payment",
    "amortization schedule",
    "house payment calculator",
    "mortgage interest calculator",
    "how much house can I afford",
    "PMI calculator",
  ],
  openGraph: {
    title: "Mortgage Calculator - Monthly Payment & Amortization | CashCalcs",
    description:
      "Free mortgage calculator with monthly payment breakdown, amortization schedule, PMI, taxes, and insurance. See how much house you can afford.",
    type: "website",
  },
};

export default function MortgageCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Mortgage{" "}
          <span className="text-sky-600">Calculator</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Calculate your monthly mortgage payment with principal, interest,
          taxes, insurance, and PMI breakdown.
        </p>
        <p className="text-sm text-gray-400">
          Free calculator. Your data never leaves your browser.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <MortgageCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Mortgage Scenarios
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {mortgageScenarios.map((s) => (
            <Link
              key={s.slug}
              href={`/mortgage-calculator/${s.slug}`}
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
          Understanding Your Mortgage
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-sky-600 mb-3">
              Principal & Interest (P&I)
            </h3>
            <p className="text-gray-700 text-sm">
              Your P&I payment is the core of your mortgage. Early in the loan,
              most of your payment goes to interest. Over time, more goes to
              principal. On a $320,000 loan at 6.75%, your first payment is
              $1,263 interest and $813 principal.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-sky-600 mb-3">
              Property Tax & Insurance
            </h3>
            <p className="text-gray-700 text-sm">
              Property taxes average 1-2% of home value per year. Homeowners
              insurance runs $1,500-3,000/year. These are often included in your
              monthly payment via an escrow account managed by your lender.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-sky-600 mb-3">
              Private Mortgage Insurance (PMI)
            </h3>
            <p className="text-gray-700 text-sm">
              If your down payment is less than 20%, lenders require PMI,
              typically $50-200/month. PMI protects the lender, not you. It is
              automatically removed once you reach 20% equity (22% by law).
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-sky-600 mb-3">
              15-Year vs 30-Year
            </h3>
            <p className="text-gray-700 text-sm">
              A 15-year mortgage has higher monthly payments but dramatically
              lower total interest. On a $320,000 loan, you save over $200,000
              in interest with a 15-year term. The monthly payment is about
              $700 higher.
            </p>
          </div>
        </div>
      </section>

      <RelatedCalculators current="/mortgage-calculator" />

      <RelatedGuides current="/mortgage-calculator" />

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How much house can I afford?</h3>
            <p className="text-gray-700 text-sm">A common guideline is the 28/36 rule: spend no more than 28% of your gross monthly income on housing costs (mortgage, taxes, insurance) and no more than 36% on total debt. For a $100,000 household income, that means a maximum housing payment of about $2,333/month.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What is a good mortgage interest rate?</h3>
            <p className="text-gray-700 text-sm">Mortgage rates fluctuate based on the economy, your credit score, down payment, and loan type. As of 2026, rates for 30-year fixed mortgages are around 6.5-7.5%. A credit score above 740 typically gets the best rates. Even a 0.5% difference saves tens of thousands over the loan.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Should I make extra mortgage payments?</h3>
            <p className="text-gray-700 text-sm">Extra payments go directly to principal, reducing your balance and total interest. Paying just $200 extra per month on a $300,000 loan at 6.75% saves over $80,000 in interest and pays off the mortgage 6 years early. Make sure your lender applies extra payments to principal, not future payments.</p>
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
              { "@type": "ListItem", position: 2, name: "Mortgage Calculator", item: "https://cashcalcs.com/mortgage-calculator" },
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
            name: "Mortgage Calculator",
            description: "Free mortgage calculator with monthly payment breakdown, amortization schedule, and PMI.",
            url: "https://cashcalcs.com/mortgage-calculator",
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
                name: "How much house can I afford?",
                acceptedAnswer: { "@type": "Answer", text: "A common guideline is the 28/36 rule: spend no more than 28% of gross monthly income on housing costs. For a $100,000 income, that means about $2,333/month maximum." },
              },
              {
                "@type": "Question",
                name: "What is a good mortgage interest rate?",
                acceptedAnswer: { "@type": "Answer", text: "As of 2026, 30-year fixed rates are around 6.5-7.5%. A credit score above 740 gets the best rates. Even 0.5% lower saves tens of thousands over the loan." },
              },
              {
                "@type": "Question",
                name: "Should I make extra mortgage payments?",
                acceptedAnswer: { "@type": "Answer", text: "Extra payments reduce principal and total interest. Paying $200 extra/month on a $300K loan at 6.75% saves over $80,000 and pays off 6 years early." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
