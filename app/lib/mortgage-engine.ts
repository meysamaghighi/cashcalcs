export interface MortgageInputs {
  homePrice: number;
  downPayment: number; // dollar amount
  loanTerm: number; // years
  interestRate: number; // annual %
  propertyTax: number; // annual
  homeInsurance: number; // annual
  pmi: number; // monthly (if down payment < 20%)
}

export interface MonthlyBreakdown {
  principal: number;
  interest: number;
  propertyTax: number;
  homeInsurance: number;
  pmi: number;
  total: number;
}

export interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
  totalInterest: number;
  totalPrincipal: number;
}

export interface MortgageResult {
  loanAmount: number;
  monthlyPayment: number;
  monthlyBreakdown: MonthlyBreakdown;
  totalPayment: number;
  totalInterest: number;
  payoffDate: string;
  amortization: AmortizationRow[];
  yearSummary: {
    year: number;
    principalPaid: number;
    interestPaid: number;
    balance: number;
  }[];
}

export function calculateMortgage(inputs: MortgageInputs): MortgageResult {
  const loanAmount = inputs.homePrice - inputs.downPayment;
  const monthlyRate = inputs.interestRate / 100 / 12;
  const numPayments = inputs.loanTerm * 12;

  // Monthly P&I payment
  let monthlyPI: number;
  if (monthlyRate === 0) {
    monthlyPI = loanAmount / numPayments;
  } else {
    monthlyPI =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const monthlyTax = inputs.propertyTax / 12;
  const monthlyInsurance = inputs.homeInsurance / 12;
  const downPaymentPct = inputs.homePrice > 0 ? inputs.downPayment / inputs.homePrice : 0;
  const monthlyPMI = downPaymentPct < 0.2 ? inputs.pmi : 0;

  const monthlyBreakdown: MonthlyBreakdown = {
    principal: 0, // will be set from first month
    interest: 0,
    propertyTax: monthlyTax,
    homeInsurance: monthlyInsurance,
    pmi: monthlyPMI,
    total: monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI,
  };

  // Build amortization schedule
  const amortization: AmortizationRow[] = [];
  let balance = loanAmount;
  let totalInterest = 0;
  let totalPrincipal = 0;

  for (let m = 1; m <= numPayments && balance > 0; m++) {
    const interest = balance * monthlyRate;
    const principal = Math.min(monthlyPI - interest, balance);
    balance -= principal;
    totalInterest += interest;
    totalPrincipal += principal;

    amortization.push({
      month: m,
      payment: monthlyPI,
      principal,
      interest,
      balance: Math.max(0, balance),
      totalInterest,
      totalPrincipal,
    });
  }

  // Set first month breakdown
  if (amortization.length > 0) {
    monthlyBreakdown.principal = amortization[0].principal;
    monthlyBreakdown.interest = amortization[0].interest;
  }

  // Year summary
  const yearSummary: MortgageResult["yearSummary"] = [];
  for (let y = 0; y < inputs.loanTerm; y++) {
    const yearRows = amortization.slice(y * 12, (y + 1) * 12);
    if (yearRows.length === 0) break;
    yearSummary.push({
      year: y + 1,
      principalPaid: yearRows.reduce((s, r) => s + r.principal, 0),
      interestPaid: yearRows.reduce((s, r) => s + r.interest, 0),
      balance: yearRows[yearRows.length - 1].balance,
    });
  }

  const now = new Date();
  const payoffDate = new Date(
    now.getFullYear(),
    now.getMonth() + numPayments,
    1
  );
  const payoffStr = payoffDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return {
    loanAmount,
    monthlyPayment: monthlyBreakdown.total,
    monthlyBreakdown,
    totalPayment: monthlyPI * numPayments + (monthlyTax + monthlyInsurance + monthlyPMI) * numPayments,
    totalInterest,
    payoffDate: payoffStr,
    amortization,
    yearSummary,
  };
}

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) return "$" + (amount / 1000000).toFixed(1) + "M";
  return "$" + Math.round(amount).toLocaleString("en-US");
}

export interface MortgageScenario {
  slug: string;
  name: string;
  description: string;
  content: string;
  defaults: Partial<MortgageInputs>;
  seoTitle: string;
  seoDescription: string;
}

export const mortgageScenarios: MortgageScenario[] = [
  {
    slug: "first-time-buyer",
    name: "First-Time Homebuyer",
    description: "Typical mortgage for a first-time buyer with 10% down.",
    content:
      "First-time homebuyers often put down 3-10% of the home price. With less than 20% down, you will pay PMI (private mortgage insurance), typically $50-200/month. FHA loans allow as little as 3.5% down. The median first-time buyer is 36 years old and pays $350,000 for their home. Even with a smaller down payment, building equity through homeownership is often better than renting long-term.",
    defaults: {
      homePrice: 350000,
      downPayment: 35000,
      loanTerm: 30,
      interestRate: 6.75,
      propertyTax: 4200,
      homeInsurance: 1800,
      pmi: 150,
    },
    seoTitle: "First-Time Homebuyer Mortgage Calculator",
    seoDescription:
      "Free mortgage calculator for first-time buyers. See your monthly payment, PMI costs, and how much house you can afford.",
  },
  {
    slug: "20-percent-down",
    name: "20% Down Payment",
    description: "Standard mortgage with 20% down to avoid PMI.",
    content:
      "Putting 20% down eliminates PMI, saving $100-200/month. On a $400,000 home, that is $80,000 down. While it takes longer to save, you start with more equity and lower monthly payments. If you invest the PMI savings, the 20% down strategy typically wins financially over 5+ years compared to a smaller down payment.",
    defaults: {
      homePrice: 400000,
      downPayment: 80000,
      loanTerm: 30,
      interestRate: 6.75,
      propertyTax: 5000,
      homeInsurance: 2000,
      pmi: 0,
    },
    seoTitle: "20% Down Payment Mortgage Calculator",
    seoDescription:
      "Calculate your mortgage with 20% down. See monthly payment without PMI and total interest over the loan.",
  },
  {
    slug: "15-year-mortgage",
    name: "15-Year Mortgage",
    description: "Higher payments but massive interest savings with a 15-year term.",
    content:
      "A 15-year mortgage has higher monthly payments but saves you tens of thousands in interest. On a $300,000 loan at 6.25%, you pay $143,000 in interest over 15 years vs $365,000 over 30 years — saving $222,000. The monthly payment is about $600 higher. If you can afford it, a 15-year mortgage builds equity twice as fast and you own your home outright in half the time.",
    defaults: {
      homePrice: 400000,
      downPayment: 80000,
      loanTerm: 15,
      interestRate: 6.25,
      propertyTax: 5000,
      homeInsurance: 2000,
      pmi: 0,
    },
    seoTitle: "15-Year Mortgage Calculator - Save on Interest",
    seoDescription:
      "Compare 15-year vs 30-year mortgage. See how a shorter term saves you thousands in interest payments.",
  },
  {
    slug: "500k-home",
    name: "$500K Home",
    description: "Monthly payment breakdown for a half-million dollar home.",
    content:
      "A $500,000 home is above the national median but typical in many metropolitan areas. With 20% down ($100,000) at 6.75%, your monthly P&I payment is about $2,594. Adding property tax, insurance, and potentially HOA fees, expect a total monthly payment of $3,200-3,500. Lenders generally want your housing costs under 28% of gross income, meaning you need a household income of roughly $140,000+.",
    defaults: {
      homePrice: 500000,
      downPayment: 100000,
      loanTerm: 30,
      interestRate: 6.75,
      propertyTax: 6500,
      homeInsurance: 2400,
      pmi: 0,
    },
    seoTitle: "$500K Home Mortgage Calculator",
    seoDescription:
      "Calculate the monthly payment on a $500,000 home. See principal, interest, tax, and insurance breakdown.",
  },
  {
    slug: "refinance",
    name: "Refinance Calculator",
    description: "See if refinancing to a lower rate saves you money.",
    content:
      "Refinancing makes sense when you can lower your rate by at least 0.5-1%. A common scenario: you bought at 7.5% and can refinance to 6.5%. On a $300,000 balance, that saves about $200/month. Factor in closing costs ($3,000-6,000) and divide by your monthly savings to find your break-even point. If you plan to stay in the home past the break-even date, refinancing is usually worth it.",
    defaults: {
      homePrice: 350000,
      downPayment: 50000,
      loanTerm: 30,
      interestRate: 6.5,
      propertyTax: 4200,
      homeInsurance: 1800,
      pmi: 0,
    },
    seoTitle: "Mortgage Refinance Calculator",
    seoDescription:
      "See if refinancing your mortgage saves money. Calculate new monthly payment and total interest savings.",
  },
  {
    slug: "extra-payments",
    name: "Extra Payments Impact",
    description: "See how extra monthly payments shorten your mortgage and save interest.",
    content:
      "Paying just $200 extra per month on a $300,000, 30-year mortgage at 6.75% saves over $80,000 in interest and pays off your home 6 years early. Even rounding up your payment (e.g., from $1,946 to $2,000) makes a difference. The key: extra payments go directly to principal, reducing the balance that generates interest. Bi-weekly payments (26 half-payments = 13 full payments per year) achieve a similar effect automatically.",
    defaults: {
      homePrice: 375000,
      downPayment: 75000,
      loanTerm: 30,
      interestRate: 6.75,
      propertyTax: 4500,
      homeInsurance: 1900,
      pmi: 0,
    },
    seoTitle: "Extra Mortgage Payment Calculator",
    seoDescription:
      "See how extra payments save interest and shorten your mortgage. Calculate the impact of paying more each month.",
  },
  {
    slug: "starter-home",
    name: "Starter Home ($250K)",
    description: "Affordable entry-level home mortgage with modest down payment.",
    content:
      "A $250,000 starter home is achievable in many markets outside major cities. With 10% down ($25,000), your monthly P&I payment is about $1,459 at 6.75%. Total monthly payment with taxes and insurance is around $1,800-2,000. You will need PMI until you reach 20% equity. This is a great starting point: build equity, then use it as a stepping stone to a larger home in 5-7 years.",
    defaults: {
      homePrice: 250000,
      downPayment: 25000,
      loanTerm: 30,
      interestRate: 6.75,
      propertyTax: 3000,
      homeInsurance: 1500,
      pmi: 100,
    },
    seoTitle: "Starter Home Mortgage Calculator ($250K)",
    seoDescription:
      "Calculate monthly payment on a $250K starter home. See how much you need for down payment, taxes, and insurance.",
  },
  {
    slug: "high-cost-area",
    name: "High-Cost Area ($750K)",
    description: "Mortgage for expensive markets like SF, NYC, LA, Seattle.",
    content:
      "In high-cost markets (San Francisco, New York, Los Angeles, Seattle, Boston), the median home price exceeds $700,000. Even with 20% down ($150,000), monthly payments reach $4,500-5,000+. Most buyers in these markets need household income of $200,000+ to qualify. Jumbo loans (above $766,550 in most areas) may have slightly different rates and requirements.",
    defaults: {
      homePrice: 750000,
      downPayment: 150000,
      loanTerm: 30,
      interestRate: 7.0,
      propertyTax: 9000,
      homeInsurance: 3000,
      pmi: 0,
    },
    seoTitle: "High-Cost Area Mortgage Calculator ($750K+)",
    seoDescription:
      "Calculate mortgage for expensive markets. See monthly payment on $750K+ homes in SF, NYC, LA, and other high-cost areas.",
  },
];

export function getScenarioBySlug(
  slug: string
): MortgageScenario | undefined {
  return mortgageScenarios.find((s) => s.slug === slug);
}
