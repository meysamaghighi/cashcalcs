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
];

export function getInflationPage(slug: string): InflationPreset | undefined {
  return inflationPages.find((p) => p.slug === slug);
}
