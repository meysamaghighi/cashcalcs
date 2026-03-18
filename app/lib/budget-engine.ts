export interface BudgetInputs {
  monthlyIncome: number;
  needsPercent: number; // default 50
  wantsPercent: number; // default 30
  savingsPercent: number; // default 20
}

export interface BudgetCategory {
  name: string;
  amount: number;
  percent: number;
  items: { label: string; suggested: number }[];
}

export interface BudgetResult {
  needs: BudgetCategory;
  wants: BudgetCategory;
  savings: BudgetCategory;
  annualSavings: number;
  savingsIn5Years: number;
  savingsIn10Years: number;
}

export function calculateBudget(inputs: BudgetInputs): BudgetResult {
  const { monthlyIncome, needsPercent, wantsPercent, savingsPercent } = inputs;

  const needsAmount = monthlyIncome * (needsPercent / 100);
  const wantsAmount = monthlyIncome * (wantsPercent / 100);
  const savingsAmount = monthlyIncome * (savingsPercent / 100);

  const needs: BudgetCategory = {
    name: "Needs",
    amount: Math.round(needsAmount),
    percent: needsPercent,
    items: [
      { label: "Housing (rent/mortgage)", suggested: Math.round(needsAmount * 0.55) },
      { label: "Utilities", suggested: Math.round(needsAmount * 0.1) },
      { label: "Groceries", suggested: Math.round(needsAmount * 0.15) },
      { label: "Transportation", suggested: Math.round(needsAmount * 0.1) },
      { label: "Insurance", suggested: Math.round(needsAmount * 0.05) },
      { label: "Minimum debt payments", suggested: Math.round(needsAmount * 0.05) },
    ],
  };

  const wants: BudgetCategory = {
    name: "Wants",
    amount: Math.round(wantsAmount),
    percent: wantsPercent,
    items: [
      { label: "Dining out", suggested: Math.round(wantsAmount * 0.25) },
      { label: "Entertainment & streaming", suggested: Math.round(wantsAmount * 0.2) },
      { label: "Shopping & clothes", suggested: Math.round(wantsAmount * 0.2) },
      { label: "Hobbies & fitness", suggested: Math.round(wantsAmount * 0.15) },
      { label: "Travel & vacations", suggested: Math.round(wantsAmount * 0.15) },
      { label: "Personal care", suggested: Math.round(wantsAmount * 0.05) },
    ],
  };

  const savings: BudgetCategory = {
    name: "Savings & Debt",
    amount: Math.round(savingsAmount),
    percent: savingsPercent,
    items: [
      { label: "Emergency fund", suggested: Math.round(savingsAmount * 0.25) },
      { label: "Retirement (401k/IRA)", suggested: Math.round(savingsAmount * 0.35) },
      { label: "Extra debt payments", suggested: Math.round(savingsAmount * 0.2) },
      { label: "Investments", suggested: Math.round(savingsAmount * 0.15) },
      { label: "Short-term goals", suggested: Math.round(savingsAmount * 0.05) },
    ],
  };

  const annualSavings = savingsAmount * 12;
  // Assume 7% return for projections
  const savingsIn5Years = calculateFutureValue(savingsAmount, 7, 5);
  const savingsIn10Years = calculateFutureValue(savingsAmount, 7, 10);

  return { needs, wants, savings, annualSavings, savingsIn5Years, savingsIn10Years };
}

function calculateFutureValue(monthly: number, annualRate: number, years: number): number {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return monthly * n;
  return Math.round(monthly * ((Math.pow(1 + r, n) - 1) / r));
}

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) return "$" + (amount / 1000000).toFixed(1) + "M";
  return "$" + amount.toLocaleString("en-US");
}

export interface BudgetScenario {
  slug: string;
  name: string;
  description: string;
  defaults: Partial<BudgetInputs>;
  seoTitle: string;
  seoDescription: string;
  content: string;
}

export const budgetScenarios: BudgetScenario[] = [
  {
    slug: "50k-salary",
    name: "$50K Salary Budget",
    description: "How to budget a $50,000 annual salary using the 50/30/20 rule.",
    defaults: { monthlyIncome: 3333, needsPercent: 50, wantsPercent: 30, savingsPercent: 20 },
    seoTitle: "How to Budget a $50K Salary - 50/30/20 Breakdown | CashCalcs",
    seoDescription: "Budget breakdown for a $50,000 salary using the 50/30/20 rule. See exactly how much to spend on housing, food, entertainment, and savings.",
    content: "On a $50,000 salary (about $3,333/month after rough estimates), the 50/30/20 rule allocates $1,667 for needs, $1,000 for wants, and $667 for savings. Housing should stay under $1,000/month. Saving $667/month at 7% returns builds to $46,000 in 5 years. This is a tight but manageable budget in most US cities.",
  },
  {
    slug: "75k-salary",
    name: "$75K Salary Budget",
    description: "Budget breakdown for a $75,000 annual income.",
    defaults: { monthlyIncome: 5000, needsPercent: 50, wantsPercent: 30, savingsPercent: 20 },
    seoTitle: "How to Budget $75K a Year - Monthly Budget Breakdown | CashCalcs",
    seoDescription: "See how to budget a $75,000 salary month by month. Housing, food, entertainment, and savings targets using the 50/30/20 rule.",
    content: "A $75,000 salary gives about $5,000/month to work with. The 50/30/20 split is $2,500 for needs, $1,500 for wants, and $1,000 for savings. With $1,000/month going to savings and investments at 7% returns, you will have $71,593 in 5 years and $173,085 in 10 years. This income level offers good flexibility to build wealth quickly.",
  },
  {
    slug: "100k-salary",
    name: "$100K Salary Budget",
    description: "How to allocate a six-figure income for maximum wealth building.",
    defaults: { monthlyIncome: 6667, needsPercent: 45, wantsPercent: 25, savingsPercent: 30 },
    seoTitle: "How to Budget $100K Salary - Build Wealth on Six Figures | CashCalcs",
    seoDescription: "Budget breakdown for a $100,000 salary. See how to allocate your income to build wealth fast with an aggressive savings rate.",
    content: "Earning $100,000/year ($6,667/month) is a great position to accelerate wealth building. Consider a more aggressive 45/25/30 split: $3,000 for needs, $1,667 for wants, and $2,000 for savings. Saving $2,000/month at 7% grows to $143,186 in 5 years and $346,170 in 10 years. At this income, your savings rate matters more than your spending cuts.",
  },
  {
    slug: "single-income-family",
    name: "Single Income Family",
    description: "Budget for a family living on one income of $60K.",
    defaults: { monthlyIncome: 4000, needsPercent: 60, wantsPercent: 25, savingsPercent: 15 },
    seoTitle: "Single Income Family Budget - How to Make It Work | CashCalcs",
    seoDescription: "Budget for a single-income family on $60K. Practical allocation for housing, childcare, groceries, and savings.",
    content: "A single-income family on $60K ($4,000/month) often needs to adjust the standard 50/30/20 rule. A 60/25/15 split is more realistic: $2,400 for needs (including childcare), $1,000 for wants, and $600 for savings. The key is keeping housing under $1,200/month. Even saving $600/month builds to $43,000 in 5 years at 7% returns.",
  },
  {
    slug: "debt-payoff-budget",
    name: "Debt Payoff Budget",
    description: "Aggressive budget focused on eliminating debt fast.",
    defaults: { monthlyIncome: 5000, needsPercent: 50, wantsPercent: 20, savingsPercent: 30 },
    seoTitle: "Debt Payoff Budget - How to Budget to Get Out of Debt | CashCalcs",
    seoDescription: "Budget template for aggressive debt payoff. See how cutting wants to 20% and putting 30% toward debt elimination accelerates your debt-free date.",
    content: "When you are serious about eliminating debt, switch to a 50/20/30 budget where 30% goes to debt payments and savings. On $5,000/month, that is $1,500 dedicated to crushing debt. At this rate, you can eliminate $30,000 of debt in about 20 months. Once debt-free, redirect that $1,500 to investments and watch your net worth skyrocket.",
  },
  {
    slug: "high-savings-rate",
    name: "High Savings Rate (FIRE)",
    description: "Aggressive savings budget for early retirement seekers.",
    defaults: { monthlyIncome: 7000, needsPercent: 40, wantsPercent: 10, savingsPercent: 50 },
    seoTitle: "50% Savings Rate Budget for Early Retirement (FIRE) | CashCalcs",
    seoDescription: "Budget for a 50% savings rate targeting early retirement. See how extreme saving on a good income leads to financial independence in 15-17 years.",
    content: "FIRE (Financial Independence, Retire Early) seekers often target a 50%+ savings rate. On $7,000/month with a 40/10/50 split: $2,800 for needs, $700 for wants, $3,500 for savings. Investing $3,500/month at 7% builds to $250,565 in 5 years and $606,438 in 10 years. At a 50% savings rate, you can reach financial independence in about 17 years regardless of income level.",
  },
  {
    slug: "new-graduate",
    name: "New Graduate Budget",
    description: "First budget for someone starting their career at $45K.",
    defaults: { monthlyIncome: 3000, needsPercent: 55, wantsPercent: 30, savingsPercent: 15 },
    seoTitle: "New Graduate Budget - How to Budget Your First Salary | CashCalcs",
    seoDescription: "Budget guide for new graduates. How to allocate your first salary for rent, student loans, fun, and savings. Start building good money habits early.",
    content: "Starting your career at $45K ($3,000/month) means a tight budget, but building good habits now pays off enormously. A 55/30/15 split allocates $1,650 for needs, $900 for wants, and $450 for savings. The most important thing at this stage is saving something consistently, even if it is only $450/month. At 7% returns, that grows to $32,177 in 5 years.",
  },
  {
    slug: "dual-income-no-kids",
    name: "DINK Budget ($150K Combined)",
    description: "Budget for dual-income, no-kids households earning $150K combined.",
    defaults: { monthlyIncome: 10000, needsPercent: 40, wantsPercent: 25, savingsPercent: 35 },
    seoTitle: "DINK Budget - Dual Income No Kids Budget Template | CashCalcs",
    seoDescription: "Budget for dual-income, no-kids couples. How to leverage your earning power and high savings potential to build wealth fast.",
    content: "DINK (dual income, no kids) couples have a massive wealth-building advantage. On $150K combined ($10,000/month), a 40/25/35 split means $4,000 for needs, $2,500 for wants, and $3,500 for savings. With no childcare costs, you can be aggressive with savings. $3,500/month at 7% grows to $250K in 5 years and $606K in 10 years. Max out both 401(k)s first.",
  },
];

export function getScenarioBySlug(slug: string): BudgetScenario | undefined {
  return budgetScenarios.find((s) => s.slug === slug);
}
