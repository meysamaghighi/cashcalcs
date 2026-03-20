export interface TaxInputs {
  grossIncome: number;
  filingStatus: "single" | "married" | "head";
  standardDeduction: number;
  otherDeductions: number;
  stateTaxRate: number;
}

export interface TaxBracket {
  bracket: string;
  rate: number;
  taxed: number;
  tax: number;
}

export interface TaxResult {
  federalTax: number;
  effectiveRate: number;
  marginalRate: number;
  stateTax: number;
  totalTax: number;
  afterTaxIncome: number;
  monthlyAfterTax: number;
  bracketBreakdown: TaxBracket[];
}

// 2026 Federal Tax Brackets (estimated with inflation adjustments)
const TAX_BRACKETS = {
  single: [
    { max: 11925, rate: 0.10 },
    { max: 48475, rate: 0.12 },
    { max: 103350, rate: 0.22 },
    { max: 197300, rate: 0.24 },
    { max: 250525, rate: 0.32 },
    { max: 626350, rate: 0.35 },
    { max: Infinity, rate: 0.37 },
  ],
  married: [
    { max: 23850, rate: 0.10 },
    { max: 96950, rate: 0.12 },
    { max: 206700, rate: 0.22 },
    { max: 394600, rate: 0.24 },
    { max: 501050, rate: 0.32 },
    { max: 751600, rate: 0.35 },
    { max: Infinity, rate: 0.37 },
  ],
  head: [
    { max: 17000, rate: 0.10 },
    { max: 64850, rate: 0.12 },
    { max: 103350, rate: 0.22 },
    { max: 197300, rate: 0.24 },
    { max: 250500, rate: 0.32 },
    { max: 626350, rate: 0.35 },
    { max: Infinity, rate: 0.37 },
  ],
};

export const STANDARD_DEDUCTIONS = {
  single: 15700,
  married: 31400,
  head: 23550,
};

export function calculateTax(inputs: TaxInputs): TaxResult {
  const { grossIncome, filingStatus, standardDeduction, otherDeductions, stateTaxRate } = inputs;

  const totalDeductions = standardDeduction + otherDeductions;
  const taxableIncome = Math.max(0, grossIncome - totalDeductions);

  const brackets = TAX_BRACKETS[filingStatus];
  const breakdown: TaxBracket[] = [];
  let federalTax = 0;
  let previousMax = 0;
  let marginalRate = 0;

  for (const bracket of brackets) {
    if (taxableIncome <= previousMax) break;

    const taxableAtThisRate = Math.min(taxableIncome, bracket.max) - previousMax;
    if (taxableAtThisRate <= 0) break;

    const taxAtThisRate = taxableAtThisRate * bracket.rate;
    federalTax += taxAtThisRate;
    marginalRate = bracket.rate;

    const bracketLabel =
      bracket.max === Infinity
        ? `Over ${formatCurrency(previousMax)}`
        : `${formatCurrency(previousMax)} - ${formatCurrency(bracket.max)}`;

    breakdown.push({
      bracket: bracketLabel,
      rate: bracket.rate,
      taxed: taxableAtThisRate,
      tax: taxAtThisRate,
    });

    previousMax = bracket.max;
  }

  const effectiveRate = taxableIncome > 0 ? federalTax / taxableIncome : 0;
  const stateTax = grossIncome * (stateTaxRate / 100);
  const totalTax = federalTax + stateTax;
  const afterTaxIncome = grossIncome - totalTax;
  const monthlyAfterTax = afterTaxIncome / 12;

  return {
    federalTax,
    effectiveRate,
    marginalRate,
    stateTax,
    totalTax,
    afterTaxIncome,
    monthlyAfterTax,
    bracketBreakdown: breakdown,
  };
}

export function formatCurrency(amount: number): string {
  return "$" + amount.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export function formatPercent(rate: number): string {
  return (rate * 100).toFixed(1) + "%";
}

export interface TaxScenario {
  slug: string;
  name: string;
  description: string;
  content: string;
  defaults: Partial<TaxInputs>;
  seoTitle: string;
  seoDescription: string;
}

export const taxScenarios: TaxScenario[] = [
  {
    slug: "50k-income",
    name: "$50K Income Tax",
    description: "Calculate federal and state tax on $50,000 income.",
    content:
      "On a $50,000 gross income as a single filer, you fall into the 12% federal tax bracket. After the standard deduction of $15,700, your taxable income is $34,300. Federal tax is approximately $3,838 (the first $11,925 taxed at 10%, the remaining $22,375 taxed at 12%). Your effective federal rate is about 11.2%. Add state tax (varies by state, 0-13%) and you take home roughly $42,000-45,000 depending on your state. This income level allows comfortable living in mid-cost areas with disciplined budgeting.",
    defaults: { grossIncome: 50000, filingStatus: "single", standardDeduction: 15700, otherDeductions: 0, stateTaxRate: 5 },
    seoTitle: "Tax on $50K Income - Federal & State Tax Calculator 2026",
    seoDescription:
      "Calculate federal and state income tax on $50,000. See your effective rate, marginal rate, and after-tax income with full bracket breakdown.",
  },
  {
    slug: "75k-income",
    name: "$75K Income Tax",
    description: "Calculate federal and state tax on $75,000 income.",
    content:
      "A $75,000 gross income places a single filer firmly in the 22% federal tax bracket. After the $15,700 standard deduction, taxable income is $59,300. Federal tax is approximately $9,235 (10% on first $11,925, 12% on $11,925-$48,475, and 22% on $48,475-$59,300). Effective federal rate is 15.6%. With a typical 5% state tax, total taxes are around $12,985, leaving $62,015 after-tax ($5,168/month). At this income level, you can comfortably max out a Roth IRA ($7,000/year) and build significant savings.",
    defaults: { grossIncome: 75000, filingStatus: "single", standardDeduction: 15700, otherDeductions: 0, stateTaxRate: 5 },
    seoTitle: "Tax on $75K Income - 2026 Federal & State Tax Breakdown",
    seoDescription:
      "Calculate federal and state income tax on $75,000. See exactly how much you owe, your effective vs marginal rate, and take-home pay.",
  },
  {
    slug: "100k-income",
    name: "$100K Income Tax",
    description: "Calculate federal and state tax on $100,000 income.",
    content:
      "A six-figure income of $100,000 puts a single filer in the 24% marginal tax bracket. After the standard deduction ($15,700), taxable income is $84,300. Federal tax is approximately $14,835 (progressive taxation through 10%, 12%, 22%, and 24% brackets). Effective federal rate is 17.6%. With 5% state tax, total taxes are $19,835, leaving $80,165 after-tax ($6,680/month). The $100K milestone puts you in the top 25% of individual earners. In high-cost cities, this feels middle-class; in mid-cost areas, it provides a comfortable lifestyle with solid savings potential.",
    defaults: { grossIncome: 100000, filingStatus: "single", standardDeduction: 15700, otherDeductions: 0, stateTaxRate: 5 },
    seoTitle: "Tax on $100K Income - Six-Figure Tax Calculator 2026",
    seoDescription:
      "Calculate federal and state tax on $100,000 income. Full breakdown of six-figure taxes, effective rate, and monthly take-home pay.",
  },
  {
    slug: "150k-income",
    name: "$150K Income Tax",
    description: "Calculate federal and state tax on $150,000 income.",
    content:
      "A $150,000 income places a single filer in the 24% federal marginal bracket (the 32% bracket starts at $197,300 for 2026). After the $15,700 standard deduction, taxable income is $134,300. Federal tax is approximately $26,323 (progressive through multiple brackets). Effective federal rate is 19.6%. With 5% state tax ($7,500), total taxes are $33,823, leaving $116,177 after-tax ($9,681/month). At this income, you can max out both a 401(k) ($23,500/year) and IRA ($7,000), live comfortably, and build substantial wealth. This income puts you in the top 10% of individual earners in the US.",
    defaults: { grossIncome: 150000, filingStatus: "single", standardDeduction: 15700, otherDeductions: 0, stateTaxRate: 5 },
    seoTitle: "Tax on $150K Income - High Earner Tax Calculator 2026",
    seoDescription:
      "Calculate federal and state tax on $150,000 income. See your tax burden, effective rate, and monthly after-tax income.",
  },
];

export function getTaxScenario(slug: string): TaxScenario | undefined {
  return taxScenarios.find((s) => s.slug === slug);
}
