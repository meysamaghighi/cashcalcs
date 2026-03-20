export interface InflationPreset {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  presetYears: number;
  content: string;
}

export const inflationPages: InflationPreset[] = [
  {
    slug: "10-year-inflation",
    name: "10-Year Inflation Impact",
    seoTitle: "10-Year Inflation Calculator - What Will Your Money Be Worth?",
    seoDescription:
      "Calculate how inflation will affect your money over 10 years. See exactly how much purchasing power you'll lose and what you'll need to keep up.",
    description:
      "See how a decade of inflation impacts your savings and purchasing power.",
    presetYears: 10,
    content:
      "Ten years is a common planning horizon for major financial goals like buying a home or funding education. At the historical average inflation rate of about 3%, $100,000 today will only buy about $74,400 worth of goods in 10 years.",
  },
  {
    slug: "20-year-inflation",
    name: "20-Year Inflation Impact",
    seoTitle: "20-Year Inflation Calculator - Long-Term Purchasing Power Loss",
    seoDescription:
      "Calculate how 20 years of inflation erodes your money. Essential for retirement planning and long-term savings goals.",
    description:
      "Plan for retirement and long-term goals by understanding 20 years of inflation impact.",
    presetYears: 20,
    content:
      "Twenty years of inflation can dramatically reduce your purchasing power. At 3% annual inflation, $100,000 today will only buy about $55,400 worth of goods in 20 years — nearly half its value is gone. This is why retirement planning must account for inflation.",
  },
  {
    slug: "retirement-inflation",
    name: "Retirement Inflation Calculator",
    seoTitle: "Retirement Inflation Calculator - Plan for Rising Costs",
    seoDescription:
      "Calculate how inflation will affect your retirement savings over 30 years. See how much you'll really need to maintain your lifestyle.",
    description:
      "A 30-year retirement means decades of inflation eroding your nest egg. Plan accordingly.",
    presetYears: 30,
    content:
      "Inflation is one of the biggest threats to retirees. Over a 30-year retirement, even moderate 3% inflation turns $1 million into the equivalent of about $412,000 in today's purchasing power. This is why financial advisors recommend a diversified portfolio that continues to grow during retirement, rather than relying entirely on fixed-income investments.",
  },
  {
    slug: "5-year-inflation",
    name: "5-Year Inflation Impact",
    seoTitle: "5-Year Inflation Calculator - Short-Term Purchasing Power",
    seoDescription:
      "Calculate how inflation affects your money over 5 years. See the short-term impact on your savings and emergency fund.",
    description:
      "Even over just 5 years, inflation can noticeably erode your savings.",
    presetYears: 5,
    content:
      "Five years may seem short, but at 3% inflation, $100,000 loses over $14,000 in purchasing power. This is especially relevant for emergency funds and short-term savings sitting in low-interest accounts. If your savings account pays less than the inflation rate, you're losing real value every year.",
  },
  {
    slug: "college-savings-inflation",
    name: "College Savings Inflation",
    seoTitle: "College Tuition Inflation Calculator - Future Cost of Education",
    seoDescription:
      "Calculate how inflation will affect college tuition costs. Plan ahead for education expenses with our free calculator.",
    description:
      "College costs have historically risen faster than general inflation. Plan ahead.",
    presetYears: 18,
    content:
      "College tuition inflation has averaged about 5-8% annually — significantly higher than general inflation. If a 4-year degree costs $100,000 today, at 6% education inflation it could cost over $285,000 in 18 years. Starting a 529 plan early is one of the best ways to combat rising education costs through tax-advantaged compound growth.",
  },
  {
    slug: "healthcare-inflation",
    name: "Healthcare Cost Inflation",
    seoTitle: "Healthcare Inflation Calculator - Rising Medical Costs",
    seoDescription:
      "Calculate how healthcare inflation affects your future medical costs. Healthcare costs rise faster than general inflation.",
    description:
      "Healthcare costs have historically outpaced general inflation significantly.",
    presetYears: 25,
    content:
      "Healthcare inflation has averaged about 5-6% annually in the US, roughly double the general inflation rate. A medical procedure that costs $10,000 today could cost over $34,000 in 25 years at 5% healthcare inflation. This is a critical factor in retirement planning — healthcare is often the largest expense for retirees, and costs continue to rise as you age.",
  },
];

export function getInflationPage(slug: string): InflationPreset | undefined {
  return inflationPages.find((p) => p.slug === slug);
}
