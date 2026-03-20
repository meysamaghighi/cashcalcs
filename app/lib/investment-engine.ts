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
];

export function getInvestmentScenario(slug: string): InvestmentScenario | undefined {
  return investmentScenarios.find((s) => s.slug === slug);
}
