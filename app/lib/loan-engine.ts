export interface LoanInputs {
  loanAmount: number;
  interestRate: number; // annual %
  loanTerm: number; // months
  extraPayment: number; // additional monthly payment
}

export interface LoanAmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  extra: number;
  balance: number;
  totalInterest: number;
  totalPrincipal: number;
}

export interface LoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  payoffMonths: number;
  payoffDate: string;
  interestSaved: number; // vs no extra payments
  monthsSaved: number;
  amortization: LoanAmortizationRow[];
  yearSummary: {
    year: number;
    principalPaid: number;
    interestPaid: number;
    balance: number;
  }[];
}

export function calculateLoan(inputs: LoanInputs): LoanResult {
  const { loanAmount, interestRate, loanTerm, extraPayment } = inputs;
  const monthlyRate = interestRate / 100 / 12;

  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / loanTerm;
  } else {
    monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm))) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1);
  }

  // Calculate without extra payments for comparison
  const totalWithoutExtra = monthlyPayment * loanTerm;
  const interestWithoutExtra = totalWithoutExtra - loanAmount;

  // Build amortization with extra payments
  const amortization: LoanAmortizationRow[] = [];
  let balance = loanAmount;
  let totalInterest = 0;
  let totalPrincipal = 0;

  for (let m = 1; m <= loanTerm * 2 && balance > 0.01; m++) {
    const interest = balance * monthlyRate;
    const basePrincipal = monthlyPayment - interest;
    const extra = Math.min(extraPayment, balance - basePrincipal);
    const principal = Math.min(basePrincipal + extra, balance);
    const payment = interest + principal;
    balance -= principal;
    totalInterest += interest;
    totalPrincipal += principal;

    amortization.push({
      month: m,
      payment,
      principal,
      interest,
      extra: Math.max(0, extra),
      balance: Math.max(0, balance),
      totalInterest,
      totalPrincipal,
    });

    if (balance <= 0.01) break;
  }

  const payoffMonths = amortization.length;
  const totalPayment = amortization.reduce((s, r) => s + r.payment, 0);

  const now = new Date();
  const payoffDate = new Date(
    now.getFullYear(),
    now.getMonth() + payoffMonths,
    1
  );
  const payoffStr = payoffDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Year summary
  const yearSummary: LoanResult["yearSummary"] = [];
  const totalYears = Math.ceil(payoffMonths / 12);
  for (let y = 0; y < totalYears; y++) {
    const yearRows = amortization.slice(y * 12, (y + 1) * 12);
    if (yearRows.length === 0) break;
    yearSummary.push({
      year: y + 1,
      principalPaid: yearRows.reduce((s, r) => s + r.principal, 0),
      interestPaid: yearRows.reduce((s, r) => s + r.interest, 0),
      balance: yearRows[yearRows.length - 1].balance,
    });
  }

  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
    payoffMonths,
    payoffDate: payoffStr,
    interestSaved: interestWithoutExtra - totalInterest,
    monthsSaved: loanTerm - payoffMonths,
  amortization,
    yearSummary,
  };
}

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) return "$" + (amount / 1000000).toFixed(1) + "M";
  return "$" + Math.round(amount).toLocaleString("en-US");
}

export interface LoanScenario {
  slug: string;
  name: string;
  description: string;
  content: string;
  defaults: Partial<LoanInputs>;
  seoTitle: string;
  seoDescription: string;
}

export const loanScenarios: LoanScenario[] = [
  {
    slug: "auto-loan",
    name: "Auto Loan",
    description: "Calculate your car payment for a new or used vehicle.",
    content:
      "The average new car loan in the US is $40,000 with a 5-6 year term and rates around 6-8% for good credit. Used car rates are typically 1-3% higher. A shorter term (36 months) means higher payments but thousands less in interest. Consider putting at least 20% down to avoid being upside-down on the loan. Gap insurance covers the difference between what you owe and what the car is worth if it is totaled.",
    defaults: { loanAmount: 35000, interestRate: 7.0, loanTerm: 60, extraPayment: 0 },
    seoTitle: "Auto Loan Calculator - Car Payment Calculator",
    seoDescription:
      "Free auto loan calculator. See your monthly car payment, total interest, and amortization schedule for any vehicle loan.",
  },
  {
    slug: "personal-loan",
    name: "Personal Loan",
    description: "Unsecured personal loan for any purpose.",
    content:
      "Personal loans are unsecured, meaning no collateral is required. Rates range from 6% for excellent credit to 36% for poor credit. Terms are typically 2-7 years. They are commonly used for debt consolidation, home improvements, medical bills, or major purchases. Because they are unsecured, rates are higher than auto or home equity loans. Shop around: online lenders often beat bank rates.",
    defaults: { loanAmount: 15000, interestRate: 10.5, loanTerm: 48, extraPayment: 0 },
    seoTitle: "Personal Loan Calculator - Monthly Payment",
    seoDescription:
      "Calculate your personal loan payment. See total interest and payoff timeline for unsecured personal loans.",
  },
  {
    slug: "student-loan",
    name: "Student Loan",
    description: "Calculate repayment for federal or private student loans.",
    content:
      "The average student loan debt in the US is $37,000. Federal student loan rates are fixed (currently 5.5-8.05% depending on type). Private loans vary widely (3-15%). The standard federal repayment plan is 10 years (120 payments). Income-driven repayment plans can lower payments but extend the term to 20-25 years, increasing total interest. Paying even $50 extra per month significantly reduces the total cost.",
    defaults: { loanAmount: 37000, interestRate: 5.5, loanTerm: 120, extraPayment: 0 },
    seoTitle: "Student Loan Calculator - Repayment Plan",
    seoDescription:
      "Calculate your student loan payment. Compare repayment timelines and see how extra payments save you money.",
  },
  {
    slug: "home-equity-loan",
    name: "Home Equity Loan",
    description: "Fixed-rate loan using your home equity as collateral.",
    content:
      "Home equity loans let you borrow against your home's value minus what you owe. Most lenders allow borrowing up to 80-85% of your equity. Rates are lower than personal loans (typically 7-10%) because your home is collateral. Common uses: home renovations, debt consolidation, or large expenses. Interest may be tax-deductible if used for home improvements. Be cautious: you could lose your home if you cannot repay.",
    defaults: { loanAmount: 50000, interestRate: 8.0, loanTerm: 180, extraPayment: 0 },
    seoTitle: "Home Equity Loan Calculator",
    seoDescription:
      "Calculate home equity loan payments. See monthly payment, total interest, and full amortization schedule.",
  },
  {
    slug: "debt-consolidation",
    name: "Debt Consolidation",
    description: "Combine multiple debts into one lower-rate payment.",
    content:
      "Debt consolidation combines multiple debts (credit cards, personal loans, medical bills) into a single loan with one monthly payment, ideally at a lower interest rate. If you are paying 20-25% on credit cards, a consolidation loan at 8-12% can save thousands. The key is to stop adding new debt on the cards you paid off. Calculate your total current payments and compare with the consolidation payment to ensure you are actually saving.",
    defaults: { loanAmount: 25000, interestRate: 9.5, loanTerm: 60, extraPayment: 0 },
    seoTitle: "Debt Consolidation Loan Calculator",
    seoDescription:
      "Calculate your debt consolidation loan payment. See how combining debts into one loan saves on interest.",
  },
  {
    slug: "medical-loan",
    name: "Medical Loan",
    description: "Finance medical procedures and unexpected health expenses.",
    content:
      "Medical loans help cover procedures not fully covered by insurance: dental work, fertility treatments, elective surgery, or unexpected emergency bills. Rates range from 6-25% depending on credit. Before taking a medical loan, ask the provider about payment plans (often 0% interest), negotiate the bill (hospitals routinely reduce by 20-40%), and check if you qualify for financial assistance programs. A medical loan is better than putting it on a credit card at 20%+.",
    defaults: { loanAmount: 10000, interestRate: 11.0, loanTerm: 36, extraPayment: 0 },
    seoTitle: "Medical Loan Calculator - Healthcare Financing",
    seoDescription:
      "Calculate medical loan payments. See monthly payment and total cost for financing healthcare expenses.",
  },
  {
    slug: "home-improvement",
    name: "Home Improvement Loan",
    description: "Finance renovations that add value to your home.",
    content:
      "Home improvement loans fund renovations without tapping home equity. A kitchen remodel ($25,000-50,000) typically returns 60-80% of its cost in home value. Bathroom renovations ($10,000-25,000) return 50-70%. Energy-efficient upgrades (solar panels, insulation, windows) may qualify for tax credits. For projects under $50,000, a personal loan or home improvement loan is faster than a home equity loan. For larger projects, a HELOC may offer better rates.",
    defaults: { loanAmount: 30000, interestRate: 8.5, loanTerm: 84, extraPayment: 0 },
    seoTitle: "Home Improvement Loan Calculator",
    seoDescription:
      "Calculate home improvement loan payments. See monthly payment and total cost for renovation financing.",
  },
  {
    slug: "boat-rv-loan",
    name: "Boat / RV Loan",
    description: "Financing for recreational vehicles and watercraft.",
    content:
      "Boat and RV loans are secured by the vehicle itself. New boat/RV rates range from 6-10% with terms up to 15-20 years for amounts over $50,000. A longer term keeps payments low but dramatically increases total interest: a $60,000 boat at 7% costs $47,000 in interest over 15 years vs $17,000 over 7 years. Factor in ongoing costs: insurance ($500-2,000/year), storage ($100-400/month), maintenance (10% of value/year). The true cost of ownership is 2-3x the purchase price.",
    defaults: { loanAmount: 60000, interestRate: 7.5, loanTerm: 120, extraPayment: 0 },
    seoTitle: "Boat & RV Loan Calculator",
    seoDescription:
      "Calculate boat or RV loan payments. See monthly payment, total interest, and amortization for recreational vehicle loans.",
  },
];

export function getScenarioBySlug(
  slug: string
): LoanScenario | undefined {
  return loanScenarios.find((s) => s.slug === slug);
}
