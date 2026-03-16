export interface FireInputs {
  age: number;
  annualIncome: number;
  annualExpenses: number;
  currentSavings: number;
  annualReturn: number; // %
  withdrawalRate: number; // % (default 4%)
  targetAge: number; // optional target retirement age
}

export interface FireYear {
  age: number;
  year: number;
  startBalance: number;
  contribution: number;
  growth: number;
  endBalance: number;
  fireNumber: number;
  isFire: boolean;
}

export interface FireResult {
  fireNumber: number;
  fireAge: number;
  yearsToFire: number;
  schedule: FireYear[];
  totalContributions: number;
  totalGrowth: number;
  savingsRate: number;
  coastFireAge: number;
  coastFireNumber: number;
  leanFireNumber: number;
  leanFireAge: number;
  fatFireNumber: number;
  fatFireAge: number;
}

export function calculateFire(inputs: FireInputs): FireResult {
  const {
    age,
    annualIncome,
    annualExpenses,
    currentSavings,
    annualReturn,
    withdrawalRate,
  } = inputs;

  const annualContribution = annualIncome - annualExpenses;
  const savingsRate = annualIncome > 0 ? (annualContribution / annualIncome) * 100 : 0;
  const returnRate = annualReturn / 100;
  const fireNumber = annualExpenses / (withdrawalRate / 100);
  const leanFireNumber = (annualExpenses * 0.7) / (withdrawalRate / 100);
  const fatFireNumber = (annualExpenses * 1.5) / (withdrawalRate / 100);

  const schedule: FireYear[] = [];
  let balance = currentSavings;
  let fireAge = -1;
  let leanFireAge = -1;
  let fatFireAge = -1;
  let coastFireAge = -1;
  let coastFireNumber = 0;
  let totalContributions = 0;
  let totalGrowth = 0;
  const maxAge = 100;

  for (let y = 0; y <= maxAge - age; y++) {
    const currentAge = age + y;
    const startBalance = balance;
    const contribution = y === 0 ? 0 : annualContribution;
    const growth = balance * returnRate;

    balance = balance + contribution + growth;
    totalContributions += contribution;
    totalGrowth += growth;

    const isFire = balance >= fireNumber;

    schedule.push({
      age: currentAge,
      year: y,
      startBalance: Math.round(startBalance),
      contribution: Math.round(contribution),
      growth: Math.round(growth),
      endBalance: Math.round(balance),
      fireNumber: Math.round(fireNumber),
      isFire,
    });

    if (fireAge === -1 && balance >= fireNumber) {
      fireAge = currentAge;
    }
    if (leanFireAge === -1 && balance >= leanFireNumber) {
      leanFireAge = currentAge;
    }
    if (fatFireAge === -1 && balance >= fatFireNumber) {
      fatFireAge = currentAge;
    }

    // Coast FIRE: when current savings, growing without contributions, will reach FIRE number by age 65
    if (coastFireAge === -1) {
      const yearsTo65 = 65 - currentAge;
      if (yearsTo65 > 0) {
        const futureValue = balance * Math.pow(1 + returnRate, yearsTo65);
        if (futureValue >= fireNumber) {
          coastFireAge = currentAge;
          coastFireNumber = Math.round(balance);
        }
      }
    }
  }

  if (fireAge === -1) fireAge = maxAge;
  if (leanFireAge === -1) leanFireAge = maxAge;
  if (fatFireAge === -1) fatFireAge = maxAge;
  if (coastFireAge === -1) coastFireAge = maxAge;

  return {
    fireNumber: Math.round(fireNumber),
    fireAge,
    yearsToFire: Math.max(0, fireAge - age),
    schedule: schedule.slice(0, Math.min(fireAge - age + 10, maxAge - age + 1)),
    totalContributions: Math.round(totalContributions),
    totalGrowth: Math.round(totalGrowth),
    savingsRate: Math.round(savingsRate * 10) / 10,
    coastFireAge,
    coastFireNumber,
    leanFireNumber: Math.round(leanFireNumber),
    leanFireAge,
    fatFireNumber: Math.round(fatFireNumber),
    fatFireAge,
  };
}

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    return "$" + (amount / 1000000).toFixed(1) + "M";
  }
  return "$" + amount.toLocaleString("en-US");
}

export function formatCurrencyFull(amount: number): string {
  return "$" + amount.toLocaleString("en-US");
}

// Scenarios for SEO pages
export interface FireScenario {
  slug: string;
  name: string;
  description: string;
  defaults: Partial<FireInputs>;
  seoTitle: string;
  seoDescription: string;
  content: string;
}

export const fireScenarios: FireScenario[] = [
  {
    slug: "retire-at-40",
    name: "Retire at 40",
    description: "What does it take to retire by age 40? Extremely aggressive saving and investing.",
    defaults: { age: 25, annualIncome: 100000, annualExpenses: 35000, currentSavings: 20000, annualReturn: 7, withdrawalRate: 4 },
    seoTitle: "How to Retire at 40 - FIRE Calculator | Financial Freedom",
    seoDescription: "Can you retire at 40? Use our free FIRE calculator to see exactly what savings rate, income, and investment returns you need to retire by 40.",
    content: "Retiring at 40 means achieving financial independence in roughly 15 years of working. This requires an extremely high savings rate (typically 60-70% of income) and disciplined investing. The math is simple: save aggressively, invest in low-cost index funds, and let compound growth do the heavy lifting. With a $100,000 salary and $35,000 in annual expenses, you need roughly $875,000 to retire at a 4% withdrawal rate.",
  },
  {
    slug: "retire-at-50",
    name: "Retire at 50",
    description: "A more achievable early retirement target that still beats traditional retirement by 15+ years.",
    defaults: { age: 30, annualIncome: 80000, annualExpenses: 45000, currentSavings: 30000, annualReturn: 7, withdrawalRate: 4 },
    seoTitle: "How to Retire at 50 - FIRE Calculator | Financial Freedom",
    seoDescription: "Plan your path to retiring at 50. Free FIRE calculator shows your exact timeline, savings needed, and how to optimize your path to early retirement.",
    content: "Retiring at 50 is one of the most achievable early retirement targets. With 20-25 years of saving and investing, you need a savings rate of 40-50% to build a portfolio that covers your expenses indefinitely. The key advantages of targeting 50 are: more time for compound growth, potential for career advancement increasing your income, and a more sustainable lifestyle during the accumulation phase.",
  },
  {
    slug: "retire-at-55",
    name: "Retire at 55",
    description: "A balanced early retirement plan with moderate savings requirements.",
    defaults: { age: 30, annualIncome: 75000, annualExpenses: 50000, currentSavings: 15000, annualReturn: 7, withdrawalRate: 4 },
    seoTitle: "How to Retire at 55 - FIRE Calculator | Financial Freedom",
    seoDescription: "Calculate your path to retirement at 55. See how much you need to save and invest to achieve financial independence by 55.",
    content: "Retiring at 55 gives you 10 years before traditional retirement age, with access to most retirement accounts penalty-free by 59.5. A savings rate of 30-40% is typically sufficient. At 55, you will need to bridge the gap to Social Security and Medicare eligibility, so plan for healthcare costs and consider a Roth IRA ladder conversion strategy.",
  },
  {
    slug: "coast-fire",
    name: "Coast FIRE",
    description: "Save enough that compound growth alone will fund your retirement, then work optional lower-stress jobs.",
    defaults: { age: 25, annualIncome: 70000, annualExpenses: 40000, currentSavings: 5000, annualReturn: 7, withdrawalRate: 4 },
    seoTitle: "Coast FIRE Calculator - When Can You Stop Saving for Retirement?",
    seoDescription: "Calculate your Coast FIRE number. Find out when you have saved enough that compound growth alone will fund your retirement at 65, even if you never save another dollar.",
    content: "Coast FIRE is the point where your investments, even without additional contributions, will grow to your FIRE number by traditional retirement age (65). Once you reach Coast FIRE, you only need to earn enough to cover current expenses, not save for retirement. This opens up options like part-time work, passion projects, or lower-paying but more fulfilling careers.",
  },
  {
    slug: "lean-fire",
    name: "Lean FIRE",
    description: "Achieve financial independence with a minimalist lifestyle and lower expenses.",
    defaults: { age: 28, annualIncome: 60000, annualExpenses: 30000, currentSavings: 10000, annualReturn: 7, withdrawalRate: 4 },
    seoTitle: "Lean FIRE Calculator - Minimalist Financial Independence",
    seoDescription: "Calculate your Lean FIRE number. See how a minimalist lifestyle accelerates your path to financial independence with lower expenses and a smaller portfolio.",
    content: "Lean FIRE means achieving financial independence with below-average expenses, typically under $40,000 per year for a single person. The advantage is a much smaller target portfolio, often $750,000-$1,000,000. This approach requires comfort with a frugal lifestyle both before and after retirement. Geographic arbitrage (living in low-cost areas) is a common Lean FIRE strategy.",
  },
  {
    slug: "fat-fire",
    name: "Fat FIRE",
    description: "Financial independence with a comfortable, above-average lifestyle.",
    defaults: { age: 30, annualIncome: 200000, annualExpenses: 100000, currentSavings: 100000, annualReturn: 7, withdrawalRate: 4 },
    seoTitle: "Fat FIRE Calculator - Retire Rich and Comfortable",
    seoDescription: "Calculate your Fat FIRE number. Plan financial independence with a comfortable lifestyle. See how high earners can retire early without sacrificing their standard of living.",
    content: "Fat FIRE is financial independence with annual expenses above $100,000. This requires a portfolio of $2.5M+ at a 4% withdrawal rate. Fat FIRE is typically pursued by high earners (doctors, engineers, executives, business owners) who want to maintain their current lifestyle in retirement. The trade-off is a longer accumulation phase unless income is very high.",
  },
  {
    slug: "barista-fire",
    name: "Barista FIRE",
    description: "Semi-retirement: work a low-stress part-time job while your investments cover most expenses.",
    defaults: { age: 30, annualIncome: 80000, annualExpenses: 50000, currentSavings: 20000, annualReturn: 7, withdrawalRate: 4 },
    seoTitle: "Barista FIRE Calculator - Semi-Retirement Planning",
    seoDescription: "Calculate your Barista FIRE number. Plan for semi-retirement where a part-time job plus investment income covers your expenses.",
    content: "Barista FIRE means having enough invested that a part-time, low-stress job (like working at a coffee shop) combined with investment withdrawals covers your full expenses. If your expenses are $50,000/year and a part-time job covers $20,000, you only need investments to produce $30,000/year, requiring a portfolio of $750,000 instead of $1,250,000 for full FIRE.",
  },
  {
    slug: "fire-for-couples",
    name: "FIRE for Couples",
    description: "Financial independence planning for two-income households.",
    defaults: { age: 30, annualIncome: 150000, annualExpenses: 70000, currentSavings: 50000, annualReturn: 7, withdrawalRate: 4 },
    seoTitle: "FIRE Calculator for Couples - Plan Financial Independence Together",
    seoDescription: "Free FIRE calculator for couples. Enter your combined household income and expenses to see when you can both achieve financial independence.",
    content: "Couples have a significant advantage on the path to FIRE: two incomes but shared living expenses. A couple earning $150,000 combined with $70,000 in expenses has a 53% savings rate. Housing, the biggest expense, is shared. Insurance can be optimized. The FIRE number is based on household expenses, not individual. Many couples reach FIRE 5-10 years faster than singles at similar income levels.",
  },
];

export function getScenarioBySlug(slug: string): FireScenario | undefined {
  return fireScenarios.find((s) => s.slug === slug);
}
