"use client";

import { useState, useMemo } from "react";
import {
  calculateCarAffordability,
  formatCurrency,
  type CarInputs,
} from "../lib/car-engine";
import ShareButton from "./ShareButton";

export default function CarCalculator({
  defaults,
}: {
  defaults?: Partial<CarInputs>;
}) {
  const [monthlyIncome, setMonthlyIncome] = useState(defaults?.monthlyIncome ?? 5000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(defaults?.monthlyExpenses ?? 3000);
  const [downPayment, setDownPayment] = useState(defaults?.downPayment ?? 5000);
  const [loanTermMonths, setLoanTermMonths] = useState(defaults?.loanTermMonths ?? 60);
  const [interestRate, setInterestRate] = useState(defaults?.interestRate ?? 6.0);
  const [includeInsurance, setIncludeInsurance] = useState(defaults?.includeInsurance ?? true);
  const [monthlyInsurance, setMonthlyInsurance] = useState(defaults?.monthlyInsurance ?? 150);
  const [includeGas, setIncludeGas] = useState(defaults?.includeGas ?? true);
  const [monthlyGas, setMonthlyGas] = useState(defaults?.monthlyGas ?? 150);

  const result = useMemo(
    () =>
      calculateCarAffordability({
        monthlyIncome,
        monthlyExpenses,
        downPayment,
        loanTermMonths,
        interestRate,
        includeInsurance,
        monthlyInsurance,
        includeGas,
        monthlyGas,
      }),
    [monthlyIncome, monthlyExpenses, downPayment, loanTermMonths, interestRate, includeInsurance, monthlyInsurance, includeGas, monthlyGas]
  );

  // Affordability gauge color
  const gaugeColor =
    result.monthlyBudgetImpact <= 15
      ? "bg-emerald-500"
      : result.monthlyBudgetImpact <= 20
      ? "bg-amber-500"
      : "bg-rose-500";

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Your Financial Situation</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Monthly Income */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Income (gross)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={monthlyIncome || ""}
                onChange={(e) => setMonthlyIncome(+e.target.value)}
                min={0}
                className="input text-gray-900 w-full !pl-7"
              />
            </div>
          </div>

          {/* Monthly Expenses */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Expenses (rent, bills, etc.)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={monthlyExpenses || ""}
                onChange={(e) => setMonthlyExpenses(+e.target.value)}
                min={0}
                className="input text-gray-900 w-full !pl-7"
              />
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Down Payment
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={downPayment || ""}
                onChange={(e) => setDownPayment(+e.target.value)}
                min={0}
                className="input text-gray-900 w-full !pl-7"
              />
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loan Term
            </label>
            <select
              value={loanTermMonths}
              onChange={(e) => setLoanTermMonths(+e.target.value)}
              className="input text-gray-900 w-full"
            >
              <option value={36}>36 months (3 years)</option>
              <option value={48}>48 months (4 years)</option>
              <option value={60}>60 months (5 years)</option>
              <option value={72}>72 months (6 years)</option>
              <option value={84}>84 months (7 years)</option>
            </select>
          </div>

          {/* Quick Buttons */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quick Term Select
            </label>
            <div className="flex gap-2 flex-wrap">
              {[36, 48, 60, 72].map((term) => (
                <button
                  key={term}
                  onClick={() => setLoanTermMonths(term)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    loanTermMonths === term
                      ? "bg-lime-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {term} mo
                </button>
              ))}
            </div>
          </div>

          {/* Interest Rate */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interest Rate: {interestRate}%
            </label>
            <input
              type="range"
              min={2}
              max={15}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(+e.target.value)}
              className="w-full accent-lime-600"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>2%</span>
              <span>8%</span>
              <span>15%</span>
            </div>
          </div>

          {/* Insurance Toggle */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={includeInsurance}
                onChange={(e) => setIncludeInsurance(e.target.checked)}
                className="w-4 h-4 accent-lime-600"
              />
              <span className="text-sm font-medium text-gray-700">
                Include Insurance
              </span>
            </label>
            {includeInsurance && (
              <div className="relative w-full md:w-1/2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  value={monthlyInsurance || ""}
                  onChange={(e) => setMonthlyInsurance(+e.target.value)}
                  min={0}
                  placeholder="Monthly insurance"
                  className="input text-gray-900 w-full !pl-7"
                />
              </div>
            )}
          </div>

          {/* Gas Toggle */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={includeGas}
                onChange={(e) => setIncludeGas(e.target.checked)}
                className="w-4 h-4 accent-lime-600"
              />
              <span className="text-sm font-medium text-gray-700">
                Include Gas/Fuel
              </span>
            </label>
            {includeGas && (
              <div className="relative w-full md:w-1/2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  value={monthlyGas || ""}
                  onChange={(e) => setMonthlyGas(+e.target.value)}
                  min={0}
                  placeholder="Monthly gas/fuel"
                  className="input text-gray-900 w-full !pl-7"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">What You Can Afford</h2>
          <ShareButton title="Car Affordability Calculator" text="Check out this free car affordability calculator!" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-lime-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Max Car Price</p>
            <p className="text-lg font-bold text-lime-700">{formatCurrency(result.maxCarPrice)}</p>
          </div>
          <div className="bg-sky-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Monthly Payment</p>
            <p className="text-lg font-bold text-sky-700">{formatCurrency(result.monthlyPayment)}</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Total Interest</p>
            <p className="text-lg font-bold text-indigo-700">{formatCurrency(result.totalInterest)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Total Cost</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.totalCost)}</p>
          </div>
        </div>

        {/* Affordability Gauge */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-gray-900">Affordability Rating</h3>
            <span className="text-2xl font-extrabold text-gray-900">
              {result.affordabilityRating}
            </span>
          </div>
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div
              className={`h-full ${gaugeColor} transition-all duration-500`}
              style={{ width: `${Math.min(result.monthlyBudgetImpact, 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>0%</span>
            <span className="font-medium">
              {result.monthlyBudgetImpact.toFixed(1)}% of income
            </span>
            <span>25%</span>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            {result.monthlyBudgetImpact <= 15
              ? "Your car expenses are within the recommended 15% of income. This is a healthy budget that leaves room for savings and other financial goals."
              : result.monthlyBudgetImpact <= 20
              ? "Your car expenses are slightly above the 15% guideline but still manageable. Consider if you can reduce insurance or loan costs."
              : "Your car expenses exceed 20% of income, which may strain your budget. Consider a less expensive vehicle or a larger down payment."}
          </p>
        </div>

        {/* Monthly Breakdown */}
        <div className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Monthly Cost Breakdown</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Car Payment</span>
              <span className="font-bold text-gray-900">
                {formatCurrency(result.monthlyLoanPayment)}
              </span>
            </div>
            {includeInsurance && (
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Insurance</span>
                <span className="font-bold text-gray-900">
                  {formatCurrency(monthlyInsurance)}
                </span>
              </div>
            )}
            {includeGas && (
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Gas/Fuel</span>
                <span className="font-bold text-gray-900">
                  {formatCurrency(monthlyGas)}
                </span>
              </div>
            )}
            <div className="border-t border-gray-300 pt-2 mt-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-bold">Total Monthly Cost</span>
                <span className="font-extrabold text-lime-700 text-lg">
                  {formatCurrency(result.totalMonthlyCost)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
