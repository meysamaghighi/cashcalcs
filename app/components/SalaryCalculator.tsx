"use client";

import { useState, useMemo } from "react";
import {
  calculateSalary,
  formatMoney,
  type SalaryInputs,
} from "../lib/salary-engine";

const periods = [
  { value: "hourly", label: "Hourly" },
  { value: "weekly", label: "Weekly" },
  { value: "biweekly", label: "Bi-Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "annual", label: "Annual" },
] as const;

export default function SalaryCalculator({
  defaults,
}: {
  defaults?: Partial<SalaryInputs>;
}) {
  const [amount, setAmount] = useState(defaults?.amount ?? 25);
  const [period, setPeriod] = useState<SalaryInputs["period"]>(
    defaults?.period ?? "hourly"
  );
  const [hoursPerWeek, setHoursPerWeek] = useState(
    defaults?.hoursPerWeek ?? 40
  );
  const [weeksPerYear, setWeeksPerYear] = useState(
    defaults?.weeksPerYear ?? 52
  );

  const result = useMemo(
    () => calculateSalary({ amount, period, hoursPerWeek, weeksPerYear }),
    [amount, period, hoursPerWeek, weeksPerYear]
  );

  const rows = [
    { label: "Hourly", value: result.hourly },
    { label: "Daily", value: result.daily },
    { label: "Weekly", value: result.weekly },
    { label: "Bi-Weekly", value: result.biweekly },
    { label: "Semi-Monthly", value: result.semimonthly },
    { label: "Monthly", value: result.monthly },
    { label: "Quarterly", value: result.quarterly },
    { label: "Annual", value: result.annual },
  ];

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Enter Your Pay
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                $
              </span>
              <input
                type="number"
                value={amount || ""}
                onChange={(e) => setAmount(+e.target.value)}
                min={0}
                step={period === "hourly" ? 0.25 : 100}
                className="input text-gray-900 w-full !pl-7"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pay Period
            </label>
            <div className="flex flex-wrap gap-2">
              {periods.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setPeriod(p.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    period === p.value
                      ? "bg-cyan-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hours per Week: {hoursPerWeek}
            </label>
            <input
              type="range"
              min={1}
              max={80}
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(+e.target.value)}
              className="w-full accent-cyan-600"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>1</span>
              <span>40</span>
              <span>80</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weeks per Year: {weeksPerYear}
            </label>
            <input
              type="range"
              min={1}
              max={52}
              value={weeksPerYear}
              onChange={(e) => setWeeksPerYear(+e.target.value)}
              className="w-full accent-cyan-600"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>1</span>
              <span>48 (w/ vacation)</span>
              <span>52</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Your Salary Breakdown
        </h2>

        <div className="text-center mb-8">
          <p className="text-5xl font-extrabold text-cyan-600">
            {formatMoney(result.annual)}
          </p>
          <p className="text-sm text-gray-500 mt-1">per year (before taxes)</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {rows.map((row) => (
            <div
              key={row.label}
              className="bg-gray-50 rounded-xl p-4 text-center"
            >
              <p className="text-xs text-gray-500 mb-1">{row.label}</p>
              <p className="text-lg font-bold text-gray-900">
                {formatMoney(row.value)}
              </p>
            </div>
          ))}
        </div>

        {weeksPerYear < 52 && (
          <p className="text-sm text-gray-500 mt-4 text-center">
            Based on {weeksPerYear} working weeks per year ({52 - weeksPerYear}{" "}
            weeks off).
          </p>
        )}
      </div>
    </div>
  );
}
