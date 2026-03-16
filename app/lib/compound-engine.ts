export interface CompoundInputs {
  principal: number;
  monthlyContribution: number;
  annualRate: number; // %
  years: number;
  compoundFrequency: "monthly" | "quarterly" | "annually";
}

export interface CompoundYear {
  year: number;
  startBalance: number;
  contributions: number;
  interest: number;
  endBalance: number;
  totalContributions: number;
  totalInterest: number;
}

export interface CompoundResult {
  finalBalance: number;
  totalContributions: number;
  totalInterest: number;
  schedule: CompoundYear[];
  doublingYears: number;
}

export function calculateCompound(inputs: CompoundInputs): CompoundResult {
  const { principal, monthlyContribution, annualRate, years, compoundFrequency } = inputs;

  const periodsPerYear =
    compoundFrequency === "monthly" ? 12 :
    compoundFrequency === "quarterly" ? 4 : 1;
  const ratePerPeriod = annualRate / 100 / periodsPerYear;
  const monthsPerPeriod = 12 / periodsPerYear;

  const schedule: CompoundYear[] = [];
  let balance = principal;
  let totalContributions = principal;
  let totalInterest = 0;
  let doublingYears = -1;
  const doublingTarget = principal > 0 ? principal * 2 : monthlyContribution * 12 * 2;

  for (let y = 1; y <= years; y++) {
    const startBalance = balance;
    let yearContributions = 0;
    let yearInterest = 0;

    for (let p = 0; p < periodsPerYear; p++) {
      // Add contributions for this period
      const periodContributions = monthlyContribution * monthsPerPeriod;
      balance += periodContributions;
      yearContributions += periodContributions;

      // Apply interest
      const interest = balance * ratePerPeriod;
      balance += interest;
      yearInterest += interest;
    }

    totalContributions += yearContributions;
    totalInterest += yearInterest;

    schedule.push({
      year: y,
      startBalance: Math.round(startBalance),
      contributions: Math.round(yearContributions),
      interest: Math.round(yearInterest),
      endBalance: Math.round(balance),
      totalContributions: Math.round(totalContributions),
      totalInterest: Math.round(totalInterest),
    });

    if (doublingYears === -1 && balance >= doublingTarget && doublingTarget > 0) {
      doublingYears = y;
    }
  }

  if (doublingYears === -1) doublingYears = years;

  return {
    finalBalance: Math.round(balance),
    totalContributions: Math.round(totalContributions),
    totalInterest: Math.round(totalInterest),
    schedule,
    doublingYears,
  };
}

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) return "$" + (amount / 1000000).toFixed(1) + "M";
  return "$" + amount.toLocaleString("en-US");
}

export interface CompoundScenario {
  slug: string;
  name: string;
  description: string;
  defaults: Partial<CompoundInputs>;
  seoTitle: string;
  seoDescription: string;
  content: string;
}

export const compoundScenarios: CompoundScenario[] = [
  {
    slug: "10k-investment",
    name: "$10K Investment Growth",
    description: "See how a one-time $10,000 investment grows over time with compound interest.",
    defaults: { principal: 10000, monthlyContribution: 0, annualRate: 7, years: 30 },
    seoTitle: "How Much Will $10,000 Grow? Compound Interest Calculator",
    seoDescription: "See how a $10,000 investment grows over 10, 20, and 30 years with compound interest. Free calculator with interactive charts.",
    content: "A one-time investment of $10,000 at 7% annual return grows to $19,672 in 10 years, $38,697 in 20 years, and $76,123 in 30 years. That is the power of compound interest: your money earns returns, and those returns earn returns. The key is time in the market, not timing the market.",
  },
  {
    slug: "500-per-month",
    name: "$500/Month Investing",
    description: "How much can you accumulate by investing $500 every month?",
    defaults: { principal: 0, monthlyContribution: 500, annualRate: 7, years: 30 },
    seoTitle: "Investing $500 a Month - How Much Will You Have?",
    seoDescription: "Calculate how much investing $500 per month will grow to with compound interest. See results for 10, 20, and 30 year timelines.",
    content: "Investing $500 per month at a 7% annual return builds to $86,541 in 10 years, $260,464 in 20 years, and $606,438 in 30 years. Your total contributions would be $180,000 over 30 years, meaning compound interest adds over $426,000 in free money. Starting early and staying consistent is the key.",
  },
  {
    slug: "millionaire-calculator",
    name: "Millionaire Calculator",
    description: "How long will it take you to reach $1,000,000?",
    defaults: { principal: 0, monthlyContribution: 1000, annualRate: 7, years: 40 },
    seoTitle: "Millionaire Calculator - How Long to Reach $1 Million?",
    seoDescription: "Free millionaire calculator. See how long it takes to reach $1 million by investing monthly. Adjust contributions and returns to find your path.",
    content: "At $1,000 per month and a 7% annual return, you will reach $1 million in about 30 years. Increase to $1,500/month and you get there in about 25 years. The biggest factor is starting early: someone who starts at 25 needs to save far less per month than someone starting at 35 to reach the same goal by 65.",
  },
  {
    slug: "retirement-savings-growth",
    name: "Retirement Savings Growth",
    description: "Project your retirement savings with employer match and compound growth.",
    defaults: { principal: 20000, monthlyContribution: 750, annualRate: 7, years: 35 },
    seoTitle: "Retirement Savings Growth Calculator - Project Your 401k Growth",
    seoDescription: "Calculate your retirement savings growth with compound interest. See how your 401k or IRA will grow over time with regular contributions.",
    content: "If you have $20,000 saved and contribute $750/month (including employer match) at 7% return, you will have over $1.3 million in 35 years. Your total contributions would be about $335,000, meaning compound growth adds nearly $1 million. Maxing out your employer match is the single best financial move you can make.",
  },
  {
    slug: "savings-account-interest",
    name: "Savings Account Interest",
    description: "Calculate growth in a high-yield savings account at 4-5% APY.",
    defaults: { principal: 5000, monthlyContribution: 200, annualRate: 4.5, years: 10 },
    seoTitle: "High-Yield Savings Account Calculator - How Much Interest Will You Earn?",
    seoDescription: "Calculate how much interest you will earn in a high-yield savings account. See growth at 4-5% APY with monthly deposits.",
    content: "High-yield savings accounts in 2026 offer 4-5% APY, which is 10-50x more than traditional banks. $5,000 in a HYSA at 4.5% with $200/month deposits grows to $35,438 in 10 years. You would earn $6,438 in interest on $29,000 of contributions. This is ideal for emergency funds and short-term goals.",
  },
  {
    slug: "index-fund-growth",
    name: "Index Fund Growth",
    description: "Project growth of a total market or S&P 500 index fund investment.",
    defaults: { principal: 5000, monthlyContribution: 500, annualRate: 10, years: 25 },
    seoTitle: "Index Fund Growth Calculator - S&P 500 Returns Over Time",
    seoDescription: "Calculate index fund growth over time. See projected returns for S&P 500 and total market index funds with regular contributions.",
    content: "The S&P 500 has returned an average of about 10% annually over the long term. $5,000 initial investment with $500/month at 10% grows to $689,000 in 25 years. Of that, only $155,000 is your contributions. The remaining $534,000 is compound growth. Low-cost index funds (0.03-0.10% expense ratio) are the gold standard for long-term wealth building.",
  },
  {
    slug: "daily-vs-monthly-compounding",
    name: "Daily vs Monthly Compounding",
    description: "Compare how compounding frequency affects your returns.",
    defaults: { principal: 10000, monthlyContribution: 300, annualRate: 6, years: 20 },
    seoTitle: "Daily vs Monthly vs Annual Compounding - What's the Difference?",
    seoDescription: "Compare daily, monthly, quarterly, and annual compounding. See how compounding frequency affects your investment returns.",
    content: "Compounding frequency matters, but less than most people think. On $10,000 at 6% over 20 years: annual compounding gives $32,071, monthly gives $33,102, and daily gives $33,201. The difference between monthly and daily is just $99 over 20 years. What matters far more is your contribution amount and the interest rate.",
  },
  {
    slug: "rule-of-72",
    name: "Rule of 72 Calculator",
    description: "Use the Rule of 72 to estimate how long it takes to double your money.",
    defaults: { principal: 10000, monthlyContribution: 0, annualRate: 7, years: 20 },
    seoTitle: "Rule of 72 Calculator - How Long to Double Your Money?",
    seoDescription: "Free Rule of 72 calculator. Enter your interest rate to see how long it takes to double your investment. Compare with exact compound interest calculations.",
    content: "The Rule of 72 is a quick mental math trick: divide 72 by your annual return to estimate years to double. At 7%, your money doubles in about 10.3 years (72/7). At 10%, it doubles in 7.2 years. At 4%, it doubles in 18 years. This calculator shows you both the Rule of 72 estimate and the exact compound interest calculation.",
  },
];

export function getScenarioBySlug(slug: string): CompoundScenario | undefined {
  return compoundScenarios.find((s) => s.slug === slug);
}
