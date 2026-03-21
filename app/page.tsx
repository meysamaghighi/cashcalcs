import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CashCalcs - Free Financial Calculators | 16 Tools, No Sign-Up",
  description:
    "16 free financial calculators: budget, savings, debt payoff, FIRE, compound interest, net worth, mortgage, loan, salary, tax, retirement, investment, inflation, car affordability, side hustles, and subscriptions. No sign-up required.",
  keywords: [
    "financial calculator",
    "free finance tools",
    "budget calculator",
    "savings calculator",
    "debt payoff calculator",
    "FIRE calculator",
    "retirement calculator",
    "investment calculator",
    "tax calculator",
    "mortgage calculator",
    "inflation calculator",
    "compound interest calculator",
    "side hustle calculator",
    "car affordability calculator",
  ],
  openGraph: {
    title: "CashCalcs - 16 Free Financial Calculators",
    description: "Free calculators for budgeting, savings, debt, retirement, taxes, investments, and more. No sign-up required.",
    type: "website",
    siteName: "CashCalcs",
  },
};

const calculators = [
  {
    href: "/side-hustle",
    title: "Side Hustle Calculator",
    desc: "Find the best side hustle for your skills. 30+ hustles with earnings estimates.",
    color: "from-emerald-500 to-emerald-600",
    stats: "30+ hustles",
  },
  {
    href: "/debt-payoff",
    title: "Debt Payoff Calculator",
    desc: "Compare avalanche vs snowball methods. See your debt-free date and interest savings.",
    color: "from-blue-500 to-blue-600",
    stats: "8 debt types",
  },
  {
    href: "/fire-calculator",
    title: "FIRE Calculator",
    desc: "Find your financial independence date. Lean, Coast, Fat, and Barista FIRE variants.",
    color: "from-indigo-500 to-indigo-600",
    stats: "8 scenarios",
  },
  {
    href: "/savings-goal",
    title: "Savings Goal Calculator",
    desc: "Plan any savings goal with compound interest. Track progress and get tips.",
    color: "from-purple-500 to-purple-600",
    stats: "8 goal types",
  },
  {
    href: "/compound-interest",
    title: "Compound Interest Calculator",
    desc: "Visualize how your investments grow over time. Compare scenarios and compounding frequencies.",
    color: "from-teal-500 to-teal-600",
    stats: "8 scenarios",
  },
  {
    href: "/net-worth",
    title: "Net Worth Calculator",
    desc: "Add your assets and debts to see your total net worth, financial health score, and breakdown.",
    color: "from-orange-500 to-orange-600",
    stats: "8 scenarios",
  },
  {
    href: "/subscription-tracker",
    title: "Subscription Tracker",
    desc: "Track all your subscriptions in one place. See total monthly cost, category breakdown, and savings.",
    color: "from-rose-500 to-rose-600",
    stats: "8 scenarios",
  },
  {
    href: "/mortgage-calculator",
    title: "Mortgage Calculator",
    desc: "Calculate your monthly payment with principal, interest, taxes, insurance, and PMI. Full amortization schedule.",
    color: "from-sky-500 to-sky-600",
    stats: "8 scenarios",
  },
  {
    href: "/budget",
    title: "50/30/20 Budget Calculator",
    desc: "Enter your income and get a personalized budget split for needs, wants, and savings. Spending suggestions included.",
    color: "from-amber-500 to-amber-600",
    stats: "8 scenarios",
  },
  {
    href: "/loan-calculator",
    title: "Loan Calculator",
    desc: "Calculate monthly payments for auto, personal, student, or any loan. See amortization and extra payment savings.",
    color: "from-violet-500 to-violet-600",
    stats: "8 loan types",
  },
  {
    href: "/salary-calculator",
    title: "Salary Calculator",
    desc: "Convert between hourly, weekly, biweekly, monthly, and annual pay. See your full income breakdown.",
    color: "from-cyan-500 to-cyan-600",
    stats: "8 wage levels",
  },
  {
    href: "/car-calculator",
    title: "Car Affordability Calculator",
    desc: "Find out how much car you can afford based on your income. Includes insurance, gas, and loan payments.",
    color: "from-lime-500 to-lime-600",
    stats: "4 scenarios",
  },
  {
    href: "/retirement-calculator",
    title: "Retirement Calculator",
    desc: "See if you're on track for retirement. Calculate your nest egg, monthly income, and how long savings last.",
    color: "from-blue-500 to-blue-600",
    stats: "4 scenarios",
  },
  {
    href: "/tax-calculator",
    title: "Income Tax Calculator",
    desc: "Estimate federal and state income tax. See your effective vs marginal rate and full bracket breakdown.",
    color: "from-indigo-500 to-indigo-600",
    stats: "4 scenarios",
  },
  {
    href: "/investment-calculator",
    title: "Investment Returns Calculator",
    desc: "See how your investments grow with compound returns. Stacked charts show contributions vs earnings.",
    color: "from-green-500 to-green-600",
    stats: "4 scenarios",
  },
  {
    href: "/inflation-calculator",
    title: "Inflation Calculator",
    desc: "See how inflation erodes your purchasing power over time. Find out how much you'll need in the future.",
    color: "from-red-500 to-red-600",
    stats: "3 scenarios",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 pt-16 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Free Financial{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Calculators
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
          Plan your finances with our free, no-signup-required tools. Save more,
          pay off debt faster, and reach financial independence.
        </p>
        <p className="text-sm text-gray-400">
          All calculations run in your browser. Your data never leaves your device.
        </p>
      </div>

      <div id="calculators" className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {calculators.map((calc) => (
            <Link key={calc.href} href={calc.href} className="group block">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 h-full border border-gray-100 group-hover:border-gray-200">
                <div
                  className={`inline-block bg-gradient-to-r ${calc.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}
                >
                  {calc.stats}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {calc.title}
                </h2>
                <p className="text-gray-600">{calc.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Why CashCalcs?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
            <h3 className="font-bold text-gray-900 mb-1">Free Forever</h3>
            <p className="text-gray-600 text-sm">
              No subscriptions, no premium tiers, no hidden fees. Every calculator is completely free.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <h3 className="font-bold text-gray-900 mb-1">Pages of Tools</h3>
            <p className="text-gray-600 text-sm">
              Specialized pages for every debt type, savings goal, FIRE strategy, and side hustle.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">0</div>
            <h3 className="font-bold text-gray-900 mb-1">Data Collected</h3>
            <p className="text-gray-600 text-sm">
              All calculations happen in your browser. We never see or store your financial data.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Your Complete Financial Toolkit for 2026
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            CashCalcs brings together the financial calculators you actually need
            in one place. Whether you are figuring out how to pay off credit card
            debt, planning for early retirement, saving for a house, or looking
            for ways to earn extra income, we have a tool for you.
          </p>
          <p>
            Each calculator is built with real-world data and actionable advice.
            Our side hustle calculator includes 30+ opportunities with real
            hourly rates. Our debt payoff calculator compares avalanche and
            snowball strategies with exact interest savings. Our FIRE calculator
            shows your path to financial independence with multiple strategies.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CashCalcs",
            description:
              "Free financial calculators: savings goals, debt payoff, FIRE calculator, and side hustle earnings.",
            url: "https://cashcalcs.com",
          }),
        }}
      />
    </main>
  );
}
