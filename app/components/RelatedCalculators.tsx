import Link from "next/link";

const allCalcs = [
  { href: "/side-hustle", label: "Side Hustle", color: "bg-emerald-500 hover:bg-emerald-600" },
  { href: "/debt-payoff", label: "Debt Payoff", color: "bg-blue-500 hover:bg-blue-600" },
  { href: "/fire-calculator", label: "FIRE", color: "bg-indigo-500 hover:bg-indigo-600" },
  { href: "/savings-goal", label: "Savings Goal", color: "bg-purple-500 hover:bg-purple-600" },
  { href: "/compound-interest", label: "Compound Interest", color: "bg-teal-500 hover:bg-teal-600" },
  { href: "/net-worth", label: "Net Worth", color: "bg-orange-500 hover:bg-orange-600" },
  { href: "/subscription-tracker", label: "Subscriptions", color: "bg-rose-500 hover:bg-rose-600" },
  { href: "/mortgage-calculator", label: "Mortgage", color: "bg-sky-500 hover:bg-sky-600" },
  { href: "/budget", label: "Budget", color: "bg-amber-500 hover:bg-amber-600" },
  { href: "/loan-calculator", label: "Loan", color: "bg-violet-500 hover:bg-violet-600" },
  { href: "/salary-calculator", label: "Salary", color: "bg-cyan-500 hover:bg-cyan-600" },
  { href: "/car-calculator", label: "Car Affordability", color: "bg-lime-500 hover:bg-lime-600" },
  { href: "/retirement-calculator", label: "Retirement", color: "bg-blue-500 hover:bg-blue-600" },
  { href: "/tax-calculator", label: "Tax", color: "bg-indigo-500 hover:bg-indigo-600" },
  { href: "/investment-calculator", label: "Investment", color: "bg-green-500 hover:bg-green-600" },
  { href: "/inflation-calculator", label: "Inflation", color: "bg-red-500 hover:bg-red-600" },
];

const relatedMap: Record<string, string[]> = {
  "/side-hustle": ["/budget", "/savings-goal", "/tax-calculator"],
  "/debt-payoff": ["/loan-calculator", "/budget", "/savings-goal"],
  "/fire-calculator": ["/retirement-calculator", "/investment-calculator", "/compound-interest"],
  "/savings-goal": ["/compound-interest", "/budget", "/inflation-calculator"],
  "/compound-interest": ["/investment-calculator", "/savings-goal", "/inflation-calculator"],
  "/net-worth": ["/retirement-calculator", "/investment-calculator", "/debt-payoff"],
  "/subscription-tracker": ["/budget", "/savings-goal", "/side-hustle"],
  "/mortgage-calculator": ["/car-calculator", "/loan-calculator", "/budget"],
  "/budget": ["/salary-calculator", "/subscription-tracker", "/savings-goal"],
  "/loan-calculator": ["/debt-payoff", "/mortgage-calculator", "/car-calculator"],
  "/salary-calculator": ["/tax-calculator", "/budget", "/retirement-calculator"],
  "/car-calculator": ["/loan-calculator", "/budget", "/salary-calculator"],
  "/retirement-calculator": ["/fire-calculator", "/investment-calculator", "/inflation-calculator"],
  "/tax-calculator": ["/salary-calculator", "/budget", "/retirement-calculator"],
  "/investment-calculator": ["/compound-interest", "/retirement-calculator", "/inflation-calculator"],
  "/inflation-calculator": ["/investment-calculator", "/savings-goal", "/retirement-calculator"],
};

export default function RelatedCalculators({ current }: { current: string }) {
  const related = relatedMap[current] ?? [];
  const items = related
    .map((href) => allCalcs.find((c) => c.href === href))
    .filter(Boolean) as typeof allCalcs;

  if (items.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 pb-12">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Related Calculators</h2>
      <div className="flex flex-wrap gap-3">
        {items.map((calc) => (
          <Link
            key={calc.href}
            href={calc.href}
            className={`px-4 py-2 ${calc.color} text-white text-sm font-medium rounded-lg transition-colors`}
          >
            {calc.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
