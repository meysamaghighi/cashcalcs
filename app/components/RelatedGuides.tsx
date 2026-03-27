import Link from "next/link";

const allGuides = [
  { href: "/guides/how-to-calculate-net-worth", label: "How to Calculate Your Net Worth", color: "bg-orange-500 hover:bg-orange-600" },
  { href: "/guides/debt-avalanche-vs-snowball", label: "Debt Avalanche vs Snowball Method", color: "bg-blue-500 hover:bg-blue-600" },
  { href: "/guides/how-much-house-can-i-afford", label: "How Much House Can I Afford?", color: "bg-sky-500 hover:bg-sky-600" },
  { href: "/guides/how-to-build-emergency-fund", label: "How to Build an Emergency Fund", color: "bg-emerald-500 hover:bg-emerald-600" },
  { href: "/guides/what-is-the-fire-movement", label: "What is the FIRE Movement?", color: "bg-indigo-500 hover:bg-indigo-600" },
  { href: "/guides/50-30-20-budget-rule", label: "The 50/30/20 Budget Rule", color: "bg-amber-500 hover:bg-amber-600" },
  { href: "/guides/how-to-pay-off-student-loans", label: "How to Pay Off Student Loans Faster", color: "bg-violet-500 hover:bg-violet-600" },
  { href: "/guides/how-to-start-investing", label: "How to Start Investing for Beginners", color: "bg-green-500 hover:bg-green-600" },
  { href: "/guides/how-does-inflation-work", label: "How Does Inflation Work?", color: "bg-red-500 hover:bg-red-600" },
  { href: "/guides/100k-salary-after-tax", label: "$100K Salary After Taxes", color: "bg-blue-600 hover:bg-blue-700" },
  { href: "/guides/sp500-investment-calculator", label: "S&P 500 Investment Returns Calculator", color: "bg-green-600 hover:bg-green-700" },
];

const relatedGuidesMap: Record<string, string[]> = {
  "/debt-payoff": ["/guides/debt-avalanche-vs-snowball"],
  "/budget": ["/guides/50-30-20-budget-rule"],
  "/net-worth": ["/guides/how-to-calculate-net-worth"],
  "/fire-calculator": ["/guides/what-is-the-fire-movement"],
  "/mortgage-calculator": ["/guides/how-much-house-can-i-afford"],
  "/salary-calculator": ["/guides/100k-salary-after-tax"],
  "/tax-calculator": ["/guides/100k-salary-after-tax"],
  "/compound-interest": ["/guides/how-to-start-investing", "/guides/sp500-investment-calculator"],
  "/investment-calculator": ["/guides/how-to-start-investing", "/guides/sp500-investment-calculator"],
  "/savings-goal": ["/guides/how-to-build-emergency-fund"],
  "/loan-calculator": ["/guides/how-to-pay-off-student-loans"],
  "/inflation-calculator": ["/guides/how-does-inflation-work"],
};

export default function RelatedGuides({ current }: { current: string }) {
  const related = relatedGuidesMap[current] ?? [];
  const items = related
    .map((href) => allGuides.find((g) => g.href === href))
    .filter(Boolean) as typeof allGuides;

  if (items.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 pb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm hover:shadow-md transition-all p-5 border border-gray-200"
          >
            <div className={`inline-block px-3 py-1 ${guide.color} text-white text-xs font-bold rounded-full mb-2`}>
              Guide
            </div>
            <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
              {guide.label}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
