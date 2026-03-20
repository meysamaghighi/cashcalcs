"use client";

import { useState, useMemo } from "react";
import {
  calculateRetirement,
  formatCurrency,
  type RetirementInputs,
  type RetirementScenario,
} from "../lib/retirement-engine";
import ShareButton from "./ShareButton";

export default function RetirementCalculator({
  defaults,
}: {
  defaults?: Partial<RetirementInputs>;
}) {
  const [currentAge, setCurrentAge] = useState(defaults?.currentAge ?? 30);
  const [retirementAge, setRetirementAge] = useState(defaults?.retirementAge ?? 65);
  const [currentSavings, setCurrentSavings] = useState(defaults?.currentSavings ?? 50000);
  const [monthlyContribution, setMonthlyContribution] = useState(defaults?.monthlyContribution ?? 1000);
  const [annualReturn, setAnnualReturn] = useState(defaults?.annualReturn ?? 7);
  const [inflationRate, setInflationRate] = useState(defaults?.inflationRate ?? 3);
  const [desiredMonthlyIncome, setDesiredMonthlyIncome] = useState(defaults?.desiredMonthlyIncome ?? 5000);
  const [socialSecurityMonthly, setSocialSecurityMonthly] = useState(defaults?.socialSecurityMonthly ?? 2000);
  const [showSchedule, setShowSchedule] = useState(false);

  const inputs: RetirementInputs = {
    currentAge,
    retirementAge,
    currentSavings,
    monthlyContribution,
    annualReturn,
    inflationRate,
    desiredMonthlyIncome,
    socialSecurityMonthly,
  };

  const result = useMemo(() => calculateRetirement(inputs), [
    currentAge,
    retirementAge,
    currentSavings,
    monthlyContribution,
    annualReturn,
    inflationRate,
    desiredMonthlyIncome,
    socialSecurityMonthly,
  ]);

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Your Retirement Details
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Field label="Current Age">
            <input
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(+e.target.value)}
              min={18}
              max={100}
              className="input text-gray-900"
            />
          </Field>
          <Field label="Retirement Age">
            <input
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(+e.target.value)}
              min={currentAge + 1}
              max={100}
              className="input text-gray-900"
            />
          </Field>
          <Field label="Current Savings ($)">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                $
              </span>
              <input
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(+e.target.value)}
                min={0}
                className="input text-gray-900 !pl-7"
              />
            </div>
          </Field>
          <Field label="Monthly Contribution ($)">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                $
              </span>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(+e.target.value)}
                min={0}
                className="input text-gray-900 !pl-7"
              />
            </div>
          </Field>
          <Field label="Annual Return (%)">
            <input
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(+e.target.value)}
              step={0.1}
              min={0}
              max={30}
              className="input text-gray-900"
            />
          </Field>
          <Field label="Inflation Rate (%)">
            <input
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(+e.target.value)}
              step={0.1}
              min={0}
              max={10}
              className="input text-gray-900"
            />
          </Field>
          <Field label="Desired Monthly Income ($)">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                $
              </span>
              <input
                type="number"
                value={desiredMonthlyIncome}
                onChange={(e) => setDesiredMonthlyIncome(+e.target.value)}
                min={0}
                className="input text-gray-900 !pl-7"
              />
            </div>
          </Field>
          <Field label="Social Security Monthly ($)">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                $
              </span>
              <input
                type="number"
                value={socialSecurityMonthly}
                onChange={(e) => setSocialSecurityMonthly(+e.target.value)}
                min={0}
                className="input text-gray-900 !pl-7"
              />
            </div>
          </Field>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Results</h2>
          <ShareButton title="Retirement Calculator" text="Check out this free retirement calculator!" />
        </div>

        {/* On-track indicator */}
        <div className={`mb-6 p-4 rounded-xl border-2 ${result.isOnTrack ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}>
          <div className="flex items-center gap-3">
            {result.isOnTrack ? (
              <>
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-bold text-emerald-900">You&apos;re on track!</p>
                  <p className="text-sm text-emerald-700">Your retirement savings plan will meet your desired income goal.</p>
                </div>
              </>
            ) : (
              <>
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="font-bold text-red-900">Not quite on track</p>
                  <p className="text-sm text-red-700">You need to save <span className="font-bold">{formatCurrency(result.neededMonthlyContribution)}/month</span> to reach your income goal.</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            label="Retirement Nest Egg"
            value={formatCurrency(result.totalAtRetirement)}
            color="text-blue-600"
          />
          <StatCard
            label="Monthly Income (4% Rule)"
            value={formatCurrency(result.monthlyIncomeFromSavings)}
            color="text-emerald-600"
          />
          <StatCard
            label="Income with SS"
            value={formatCurrency(result.totalMonthlyIncome)}
            color="text-purple-600"
          />
          <StatCard
            label="Savings Last Years"
            value={result.savingsLastYears >= 100 ? "100+" : Math.round(result.savingsLastYears).toString()}
            color="text-gray-900"
          />
        </div>

        {/* Income gap alert */}
        {!result.isOnTrack && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <p className="text-amber-800">
              <span className="font-bold">Income Gap:</span> You&apos;ll be short{" "}
              <span className="font-bold text-amber-900">{formatCurrency(Math.abs(result.incomeGap))}/month</span>{" "}
              from your desired retirement income. Increase monthly contributions or adjust your retirement age.
            </p>
          </div>
        )}

        {/* Growth chart */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 mb-3">Savings Growth to Retirement</h3>
          <div className="flex items-end gap-1 h-40 bg-gray-50 rounded-xl p-3">
            {result.yearlySchedule
              .filter((_, i) => i % Math.max(1, Math.floor(result.yearlySchedule.length / 40)) === 0 || i === result.yearlySchedule.length - 1)
              .map((y) => {
                const maxBalance = result.totalAtRetirement;
                const pct = (y.balance / maxBalance) * 100;
                return (
                  <div
                    key={y.year}
                    className="flex-1 bg-blue-400 rounded-t-sm min-w-[3px] transition-all hover:bg-blue-500"
                    style={{ height: `${pct}%` }}
                    title={`Age ${y.age}: ${formatCurrency(y.balance)}`}
                  />
                );
              })}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1 px-3">
            <span>Age {currentAge + 1}</span>
            <span>Age {retirementAge}</span>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="font-bold">Summary:</span> In {result.yearsToRetirement} years (at age {retirementAge}),
            you&apos;ll have <span className="font-bold text-gray-900">{formatCurrency(result.totalAtRetirement)}</span> saved.
            Using the 4% safe withdrawal rule, that provides <span className="font-bold text-gray-900">{formatCurrency(result.monthlyIncomeFromSavings)}/month</span>.
            Combined with Social Security of <span className="font-bold text-gray-900">{formatCurrency(socialSecurityMonthly)}/month</span>,
            your total retirement income will be <span className="font-bold text-gray-900">{formatCurrency(result.totalMonthlyIncome)}/month</span>.
            {result.isOnTrack ? " This meets your desired income goal!" : ` You need ${formatCurrency(result.neededMonthlyContribution)}/month to reach your goal.`}
          </p>
        </div>

        {/* Schedule toggle */}
        <button
          onClick={() => setShowSchedule(!showSchedule)}
          className="text-blue-600 font-medium text-sm hover:underline"
        >
          {showSchedule ? "Hide" : "Show"} Yearly Schedule
        </button>

        {showSchedule && (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="py-2 pr-4">Year</th>
                  <th className="py-2 pr-4">Age</th>
                  <th className="py-2 pr-4">Contribution</th>
                  <th className="py-2 pr-4">Interest</th>
                  <th className="py-2">Balance</th>
                </tr>
              </thead>
              <tbody>
                {result.yearlySchedule.map((y) => (
                  <tr key={y.year} className="border-b">
                    <td className="py-2 pr-4 text-gray-800">{y.year}</td>
                    <td className="py-2 pr-4 text-gray-800">{y.age}</td>
                    <td className="py-2 pr-4 text-gray-800">
                      {formatCurrency(y.contribution)}
                    </td>
                    <td className="py-2 pr-4 text-gray-800">
                      {formatCurrency(y.interest)}
                    </td>
                    <td className="py-2 font-medium text-gray-900">
                      {formatCurrency(y.balance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      {children}
    </label>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 text-center">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className={`text-lg font-bold ${color}`}>{value}</p>
    </div>
  );
}
