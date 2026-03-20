"use client";

import { useState, useMemo } from "react";
import {
  type CompoundInputs,
  calculateCompound,
  formatCurrency,
} from "../lib/compound-engine";
import ShareButton from "./ShareButton";

interface Props {
  defaults?: Partial<CompoundInputs>;
}

export default function CompoundCalculator({ defaults }: Props) {
  const [principal, setPrincipal] = useState(defaults?.principal ?? 10000);
  const [monthlyContribution, setMonthlyContribution] = useState(
    defaults?.monthlyContribution ?? 500
  );
  const [annualRate, setAnnualRate] = useState(defaults?.annualRate ?? 7);
  const [years, setYears] = useState(defaults?.years ?? 20);
  const [compoundFrequency, setCompoundFrequency] = useState<
    CompoundInputs["compoundFrequency"]
  >(defaults?.compoundFrequency ?? "monthly");
  const [showSchedule, setShowSchedule] = useState(false);

  const result = useMemo(
    () =>
      calculateCompound({
        principal,
        monthlyContribution,
        annualRate,
        years,
        compoundFrequency,
      }),
    [principal, monthlyContribution, annualRate, years, compoundFrequency]
  );

  const contributionPct =
    result.finalBalance > 0
      ? (result.totalContributions / result.finalBalance) * 100
      : 0;
  const interestPct = 100 - contributionPct;

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Your Investment Details
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Starting Amount ($)
            </label>
            <input
              type="number"
              value={principal || ""}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              min={0}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Monthly Contribution ($)
            </label>
            <input
              type="number"
              value={monthlyContribution || ""}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              min={0}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Annual Interest Rate: {annualRate}%
            </label>
            <input
              type="range"
              min={0.5}
              max={15}
              step={0.5}
              value={annualRate}
              onChange={(e) => setAnnualRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0.5%</span>
              <span>5%</span>
              <span>10%</span>
              <span>15%</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Time Period: {years} years
            </label>
            <input
              type="range"
              min={1}
              max={50}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1</span>
              <span>10</span>
              <span>20</span>
              <span>30</span>
              <span>50</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Compounding Frequency
            </label>
            <div className="flex gap-2">
              {(["monthly", "quarterly", "annually"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setCompoundFrequency(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    compoundFrequency === f
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Results</h2>
          <ShareButton title="Compound Interest Calculator" text="Check out this free compound interest calculator!" />
        </div>

        {/* Big number */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 mb-1">
            Total Value After {years} Years
          </p>
          <p className="text-5xl font-extrabold text-teal-600">
            {formatCurrency(result.finalBalance)}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Your money doubles in ~{result.doublingYears} years
          </p>
        </div>

        {/* Breakdown */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-teal-50 rounded-xl p-4 text-center">
            <p className="text-xs text-teal-700 mb-1">Total Contributions</p>
            <p className="text-xl font-bold text-teal-700">
              {formatCurrency(result.totalContributions)}
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <p className="text-xs text-green-700 mb-1">Interest Earned</p>
            <p className="text-xl font-bold text-green-700">
              {formatCurrency(result.totalInterest)}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-600 mb-1">Interest Share</p>
            <p className="text-xl font-bold text-gray-900">
              {Math.round(interestPct)}%
            </p>
          </div>
        </div>

        {/* Stacked bar breakdown */}
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Contributions vs Interest
          </p>
          <div className="w-full h-8 rounded-full overflow-hidden flex">
            <div
              className="bg-teal-500 h-full transition-all"
              style={{ width: `${contributionPct}%` }}
            />
            <div
              className="bg-green-400 h-full transition-all"
              style={{ width: `${interestPct}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-teal-500 rounded-full inline-block" />{" "}
              Contributions ({Math.round(contributionPct)}%)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />{" "}
              Interest ({Math.round(interestPct)}%)
            </span>
          </div>
        </div>

        {/* Growth chart */}
        <div className="mb-8">
          <h3 className="font-bold text-gray-900 mb-3">Growth Over Time</h3>
          <div className="flex items-end gap-[2px] h-48 bg-gray-50 rounded-xl p-3">
            {result.schedule.map((yr) => {
              const maxBal =
                result.schedule[result.schedule.length - 1]?.endBalance || 1;
              const totalH = (yr.endBalance / maxBal) * 100;
              const contribH = (yr.totalContributions / maxBal) * 100;
              return (
                <div
                  key={yr.year}
                  className="flex-1 flex flex-col justify-end min-w-[3px] relative group"
                  style={{ height: "100%" }}
                >
                  <div
                    className="bg-green-400 rounded-t-sm"
                    style={{ height: `${totalH - contribH}%` }}
                  />
                  <div
                    className="bg-teal-500 rounded-t-sm"
                    style={{ height: `${contribH}%` }}
                  />
                  <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none z-10">
                    Year {yr.year}: {formatCurrency(yr.endBalance)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1 px-3">
            <span>Year 1</span>
            <span>Year {years}</span>
          </div>
          <div className="flex gap-4 text-xs text-gray-500 mt-2 px-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-teal-500 rounded-full inline-block" />{" "}
              Contributions
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />{" "}
              Interest
            </span>
          </div>
        </div>

        {/* Schedule */}
        <button
          onClick={() => setShowSchedule(!showSchedule)}
          className="text-teal-600 font-medium text-sm hover:underline"
        >
          {showSchedule ? "Hide" : "Show"} Year-by-Year Schedule
        </button>

        {showSchedule && (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="py-2 pr-4">Year</th>
                  <th className="py-2 pr-4">Start Balance</th>
                  <th className="py-2 pr-4">Contributions</th>
                  <th className="py-2 pr-4">Interest</th>
                  <th className="py-2">End Balance</th>
                </tr>
              </thead>
              <tbody>
                {result.schedule.map((yr) => (
                  <tr key={yr.year} className="border-b border-gray-50">
                    <td className="py-2 pr-4 text-gray-800 font-medium">
                      {yr.year}
                    </td>
                    <td className="py-2 pr-4 text-gray-800">
                      {formatCurrency(yr.startBalance)}
                    </td>
                    <td className="py-2 pr-4 text-teal-600">
                      {formatCurrency(yr.contributions)}
                    </td>
                    <td className="py-2 pr-4 text-green-600">
                      {formatCurrency(yr.interest)}
                    </td>
                    <td className="py-2 font-medium text-gray-900">
                      {formatCurrency(yr.endBalance)}
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
