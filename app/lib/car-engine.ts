export interface CarInputs {
  monthlyIncome: number;
  monthlyExpenses: number;
  downPayment: number;
  loanTermMonths: number; // 36, 48, 60, 72, 84
  interestRate: number; // annual %
  includeInsurance: boolean;
  monthlyInsurance: number;
  includeGas: boolean;
  monthlyGas: number;
}

export interface CarResult {
  maxCarPrice: number;
  maxLoanAmount: number;
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  monthlyBudgetImpact: number; // % of income
  affordabilityRating: string;
  totalMonthlyCost: number; // loan + insurance + gas
  monthlyLoanPayment: number;
}

export function calculateCarAffordability(inputs: CarInputs): CarResult {
  // 15% of gross income rule for max monthly car payment
  const maxMonthlyPayment = inputs.monthlyIncome * 0.15;

  // Calculate additional monthly costs
  const monthlyInsurance = inputs.includeInsurance ? inputs.monthlyInsurance : 0;
  const monthlyGas = inputs.includeGas ? inputs.monthlyGas : 0;
  const additionalCosts = monthlyInsurance + monthlyGas;

  // Max loan payment is max total payment minus additional costs
  const maxLoanPayment = Math.max(0, maxMonthlyPayment - additionalCosts);

  const monthlyRate = inputs.interestRate / 100 / 12;
  const numPayments = inputs.loanTermMonths;

  // Calculate max loan amount using PMT formula (PV = PMT * [(1 - (1 + r)^-n) / r])
  let maxLoanAmount: number;
  if (monthlyRate === 0) {
    maxLoanAmount = maxLoanPayment * numPayments;
  } else {
    maxLoanAmount =
      maxLoanPayment *
      ((1 - Math.pow(1 + monthlyRate, -numPayments)) / monthlyRate);
  }

  // Max car price is max loan + down payment
  const maxCarPrice = maxLoanAmount + inputs.downPayment;

  // Calculate actual monthly payment for the max car price
  let monthlyLoanPayment: number;
  if (monthlyRate === 0) {
    monthlyLoanPayment = maxLoanAmount / numPayments;
  } else {
    monthlyLoanPayment =
      (maxLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  // Total interest paid over the loan
  const totalInterest = monthlyLoanPayment * numPayments - maxLoanAmount;

  // Total cost of ownership
  const totalCost =
    maxCarPrice +
    totalInterest +
    monthlyInsurance * numPayments +
    monthlyGas * numPayments;

  // Total monthly cost
  const totalMonthlyCost = monthlyLoanPayment + monthlyInsurance + monthlyGas;

  // Budget impact as % of income
  const monthlyBudgetImpact = inputs.monthlyIncome > 0
    ? (totalMonthlyCost / inputs.monthlyIncome) * 100
    : 0;

  // Affordability rating
  let affordabilityRating: string;
  if (monthlyBudgetImpact <= 10) {
    affordabilityRating = "Excellent";
  } else if (monthlyBudgetImpact <= 15) {
    affordabilityRating = "Good";
  } else if (monthlyBudgetImpact <= 20) {
    affordabilityRating = "Fair";
  } else {
    affordabilityRating = "Challenging";
  }

  return {
    maxCarPrice,
    maxLoanAmount,
    monthlyPayment: totalMonthlyCost,
    totalInterest,
    totalCost,
    monthlyBudgetImpact,
    affordabilityRating,
    totalMonthlyCost,
    monthlyLoanPayment,
  };
}

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) return "$" + (amount / 1000000).toFixed(1) + "M";
  return "$" + Math.round(amount).toLocaleString("en-US");
}

export interface CarScenario {
  slug: string;
  name: string;
  description: string;
  content: string;
  defaults: Partial<CarInputs>;
  seoTitle: string;
  seoDescription: string;
}

export const carScenarios: CarScenario[] = [
  {
    slug: "25k-salary",
    name: "Car on $25K Salary",
    description: "Realistic car budget for someone earning $25,000 per year.",
    content:
      "On a $25,000 annual salary ($2,083/month), the 15% rule suggests spending no more than $312/month on car payments. With a 48-month loan at 7% and $2,000 down, you can afford a car around $13,000-14,000. Consider used cars from 2018-2020 that have depreciated but still offer reliability. Include insurance ($100-150/month for young drivers) and gas ($100-150/month) in your budget. At this income level, buying a reliable used car outright with savings is often the best financial move.",
    defaults: {
      monthlyIncome: 2083,
      monthlyExpenses: 1400,
      downPayment: 2000,
      loanTermMonths: 48,
      interestRate: 7.0,
      includeInsurance: true,
      monthlyInsurance: 125,
      includeGas: true,
      monthlyGas: 125,
    },
    seoTitle: "Car Affordability on $25K Salary - How Much Car Can I Afford?",
    seoDescription:
      "Calculate how much car you can afford on a $25,000 salary. See realistic budgets for car payment, insurance, and gas.",
  },
  {
    slug: "50k-salary",
    name: "Car on $50K Salary",
    description: "Car affordability for a $50,000 annual income.",
    content:
      "With a $50,000 salary ($4,167/month), you can budget $625/month for car payments. Add $150 for insurance and $150 for gas, totaling $925/month in car expenses. With a 60-month loan at 6% and $5,000 down, you can afford a car around $32,000-35,000. This opens up options for certified pre-owned (CPO) vehicles from 2020-2022 or a new economy/compact car. The 20/4/10 rule applies here: 20% down ($6,500 on a $32,500 car), 4-year loan maximum, and total car expenses under 10% of gross income.",
    defaults: {
      monthlyIncome: 4167,
      monthlyExpenses: 2600,
      downPayment: 5000,
      loanTermMonths: 60,
      interestRate: 6.0,
      includeInsurance: true,
      monthlyInsurance: 150,
      includeGas: true,
      monthlyGas: 150,
    },
    seoTitle: "Car Budget on $50K Salary - Affordable Car Calculator",
    seoDescription:
      "How much car can you afford on $50,000 salary? Calculate car payment, insurance, and total monthly costs.",
  },
  {
    slug: "100k-salary",
    name: "Car on $100K Salary",
    description: "Premium car options for six-figure income earners.",
    content:
      "At $100,000 annual income ($8,333/month), the 15% guideline allows $1,250/month for car payments. However, just because you can afford it doesn't mean you should max it out. With a 60-month loan at 5.5% and $10,000 down, you can afford a car around $65,000-70,000. This range includes luxury brands (BMW 3-Series, Audi A4, Tesla Model 3) or fully-loaded mid-size SUVs. Smart high-earners often buy below their means: a $35,000-45,000 car leaves money for retirement savings, investments, and other financial goals. Remember, cars depreciate — your net worth grows from assets that appreciate.",
    defaults: {
      monthlyIncome: 8333,
      monthlyExpenses: 5000,
      downPayment: 10000,
      loanTermMonths: 60,
      interestRate: 5.5,
      includeInsurance: true,
      monthlyInsurance: 200,
      includeGas: true,
      monthlyGas: 200,
    },
    seoTitle: "Car Affordability Calculator for $100K Income",
    seoDescription:
      "Calculate how much car you can afford on $100,000 salary. See realistic budgets for luxury and premium vehicles.",
  },
  {
    slug: "used-car-budget",
    name: "Used Car Budget",
    description: "Smart shopping for reliable used vehicles.",
    content:
      "Used cars offer the best value: new cars lose 20-30% of their value in the first year alone. A 3-5 year old car with 30,000-50,000 miles is the sweet spot. For example, a 2021 Honda Civic that sold for $25,000 new might cost $18,000 used, saving you $7,000 plus lower insurance. Certified Pre-Owned (CPO) vehicles include extended warranties and thorough inspections. Always get a pre-purchase inspection from a trusted mechanic ($100-150). Check vehicle history reports (Carfax, AutoCheck). Target reliable brands: Honda, Toyota, Mazda, Subaru. A 72-month loan gives you lower payments but costs more in interest — stick to 48-60 months if possible.",
    defaults: {
      monthlyIncome: 5000,
      monthlyExpenses: 3000,
      downPayment: 3000,
      loanTermMonths: 60,
      interestRate: 6.5,
      includeInsurance: true,
      monthlyInsurance: 140,
      includeGas: true,
      monthlyGas: 130,
    },
    seoTitle: "Used Car Budget Calculator - How Much Used Car Can I Afford?",
    seoDescription:
      "Calculate your budget for a used car. See how much you can afford with lower depreciation and insurance costs.",
  },
];

export function getCarScenario(slug: string): CarScenario | undefined {
  return carScenarios.find((s) => s.slug === slug);
}
