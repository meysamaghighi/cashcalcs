import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InflationCalculator from "../../components/InflationCalculator";
import { inflationPages, getInflationPage } from "../../lib/inflation-pages";
import RelatedCalculators from "../../components/RelatedCalculators";

export const dynamicParams = false;

export function generateStaticParams() {
  return inflationPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getInflationPage(slug);
  if (!page) return {};
  return {
    title: `${page.seoTitle} | CashCalcs`,
    description: page.seoDescription,
    alternates: {
      canonical: `/inflation-calculator/${slug}`,
    },
  };
}

export default async function InflationSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getInflationPage(slug);
  if (!page) notFound();

  const otherPages = inflationPages.filter((p) => p.slug !== slug);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/inflation-calculator" className="hover:text-rose-600">
            Inflation Calculator
          </Link>
          {" > "}
          <span className="text-gray-900">{page.name}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          {page.name} <span className="text-rose-600">Calculator</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">{page.description}</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <InflationCalculator presetYears={page.presetYears} />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 prose prose-gray max-w-none">
          <h2>About This Calculator</h2>
          <p>{page.content}</p>
        </div>
      </section>

      {otherPages.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            More Inflation Calculators
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {otherPages.map((p) => (
              <Link
                key={p.slug}
                href={`/inflation-calculator/${p.slug}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5"
              >
                <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-sm text-gray-500">{p.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <RelatedCalculators current="/inflation-calculator" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: `${page.name} Calculator`,
            description: page.seoDescription,
            url: `https://cashcalcs.com/inflation-calculator/${page.slug}`,
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
              { "@type": "ListItem", position: 2, name: "Inflation Calculator", item: "https://cashcalcs.com/inflation-calculator" },
              { "@type": "ListItem", position: 3, name: page.name },
            ],
          }),
        }}
      />
    </main>
  );
}
