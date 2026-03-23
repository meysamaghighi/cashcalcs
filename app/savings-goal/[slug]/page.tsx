import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SavingsCalculator from "../../components/SavingsCalculator";
import { savingsGoals, getGoalBySlug, formatCurrency } from "../../lib/savings-engine";
import RelatedCalculators from "../../components/RelatedCalculators";

export function generateStaticParams() {
  return savingsGoals.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const goal = getGoalBySlug(slug);
  if (!goal) return {};
  return { title: `${goal.seoTitle} | CashCalcs`, description: goal.seoDescription };
}

export default async function GoalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const goal = getGoalBySlug(slug);
  if (!goal) notFound();

  const otherGoals = savingsGoals.filter((g) => g.slug !== slug);

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/savings-goal" className="hover:text-emerald-600">Savings Goals</Link>
          {" > "}
          <span className="text-gray-900">{goal.name}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          {goal.name} <span className="text-emerald-600">Calculator</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">{goal.description}</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <SavingsCalculator preset={goal} />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{goal.name} Tips</h2>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <ul className="space-y-3">
            {goal.tips.map((tip, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="text-emerald-500 font-bold shrink-0">{i + 1}.</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Facts</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-4 text-center">
            <p className="text-xs text-gray-500">Typical Goal</p>
            <p className="text-xl font-bold text-gray-900">{formatCurrency(goal.goalAmount)}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 text-center">
            <p className="text-xs text-gray-500">Suggested Monthly</p>
            <p className="text-xl font-bold text-emerald-600">{formatCurrency(goal.monthlySuggestion)}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 text-center">
            <p className="text-xs text-gray-500">At 5% Return</p>
            <p className="text-xl font-bold text-purple-600">
              {Math.ceil(Math.log(goal.goalAmount / goal.monthlySuggestion) / Math.log(1 + 0.05 / 12)) || "N/A"} months
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Savings Goals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {otherGoals.map((g) => (
            <Link key={g.slug} href={`/savings-goal/${g.slug}`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center">
              <p className="font-bold text-gray-900 text-sm">{g.name}</p>
              <p className="text-xs text-gray-500 mt-1">Goal: ${g.goalAmount.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <RelatedCalculators current="/savings-goal" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: goal.seoTitle,
            description: goal.seoDescription,
            url: `https://cashcalcs.com/savings-goal/${goal.slug}`,
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
              { "@type": "ListItem", position: 2, name: "Savings Goal Calculator", item: "https://cashcalcs.com/savings-goal" },
              { "@type": "ListItem", position: 3, name: goal.name },
            ],
          }),
        }}
      />
    </main>
  );
}
