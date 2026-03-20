export interface RetirementInputs {
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  monthlyContribution: number;
  annualReturn: number; // %
  inflationRate: number; // %
  desiredMonthlyIncome: number; // in today's dollars
  socialSecurityMonthly: number;
}

export interface RetirementResult {
  totalAtRetirement: number;
  realValueAtRetirement: number; // inflation-adjusted
  monthlyIncomeFromSavings: number; // 4% rule
  totalMonthlyIncome: number; // savings + social security
  incomeGap: number; // desired - total
  savingsLastYears: number; // how long savings last at desired withdrawal
  isOnTrack: boolean;
  neededMonthlyContribution: number; // to reach desired income
  yearsToRetirement: number;
  yearlySchedule: {
    year: number;
    age: number;
    contribution: number;
    interest: number;
    balance: number;
  }[];
}

export function calculateRetirement(inputs: RetirementInputs): RetirementResult {
  const {
    currentAge,
    retirementAge,
    currentSavings,
    monthlyContribution,
    annualReturn,
    inflationRate,
    desiredMonthlyIncome,
    socialSecurityMonthly,
  } = inputs;

  const yearsToRetirement = retirementAge - currentAge;
  const monthlyRate = annualReturn / 100 / 12;
  const monthsToRetirement = yearsToRetirement * 12;

  // Accumulation phase: compound growth until retirement
  let balance = currentSavings;
  let totalContributions = 0;
  let totalInterest = 0;
  const yearlySchedule = [];

  for (let year = 1; year <= yearsToRetirement; year++) {
    let yearContribution = 0;
    let yearInterest = 0;

    for (let month = 1; month <= 12; month++) {
      const interest = balance * monthlyRate;
      balance += monthlyContribution + interest;
      totalContributions += monthlyContribution;
      totalInterest += interest;
      yearContribution += monthlyContribution;
      yearInterest += interest;
    }

    yearlySchedule.push({
      year,
      age: currentAge + year,
      contribution: Math.round(yearContribution),
      interest: Math.round(yearInterest),
      balance: Math.round(balance),
    });
  }

  const totalAtRetirement = balance;

  // Adjust for inflation
  const inflationFactor = Math.pow(1 + inflationRate / 100, yearsToRetirement);
  const realValueAtRetirement = totalAtRetirement / inflationFactor;

  // 4% safe withdrawal rule: 4% annual = 0.33% monthly
  const monthlyIncomeFromSavings = (totalAtRetirement * 0.04) / 12;
  const totalMonthlyIncome = monthlyIncomeFromSavings + socialSecurityMonthly;

  // Adjust desired income for inflation at retirement
  const desiredMonthlyIncomeAtRetirement = desiredMonthlyIncome * inflationFactor;
  const incomeGap = desiredMonthlyIncomeAtRetirement - totalMonthlyIncome;

  // Calculate how long savings last if withdrawing desired amount
  let savingsLastYears = 0;
  if (desiredMonthlyIncomeAtRetirement > socialSecurityMonthly) {
    const monthlyWithdrawal = desiredMonthlyIncomeAtRetirement - socialSecurityMonthly;
    let withdrawalBalance = totalAtRetirement;
    let months = 0;
    const maxMonths = 50 * 12; // 50 years max

    while (withdrawalBalance > 0 && months < maxMonths) {
      const interest = withdrawalBalance * monthlyRate;
      withdrawalBalance = withdrawalBalance + interest - monthlyWithdrawal;
      months++;
    }

    savingsLastYears = months / 12;
  } else {
    // If Social Security covers it all, savings can last indefinitely
    savingsLastYears = 100;
  }

  const isOnTrack = totalMonthlyIncome >= desiredMonthlyIncomeAtRetirement;

  // Calculate needed monthly contribution to reach desired income
  let neededMonthlyContribution = monthlyContribution;
  if (!isOnTrack) {
    // Work backwards: what nest egg do we need?
    const neededNestEgg = ((desiredMonthlyIncomeAtRetirement - socialSecurityMonthly) * 12) / 0.04;

    // Calculate monthly contribution needed to reach that nest egg
    if (monthsToRetirement > 0) {
      const futureValueOfCurrent = currentSavings * Math.pow(1 + monthlyRate, monthsToRetirement);
      const remaining = neededNestEgg - futureValueOfCurrent;

      if (remaining > 0 && monthlyRate > 0) {
        const factor = (Math.pow(1 + monthlyRate, monthsToRetirement) - 1) / monthlyRate;
        neededMonthlyContribution = remaining / factor;
      } else if (remaining > 0) {
        neededMonthlyContribution = remaining / monthsToRetirement;
      } else {
        neededMonthlyContribution = 0;
      }
    }
  }

  return {
    totalAtRetirement: Math.round(totalAtRetirement),
    realValueAtRetirement: Math.round(realValueAtRetirement),
    monthlyIncomeFromSavings: Math.round(monthlyIncomeFromSavings),
    totalMonthlyIncome: Math.round(totalMonthlyIncome),
    incomeGap: Math.round(incomeGap),
    savingsLastYears: Math.min(100, savingsLastYears),
    isOnTrack,
    neededMonthlyContribution: Math.round(neededMonthlyContribution),
    yearsToRetirement,
    yearlySchedule,
  };
}

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) return "$" + (amount / 1000000).toFixed(1) + "M";
  return "$" + amount.toLocaleString("en-US");
}

export interface RetirementScenario {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  defaults: Partial<RetirementInputs>;
  content: string;
}

export const retirementScenarios: RetirementScenario[] = [
  {
    slug: "retire-at-60",
    name: "Early Retirement at 60",
    seoTitle: "Early Retirement at 60 Calculator - Can You Afford It?",
    seoDescription: "Calculate if you can retire at 60. See how much you need to save, what monthly income you'll have, and if you're on track for early retirement.",
    description: "Retiring at 60 means 5 fewer working years but potentially 5 more retirement years to fund. You'll need a larger nest egg and may face early withdrawal penalties on some retirement accounts before age 59½.",
    defaults: {
      currentAge: 45,
      retirementAge: 60,
      currentSavings: 200000,
      monthlyContribution: 2000,
      annualReturn: 7,
      inflationRate: 3,
      desiredMonthlyIncome: 6000,
      socialSecurityMonthly: 0, // Can't claim until 62
    },
    content: "Early retirement at 60 is the dream for many, but it requires careful planning. You won't be eligible for Social Security until 62 (reduced benefits) or 67 (full benefits), and Medicare doesn't start until 65. This means you need to cover 100% of your expenses from savings for at least 2-7 years. The 4% rule suggests you need 25x your annual expenses saved. For $6,000/month ($72,000/year), that's $1.8 million. Factor in healthcare costs, which can be $1,000+ per month before Medicare, and the importance of having a robust emergency fund becomes clear.",
  },
  {
    slug: "retire-at-65",
    name: "Standard Retirement at 65",
    seoTitle: "Retirement at 65 Calculator - How Much Do You Need to Save?",
    seoDescription: "Free retirement calculator for age 65. Calculate your nest egg, monthly income from savings and Social Security, and if you're on track.",
    description: "Age 65 is the traditional retirement age and when Medicare begins. Most people qualify for Social Security at this age, and you can withdraw from retirement accounts penalty-free.",
    defaults: {
      currentAge: 30,
      retirementAge: 65,
      currentSavings: 50000,
      monthlyContribution: 1000,
      annualReturn: 7,
      inflationRate: 3,
      desiredMonthlyIncome: 5000,
      socialSecurityMonthly: 2000,
    },
    content: "Retiring at 65 is the standard retirement age in the US. At this age, you qualify for Medicare, which significantly reduces healthcare costs. You can claim Social Security at full retirement age (66-67 depending on birth year) without reduction. The average Social Security benefit is around $2,000/month. Combined with your retirement savings using the 4% safe withdrawal rule, most people can maintain their lifestyle. Starting early is key: $1,000/month invested from age 30 to 65 at 7% annual return grows to over $1.8 million. The power of compound interest over 35 years cannot be overstated.",
  },
  {
    slug: "retire-at-70",
    name: "Delayed Retirement at 70",
    seoTitle: "Retire at 70 Calculator - Maximize Your Social Security",
    seoDescription: "Calculate benefits of delaying retirement until 70. See increased Social Security benefits and how extra working years boost your nest egg.",
    description: "Delaying retirement to 70 maximizes your Social Security benefits (8% increase per year after full retirement age) and gives your savings more time to compound. Your nest egg will be significantly larger.",
    defaults: {
      currentAge: 30,
      retirementAge: 70,
      currentSavings: 50000,
      monthlyContribution: 800,
      annualReturn: 7,
      inflationRate: 3,
      desiredMonthlyIncome: 6000,
      socialSecurityMonthly: 2800, // 24% higher than at 67
    },
    content: "Working until 70 offers major financial advantages. First, Social Security benefits increase by 8% for each year you delay past full retirement age (up to 70). That's a 24% increase over claiming at 67. Second, you have 5 extra years to save and let compound interest work its magic. Third, you have fewer retirement years to fund. The combination is powerful: even with lower monthly contributions ($800 vs $1,000), you can end up with a similar or larger nest egg. This is also the age when Required Minimum Distributions (RMDs) begin for some retirement accounts, ensuring you don't defer taxes indefinitely.",
  },
  {
    slug: "catch-up-at-50",
    name: "Catch-Up Retirement at 50",
    seoTitle: "Retirement Catch-Up Calculator for Age 50+ - Can You Still Retire?",
    seoDescription: "Starting retirement savings late? Use this catch-up calculator to see how much to save monthly at age 50 to retire comfortably at 65.",
    description: "Starting retirement savings at 50 means you have 15 years until standard retirement age. The good news: the IRS allows catch-up contributions to retirement accounts for those 50+. You can contribute an extra $7,500 to 401(k) and $1,000 to IRA annually.",
    defaults: {
      currentAge: 50,
      retirementAge: 65,
      currentSavings: 100000,
      monthlyContribution: 2500,
      annualReturn: 7,
      inflationRate: 3,
      desiredMonthlyIncome: 5000,
      socialSecurityMonthly: 2000,
    },
    content: "If you're 50 and behind on retirement savings, don't panic—but do take aggressive action. The IRS allows catch-up contributions: an extra $7,500/year to your 401(k) (total $30,500 in 2026) and $1,000/year to your IRA (total $8,000). This means you can contribute over $3,000/month with tax advantages. Even starting with $100,000 at age 50, contributing $2,500/month at 7% annual return grows to nearly $1 million by 65. Combined with Social Security, that provides about $5,300/month in retirement income. The key is maximizing contributions now and avoiding early withdrawals. Consider working a few extra years to 67 or 70 for an even stronger financial position.",
  },
];

export function getRetirementScenario(slug: string): RetirementScenario | undefined {
  return retirementScenarios.find((s) => s.slug === slug);
}
