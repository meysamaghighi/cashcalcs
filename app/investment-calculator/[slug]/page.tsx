import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InvestmentCalculator from "../../components/InvestmentCalculator";
import { investmentScenarios, getInvestmentScenario } from "../../lib/investment-engine";
import RelatedCalculators from "../../components/RelatedCalculators";

export const dynamicParams = false;

export function generateStaticParams() {
  return investmentScenarios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scenario = getInvestmentScenario(slug);
  if (!scenario) return {};
  return { title: `${scenario.seoTitle} | CashCalcs`, description: scenario.seoDescription };
}

export default async function InvestmentSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scenario = getInvestmentScenario(slug);
  if (!scenario) notFound();

  const otherScenarios = investmentScenarios.filter((s) => s.slug !== slug);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/investment-calculator" className="hover:text-green-600">
            Investment Calculator
          </Link>
          {" > "}
          <span className="text-gray-900">{scenario.name}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          {scenario.name} <span className="text-green-600">Calculator</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">{scenario.description}</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <InvestmentCalculator defaults={scenario.defaults} />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 prose prose-gray max-w-none">
          <h2>About This Scenario</h2>
          <p>{scenario.content}</p>
        </div>
      </section>

      {otherScenarios.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            More Investment Scenarios
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {otherScenarios.map((s) => (
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
      )}

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <RelatedCalculators current="/investment-calculator" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: `${scenario.name} Calculator`,
            description: scenario.seoDescription,
            url: `https://cashcalcs.com/investment-calculator/${scenario.slug}`,
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
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "CashCalcs", item: "https://cashcalcs.com" },
              { "@type": "ListItem", position: 2, name: "Investment Calculator", item: "https://cashcalcs.com/investment-calculator" },
              { "@type": "ListItem", position: 3, name: scenario.name },
            ],
          }),
        }}
      />
    </main>
  );
}
