import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  taxScenarios,
  getTaxScenario,
} from "../../lib/tax-engine";
import TaxCalculator from "../../components/TaxCalculator";
import RelatedCalculators from "../../components/RelatedCalculators";

export function generateStaticParams() {
  return taxScenarios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scenario = getTaxScenario(slug);
  if (!scenario) return {};
  return {
    title: `${scenario.seoTitle} | CashCalcs`,
    description: scenario.seoDescription,
  };
}

export default async function ScenarioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scenario = getTaxScenario(slug);
  if (!scenario) notFound();

  const others = taxScenarios.filter((s) => s.slug !== scenario.slug);

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/tax-calculator" className="hover:text-indigo-600">
            Tax Calculator
          </Link>
          {" > "}
          <span className="text-gray-900">{scenario.name}</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            {scenario.name}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{scenario.description}</p>
          <p className="text-gray-700 leading-relaxed">{scenario.content}</p>
        </div>

        <TaxCalculator defaults={scenario.defaults} />

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            More Tax Scenarios
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/tax-calculator/${s.slug}`}
                className="bg-gray-50 hover:bg-indigo-50 rounded-xl p-4 transition-colors"
              >
                <p className="font-bold text-gray-900 text-sm">{s.name}</p>
                <p className="text-xs text-gray-500">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/tax-calculator"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Back to Tax Calculator
          </Link>
        </div>

        <RelatedCalculators current="/tax-calculator" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: `${scenario.name} Calculator`,
            description: scenario.seoDescription,
            url: `https://cashcalcs.com/tax-calculator/${scenario.slug}`,
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
              { "@type": "ListItem", position: 2, name: "Tax Calculator", item: "https://cashcalcs.com/tax-calculator" },
              { "@type": "ListItem", position: 3, name: scenario.name },
            ],
          }),
        }}
      />
    </main>
  );
}
