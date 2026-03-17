import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compoundScenarios, getScenarioBySlug } from "../../lib/compound-engine";
import CompoundCalculator from "../../components/CompoundCalculator";

export function generateStaticParams() {
  return compoundScenarios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scenario = getScenarioBySlug(slug);
  if (!scenario) return {};
  return { title: `${scenario.seoTitle} | CashCalcs`, description: scenario.seoDescription };
}

export default async function ScenarioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scenario = getScenarioBySlug(slug);
  if (!scenario) notFound();

  const others = compoundScenarios.filter((s) => s.slug !== scenario.slug);

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/compound-interest" className="hover:text-teal-600">
            Compound Interest
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

        <CompoundCalculator defaults={scenario.defaults} />

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            More Scenarios
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/compound-interest/${s.slug}`}
                className="bg-gray-50 hover:bg-teal-50 rounded-xl p-4 transition-colors"
              >
                <p className="font-bold text-gray-900 text-sm">{s.name}</p>
                <p className="text-xs text-gray-500">
                  {s.description.slice(0, 50)}...
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/compound-interest"
            className="inline-block px-6 py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors"
          >
            Back to Compound Interest Calculator
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: scenario.name,
            description: scenario.seoDescription,
            url: `https://cashcalcs.com/compound-interest/${scenario.slug}`,
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
    </main>
  );
}
