import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Guides - Expert Advice & Step-by-Step Tutorials | CashCalcs",
  description:
    "Free financial guides covering debt payoff strategies, emergency funds, FIRE movement, budgeting, mortgages, investing, student loans, and inflation. Expert advice with actionable steps.",
  keywords: [
    "financial guides",
    "personal finance guides",
    "money management tips",
    "financial advice",
    "how to manage money",
    "debt payoff guide",
    "budgeting guide",
    "investing guide",
    "retirement planning guide",
  ],
  openGraph: {
    title: "Financial Guides - Expert Advice & Step-by-Step Tutorials | CashCalcs",
    description:
      "Free financial guides covering debt payoff, emergency funds, FIRE, budgeting, mortgages, investing, and more. Expert advice with actionable steps.",
    type: "website",
  },
  alternates: {
    canonical: "/guides",
  },
};

const guides = [
  {
    slug: "how-to-calculate-net-worth",
    title: "How to Calculate Your Net Worth",
    desc: "Step-by-step guide to calculating your net worth, tracking assets and debts, and understanding what it means for your financial health.",
    category: "Wealth Building",
    color: "bg-orange-500",
  },
  {
    slug: "debt-avalanche-vs-snowball",
    title: "Debt Avalanche vs Snowball Method",
    desc: "Compare the two most popular debt payoff strategies. Learn which method saves more money and which keeps you motivated.",
    category: "Debt Management",
    color: "bg-blue-500",
  },
  {
    slug: "how-much-house-can-i-afford",
    title: "How Much House Can I Afford?",
    desc: "Detailed guide to calculating home affordability, including the 28/36 rule, down payments, closing costs, and hidden expenses.",
    category: "Home Buying",
    color: "bg-sky-500",
  },
  {
    slug: "how-to-build-emergency-fund",
    title: "How to Build an Emergency Fund",
    desc: "Complete guide to building an emergency fund from scratch. How much to save, where to keep it, and step-by-step tips for 3-6 months of expenses.",
    category: "Saving",
    color: "bg-emerald-500",
  },
  {
    slug: "what-is-the-fire-movement",
    title: "What is the FIRE Movement?",
    desc: "Complete guide to Financial Independence, Retire Early. Learn about Lean FIRE, Fat FIRE, Coast FIRE, the 4% rule, and strategies to achieve FIRE.",
    category: "Retirement",
    color: "bg-indigo-500",
  },
  {
    slug: "50-30-20-budget-rule",
    title: "The 50/30/20 Budget Rule Explained",
    desc: "Master the simple budgeting framework popularized by Senator Elizabeth Warren. Allocate 50% needs, 30% wants, 20% savings with practical examples.",
    category: "Budgeting",
    color: "bg-amber-500",
  },
  {
    slug: "how-to-pay-off-student-loans",
    title: "How to Pay Off Student Loans Faster",
    desc: "Strategies for paying off student loans faster, including refinancing, avalanche vs snowball methods, income-driven repayment, and forgiveness programs.",
    category: "Debt Management",
    color: "bg-violet-500",
  },
  {
    slug: "how-to-start-investing",
    title: "How to Start Investing for Beginners",
    desc: "Beginner-friendly guide to investing in index funds, 401(k)s, IRAs, and compound growth. Start with $100/month and build long-term wealth.",
    category: "Investing",
    color: "bg-green-500",
  },
  {
    slug: "how-does-inflation-work",
    title: "How Does Inflation Work?",
    desc: "Understand inflation, purchasing power, and how rising prices affect your savings, investments, and retirement planning. Strategies to protect your wealth.",
    category: "Economics",
    color: "bg-red-500",
  },
  {
    slug: "100k-salary-after-tax",
    title: "$100K Salary After Taxes",
    desc: "Complete breakdown of what a $100,000 salary looks like after federal and state taxes. Monthly take-home, state comparisons, and tips to maximize your paycheck.",
    category: "Taxes & Income",
    color: "bg-blue-600",
  },
  {
    slug: "sp500-investment-calculator",
    title: "S&P 500 Investment Returns Calculator",
    desc: "How much would $10K, $50K, or $100K invested in the S&P 500 grow to over 10, 20, 30 years? Historical returns and compound growth tables.",
    category: "Investing",
    color: "bg-green-600",
  },
  {
    slug: "how-to-save-money",
    title: "How to Save Money: 30 Proven Tips",
    desc: "Practical money-saving strategies covering budgeting, cutting expenses, boosting income, and automating savings. No gimmicks, just proven tips that save $500-1,000/month.",
    category: "Saving",
    color: "bg-purple-500",
  },
  {
    slug: "how-much-should-i-save",
    title: "How Much Should I Save?",
    desc: "Complete savings benchmarks by age and income. Emergency fund rules, retirement targets (1x salary at 30, 10x at 67), and where to prioritize your money.",
    category: "Saving",
    color: "bg-purple-600",
  },
  {
    slug: "understanding-tax-brackets",
    title: "Understanding Tax Brackets",
    desc: "How marginal vs effective tax rates work, why a raise never hurts you, and complete 2026 federal bracket breakdown. Includes tax-lowering strategies.",
    category: "Taxes & Income",
    color: "bg-red-600",
  },
  {
    slug: "how-to-create-a-budget",
    title: "How to Create a Budget",
    desc: "Step-by-step guide to creating your first budget. Choose a method, track expenses, set categories, and build a system that actually works.",
    category: "Budgeting",
    color: "bg-amber-600",
  },
  {
    slug: "what-is-compound-interest",
    title: "What is Compound Interest?",
    desc: "Understand the most powerful force in finance. How compound interest works, the Rule of 72, and why starting early can make you hundreds of thousands richer.",
    category: "Investing",
    color: "bg-emerald-600",
  },
  {
    slug: "how-to-pay-off-credit-card-debt",
    title: "How to Pay Off Credit Card Debt",
    desc: "Escape high-interest credit card debt with proven strategies: avalanche method, balance transfers, debt consolidation, and negotiation tactics.",
    category: "Debt Management",
    color: "bg-rose-500",
  },
  {
    slug: "how-to-reduce-monthly-expenses",
    title: "How to Reduce Monthly Expenses",
    desc: "Practical strategies to cut your monthly bills by $500+. Audit spending, negotiate bills, switch plans, and automate savings across housing, food, and subscriptions.",
    category: "Saving",
    color: "bg-teal-500",
  },
  {
    slug: "retirement-planning-for-beginners",
    title: "Retirement Planning for Beginners",
    desc: "Start planning for retirement today. Understand 401(k)s, IRAs, the 4% rule, and how much to save by age. A complete beginner's guide to building retirement wealth.",
    category: "Retirement",
    color: "bg-indigo-600",
  },
  {
    slug: "how-to-build-credit",
    title: "How to Build Credit from Scratch",
    desc: "Step-by-step guide to building credit with no history. Secured cards, credit builder loans, authorized user status, and responsible habits that reach 720+ scores in 6-12 months.",
    category: "Debt Management",
    color: "bg-cyan-500",
  },
  {
    slug: "what-is-an-etf",
    title: "What Is an ETF? A Beginner's Guide",
    desc: "Understand exchange-traded funds, how they work, and why they are the simplest way to invest. Compare ETFs vs mutual funds vs stocks with real examples.",
    category: "Investing",
    color: "bg-teal-600",
  },
  {
    slug: "how-to-negotiate-salary",
    title: "How to Negotiate Your Salary",
    desc: "Master salary negotiation with proven scripts, research strategies, and timing advice. Learn when to ask for 10-20% more and how to handle counteroffers.",
    category: "Taxes & Income",
    color: "bg-slate-600",
  },
  {
    slug: "renting-vs-buying",
    title: "Renting vs Buying a Home",
    desc: "Complete cost comparison of renting vs buying with breakeven analysis, hidden expenses, and lifestyle factors. Includes 5-year scenarios and decision framework.",
    category: "Home Buying",
    color: "bg-orange-600",
  },
  {
    slug: "how-to-start-a-side-hustle",
    title: "How to Start a Side Hustle",
    desc: "Find, validate, and grow a profitable side hustle to $500-2000/month. Includes 30+ side hustle ideas, customer acquisition strategies, and tax tips.",
    category: "Wealth Building",
    color: "bg-fuchsia-500",
  },
  {
    slug: "what-is-dollar-cost-averaging",
    title: "What Is Dollar-Cost Averaging?",
    desc: "Learn the simplest investment strategy for beginners. Invest a fixed amount monthly, reduce timing risk, and build wealth on autopilot with real performance data.",
    category: "Investing",
    color: "bg-lime-600",
  },
];

export default function GuidesHub() {
  const categories = Array.from(new Set(guides.map((g) => g.category)));

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <span className="text-gray-900">Financial Guides</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Financial <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Guides</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Step-by-step tutorials and expert advice on debt payoff, budgeting, saving, investing, and retirement planning. All guides are free and written in plain English.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 h-full border border-gray-100 group-hover:border-gray-200">
                  <div className={`inline-block ${guide.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                    {guide.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{guide.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const count = guides.filter((g) => g.category === cat).length;
              return (
                <div key={cat} className="bg-white rounded-xl shadow-sm p-4 text-center">
                  <p className="font-bold text-gray-900">{cat}</p>
                  <p className="text-sm text-gray-500">{count} {count === 1 ? 'guide' : 'guides'}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-emerald-900 mb-3">
            Put Knowledge Into Action
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Every guide links to our free calculators so you can immediately apply what you learn. No sign-up required.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/debt-payoff" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors">Debt Payoff Calculator</Link>
            <Link href="/budget" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium transition-colors">Budget Calculator</Link>
            <Link href="/fire-calculator" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium transition-colors">FIRE Calculator</Link>
            <Link href="/" className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-medium transition-colors">All 16 Calculators</Link>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://cashcalcs.com" },
              { "@type": "ListItem", position: 2, name: "Financial Guides", item: "https://cashcalcs.com/guides" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Financial Guides",
            description: "Free financial guides covering debt payoff, budgeting, saving, investing, and retirement planning.",
            url: "https://cashcalcs.com/guides",
            publisher: {
              "@type": "Organization",
              name: "CashCalcs",
              url: "https://cashcalcs.com",
            },
          }),
        }}
      />
    </main>
  );
}
