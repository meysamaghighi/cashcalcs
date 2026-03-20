"use client";

import { useState, useMemo } from "react";
import {
  calculateTax,
  formatCurrency,
  formatPercent,
  STANDARD_DEDUCTIONS,
  type TaxInputs,
} from "../lib/tax-engine";
import ShareButton from "./ShareButton";

const filingStatuses = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married Filing Jointly" },
  { value: "head", label: "Head of Household" },
] as const;

export default function TaxCalculator({
  defaults,
}: {
  defaults?: Partial<TaxInputs>;
}) {
  const [grossIncome, setGrossIncome] = useState(defaults?.grossIncome ?? 75000);
  const [filingStatus, setFilingStatus] = useState<TaxInputs["filingStatus"]>(
    defaults?.filingStatus ?? "single"
  );
  const [standardDeduction, setStandardDeduction] = useState(
    defaults?.standardDeduction ?? STANDARD_DEDUCTIONS.single
  );
  const [otherDeductions, setOtherDeductions] = useState(
    defaults?.otherDeductions ?? 0
  );
  const [stateTaxRate, setStateTaxRate] = useState(defaults?.stateTaxRate ?? 5);

  // Update standard deduction when filing status changes
  const handleFilingStatusChange = (status: TaxInputs["filingStatus"]) => {
    setFilingStatus(status);
    setStandardDeduction(STANDARD_DEDUCTIONS[status]);
  };

  const result = useMemo(
    () =>
      calculateTax({
        grossIncome,
        filingStatus,
        standardDeduction,
        otherDeductions,
        stateTaxRate,
      }),
    [grossIncome, filingStatus, standardDeduction, otherDeductions, stateTaxRate]
  );

  const taxableIncome = Math.max(0, grossIncome - standardDeduction - otherDeductions);

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Enter Your Income & Deductions
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gross Annual Income
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                $
              </span>
              <input
                type="number"
                value={grossIncome || ""}
                onChange={(e) => setGrossIncome(+e.target.value)}
                min={0}
                step={1000}
                className="input text-gray-900 w-full !pl-7"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filing Status
            </label>
            <div className="flex flex-wrap gap-2">
              {filingStatuses.map((status) => (
                <button
                  key={status.value}
                  onClick={() => handleFilingStatusChange(status.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filingStatus === status.value
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Standard Deduction
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                $
              </span>
              <input
                type="number"
                value={standardDeduction || ""}
                onChange={(e) => setStandardDeduction(+e.target.value)}
                min={0}
                step={100}
                className="input text-gray-900 w-full !pl-7"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              2026 standard: Single ${STANDARD_DEDUCTIONS.single.toLocaleString()}, Married ${STANDARD_DEDUCTIONS.married.toLocaleString()}, Head ${STANDARD_DEDUCTIONS.head.toLocaleString()}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Other Deductions (itemized, 401k, etc.)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                $
              </span>
              <input
                type="number"
                value={otherDeductions || ""}
                onChange={(e) => setOtherDeductions(+e.target.value)}
                min={0}
                step={500}
                className="input text-gray-900 w-full !pl-7"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State Tax Rate: {stateTaxRate}%
            </label>
            <input
              type="range"
              min={0}
              max={13}
              step={0.5}
              value={stateTaxRate}
              onChange={(e) => setStateTaxRate(+e.target.value)}
              className="w-full accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>0% (no state tax)</span>
              <span>5%</span>
              <span>13% (CA top rate)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Tax Breakdown</h2>
          <ShareButton title="Tax Estimator" text="Check out this free tax calculator!" />
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <p className="text-xs text-red-600 font-medium mb-1">Federal Tax</p>
            <p className="text-2xl font-bold text-red-700">
              {formatCurrency(result.federalTax)}
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl p-4 text-center">
            <p className="text-xs text-orange-600 font-medium mb-1">State Tax</p>
            <p className="text-2xl font-bold text-orange-700">
              {formatCurrency(result.stateTax)}
            </p>
          </div>
          <div className="bg-rose-50 rounded-xl p-4 text-center">
            <p className="text-xs text-rose-600 font-medium mb-1">Total Tax</p>
            <p className="text-2xl font-bold text-rose-700">
              {formatCurrency(result.totalTax)}
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <p className="text-xs text-green-600 font-medium mb-1">After-Tax Income</p>
            <p className="text-2xl font-bold text-green-700">
              {formatCurrency(result.afterTaxIncome)}
            </p>
          </div>
        </div>

        {/* Rates */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">Effective Federal Rate</p>
            <p className="text-lg font-bold text-indigo-600">
              {formatPercent(result.effectiveRate)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Total federal tax / taxable income
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">Marginal Federal Rate</p>
            <p className="text-lg font-bold text-indigo-600">
              {formatPercent(result.marginalRate)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Tax rate on next dollar earned
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">Monthly After-Tax</p>
            <p className="text-lg font-bold text-green-600">
              {formatCurrency(result.monthlyAfterTax)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Your monthly take-home pay
            </p>
          </div>
        </div>

        {/* Tax Bracket Breakdown */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Federal Tax Bracket Breakdown
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Taxable income: {formatCurrency(taxableIncome)} (after {formatCurrency(standardDeduction + otherDeductions)} in deductions)
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="p-3">Tax Bracket</th>
                  <th className="p-3">Rate</th>
                  <th className="p-3 text-right">Income Taxed</th>
                  <th className="p-3 text-right">Tax Owed</th>
                </tr>
              </thead>
              <tbody>
                {result.bracketBreakdown.map((bracket, index) => (
                  <tr key={index} className="border-b border-gray-50">
                    <td className="p-3 text-gray-700">{bracket.bracket}</td>
                    <td className="p-3 text-gray-700">
                      {formatPercent(bracket.rate)}
                    </td>
                    <td className="p-3 text-right text-gray-700">
                      {formatCurrency(bracket.taxed)}
                    </td>
                    <td className="p-3 text-right text-indigo-700 font-medium">
                      {formatCurrency(bracket.tax)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-indigo-50 font-bold">
                  <td className="p-3 text-gray-900" colSpan={3}>
                    Total Federal Tax
                  </td>
                  <td className="p-3 text-right text-indigo-700">
                    {formatCurrency(result.federalTax)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Visual Bracket Bar */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Tax Distribution
          </h3>
          <div className="relative h-12 bg-gray-100 rounded-lg overflow-hidden flex">
            {result.bracketBreakdown.map((bracket, index) => {
              const percentage = (bracket.taxed / taxableIncome) * 100;
              const colors = [
                "bg-green-400",
                "bg-blue-400",
                "bg-indigo-400",
                "bg-purple-400",
                "bg-pink-400",
                "bg-red-400",
                "bg-rose-600",
              ];
              return (
                <div
                  key={index}
                  className={`${colors[index]} flex items-center justify-center text-xs font-medium text-white`}
                  style={{ width: `${percentage}%` }}
                  title={`${bracket.bracket}: ${formatPercent(bracket.rate)}`}
                >
                  {percentage > 8 && formatPercent(bracket.rate)}
                </div>
              );
            })}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Lower brackets (10-12%)</span>
            <span>Higher brackets ({formatPercent(result.marginalRate)})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
