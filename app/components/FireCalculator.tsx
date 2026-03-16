"use client";

import { useState, useMemo } from "react";
import {
  type FireInputs,
  calculateFire,
  formatCurrency,
  formatCurrencyFull,
} from "../lib/fire-engine";

interface Props {
  defaults?: Partial<FireInputs>;
}

export default function FireCalculator({ defaults }: Props) {
  const [inputs, setInputs] = useState<FireInputs>({
    age: defaults?.age ?? 30,
    annualIncome: defaults?.annualIncome ?? 75000,
    annualExpenses: defaults?.annualExpenses ?? 45000,
    currentSavings: defaults?.currentSavings ?? 20000,
    annualReturn: defaults?.annualReturn ?? 7,
    withdrawalRate: defaults?.withdrawalRate ?? 4,
    targetAge: defaults?.targetAge ?? 65,
  });
  const [showResults, setShowResults] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  function update(field: keyof FireInputs, value: number) {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }

  const result = useMemo(() => calculateFire(inputs), [inputs]);
  const annualSavings = inputs.annualIncome - inputs.annualExpenses;

  return (
    <div>
      {/* Input Form */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Calculate Your FIRE Number
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Age
            </label>
            <input
              type="number"
              value={inputs.age || ""}
              onChange={(e) => update("age", Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Annual Income (before tax)
            </label>
            <input
              type="number"
              value={inputs.annualIncome || ""}
              onChange={(e) => update("annualIncome", Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Annual Expenses
            </label>
            <input
              type="number"
              value={inputs.annualExpenses || ""}
              onChange={(e) => update("annualExpenses", Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Savings/Investments
            </label>
            <input
              type="number"
              value={inputs.currentSavings || ""}
              onChange={(e) => update("currentSavings", Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Expected Annual Return: {inputs.annualReturn}%
            </label>
            <input
              type="range"
              min={1}
              max={12}
              step={0.5}
              value={inputs.annualReturn}
              onChange={(e) => update("annualReturn", Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1%</span>
              <span>4%</span>
              <span>7%</span>
              <span>10%</span>
              <span>12%</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Withdrawal Rate: {inputs.withdrawalRate}%
            </label>
            <input
              type="range"
              min={2}
              max={6}
              step={0.5}
              value={inputs.withdrawalRate}
              onChange={(e) => update("withdrawalRate", Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>2%</span>
              <span>3%</span>
              <span>4% (standard)</span>
              <span>5%</span>
              <span>6%</span>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
          Savings rate: <strong>{result.savingsRate}%</strong> | Annual savings:{" "}
          <strong>{formatCurrencyFull(Math.max(0, annualSavings))}</strong>
        </div>

        <button
          onClick={() => setShowResults(true)}
          className="w-full mt-6 py-3 bg-indigo-600 text-white font-bold rounded-xl text-lg hover:bg-indigo-700 transition-colors"
        >
          Calculate My FIRE Date
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <div>
          {/* Big Number */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 text-center">
            <p className="text-sm text-gray-500 mb-2">
              Your FIRE Number (4% rule)
            </p>
            <p className="text-5xl font-extrabold text-indigo-600 mb-2">
              {formatCurrency(result.fireNumber)}
            </p>
            <p className="text-lg text-gray-700">
              You can retire at age{" "}
              <strong className="text-indigo-600">{result.fireAge}</strong> in{" "}
              <strong>{result.yearsToFire} years</strong>
            </p>
            {annualSavings <= 0 && (
              <p className="text-red-600 mt-2 text-sm font-medium">
                Your expenses exceed your income. You need to increase income or reduce expenses to reach FIRE.
              </p>
            )}
          </div>

          {/* FIRE Variants */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-green-700 mb-1">
                Lean FIRE (70% expenses)
              </p>
              <p className="text-2xl font-bold text-green-700">
                {formatCurrency(result.leanFireNumber)}
              </p>
              <p className="text-sm text-green-600">
                Age {result.leanFireAge}
              </p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-indigo-700 mb-1">
                FIRE (100% expenses)
              </p>
              <p className="text-2xl font-bold text-indigo-700">
                {formatCurrency(result.fireNumber)}
              </p>
              <p className="text-sm text-indigo-600">
                Age {result.fireAge}
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 text-center">
              <p className="text-xs font-semibold text-purple-700 mb-1">
                Fat FIRE (150% expenses)
              </p>
              <p className="text-2xl font-bold text-purple-700">
                {formatCurrency(result.fatFireNumber)}
              </p>
              <p className="text-sm text-purple-600">
                Age {result.fatFireAge}
              </p>
            </div>
          </div>

          {/* Coast FIRE */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <h3 className="font-bold text-amber-900 mb-1">Coast FIRE</h3>
            <p className="text-amber-800 text-sm">
              At age <strong>{result.coastFireAge}</strong>, your investments (
              {formatCurrency(result.coastFireNumber)}) will grow to your FIRE
              number by age 65 even if you never save another dollar. After that,
              you only need to cover current expenses.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              label="Savings Rate"
              value={`${result.savingsRate}%`}
              color="indigo"
            />
            <StatCard
              label="Total Contributions"
              value={formatCurrency(result.totalContributions)}
              color="blue"
            />
            <StatCard
              label="Total Growth"
              value={formatCurrency(result.totalGrowth)}
              color="green"
            />
            <StatCard
              label="Years to FIRE"
              value={String(result.yearsToFire)}
              color="purple"
            />
          </div>

          {/* Growth Chart (simple bar representation) */}
          <div className="bg-white rounded-xl shadow-md p-5 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">
              Portfolio Growth Over Time
            </h3>
            <div className="space-y-2">
              {result.schedule
                .filter((_, i) => i % Math.max(1, Math.floor(result.schedule.length / 15)) === 0 || i === result.schedule.length - 1)
                .map((year) => {
                  const pct = Math.min(
                    100,
                    (year.endBalance / result.fireNumber) * 100
                  );
                  return (
                    <div key={year.age} className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {year.age}
                      </span>
                      <div className="flex-1 bg-gray-100 rounded-full h-5 relative">
                        <div
                          className={`h-5 rounded-full ${
                            year.isFire ? "bg-green-500" : "bg-indigo-500"
                          }`}
                          style={{ width: `${Math.max(1, pct)}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-800 w-20 text-right font-medium">
                        {formatCurrency(year.endBalance)}
                      </span>
                    </div>
                  );
                })}
            </div>
            <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-indigo-500 rounded-full inline-block" /> Growing
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block" /> FIRE reached
              </span>
              <span>Target: {formatCurrency(result.fireNumber)}</span>
            </div>
          </div>

          {/* Year-by-Year Schedule */}
          <div className="bg-white rounded-xl shadow-md p-5 mb-8">
            <button
              onClick={() => setShowSchedule(!showSchedule)}
              className="w-full flex items-center justify-between font-bold text-gray-900"
            >
              <span>Year-by-Year Breakdown</span>
              <span className="text-indigo-600">
                {showSchedule ? "Hide" : "Show"}
              </span>
            </button>
            {showSchedule && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-2 font-semibold text-gray-700">Age</th>
                      <th className="text-left py-2 px-2 font-semibold text-gray-700">Contribution</th>
                      <th className="text-left py-2 px-2 font-semibold text-gray-700">Growth</th>
                      <th className="text-left py-2 px-2 font-semibold text-gray-700">Balance</th>
                      <th className="text-left py-2 px-2 font-semibold text-gray-700">FIRE Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.schedule.map((year) => (
                      <tr
                        key={year.age}
                        className={`border-b border-gray-50 ${
                          year.isFire ? "bg-green-50" : ""
                        }`}
                      >
                        <td className="py-2 px-2 text-gray-800 font-medium">
                          {year.age}
                          {year.age === result.fireAge && (
                            <span className="ml-1 text-green-600 text-xs">FIRE</span>
                          )}
                        </td>
                        <td className="py-2 px-2 text-gray-800">
                          {formatCurrencyFull(year.contribution)}
                        </td>
                        <td className="py-2 px-2 text-green-600">
                          {formatCurrencyFull(year.growth)}
                        </td>
                        <td className="py-2 px-2 font-medium text-gray-800">
                          {formatCurrencyFull(year.endBalance)}
                        </td>
                        <td className="py-2 px-2 text-gray-500">
                          {formatCurrencyFull(year.fireNumber)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
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
  const colorMap: Record<string, string> = {
    indigo: "bg-indigo-50 text-indigo-700",
    blue: "bg-blue-50 text-blue-700",
    green: "bg-green-50 text-green-700",
    purple: "bg-purple-50 text-purple-700",
  };

  return (
    <div className={`rounded-xl p-4 text-center ${colorMap[color] || colorMap.indigo}`}>
      <p className="text-xs font-medium mb-1">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
