"use client";

import { useState, useMemo } from "react";
import { calculateInflation, formatCurrency } from "../lib/inflation-engine";
import ShareButton from "./ShareButton";

export default function InflationCalculator({ presetYears }: { presetYears?: number }) {
  const [amount, setAmount] = useState(100000);
  const [years, setYears] = useState(presetYears ?? 10);
  const [inflationRate, setInflationRate] = useState(3.0);

  const result = useMemo(
    () => calculateInflation({ amount, years, inflationRate }),
    [amount, years, inflationRate]
  );

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Enter Your Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Amount ($)</span>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(+e.target.value)}
                min={0}
                className="input text-gray-900 !pl-7"
              />
            </div>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Time Period (years)</span>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              min={1}
              max={100}
              className="input text-gray-900"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Inflation Rate (%)</span>
            <input
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(+e.target.value)}
              step={0.1}
              min={0}
              max={30}
              className="input text-gray-900"
            />
          </label>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          {[2, 3, 4, 5, 7].map((r) => (
            <button
              key={r}
              onClick={() => setInflationRate(r)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                inflationRate === r
                  ? "bg-rose-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {r}%
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Results</h2>
          <ShareButton title="Inflation Calculator" text="Check out this free inflation calculator!" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Today&apos;s Value</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(amount)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Future Buying Power</p>
            <p className="text-lg font-bold text-rose-600">{formatCurrency(result.futurePurchasingPower)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Value Lost</p>
            <p className="text-lg font-bold text-red-500">{formatCurrency(result.totalLoss)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">You&apos;ll Need</p>
            <p className="text-lg font-bold text-emerald-600">{formatCurrency(result.futureNominal)}</p>
          </div>
        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-6">
          <p className="text-rose-800">
            At {inflationRate}% inflation, your {formatCurrency(amount)} will only buy{" "}
            <span className="font-bold">{formatCurrency(result.futurePurchasingPower)}</span> worth of
            goods in {years} years — a <span className="font-bold">{result.lossPercentage.toFixed(1)}%</span> loss
            in purchasing power. You&apos;ll need{" "}
            <span className="font-bold">{formatCurrency(result.futureNominal)}</span> to match
            today&apos;s buying power.
          </p>
        </div>

        {/* Visual bar chart */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 mb-3">Purchasing Power Over Time</h3>
          <div className="flex items-end gap-[2px] h-40 bg-gray-50 rounded-xl p-3">
            {result.yearlyBreakdown.map((y) => {
              const pct = (y.purchasingPower / amount) * 100;
              return (
                <div
                  key={y.year}
                  className="flex-1 bg-rose-400 rounded-t-sm min-w-[3px] transition-all hover:bg-rose-500"
                  style={{ height: `${pct}%` }}
                  title={`Year ${y.year}: ${formatCurrency(y.purchasingPower)}`}
                />
              );
            })}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1 px-3">
            <span>Year 1</span>
            <span>Year {years}</span>
          </div>
        </div>

        {/* Yearly breakdown table */}
        <details className="group">
          <summary className="text-rose-600 font-medium text-sm hover:underline cursor-pointer">
            Show Yearly Breakdown
          </summary>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="py-2 pr-4">Year</th>
                  <th className="py-2 pr-4">Buying Power</th>
                  <th className="py-2 pr-4">Value Lost</th>
                  <th className="py-2">% Remaining</th>
                </tr>
              </thead>
              <tbody>
                {result.yearlyBreakdown.map((y) => (
                  <tr key={y.year} className="border-b">
                    <td className="py-2 pr-4 text-gray-800">{y.year}</td>
                    <td className="py-2 pr-4 text-gray-800">{formatCurrency(y.purchasingPower)}</td>
                    <td className="py-2 pr-4 text-red-500">{formatCurrency(y.cumulativeLoss)}</td>
                    <td className="py-2 text-gray-800">
                      {((y.purchasingPower / amount) * 100).toFixed(1)}%
                    </td>
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
