import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  subscriptionPresets,
  getPresetBySlug,
} from "../../lib/subscription-engine";
import SubscriptionCalculator from "../../components/SubscriptionCalculator";
import RelatedCalculators from "../../components/RelatedCalculators";

export const dynamicParams = false;

export function generateStaticParams() {
  return subscriptionPresets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const preset = getPresetBySlug(slug);
  if (!preset) return {};
  return {
    title: `${preset.seoTitle} | CashCalcs`,
    description: preset.seoDescription,
  };
}

export default async function PresetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const preset = getPresetBySlug(slug);
  if (!preset) notFound();

  const others = subscriptionPresets.filter((p) => p.slug !== preset.slug);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/subscription-tracker" className="hover:text-rose-600">
            Subscription Tracker
          </Link>
          {" > "}
          <span className="text-gray-900">{preset.name}</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            {preset.name}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{preset.description}</p>
          <p className="text-gray-700 leading-relaxed">{preset.content}</p>
        </div>

        <SubscriptionCalculator defaultSubs={preset.defaultSubs} />

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            More Scenarios
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/subscription-tracker/${p.slug}`}
                className="bg-gray-50 hover:bg-rose-50 rounded-xl p-4 transition-colors"
              >
                <p className="font-bold text-gray-900 text-sm">{p.name}</p>
                <p className="text-xs text-gray-500">
                  {p.description.slice(0, 50)}...
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/subscription-tracker"
            className="inline-block px-6 py-3 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition-colors"
          >
            Back to Subscription Tracker
          </Link>
        </div>

        <RelatedCalculators current="/subscription-tracker" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: `${preset.name} Subscription Calculator`,
            description: preset.seoDescription,
            url: `https://cashcalcs.com/subscription-tracker/${preset.slug}`,
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
              { "@type": "ListItem", position: 2, name: "Subscription Tracker", item: "https://cashcalcs.com/subscription-tracker" },
              { "@type": "ListItem", position: 3, name: preset.name },
            ],
          }),
        }}
      />
    </main>
  );
}
