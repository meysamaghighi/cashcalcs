"use client";

import { useState, useMemo } from "react";
import {
  calculateMortgage,
  formatCurrency,
  type MortgageInputs,
} from "../lib/mortgage-engine";

export default function MortgageCalculator({
  defaults,
}: {
  defaults?: Partial<MortgageInputs>;
}) {
  const [homePrice, setHomePrice] = useState(defaults?.homePrice ?? 400000);
  const [downPayment, setDownPayment] = useState(defaults?.downPayment ?? 80000);
  const [loanTerm, setLoanTerm] = useState(defaults?.loanTerm ?? 30);
  const [interestRate, setInterestRate] = useState(defaults?.interestRate ?? 6.75);
  const [propertyTax, setPropertyTax] = useState(defaults?.propertyTax ?? 5000);
  const [homeInsurance, setHomeInsurance] = useState(defaults?.homeInsurance ?? 2000);
  const [pmi, setPmi] = useState(defaults?.pmi ?? 0);
  const [showAmortization, setShowAmortization] = useState(false);
  const [amortView, setAmortView] = useState<"yearly" | "monthly">("yearly");

  const result = useMemo(
    () =>
      calculateMortgage({
        homePrice,
        downPayment,
        loanTerm,
        interestRate,
        propertyTax,
        homeInsurance,
        pmi,
      }),
    [homePrice, downPayment, loanTerm, interestRate, propertyTax, homeInsurance, pmi]
  );

  const downPct = homePrice > 0 ? ((downPayment / homePrice) * 100).toFixed(1) : "0";

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Mortgage Details</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Home Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Home Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={homePrice || ""}
                onChange={(e) => setHomePrice(+e.target.value)}
                min={0}
                className="input text-gray-900 w-full !pl-7"
              />
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Down Payment ({downPct}%)
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
              Loan Term: {loanTerm} years
            </label>
            <input
              type="range"
              min={5}
              max={30}
              step={5}
              value={loanTerm}
              onChange={(e) => setLoanTerm(+e.target.value)}
              className="w-full accent-sky-600"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>5yr</span>
              <span>15yr</span>
              <span>30yr</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interest Rate: {interestRate}%
            </label>
            <input
              type="range"
              min={1}
              max={12}
              step={0.125}
              value={interestRate}
              onChange={(e) => setInterestRate(+e.target.value)}
              className="w-full accent-sky-600"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>1%</span>
              <span>6%</span>
              <span>12%</span>
            </div>
          </div>

          {/* Property Tax */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Tax (annual)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={propertyTax || ""}
                onChange={(e) => setPropertyTax(+e.target.value)}
                min={0}
                className="input text-gray-900 w-full !pl-7"
              />
            </div>
          </div>

          {/* Home Insurance */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Home Insurance (annual)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={homeInsurance || ""}
                onChange={(e) => setHomeInsurance(+e.target.value)}
                min={0}
                className="input text-gray-900 w-full !pl-7"
              />
            </div>
          </div>

          {/* PMI */}
          {+downPct < 20 && (
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                PMI (monthly) - required with less than 20% down
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  value={pmi || ""}
                  onChange={(e) => setPmi(+e.target.value)}
                  min={0}
                  className="input text-gray-900 w-full md:w-1/2 !pl-7"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Your Monthly Payment</h2>

        {/* Big number */}
        <div className="text-center mb-8">
          <p className="text-5xl font-extrabold text-sky-600">
            {formatCurrency(result.monthlyPayment)}
          </p>
          <p className="text-sm text-gray-500 mt-1">/month</p>
        </div>

        {/* Breakdown bar */}
        <div className="mb-6">
          <div className="flex rounded-full h-6 overflow-hidden mb-2">
            {[
              { label: "Principal", val: result.monthlyBreakdown.principal, color: "bg-sky-500" },
              { label: "Interest", val: result.monthlyBreakdown.interest, color: "bg-indigo-500" },
              { label: "Property Tax", val: result.monthlyBreakdown.propertyTax, color: "bg-amber-500" },
              { label: "Insurance", val: result.monthlyBreakdown.homeInsurance, color: "bg-emerald-500" },
              { label: "PMI", val: result.monthlyBreakdown.pmi, color: "bg-rose-500" },
            ]
              .filter((s) => s.val > 0)
              .map((s) => {
                const pct = (s.val / result.monthlyPayment) * 100;
                return (
                  <div
                    key={s.label}
                    className={`${s.color} transition-all`}
                    style={{ width: `${pct}%` }}
                    title={`${s.label}: ${formatCurrency(s.val)} (${Math.round(pct)}%)`}
                  />
                );
              })}
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-gray-600">
            {[
              { label: "Principal", val: result.monthlyBreakdown.principal, color: "bg-sky-500" },
              { label: "Interest", val: result.monthlyBreakdown.interest, color: "bg-indigo-500" },
              { label: "Tax", val: result.monthlyBreakdown.propertyTax, color: "bg-amber-500" },
              { label: "Insurance", val: result.monthlyBreakdown.homeInsurance, color: "bg-emerald-500" },
              { label: "PMI", val: result.monthlyBreakdown.pmi, color: "bg-rose-500" },
            ]
              .filter((s) => s.val > 0)
              .map((s) => (
                <span key={s.label} className="flex items-center gap-1">
                  <span className={`w-3 h-3 rounded-full ${s.color}`} />
                  {s.label}: {formatCurrency(s.val)}
                </span>
              ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-sky-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Loan Amount</p>
            <p className="text-lg font-bold text-sky-700">{formatCurrency(result.loanAmount)}</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Total Interest</p>
            <p className="text-lg font-bold text-indigo-700">{formatCurrency(result.totalInterest)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Total Payment</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.totalPayment)}</p>
          </div>
          <div className="bg-emerald-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Payoff Date</p>
            <p className="text-lg font-bold text-emerald-700">{result.payoffDate}</p>
          </div>
        </div>

        {/* Amortization toggle */}
        <div>
          <button
            onClick={() => setShowAmortization(!showAmortization)}
            className="text-sky-600 font-medium text-sm hover:underline"
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
                      ? "bg-sky-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Yearly
                </button>
                <button
                  onClick={() => setAmortView("monthly")}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    amortView === "monthly"
                      ? "bg-sky-600 text-white"
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
                          <td className="py-2 pr-4 text-right text-sky-700">
                            {formatCurrency(y.principalPaid)}
                          </td>
                          <td className="py-2 pr-4 text-right text-indigo-700">
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
                          <td className="py-1.5 pr-4 text-right text-sky-700">
                            {formatCurrency(r.principal)}
                          </td>
                          <td className="py-1.5 pr-4 text-right text-indigo-700">
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
