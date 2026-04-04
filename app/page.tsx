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
  alternates: {
    canonical: "/",
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
            CashCalcs brings together 16 essential financial calculators you need
            to take control of your money. Whether you are paying off debt, building
            savings, planning retirement, or looking for ways to increase income,
            we have a free calculator designed for your specific goal.
          </p>
          <p>
            Start with our <Link href="/budget" className="text-emerald-600 hover:underline font-medium">50/30/20 budget calculator</Link> to
            create a spending plan. Use the <Link href="/debt-payoff" className="text-blue-600 hover:underline font-medium">debt payoff calculator</Link> to
            compare avalanche vs snowball methods and see your debt-free date. Planning for financial independence? Our <Link href="/fire-calculator" className="text-indigo-600 hover:underline font-medium">FIRE calculator</Link> shows
            exactly when you can retire based on your savings rate. Looking for extra income? The <Link href="/side-hustle" className="text-emerald-600 hover:underline font-medium">side hustle calculator</Link> matches
            30+ opportunities to your skills and available time.
          </p>
          <p>
            Every calculator runs in your browser with zero data collection. No sign-up, no premium tiers, no hidden fees. Just
            free financial tools that help you make better money decisions in 2026.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Financial Calculators</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Debt & Loans</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/debt-payoff" className="text-blue-600 hover:underline font-medium">Debt Payoff Calculator</Link> - Compare avalanche vs snowball strategies
              </li>
              <li>
                <Link href="/loan-calculator" className="text-violet-600 hover:underline font-medium">Loan Calculator</Link> - Calculate monthly payments for any loan
              </li>
              <li>
                <Link href="/mortgage-calculator" className="text-sky-600 hover:underline font-medium">Mortgage Calculator</Link> - Monthly payment with taxes, insurance, and PMI
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Savings & Investments</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/savings-goal" className="text-purple-600 hover:underline font-medium">Savings Goal Calculator</Link> - Plan any goal with compound interest
              </li>
              <li>
                <Link href="/compound-interest" className="text-teal-600 hover:underline font-medium">Compound Interest Calculator</Link> - See how investments grow over time
              </li>
              <li>
                <Link href="/investment-calculator" className="text-green-600 hover:underline font-medium">Investment Calculator</Link> - Calculate returns with contributions
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Retirement & FIRE</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/fire-calculator" className="text-indigo-600 hover:underline font-medium">FIRE Calculator</Link> - Find your financial independence date
              </li>
              <li>
                <Link href="/retirement-calculator" className="text-blue-600 hover:underline font-medium">Retirement Calculator</Link> - See if you're on track to retire
              </li>
              <li>
                <Link href="/inflation-calculator" className="text-red-600 hover:underline font-medium">Inflation Calculator</Link> - Plan for rising costs in retirement
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Income & Budgeting</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/budget" className="text-amber-600 hover:underline font-medium">Budget Calculator</Link> - Create a 50/30/20 budget for your income
              </li>
              <li>
                <Link href="/salary-calculator" className="text-cyan-600 hover:underline font-medium">Salary Calculator</Link> - Convert between hourly and annual pay
              </li>
              <li>
                <Link href="/tax-calculator" className="text-indigo-600 hover:underline font-medium">Tax Calculator 2026</Link> - Estimate federal and state income taxes
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Financial Guides & Tutorials
        </h2>
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl p-8 text-center mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Learn Personal Finance from Scratch
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            9 comprehensive guides covering debt payoff strategies, budgeting, emergency funds, the FIRE movement, investing, mortgages, and more. All free, no sign-up required.
          </p>
          <Link
            href="/guides"
            className="inline-block px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Browse All Guides
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Are these calculators really free?</h3>
            <p className="text-gray-700 text-sm">Yes, 100% free forever. No sign-up, no premium tiers, no hidden fees. All 16 calculators are completely free to use.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Do you store my financial data?</h3>
            <p className="text-gray-700 text-sm">No. All calculations run in your browser. We never see or store your financial information. Your data never leaves your device.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Which calculator should I use first?</h3>
            <p className="text-gray-700 text-sm">Start with the 50/30/20 budget calculator to understand your income allocation. Then use the debt payoff calculator if you have high-interest debt, or the savings goal calculator to plan your emergency fund.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How accurate are these calculators?</h3>
            <p className="text-gray-700 text-sm">Our calculators use standard financial formulas and up-to-date tax brackets (2026). However, they provide estimates and are not substitutes for professional financial advice. Always consult a financial advisor for personalized guidance.</p>
          </div>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are these calculators really free?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, 100% free forever. No sign-up, no premium tiers, no hidden fees. All 16 calculators are completely free to use." },
              },
              {
                "@type": "Question",
                name: "Do you store my financial data?",
                acceptedAnswer: { "@type": "Answer", text: "No. All calculations run in your browser. We never see or store your financial information. Your data never leaves your device." },
              },
              {
                "@type": "Question",
                name: "Which calculator should I use first?",
                acceptedAnswer: { "@type": "Answer", text: "Start with the 50/30/20 budget calculator to understand your income allocation. Then use the debt payoff calculator if you have high-interest debt, or the savings goal calculator to plan your emergency fund." },
              },
              {
                "@type": "Question",
                name: "How accurate are these calculators?",
                acceptedAnswer: { "@type": "Answer", text: "Our calculators use standard financial formulas and up-to-date tax brackets (2026). However, they provide estimates and are not substitutes for professional financial advice." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
