"use client";

import { useState, useMemo } from "react";
import {
  type BudgetInputs,
  calculateBudget,
  formatCurrency,
} from "../lib/budget-engine";
import ShareButton from "./ShareButton";

interface Props {
  defaults?: Partial<BudgetInputs>;
}

export default function BudgetCalculator({ defaults }: Props) {
  const [monthlyIncome, setMonthlyIncome] = useState(defaults?.monthlyIncome ?? 5000);
  const [needsPercent, setNeedsPercent] = useState(defaults?.needsPercent ?? 50);
  const [wantsPercent, setWantsPercent] = useState(defaults?.wantsPercent ?? 30);
  const [savingsPercent, setSavingsPercent] = useState(defaults?.savingsPercent ?? 20);

  const totalPercent = needsPercent + wantsPercent + savingsPercent;

  const result = useMemo(
    () => calculateBudget({ monthlyIncome, needsPercent, wantsPercent, savingsPercent }),
    [monthlyIncome, needsPercent, wantsPercent, savingsPercent]
  );

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Your Income</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Monthly Take-Home Pay ($)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
              <input
                type="number"
                value={monthlyIncome || ""}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                min={0}
                className="input w-full !pl-7 px-4 py-3 border border-gray-200 rounded-lg text-gray-900 text-lg font-medium focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              That is {formatCurrency(monthlyIncome * 12)}/year
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Needs: {needsPercent}%
              </label>
              <input
                type="range"
                min={20}
                max={70}
                value={needsPercent}
                onChange={(e) => setNeedsPercent(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
              <p className="text-sm text-red-600 font-medium mt-1">
                {formatCurrency(result.needs.amount)}/mo
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Wants: {wantsPercent}%
              </label>
              <input
                type="range"
                min={5}
                max={50}
                value={wantsPercent}
                onChange={(e) => setWantsPercent(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <p className="text-sm text-blue-600 font-medium mt-1">
                {formatCurrency(result.wants.amount)}/mo
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Savings: {savingsPercent}%
              </label>
              <input
                type="range"
                min={5}
                max={70}
                value={savingsPercent}
                onChange={(e) => setSavingsPercent(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
              <p className="text-sm text-green-600 font-medium mt-1">
                {formatCurrency(result.savings.amount)}/mo
              </p>
            </div>
          </div>

          {totalPercent !== 100 && (
            <p className={`text-sm font-medium ${totalPercent > 100 ? "text-red-600" : "text-amber-600"}`}>
              Total: {totalPercent}% {totalPercent > 100 ? "(over budget!)" : "(under budget)"}
            </p>
          )}
        </div>
      </div>

      {/* Visual Breakdown */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Monthly Budget</h2>
          <ShareButton title="Budget Calculator" text="Check out this free 50/30/20 budget calculator!" />
        </div>

        {/* Stacked bar */}
        <div className="mb-8">
          <div className="w-full h-12 rounded-xl overflow-hidden flex">
            <div
              className="bg-red-400 h-full flex items-center justify-center text-white text-xs font-bold transition-all"
              style={{ width: `${needsPercent}%` }}
            >
              {needsPercent >= 15 && `Needs ${needsPercent}%`}
            </div>
            <div
              className="bg-blue-400 h-full flex items-center justify-center text-white text-xs font-bold transition-all"
              style={{ width: `${wantsPercent}%` }}
            >
              {wantsPercent >= 15 && `Wants ${wantsPercent}%`}
            </div>
            <div
              className="bg-green-500 h-full flex items-center justify-center text-white text-xs font-bold transition-all"
              style={{ width: `${savingsPercent}%` }}
            >
              {savingsPercent >= 15 && `Save ${savingsPercent}%`}
            </div>
          </div>
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Needs */}
          <div className="bg-red-50 rounded-xl p-5">
            <h3 className="font-bold text-red-800 text-lg mb-1">Needs</h3>
            <p className="text-2xl font-extrabold text-red-600 mb-3">
              {formatCurrency(result.needs.amount)}
            </p>
            <ul className="space-y-2">
              {result.needs.items.map((item) => (
                <li key={item.label} className="flex justify-between text-sm">
                  <span className="text-gray-700">{item.label}</span>
                  <span className="text-red-700 font-medium">{formatCurrency(item.suggested)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Wants */}
          <div className="bg-blue-50 rounded-xl p-5">
            <h3 className="font-bold text-blue-800 text-lg mb-1">Wants</h3>
            <p className="text-2xl font-extrabold text-blue-600 mb-3">
              {formatCurrency(result.wants.amount)}
            </p>
            <ul className="space-y-2">
              {result.wants.items.map((item) => (
                <li key={item.label} className="flex justify-between text-sm">
                  <span className="text-gray-700">{item.label}</span>
                  <span className="text-blue-700 font-medium">{formatCurrency(item.suggested)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Savings */}
          <div className="bg-green-50 rounded-xl p-5">
            <h3 className="font-bold text-green-800 text-lg mb-1">Savings & Debt</h3>
            <p className="text-2xl font-extrabold text-green-600 mb-3">
              {formatCurrency(result.savings.amount)}
            </p>
            <ul className="space-y-2">
              {result.savings.items.map((item) => (
                <li key={item.label} className="flex justify-between text-sm">
                  <span className="text-gray-700">{item.label}</span>
                  <span className="text-green-700 font-medium">{formatCurrency(item.suggested)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Savings Projections */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          What Your Savings Could Grow To
        </h2>
        <p className="text-sm text-gray-500 mb-4">Assuming 7% annual return on investments</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <p className="text-xs text-green-700 mb-1">Annual Savings</p>
            <p className="text-xl font-bold text-green-700">
              {formatCurrency(result.annualSavings)}
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <p className="text-xs text-green-700 mb-1">In 5 Years</p>
            <p className="text-xl font-bold text-green-700">
              {formatCurrency(result.savingsIn5Years)}
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <p className="text-xs text-green-700 mb-1">In 10 Years</p>
            <p className="text-xl font-bold text-green-700">
              {formatCurrency(result.savingsIn10Years)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
