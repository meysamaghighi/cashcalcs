export interface InvestmentInputs {
  initialInvestment: number;
  monthlyContribution: number;
  annualReturn: number;
  years: number;
  inflationRate: number;
}

export interface InvestmentResult {
  finalBalance: number;
  totalContributions: number;
  totalEarnings: number;
  realValue: number;
  yearlyBreakdown: {
    year: number;
    balance: number;
    contributions: number;
    earnings: number;
    realBalance: number;
  }[];
}

export function calculateInvestment(inputs: InvestmentInputs): InvestmentResult {
  const { initialInvestment, monthlyContribution, annualReturn, years, inflationRate } = inputs;
  const monthlyRate = annualReturn / 100 / 12;
  const inflationFactor = 1 + inflationRate / 100;

  const yearlyBreakdown = [];
  let balance = initialInvestment;
  let totalContributions = initialInvestment;

  for (let y = 1; y <= years; y++) {
    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + monthlyRate) + monthlyContribution;
      totalContributions += monthlyContribution;
    }
    yearlyBreakdown.push({
      year: y,
      balance,
      contributions: totalContributions,
      earnings: balance - totalContributions,
      realBalance: balance / Math.pow(inflationFactor, y),
    });
  }

  const totalEarnings = balance - totalContributions;
  const realValue = balance / Math.pow(inflationFactor, years);

  return { finalBalance: balance, totalContributions, totalEarnings, realValue, yearlyBreakdown };
}

export function formatCurrency(n: number): string {
  if (Math.abs(n) >= 1_000_000) {
    return "$" + (n / 1_000_000).toFixed(2) + "M";
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export interface InvestmentScenario {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  defaults: Partial<InvestmentInputs>;
  content: string;
}

export const investmentScenarios: InvestmentScenario[] = [
  {
    slug: "sp500-returns",
    name: "S&P 500 Returns",
    seoTitle: "S&P 500 Investment Calculator - Historical Returns",
    seoDescription: "Calculate your returns investing in the S&P 500. Based on historical average returns of ~10% annually.",
    description: "See how your money would grow invested in the S&P 500 index at its historical average return.",
    defaults: { annualReturn: 10, years: 20 },
    content: "The S&P 500 has returned an average of about 10% annually (before inflation) since 1926. After inflation, real returns average around 7%. Dollar-cost averaging through monthly contributions is one of the most reliable strategies for building wealth in the stock market over time.",
  },
  {
    slug: "100-per-month",
    name: "$100/Month Investment",
    seoTitle: "$100 a Month Investment Calculator - How Much Will It Grow?",
    seoDescription: "See how investing just $100 per month can grow over time with compound returns. Free investment growth calculator.",
    description: "Even $100/month can grow into a significant sum with time and compound returns.",
    defaults: { initialInvestment: 0, monthlyContribution: 100, annualReturn: 8, years: 30 },
    content: "Investing just $100 per month at an 8% average annual return for 30 years would grow to about $150,000 — you'd contribute $36,000 and earn over $114,000 in returns. Starting early is the single most powerful thing you can do because compound interest needs time to work.",
  },
  {
    slug: "500-per-month",
    name: "$500/Month Investment",
    seoTitle: "$500 a Month Investment Calculator - Growth Projections",
    seoDescription: "Calculate how investing $500 per month grows over 10, 20, or 30 years. See compound growth in action.",
    description: "Calculate the long-term impact of consistently investing $500 every month.",
    defaults: { initialInvestment: 0, monthlyContribution: 500, annualReturn: 8, years: 25 },
    content: "$500 per month is a popular investment target for middle-income earners. At 8% average returns over 25 years, this grows to about $475,000. Over 30 years, it exceeds $750,000. The key is consistency — staying invested through market ups and downs.",
  },
  {
    slug: "lump-sum-vs-dca",
    name: "Lump Sum vs DCA",
    seoTitle: "Lump Sum vs Dollar Cost Averaging Calculator",
    seoDescription: "Compare lump sum investing vs dollar cost averaging. See which strategy produces better returns.",
    description: "Compare investing a lump sum all at once versus spreading it out monthly.",
    defaults: { initialInvestment: 50000, monthlyContribution: 0, annualReturn: 8, years: 20 },
    content: "Studies show that lump sum investing beats dollar cost averaging (DCA) about two-thirds of the time, because markets tend to go up over time. However, DCA reduces the risk of investing at a market peak and can be psychologically easier. If you have a large sum to invest, the mathematically optimal choice is usually to invest it all immediately — but DCA is perfectly reasonable if it helps you sleep at night.",
  },
  {
    slug: "1000-per-month",
    name: "$1,000/Month Investment",
    seoTitle: "$1,000 a Month Investment Calculator - Wealth Building",
    seoDescription: "Calculate how investing $1,000 per month grows over time. See the power of consistent high contributions.",
    description: "See how aggressively saving $1,000/month accelerates your wealth building.",
    defaults: { initialInvestment: 0, monthlyContribution: 1000, annualReturn: 8, years: 25 },
    content: "Investing $1,000 per month at 8% average returns over 25 years grows to about $950,000. Over 30 years, it exceeds $1.5 million. This level of savings requires discipline but puts you on track for a comfortable retirement or even early financial independence. Many high earners who max out their 401(k) and IRA invest at this level or higher.",
  },
  {
    slug: "roth-ira-growth",
    name: "Roth IRA Growth",
    seoTitle: "Roth IRA Growth Calculator - Tax-Free Retirement Savings",
    seoDescription: "Calculate how your Roth IRA grows over time. See tax-free compound growth with the $7,000 annual contribution limit.",
    description: "See how maxing out your Roth IRA each year builds tax-free retirement wealth.",
    defaults: { initialInvestment: 0, monthlyContribution: 583, annualReturn: 8, years: 30 },
    content: "The 2026 Roth IRA contribution limit is $7,000/year ($583/month) for those under 50. At 8% average returns over 30 years, maxing out your Roth IRA every year grows to about $875,000 — completely tax-free in retirement. If you start at age 25 and retire at 55, that's three decades of tax-free compound growth. The earlier you start, the more powerful this tax advantage becomes.",
  },
  {
    slug: "10k-investment",
    name: "$10K One-Time Investment",
    seoTitle: "$10,000 Investment Calculator - How Much Will It Grow?",
    seoDescription: "Calculate how a one-time $10,000 investment grows over 10, 20, or 30 years at different return rates.",
    description: "See how a single $10,000 investment compounds over the decades.",
    defaults: { initialInvestment: 10000, monthlyContribution: 0, annualReturn: 8, years: 30 },
    content: "A one-time $10,000 investment at 8% annual returns grows to about $100,600 over 30 years — more than 10x your initial investment, with zero additional contributions. At 10% (S&P 500 average), it grows to about $174,500. This demonstrates the raw power of compound growth: even a single investment, left untouched, can multiply many times over.",
  },
  {
    slug: "401k-growth",
    name: "401(k) Growth Calculator",
    seoTitle: "401(k) Growth Calculator - Retirement Savings Projections",
    seoDescription: "Calculate how your 401(k) contributions grow over time. Includes employer match and compound growth projections.",
    description: "Project your 401(k) growth including employer matching contributions.",
    defaults: { initialInvestment: 0, monthlyContribution: 1917, annualReturn: 8, years: 30 },
    content: "The 2026 401(k) contribution limit is $23,000/year ($1,917/month). If you max out your 401(k) for 30 years at 8% returns, you'd accumulate about $2.87 million. With an employer match of 50% up to 6% of salary (on a $100K salary), that's an additional $250/month of free money — adding roughly $375,000 more over 30 years. Always contribute at least enough to get your full employer match.",
  },
];

export function getInvestmentScenario(slug: string): InvestmentScenario | undefined {
  return investmentScenarios.find((s) => s.slug === slug);
}
