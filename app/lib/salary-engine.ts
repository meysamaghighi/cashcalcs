export interface SalaryInputs {
  amount: number;
  period: "hourly" | "weekly" | "biweekly" | "monthly" | "annual";
  hoursPerWeek: number;
  weeksPerYear: number;
}

export interface SalaryResult {
  hourly: number;
  daily: number;
  weekly: number;
  biweekly: number;
  semimonthly: number;
  monthly: number;
  quarterly: number;
  annual: number;
}

export function calculateSalary(inputs: SalaryInputs): SalaryResult {
  const { amount, period, hoursPerWeek, weeksPerYear } = inputs;

  let annual: number;
  switch (period) {
    case "hourly":
      annual = amount * hoursPerWeek * weeksPerYear;
      break;
    case "weekly":
      annual = amount * weeksPerYear;
      break;
    case "biweekly":
      annual = amount * (weeksPerYear / 2);
      break;
    case "monthly":
      annual = amount * 12;
      break;
    case "annual":
      annual = amount;
      break;
  }

  const hourly = annual / (hoursPerWeek * weeksPerYear);
  const weekly = annual / weeksPerYear;

  return {
    hourly,
    daily: hourly * (hoursPerWeek / 5),
    weekly,
    biweekly: weekly * 2,
    semimonthly: annual / 24,
    monthly: annual / 12,
    quarterly: annual / 4,
    annual,
  };
}

export function formatMoney(amount: number): string {
  if (amount >= 1000) {
    return "$" + amount.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }
  return "$" + amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export interface SalaryScenario {
  slug: string;
  name: string;
  description: string;
  content: string;
  defaults: Partial<SalaryInputs>;
  seoTitle: string;
  seoDescription: string;
}

const baseSalaryScenarios: SalaryScenario[] = [
  {
    slug: "15-an-hour",
    name: "$15 an Hour",
    description: "How much is $15/hour as an annual salary?",
    content:
      "$15 per hour working 40 hours a week, 52 weeks a year equals $31,200 annually, or about $2,600/month before taxes. After federal and state taxes, expect to take home roughly $26,000-28,000 depending on your state. This is close to minimum wage in many states and cities. At this wage, budgeting carefully is essential. The 50/30/20 rule suggests spending no more than $1,300/month on needs (rent, utilities, food), $780 on wants, and saving $520.",
    defaults: { amount: 15, period: "hourly", hoursPerWeek: 40, weeksPerYear: 52 },
    seoTitle: "$15 an Hour is How Much a Year? Salary Breakdown",
    seoDescription:
      "$15 an hour equals $31,200 per year. See the full breakdown: monthly, weekly, biweekly, and daily pay before and after taxes.",
  },
  {
    slug: "20-an-hour",
    name: "$20 an Hour",
    description: "How much is $20/hour as an annual salary?",
    content:
      "$20 per hour at 40 hours/week equals $41,600 per year, or about $3,467/month before taxes. After taxes, take-home pay is roughly $34,000-37,000. This wage is above the federal minimum but below the median individual income ($44,000). At $20/hour, you can comfortably afford rent of $1,040/month (the 30% rule) in many mid-cost areas. A second income stream or side hustle can significantly improve your financial position at this wage level.",
    defaults: { amount: 20, period: "hourly", hoursPerWeek: 40, weeksPerYear: 52 },
    seoTitle: "$20 an Hour is How Much a Year? Full Salary Breakdown",
    seoDescription:
      "$20 an hour equals $41,600 per year. See monthly, weekly, biweekly, and daily pay with budget recommendations.",
  },
  {
    slug: "25-an-hour",
    name: "$25 an Hour",
    description: "How much is $25/hour as an annual salary?",
    content:
      "$25 per hour working full-time equals $52,000 per year, just above the median individual income in the US. Monthly gross pay is $4,333, with take-home around $3,500-3,900 depending on state taxes. At this income, you can afford rent up to $1,300/month and begin building meaningful savings. Contributing $400/month to investments from age 25 grows to over $1 million by age 65 at historical market returns.",
    defaults: { amount: 25, period: "hourly", hoursPerWeek: 40, weeksPerYear: 52 },
    seoTitle: "$25 an Hour is How Much a Year? Annual Salary Calculator",
    seoDescription:
      "$25 an hour equals $52,000 per year. See the full breakdown by month, week, and day plus budget tips.",
  },
  {
    slug: "30-an-hour",
    name: "$30 an Hour",
    description: "How much is $30/hour as an annual salary?",
    content:
      "$30 per hour at 40 hours/week equals $62,400 annually, or $5,200/month gross. Take-home pay is roughly $4,200-4,700/month. This puts you above the median individual income and into a comfortable middle-class range in most US cities. You can afford rent of $1,560/month, save 20% ($1,040/month), and still have plenty for daily expenses. At this income, maxing out a Roth IRA ($7,000/year) is achievable.",
    defaults: { amount: 30, period: "hourly", hoursPerWeek: 40, weeksPerYear: 52 },
    seoTitle: "$30 an Hour is How Much a Year? Salary Calculator",
    seoDescription:
      "$30 an hour equals $62,400 per year. Monthly, weekly, daily breakdown with savings and budget guidance.",
  },
  {
    slug: "50k-salary",
    name: "$50,000 Salary",
    description: "What does a $50K salary break down to hourly?",
    content:
      "A $50,000 annual salary equals $24.04/hour at 40 hours/week (52 weeks). That is $4,167/month gross, $1,923 biweekly, or $962/week. After federal taxes (12% bracket) and FICA (7.65%), take-home is roughly $3,300-3,700/month depending on state. The $50K salary is a common benchmark: it is slightly above the US median individual income and enough to live comfortably in mid-cost cities while building savings.",
    defaults: { amount: 50000, period: "annual", hoursPerWeek: 40, weeksPerYear: 52 },
    seoTitle: "$50,000 a Year is How Much an Hour? Hourly Rate Calculator",
    seoDescription:
      "$50,000 a year equals $24.04 per hour. See the full breakdown: monthly, biweekly, weekly, and daily pay.",
  },
  {
    slug: "75k-salary",
    name: "$75,000 Salary",
    description: "What does a $75K salary break down to hourly?",
    content:
      "A $75,000 annual salary equals $36.06/hour at 40 hours/week. Monthly gross is $6,250, biweekly is $2,885. After federal taxes (22% bracket for income above $44,725) and FICA, take-home is approximately $4,800-5,400/month. At $75K, you are in the top 40% of individual earners. This income allows comfortable living in most US cities, a solid savings rate (20%+ is achievable), and the ability to max out retirement accounts.",
    defaults: { amount: 75000, period: "annual", hoursPerWeek: 40, weeksPerYear: 52 },
    seoTitle: "$75,000 a Year is How Much an Hour? Full Breakdown",
    seoDescription:
      "$75,000 a year equals $36.06 per hour. See monthly, biweekly, weekly, and daily pay with tax estimates.",
  },
  {
    slug: "100k-salary",
    name: "$100,000 Salary",
    description: "What does a six-figure salary break down to hourly?",
    content:
      "A $100,000 salary equals $48.08/hour at 40 hours/week. Monthly gross is $8,333, biweekly is $3,846. After federal taxes (24% bracket for income above $95,375) and FICA, take-home is roughly $6,200-7,200/month depending on state. The six-figure milestone puts you in the top 25% of individual earners. However, in high-cost cities like San Francisco or New York, $100K can feel middle-class due to high rent and living expenses.",
    defaults: { amount: 100000, period: "annual", hoursPerWeek: 40, weeksPerYear: 52 },
    seoTitle: "$100,000 a Year is How Much an Hour? Six-Figure Breakdown",
    seoDescription:
      "$100,000 a year equals $48.08 per hour. See the full pay breakdown and how far a six-figure salary goes.",
  },
  {
    slug: "part-time-20-hours",
    name: "Part-Time (20 hrs/week)",
    description: "Calculate annual income for a part-time 20-hour work week.",
    content:
      "Working 20 hours per week at $20/hour equals $20,800/year, or $1,733/month. Part-time work is common for students, parents, semi-retirees, and those with multiple income streams. At 20 hours/week, you typically do not receive employer benefits (health insurance, retirement matching), so factor in the cost of individual health insurance ($300-600/month). Part-time income combined with freelancing or a side business can provide both flexibility and financial stability.",
    defaults: { amount: 20, period: "hourly", hoursPerWeek: 20, weeksPerYear: 52 },
    seoTitle: "Part-Time Salary Calculator (20 Hours/Week)",
    seoDescription:
      "Calculate your annual income working part-time at 20 hours per week. See monthly, weekly, and hourly pay breakdown.",
  },
];

export const salaryScenarios: SalaryScenario[] = [
  ...baseSalaryScenarios,
];

export function getScenarioBySlug(
  slug: string
): SalaryScenario | undefined {
  return salaryScenarios.find((s) => s.slug === slug);
}
