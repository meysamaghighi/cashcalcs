"use client";

import { useState, useMemo } from "react";
import {
  calculateLoan,
  formatCurrency,
  type LoanInputs,
} from "../lib/loan-engine";
import ShareButton from "./ShareButton";

export default function LoanCalculator({
  defaults,
}: {
  defaults?: Partial<LoanInputs>;
}) {
  const [loanAmount, setLoanAmount] = useState(defaults?.loanAmount ?? 25000);
  const [interestRate, setInterestRate] = useState(defaults?.interestRate ?? 8.0);
  const [loanTerm, setLoanTerm] = useState(defaults?.loanTerm ?? 60);
  const [extraPayment, setExtraPayment] = useState(defaults?.extraPayment ?? 0);
  const [showAmortization, setShowAmortization] = useState(false);
  const [amortView, setAmortView] = useState<"yearly" | "monthly">("yearly");

  const result = useMemo(
    () => calculateLoan({ loanAmount, interestRate, loanTerm, extraPayment }),
    [loanAmount, interestRate, loanTerm, extraPayment]
  );

  const termYears = Math.floor(loanTerm / 12);
  const termMonthsRemainder = loanTerm % 12;
  const termLabel =
    termMonthsRemainder === 0
      ? `${termYears} year${termYears !== 1 ? "s" : ""}`
      : `${termYears}y ${termMonthsRemainder}m`;

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Loan Details</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loan Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={loanAmount || ""}
                onChange={(e) => setLoanAmount(+e.target.value)}
                min={0}
                className="input text-gray-900 w-full !pl-7"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interest Rate: {interestRate}%
            </label>
            <input
              type="range"
              min={0}
              max={36}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(+e.target.value)}
              className="w-full accent-violet-600"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>0%</span>
              <span>18%</span>
              <span>36%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loan Term: {termLabel} ({loanTerm} months)
            </label>
            <input
              type="range"
              min={6}
              max={240}
              step={6}
              value={loanTerm}
              onChange={(e) => setLoanTerm(+e.target.value)}
              className="w-full accent-violet-600"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>6mo</span>
              <span>10yr</span>
              <span>20yr</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Extra Monthly Payment (optional)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={extraPayment || ""}
                onChange={(e) => setExtraPayment(+e.target.value)}
                min={0}
                className="input text-gray-900 w-full !pl-7"
                placeholder="0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Monthly Payment</h2>
          <ShareButton title="Loan Calculator" text="Check out this free loan calculator!" />
        </div>

        <div className="text-center mb-8">
          <p className="text-5xl font-extrabold text-violet-600">
            {formatCurrency(result.monthlyPayment)}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            /month{extraPayment > 0 ? ` + ${formatCurrency(extraPayment)} extra` : ""}
          </p>
        </div>

        {/* Breakdown bar */}
        <div className="mb-6">
          <div className="flex rounded-full h-6 overflow-hidden mb-2">
            <div
              className="bg-violet-500 transition-all"
              style={{
                width: `${(result.totalPayment - result.totalInterest) / result.totalPayment * 100}%`,
              }}
              title={`Principal: ${formatCurrency(loanAmount)}`}
            />
            <div
              className="bg-rose-400 transition-all"
              style={{
                width: `${result.totalInterest / result.totalPayment * 100}%`,
              }}
              title={`Interest: ${formatCurrency(result.totalInterest)}`}
            />
          </div>
          <div className="flex gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-violet-500" />
              Principal: {formatCurrency(loanAmount)}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              Interest: {formatCurrency(result.totalInterest)}
            </span>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-violet-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Total Payment</p>
            <p className="text-lg font-bold text-violet-700">{formatCurrency(result.totalPayment)}</p>
          </div>
          <div className="bg-rose-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Total Interest</p>
            <p className="text-lg font-bold text-rose-700">{formatCurrency(result.totalInterest)}</p>
          </div>
          <div className="bg-emerald-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Payoff Date</p>
            <p className="text-lg font-bold text-emerald-700">{result.payoffDate}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Payoff Time</p>
            <p className="text-lg font-bold text-gray-900">
              {Math.floor(result.payoffMonths / 12)}y {result.payoffMonths % 12}m
            </p>
          </div>
        </div>

        {/* Extra payment savings */}
        {extraPayment > 0 && (result.interestSaved > 0 || result.monthsSaved > 0) && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-8">
            <h3 className="font-bold text-emerald-800 mb-2">Extra Payment Savings</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Interest saved</p>
                <p className="text-xl font-bold text-emerald-700">
                  {formatCurrency(result.interestSaved)}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Time saved</p>
                <p className="text-xl font-bold text-emerald-700">
                  {Math.floor(result.monthsSaved / 12)}y {result.monthsSaved % 12}m
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Amortization toggle */}
        <div>
          <button
            onClick={() => setShowAmortization(!showAmortization)}
            className="text-violet-600 font-medium text-sm hover:underline"
          >
            {showAmortization ? "Hide" : "Show"} Amortization Schedule
          </button>

          {showAmortization && (
            <div className="mt-4">
              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => setAmortView("yearly")}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    amortView === "yearly"
                      ? "bg-violet-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Yearly
                </button>
                <button
                  onClick={() => setAmortView("monthly")}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    amortView === "monthly"
                      ? "bg-violet-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Monthly
                </button>
              </div>

              <div className="overflow-x-auto">
                {amortView === "yearly" ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left text-gray-500">
                        <th className="pb-2 pr-4">Year</th>
                        <th className="pb-2 pr-4 text-right">Principal</th>
                        <th className="pb-2 pr-4 text-right">Interest</th>
                        <th className="pb-2 text-right">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.yearSummary.map((y) => (
                        <tr key={y.year} className="border-b border-gray-50">
                          <td className="py-2 pr-4 font-medium text-gray-900">{y.year}</td>
                          <td className="py-2 pr-4 text-right text-violet-700">
                            {formatCurrency(y.principalPaid)}
                          </td>
                          <td className="py-2 pr-4 text-right text-rose-600">
                            {formatCurrency(y.interestPaid)}
                          </td>
                          <td className="py-2 text-right text-gray-700">
                            {formatCurrency(y.balance)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left text-gray-500">
                        <th className="pb-2 pr-4">Month</th>
                        <th className="pb-2 pr-4 text-right">Payment</th>
                        <th className="pb-2 pr-4 text-right">Principal</th>
                        <th className="pb-2 pr-4 text-right">Interest</th>
                        <th className="pb-2 text-right">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.amortization.slice(0, 60).map((r) => (
                        <tr key={r.month} className="border-b border-gray-50">
                          <td className="py-1.5 pr-4 font-medium text-gray-900">{r.month}</td>
                          <td className="py-1.5 pr-4 text-right text-gray-700">
                            {formatCurrency(r.payment)}
                          </td>
                          <td className="py-1.5 pr-4 text-right text-violet-700">
                            {formatCurrency(r.principal)}
                          </td>
                          <td className="py-1.5 pr-4 text-right text-rose-600">
                            {formatCurrency(r.interest)}
                          </td>
                          <td className="py-1.5 text-right text-gray-700">
                            {formatCurrency(r.balance)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {amortView === "monthly" && result.amortization.length > 60 && (
                  <p className="text-xs text-gray-400 mt-2">
                    Showing first 60 months of {result.amortization.length} total.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
