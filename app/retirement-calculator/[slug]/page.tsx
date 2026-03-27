import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RetirementCalculator from "../../components/RetirementCalculator";
import { retirementScenarios, getRetirementScenario } from "../../lib/retirement-engine";
import RelatedCalculators from "../../components/RelatedCalculators";

export const dynamicParams = false;

export function generateStaticParams() {
  return retirementScenarios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scenario = getRetirementScenario(slug);
  if (!scenario) return {};
  return { title: `${scenario.seoTitle} | CashCalcs`, description: scenario.seoDescription };
}

export default async function ScenarioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scenario = getRetirementScenario(slug);
  if (!scenario) notFound();

  const otherScenarios = retirementScenarios.filter((s) => s.slug !== slug);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/retirement-calculator" className="hover:text-blue-600">Retirement Calculator</Link>
          {" > "}
          <span className="text-gray-900">{scenario.name}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          {scenario.name} <span className="text-blue-600">Calculator</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">{scenario.description}</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <RetirementCalculator defaults={scenario.defaults} />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About {scenario.name}</h2>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-gray-700 leading-relaxed">{scenario.content}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Retirement Scenarios</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {otherScenarios.map((s) => (
            <Link key={s.slug} href={`/retirement-calculator/${s.slug}`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center">
              <p className="font-bold text-gray-900 text-sm">{s.name}</p>
              <p className="text-xs text-gray-500 mt-1">Calculate your plan</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Retirement Planning Tips</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-bold text-blue-600 mb-2">Max Out Employer Match</h3>
            <p className="text-gray-700 text-sm">
              If your employer offers a 401(k) match, contribute at least enough to get the full match.
              It&apos;s free money—typically 50-100% match on 3-6% of salary.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-bold text-blue-600 mb-2">Diversify Investments</h3>
            <p className="text-gray-700 text-sm">
              Don&apos;t put all eggs in one basket. A mix of stocks, bonds, and other assets reduces risk.
              Low-cost index funds are proven to outperform most active managers.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-bold text-blue-600 mb-2">Plan for Healthcare</h3>
            <p className="text-gray-700 text-sm">
              Medicare starts at 65, but if you retire earlier, budget $1,000+/month for health insurance.
              Consider HSAs (Health Savings Accounts) for tax-advantaged healthcare savings.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-bold text-blue-600 mb-2">Estimate Expenses Accurately</h3>
            <p className="text-gray-700 text-sm">
              Track spending for 3-6 months to know your actual expenses. Many people underestimate costs
              in retirement—healthcare, travel, and hobbies add up quickly.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <RelatedCalculators current="/retirement-calculator" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: scenario.seoTitle,
            description: scenario.seoDescription,
            url: `https://cashcalcs.com/retirement-calculator/${scenario.slug}`,
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
              { "@type": "ListItem", position: 2, name: "Retirement Calculator", item: "https://cashcalcs.com/retirement-calculator" },
              { "@type": "ListItem", position: 3, name: scenario.name },
            ],
          }),
        }}
      />
    </main>
  );
}
