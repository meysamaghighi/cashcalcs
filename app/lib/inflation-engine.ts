export interface InflationInputs {
  amount: number;
  years: number;
  inflationRate: number;
}

export interface InflationResult {
  futureNominal: number;
  futurePurchasingPower: number;
  totalLoss: number;
  lossPercentage: number;
  yearlyBreakdown: {
    year: number;
    purchasingPower: number;
    lostValue: number;
    cumulativeLoss: number;
  }[];
}

export function calculateInflation(inputs: InflationInputs): InflationResult {
  const { amount, years, inflationRate } = inputs;
  const rate = inflationRate / 100;

  const yearlyBreakdown = [];
  let currentValue = amount;

  for (let y = 1; y <= years; y++) {
    currentValue = currentValue / (1 + rate);
    const lostValue = amount - currentValue;
    yearlyBreakdown.push({
      year: y,
      purchasingPower: currentValue,
      lostValue: amount * rate / (1 + rate),
      cumulativeLoss: lostValue,
    });
  }

  const futurePurchasingPower = amount / Math.pow(1 + rate, years);
  const totalLoss = amount - futurePurchasingPower;
  const lossPercentage = (totalLoss / amount) * 100;

  // What amount in the future equals today's amount
  const futureNominal = amount * Math.pow(1 + rate, years);

  return {
    futureNominal,
    futurePurchasingPower,
    totalLoss,
    lossPercentage,
    yearlyBreakdown,
  };
}

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}
