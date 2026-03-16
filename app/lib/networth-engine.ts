export interface AssetItem {
  id: string;
  name: string;
  category: AssetCategory;
  value: number;
}

export interface LiabilityItem {
  id: string;
  name: string;
  category: LiabilityCategory;
  value: number;
}

export type AssetCategory =
  | "cash"
  | "investments"
  | "retirement"
  | "property"
  | "vehicles"
  | "other-assets";

export type LiabilityCategory =
  | "mortgage"
  | "student-loans"
  | "credit-cards"
  | "auto-loans"
  | "personal-loans"
  | "other-debts";

export const assetCategories: { key: AssetCategory; label: string }[] = [
  { key: "cash", label: "Cash & Savings" },
  { key: "investments", label: "Investments" },
  { key: "retirement", label: "Retirement Accounts" },
  { key: "property", label: "Real Estate" },
  { key: "vehicles", label: "Vehicles" },
  { key: "other-assets", label: "Other Assets" },
];

export const liabilityCategories: { key: LiabilityCategory; label: string }[] =
  [
    { key: "mortgage", label: "Mortgage" },
    { key: "student-loans", label: "Student Loans" },
    { key: "credit-cards", label: "Credit Cards" },
    { key: "auto-loans", label: "Auto Loans" },
    { key: "personal-loans", label: "Personal Loans" },
    { key: "other-debts", label: "Other Debts" },
  ];

export interface NetWorthResult {
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
  assetBreakdown: { category: string; total: number }[];
  liabilityBreakdown: { category: string; total: number }[];
  healthScore: "excellent" | "good" | "fair" | "poor";
  debtToAssetRatio: number;
}

export function calculateNetWorth(
  assets: AssetItem[],
  liabilities: LiabilityItem[]
): NetWorthResult {
  const totalAssets = assets.reduce((sum, a) => sum + a.value, 0);
  const totalLiabilities = liabilities.reduce((sum, l) => sum + l.value, 0);
  const netWorth = totalAssets - totalLiabilities;

  const assetBreakdown = assetCategories
    .map((cat) => ({
      category: cat.label,
      total: assets
        .filter((a) => a.category === cat.key)
        .reduce((sum, a) => sum + a.value, 0),
    }))
    .filter((b) => b.total > 0);

  const liabilityBreakdown = liabilityCategories
    .map((cat) => ({
      category: cat.label,
      total: liabilities
        .filter((l) => l.category === cat.key)
        .reduce((sum, l) => sum + l.value, 0),
    }))
    .filter((b) => b.total > 0);

  const debtToAssetRatio = totalAssets > 0 ? totalLiabilities / totalAssets : 0;

  let healthScore: NetWorthResult["healthScore"] = "excellent";
  if (netWorth < 0) healthScore = "poor";
  else if (debtToAssetRatio > 0.5) healthScore = "fair";
  else if (debtToAssetRatio > 0.2) healthScore = "good";

  return {
    totalAssets,
    totalLiabilities,
    netWorth,
    assetBreakdown,
    liabilityBreakdown,
    healthScore,
    debtToAssetRatio,
  };
}

export function formatCurrency(amount: number): string {
  const abs = Math.abs(amount);
  const sign = amount < 0 ? "-" : "";
  if (abs >= 1000000) return sign + "$" + (abs / 1000000).toFixed(1) + "M";
  return sign + "$" + abs.toLocaleString("en-US");
}

export interface NetWorthScenario {
  slug: string;
  name: string;
  description: string;
  content: string;
  defaultAssets: AssetItem[];
  defaultLiabilities: LiabilityItem[];
  seoTitle: string;
  seoDescription: string;
}

let idCounter = 0;
function makeId(): string {
  return `preset-${++idCounter}`;
}

export const networthScenarios: NetWorthScenario[] = [
  {
    slug: "net-worth-by-age-30",
    name: "Net Worth by Age 30",
    description:
      "What should your net worth be at 30? See how you compare to the average.",
    content:
      "By age 30, the median net worth in the US is around $8,000-$10,000, while the average is about $76,000 (skewed by high earners). A common rule of thumb: have 1x your annual salary saved by 30. If you earn $55,000, aim for $55,000 in net worth. Many 30-year-olds carry student loans and are just starting to build wealth through 401(k) contributions and home equity.",
    defaultAssets: [
      { id: makeId(), name: "Checking Account", category: "cash", value: 5000 },
      { id: makeId(), name: "Savings Account", category: "cash", value: 8000 },
      { id: makeId(), name: "401(k)", category: "retirement", value: 25000 },
      { id: makeId(), name: "Roth IRA", category: "retirement", value: 12000 },
      { id: makeId(), name: "Car", category: "vehicles", value: 15000 },
    ],
    defaultLiabilities: [
      { id: makeId(), name: "Student Loans", category: "student-loans", value: 20000 },
      { id: makeId(), name: "Auto Loan", category: "auto-loans", value: 8000 },
      { id: makeId(), name: "Credit Card", category: "credit-cards", value: 2000 },
    ],
    seoTitle: "Net Worth by Age 30 Calculator - Are You on Track?",
    seoDescription:
      "Free net worth calculator for age 30. See how your assets and debts compare to the average American at 30 and get tips to build wealth.",
  },
  {
    slug: "net-worth-by-age-40",
    name: "Net Worth by Age 40",
    description:
      "How does your net worth at 40 compare? Check benchmarks and tips.",
    content:
      "By age 40, the median net worth is about $80,000 and the average is $400,000+. The rule of thumb suggests having 3x your annual salary saved. At 40, many people have built home equity, grown their retirement accounts, and paid down student loans. This is a pivotal decade for wealth building as compound interest really starts working.",
    defaultAssets: [
      { id: makeId(), name: "Checking Account", category: "cash", value: 10000 },
      { id: makeId(), name: "Savings Account", category: "cash", value: 25000 },
      { id: makeId(), name: "401(k)", category: "retirement", value: 120000 },
      { id: makeId(), name: "Roth IRA", category: "retirement", value: 45000 },
      { id: makeId(), name: "Brokerage Account", category: "investments", value: 30000 },
      { id: makeId(), name: "Home", category: "property", value: 350000 },
      { id: makeId(), name: "Car", category: "vehicles", value: 20000 },
    ],
    defaultLiabilities: [
      { id: makeId(), name: "Mortgage", category: "mortgage", value: 250000 },
      { id: makeId(), name: "Auto Loan", category: "auto-loans", value: 12000 },
    ],
    seoTitle: "Net Worth by Age 40 Calculator - Wealth Benchmark",
    seoDescription:
      "Free net worth calculator for age 40. Compare your net worth to averages, track assets vs debts, and plan your next decade of wealth building.",
  },
  {
    slug: "net-worth-by-age-50",
    name: "Net Worth by Age 50",
    description:
      "Net worth benchmarks at 50 and strategies for the home stretch to retirement.",
    content:
      "By age 50, the median net worth is about $170,000 and the average exceeds $800,000. The rule of thumb: 6x your annual salary saved. At 50, you can make catch-up contributions to 401(k) ($30,500 total in 2026) and IRA ($8,000 total). Home equity is often the largest asset. This is the critical decade to maximize savings before retirement.",
    defaultAssets: [
      { id: makeId(), name: "Checking Account", category: "cash", value: 15000 },
      { id: makeId(), name: "Savings Account", category: "cash", value: 40000 },
      { id: makeId(), name: "401(k)", category: "retirement", value: 350000 },
      { id: makeId(), name: "IRA", category: "retirement", value: 80000 },
      { id: makeId(), name: "Brokerage Account", category: "investments", value: 75000 },
      { id: makeId(), name: "Home", category: "property", value: 450000 },
      { id: makeId(), name: "Car", category: "vehicles", value: 25000 },
    ],
    defaultLiabilities: [
      { id: makeId(), name: "Mortgage", category: "mortgage", value: 150000 },
    ],
    seoTitle: "Net Worth by Age 50 Calculator - Pre-Retirement Check",
    seoDescription:
      "Free net worth calculator for age 50. See where you stand before retirement, compare to benchmarks, and maximize your final saving years.",
  },
  {
    slug: "millennial-net-worth",
    name: "Millennial Net Worth",
    description:
      "Net worth benchmarks for millennials (born 1981-1996) and how to get ahead.",
    content:
      "Millennials (ages 29-44 in 2026) have a median net worth of about $50,000-$80,000. Many face unique challenges: student loan debt averaging $30,000+, delayed homeownership, and entering the job market during the 2008 recession. However, millennials who started investing early in the 2010s bull market have seen strong growth. The key advantages: time and compound interest.",
    defaultAssets: [
      { id: makeId(), name: "Checking Account", category: "cash", value: 4000 },
      { id: makeId(), name: "Savings Account", category: "cash", value: 12000 },
      { id: makeId(), name: "401(k)", category: "retirement", value: 55000 },
      { id: makeId(), name: "Roth IRA", category: "retirement", value: 18000 },
      { id: makeId(), name: "Index Funds", category: "investments", value: 10000 },
      { id: makeId(), name: "Car", category: "vehicles", value: 12000 },
    ],
    defaultLiabilities: [
      { id: makeId(), name: "Student Loans", category: "student-loans", value: 25000 },
      { id: makeId(), name: "Credit Card", category: "credit-cards", value: 4000 },
      { id: makeId(), name: "Auto Loan", category: "auto-loans", value: 6000 },
    ],
    seoTitle: "Millennial Net Worth Calculator - Where Do You Stand?",
    seoDescription:
      "Free net worth calculator for millennials. See how your wealth compares, tackle student debt, and build toward financial independence.",
  },
  {
    slug: "gen-z-net-worth",
    name: "Gen Z Net Worth",
    description:
      "Just starting out? See typical Gen Z net worth and how to build wealth early.",
    content:
      "Gen Z (ages 18-28 in 2026) is just starting their financial journey. The median net worth for under-25s is about $8,000, and many have negative net worth due to student loans. The good news: Gen Z is more financially aware than previous generations at the same age. Starting to invest even $100/month in your early 20s can grow to over $300,000 by age 55 at average market returns.",
    defaultAssets: [
      { id: makeId(), name: "Checking Account", category: "cash", value: 2000 },
      { id: makeId(), name: "Savings Account", category: "cash", value: 3000 },
      { id: makeId(), name: "401(k)", category: "retirement", value: 5000 },
      { id: makeId(), name: "Robinhood/Brokerage", category: "investments", value: 2000 },
    ],
    defaultLiabilities: [
      { id: makeId(), name: "Student Loans", category: "student-loans", value: 15000 },
      { id: makeId(), name: "Credit Card", category: "credit-cards", value: 1500 },
    ],
    seoTitle: "Gen Z Net Worth Calculator - Start Building Wealth",
    seoDescription:
      "Free net worth calculator for Gen Z. Track your assets and debts, compare to peers, and start building wealth in your 20s.",
  },
  {
    slug: "six-figure-earner",
    name: "Six-Figure Earner",
    description:
      "Earning $100K+? See if your net worth matches your income level.",
    content:
      "Earning six figures does not automatically mean high net worth. Lifestyle inflation, high-cost-of-living cities, and student debt from graduate degrees can eat into wealth. A common benchmark: your net worth should be at least your age times your annual pre-tax income divided by 10. For a 35-year-old earning $120,000, that means a target net worth of $420,000. Many six-figure earners are surprised to find their net worth is lower than expected.",
    defaultAssets: [
      { id: makeId(), name: "Checking Account", category: "cash", value: 15000 },
      { id: makeId(), name: "High-Yield Savings", category: "cash", value: 35000 },
      { id: makeId(), name: "401(k)", category: "retirement", value: 180000 },
      { id: makeId(), name: "Roth IRA", category: "retirement", value: 40000 },
      { id: makeId(), name: "Brokerage", category: "investments", value: 50000 },
      { id: makeId(), name: "Home", category: "property", value: 400000 },
      { id: makeId(), name: "Car 1", category: "vehicles", value: 30000 },
      { id: makeId(), name: "Car 2", category: "vehicles", value: 20000 },
    ],
    defaultLiabilities: [
      { id: makeId(), name: "Mortgage", category: "mortgage", value: 300000 },
      { id: makeId(), name: "Auto Loan", category: "auto-loans", value: 25000 },
      { id: makeId(), name: "Student Loans", category: "student-loans", value: 40000 },
    ],
    seoTitle: "Six-Figure Earner Net Worth Calculator - Are You Wealthy?",
    seoDescription:
      "Free net worth calculator for six-figure earners. See if your wealth matches your income, identify lifestyle inflation, and optimize your finances.",
  },
  {
    slug: "debt-free-journey",
    name: "Debt-Free Journey",
    description:
      "Track your path from negative to positive net worth as you pay off debt.",
    content:
      "If your liabilities exceed your assets, your net worth is negative. That is more common than you think — about 15% of American households have negative net worth. The path to positive net worth starts with tracking what you owe, making a payoff plan (avalanche or snowball method), and building assets simultaneously. Every dollar of debt paid off improves your net worth by one dollar.",
    defaultAssets: [
      { id: makeId(), name: "Checking Account", category: "cash", value: 2000 },
      { id: makeId(), name: "Savings Account", category: "cash", value: 1000 },
      { id: makeId(), name: "401(k)", category: "retirement", value: 8000 },
      { id: makeId(), name: "Car", category: "vehicles", value: 10000 },
    ],
    defaultLiabilities: [
      { id: makeId(), name: "Student Loans", category: "student-loans", value: 35000 },
      { id: makeId(), name: "Credit Card 1", category: "credit-cards", value: 8000 },
      { id: makeId(), name: "Credit Card 2", category: "credit-cards", value: 5000 },
      { id: makeId(), name: "Auto Loan", category: "auto-loans", value: 12000 },
      { id: makeId(), name: "Personal Loan", category: "personal-loans", value: 3000 },
    ],
    seoTitle: "Debt-Free Net Worth Calculator - Track Your Progress",
    seoDescription:
      "Free net worth calculator for your debt-free journey. See your current net worth, track every debt, and watch your wealth grow as you pay down debt.",
  },
  {
    slug: "first-time-homebuyer",
    name: "First-Time Homebuyer",
    description:
      "See how buying your first home impacts your net worth and overall finances.",
    content:
      "Buying a home is the largest financial transaction most people make. While a mortgage adds a large liability, the home itself is an asset. Over time, as you pay down the mortgage and the home appreciates, your net worth grows. The key: do not overextend. Keep your mortgage payment under 28% of gross income, and make sure you still have an emergency fund after the down payment.",
    defaultAssets: [
      { id: makeId(), name: "Checking Account", category: "cash", value: 5000 },
      { id: makeId(), name: "Savings (post-down-payment)", category: "cash", value: 10000 },
      { id: makeId(), name: "401(k)", category: "retirement", value: 40000 },
      { id: makeId(), name: "Home", category: "property", value: 350000 },
      { id: makeId(), name: "Car", category: "vehicles", value: 15000 },
    ],
    defaultLiabilities: [
      { id: makeId(), name: "Mortgage", category: "mortgage", value: 280000 },
      { id: makeId(), name: "Student Loans", category: "student-loans", value: 15000 },
      { id: makeId(), name: "Auto Loan", category: "auto-loans", value: 8000 },
    ],
    seoTitle: "First-Time Homebuyer Net Worth Calculator",
    seoDescription:
      "Free net worth calculator for first-time homebuyers. See how a mortgage affects your net worth and plan your home purchase wisely.",
  },
];

export function getScenarioBySlug(
  slug: string
): NetWorthScenario | undefined {
  return networthScenarios.find((s) => s.slug === slug);
}
