import Link from "next/link";

const allCalcs = [
  { href: "/side-hustle", label: "Side Hustle Calculator", desc: "Find the best side hustle for your skills and time", color: "bg-emerald-500 hover:bg-emerald-600" },
  { href: "/debt-payoff", label: "Debt Payoff Calculator", desc: "Pay off debt faster with avalanche or snowball strategy", color: "bg-blue-500 hover:bg-blue-600" },
  { href: "/fire-calculator", label: "FIRE Calculator", desc: "Calculate when you can achieve financial independence", color: "bg-indigo-500 hover:bg-indigo-600" },
  { href: "/savings-goal", label: "Savings Goal Calculator", desc: "Plan any savings goal with compound interest", color: "bg-purple-500 hover:bg-purple-600" },
  { href: "/compound-interest", label: "Compound Interest Calculator", desc: "See how your investments grow over time", color: "bg-teal-500 hover:bg-teal-600" },
  { href: "/net-worth", label: "Net Worth Calculator", desc: "Track your assets, debts, and financial health", color: "bg-orange-500 hover:bg-orange-600" },
  { href: "/subscription-tracker", label: "Subscription Tracker", desc: "See total monthly cost and identify savings", color: "bg-rose-500 hover:bg-rose-600" },
  { href: "/mortgage-calculator", label: "Mortgage Calculator", desc: "Calculate monthly payment with taxes and PMI", color: "bg-sky-500 hover:bg-sky-600" },
  { href: "/budget", label: "Budget Calculator", desc: "Create a 50/30/20 budget for any income", color: "bg-amber-500 hover:bg-amber-600" },
  { href: "/loan-calculator", label: "Loan Calculator", desc: "Calculate payments for auto, personal, or student loans", color: "bg-violet-500 hover:bg-violet-600" },
  { href: "/salary-calculator", label: "Salary Calculator", desc: "Convert between hourly, monthly, and annual pay", color: "bg-cyan-500 hover:bg-cyan-600" },
  { href: "/car-calculator", label: "Car Affordability Calculator", desc: "Find out how much car you can afford", color: "bg-lime-500 hover:bg-lime-600" },
  { href: "/retirement-calculator", label: "Retirement Calculator", desc: "See if you're on track for retirement", color: "bg-blue-500 hover:bg-blue-600" },
  { href: "/tax-calculator", label: "Tax Calculator", desc: "Estimate federal and state income tax for 2026", color: "bg-indigo-500 hover:bg-indigo-600" },
  { href: "/investment-calculator", label: "Investment Calculator", desc: "Calculate investment returns with compound growth", color: "bg-green-500 hover:bg-green-600" },
  { href: "/inflation-calculator", label: "Inflation Calculator", desc: "See how inflation affects your purchasing power", color: "bg-red-500 hover:bg-red-600" },
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
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Financial Calculators</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((calc) => (
          <Link
            key={calc.href}
            href={calc.href}
            className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-5 border border-gray-100"
          >
            <div className={`inline-block px-3 py-1 ${calc.color} text-white text-xs font-bold rounded-full mb-2`}>
              Calculator
            </div>
            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
              {calc.label}
            </h3>
            <p className="text-sm text-gray-600">{calc.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
