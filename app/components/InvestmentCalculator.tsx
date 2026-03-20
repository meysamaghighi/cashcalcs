"use client";

import { useState, useMemo } from "react";
import { calculateInvestment, formatCurrency, type InvestmentInputs } from "../lib/investment-engine";
import ShareButton from "./ShareButton";

export default function InvestmentCalculator({
  defaults,
}: {
  defaults?: Partial<InvestmentInputs>;
}) {
  const [initialInvestment, setInitialInvestment] = useState(defaults?.initialInvestment ?? 10000);
  const [monthlyContribution, setMonthlyContribution] = useState(defaults?.monthlyContribution ?? 500);
  const [annualReturn, setAnnualReturn] = useState(defaults?.annualReturn ?? 8);
  const [years, setYears] = useState(defaults?.years ?? 20);
  const [inflationRate, setInflationRate] = useState(defaults?.inflationRate ?? 3);
  const [showTable, setShowTable] = useState(false);

  const result = useMemo(
    () => calculateInvestment({ initialInvestment, monthlyContribution, annualReturn, years, inflationRate }),
    [initialInvestment, monthlyContribution, annualReturn, years, inflationRate]
  );

  const earningsPercent = result.finalBalance > 0
    ? ((result.totalEarnings / result.finalBalance) * 100).toFixed(0)
    : "0";

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Investment Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Initial Investment ($)</span>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(+e.target.value)}
                min={0}
                className="input text-gray-900 !pl-7"
              />
            </div>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Monthly Contribution ($)</span>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(+e.target.value)}
                min={0}
                className="input text-gray-900 !pl-7"
              />
            </div>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Expected Annual Return (%)</span>
            <input
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(+e.target.value)}
              step={0.5}
              min={0}
              max={30}
              className="input text-gray-900"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Time Period (years)</span>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              min={1}
              max={60}
              className="input text-gray-900"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Inflation Rate (%)</span>
            <input
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(+e.target.value)}
              step={0.5}
              min={0}
              max={20}
              className="input text-gray-900"
            />
          </label>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          {[6, 7, 8, 10, 12].map((r) => (
            <button
              key={r}
              onClick={() => setAnnualReturn(r)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                annualReturn === r
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {r}% return
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Results</h2>
          <ShareButton title="Investment Returns Calculator" text="Check out this free investment returns calculator!" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Final Balance</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.finalBalance)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Total Contributed</p>
            <p className="text-lg font-bold text-blue-600">{formatCurrency(result.totalContributions)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Investment Earnings</p>
            <p className="text-lg font-bold text-green-600">{formatCurrency(result.totalEarnings)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Real Value (after inflation)</p>
            <p className="text-lg font-bold text-purple-600">{formatCurrency(result.realValue)}</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <p className="text-green-800">
            Investing {formatCurrency(initialInvestment)} upfront plus{" "}
            {formatCurrency(monthlyContribution)}/month at {annualReturn}% for {years} years
            grows to <span className="font-bold">{formatCurrency(result.finalBalance)}</span>.{" "}
            <span className="font-bold">{earningsPercent}%</span> of your final balance comes
            from investment returns — that&apos;s compound growth at work. In today&apos;s dollars,
            that&apos;s worth about <span className="font-bold">{formatCurrency(result.realValue)}</span>.
          </p>
        </div>

        {/* Stacked bar chart */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 mb-3">Growth Over Time</h3>
          <div className="flex items-end gap-[2px] h-44 bg-gray-50 rounded-xl p-3">
            {result.yearlyBreakdown.map((y) => {
              const maxBal = result.finalBalance || 1;
              const contribHeight = (y.contributions / maxBal) * 100;
              const earningsHeight = (y.earnings / maxBal) * 100;
              return (
                <div
                  key={y.year}
                  className="flex-1 flex flex-col justify-end min-w-[3px]"
                  title={`Year ${y.year}: ${formatCurrency(y.balance)} (${formatCurrency(y.contributions)} contributed, ${formatCurrency(y.earnings)} earned)`}
                >
                  <div
                    className="bg-green-400 rounded-t-sm hover:bg-green-500 transition-colors"
                    style={{ height: `${earningsHeight}%` }}
                  />
                  <div
                    className="bg-blue-400 hover:bg-blue-500 transition-colors"
                    style={{ height: `${contribHeight}%` }}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1 px-3">
            <span>Year 1</span>
            <span>Year {years}</span>
          </div>
          <div className="flex gap-4 mt-2 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-400 rounded-sm" /> Contributions
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-400 rounded-sm" /> Earnings
            </div>
          </div>
        </div>

        {/* Table */}
        <details className="group">
          <summary className="text-green-600 font-medium text-sm hover:underline cursor-pointer">
            Show Yearly Breakdown
          </summary>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="py-2 pr-4">Year</th>
                  <th className="py-2 pr-4">Balance</th>
                  <th className="py-2 pr-4">Contributed</th>
                  <th className="py-2 pr-4">Earnings</th>
                  <th className="py-2">Real Value</th>
                </tr>
              </thead>
              <tbody>
                {result.yearlyBreakdown.map((y) => (
                  <tr key={y.year} className="border-b">
                    <td className="py-2 pr-4 text-gray-800">{y.year}</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">{formatCurrency(y.balance)}</td>
                    <td className="py-2 pr-4 text-blue-600">{formatCurrency(y.contributions)}</td>
                    <td className="py-2 pr-4 text-green-600">{formatCurrency(y.earnings)}</td>
                    <td className="py-2 text-purple-600">{formatCurrency(y.realBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  );
}
