"use client";

import { useState, useMemo } from "react";
import {
  calculateNetWorth,
  formatCurrency,
  assetCategories,
  liabilityCategories,
  type AssetItem,
  type LiabilityItem,
  type AssetCategory,
  type LiabilityCategory,
} from "../lib/networth-engine";

let nextId = 1;
function genId(): string {
  return `item-${nextId++}-${Date.now()}`;
}

export default function NetWorthCalculator({
  defaultAssets,
  defaultLiabilities,
}: {
  defaultAssets?: AssetItem[];
  defaultLiabilities?: LiabilityItem[];
}) {
  const [assets, setAssets] = useState<AssetItem[]>(
    defaultAssets ?? [
      { id: genId(), name: "Checking Account", category: "cash", value: 5000 },
      { id: genId(), name: "Savings Account", category: "cash", value: 10000 },
      { id: genId(), name: "401(k)", category: "retirement", value: 50000 },
    ]
  );
  const [liabilities, setLiabilities] = useState<LiabilityItem[]>(
    defaultLiabilities ?? [
      { id: genId(), name: "Credit Card", category: "credit-cards", value: 3000 },
      { id: genId(), name: "Student Loans", category: "student-loans", value: 20000 },
    ]
  );

  const result = useMemo(
    () => calculateNetWorth(assets, liabilities),
    [assets, liabilities]
  );

  const addAsset = () => {
    setAssets([
      ...assets,
      { id: genId(), name: "", category: "cash", value: 0 },
    ]);
  };

  const removeAsset = (id: string) => {
    setAssets(assets.filter((a) => a.id !== id));
  };

  const updateAsset = (id: string, field: string, value: string | number) => {
    setAssets(
      assets.map((a) => (a.id === id ? { ...a, [field]: value } : a))
    );
  };

  const addLiability = () => {
    setLiabilities([
      ...liabilities,
      { id: genId(), name: "", category: "mortgage", value: 0 },
    ]);
  };

  const removeLiability = (id: string) => {
    setLiabilities(liabilities.filter((l) => l.id !== id));
  };

  const updateLiability = (
    id: string,
    field: string,
    value: string | number
  ) => {
    setLiabilities(
      liabilities.map((l) => (l.id === id ? { ...l, [field]: value } : l))
    );
  };

  const healthColors = {
    excellent: "text-emerald-600",
    good: "text-blue-600",
    fair: "text-amber-600",
    poor: "text-red-600",
  };

  const healthLabels = {
    excellent: "Excellent",
    good: "Good",
    fair: "Fair",
    poor: "Needs Work",
  };

  const barColors = [
    "bg-emerald-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-teal-500",
  ];

  return (
    <div className="space-y-8">
      {/* Assets Input */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Assets</h2>
          <span className="text-lg font-bold text-emerald-600">
            {formatCurrency(result.totalAssets)}
          </span>
        </div>
        <div className="space-y-3">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="flex flex-wrap gap-2 items-center"
            >
              <input
                type="text"
                value={asset.name}
                onChange={(e) => updateAsset(asset.id, "name", e.target.value)}
                placeholder="Asset name"
                className="input text-gray-900 flex-1 min-w-[140px]"
              />
              <select
                value={asset.category}
                onChange={(e) =>
                  updateAsset(
                    asset.id,
                    "category",
                    e.target.value as AssetCategory
                  )
                }
                className="input text-gray-900 w-40"
              >
                {assetCategories.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.label}
                  </option>
                ))}
              </select>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  $
                </span>
                <input
                  type="number"
                  value={asset.value || ""}
                  onChange={(e) =>
                    updateAsset(asset.id, "value", +e.target.value)
                  }
                  min={0}
                  placeholder="0"
                  className="input text-gray-900 w-32 pl-7"
                />
              </div>
              <button
                onClick={() => removeAsset(asset.id)}
                className="text-red-400 hover:text-red-600 text-lg px-2"
                aria-label="Remove asset"
              >
                x
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addAsset}
          className="mt-4 text-emerald-600 font-medium text-sm hover:underline"
        >
          + Add Asset
        </button>
      </div>

      {/* Liabilities Input */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Liabilities</h2>
          <span className="text-lg font-bold text-red-600">
            {formatCurrency(result.totalLiabilities)}
          </span>
        </div>
        <div className="space-y-3">
          {liabilities.map((liability) => (
            <div
              key={liability.id}
              className="flex flex-wrap gap-2 items-center"
            >
              <input
                type="text"
                value={liability.name}
                onChange={(e) =>
                  updateLiability(liability.id, "name", e.target.value)
                }
                placeholder="Debt name"
                className="input text-gray-900 flex-1 min-w-[140px]"
              />
              <select
                value={liability.category}
                onChange={(e) =>
                  updateLiability(
                    liability.id,
                    "category",
                    e.target.value as LiabilityCategory
                  )
                }
                className="input text-gray-900 w-40"
              >
                {liabilityCategories.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.label}
                  </option>
                ))}
              </select>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  $
                </span>
                <input
                  type="number"
                  value={liability.value || ""}
                  onChange={(e) =>
                    updateLiability(liability.id, "value", +e.target.value)
                  }
                  min={0}
                  placeholder="0"
                  className="input text-gray-900 w-32 pl-7"
                />
              </div>
              <button
                onClick={() => removeLiability(liability.id)}
                className="text-red-400 hover:text-red-600 text-lg px-2"
                aria-label="Remove liability"
              >
                x
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addLiability}
          className="mt-4 text-red-500 font-medium text-sm hover:underline"
        >
          + Add Liability
        </button>
      </div>

      {/* Results */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Your Net Worth
        </h2>

        {/* Big number */}
        <div className="text-center mb-8">
          <p
            className={`text-5xl md:text-6xl font-extrabold ${
              result.netWorth >= 0 ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {formatCurrency(result.netWorth)}
          </p>
          <p className="text-gray-500 mt-2">Total Net Worth</p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Total Assets"
            value={formatCurrency(result.totalAssets)}
            color="text-emerald-600"
          />
          <StatCard
            label="Total Debts"
            value={formatCurrency(result.totalLiabilities)}
            color="text-red-600"
          />
          <StatCard
            label="Debt-to-Asset Ratio"
            value={`${Math.round(result.debtToAssetRatio * 100)}%`}
            color={
              result.debtToAssetRatio < 0.2
                ? "text-emerald-600"
                : result.debtToAssetRatio < 0.5
                ? "text-amber-600"
                : "text-red-600"
            }
          />
          <StatCard
            label="Financial Health"
            value={healthLabels[result.healthScore]}
            color={healthColors[result.healthScore]}
          />
        </div>

        {/* Asset breakdown bar */}
        {result.assetBreakdown.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Asset Breakdown</h3>
            <div className="flex rounded-full h-6 overflow-hidden mb-2">
              {result.assetBreakdown.map((b, i) => {
                const pct = (b.total / result.totalAssets) * 100;
                return (
                  <div
                    key={b.category}
                    className={`${barColors[i % barColors.length]} transition-all`}
                    style={{ width: `${pct}%` }}
                    title={`${b.category}: ${formatCurrency(b.total)} (${Math.round(pct)}%)`}
                  />
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-gray-600">
              {result.assetBreakdown.map((b, i) => (
                <span key={b.category} className="flex items-center gap-1">
                  <span
                    className={`w-3 h-3 rounded-full ${barColors[i % barColors.length]}`}
                  />
                  {b.category}: {formatCurrency(b.total)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Liability breakdown bar */}
        {result.liabilityBreakdown.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">
              Debt Breakdown
            </h3>
            <div className="flex rounded-full h-6 overflow-hidden mb-2">
              {result.liabilityBreakdown.map((b, i) => {
                const pct = (b.total / result.totalLiabilities) * 100;
                return (
                  <div
                    key={b.category}
                    className={`${barColors[i % barColors.length]} transition-all`}
                    style={{ width: `${pct}%` }}
                    title={`${b.category}: ${formatCurrency(b.total)} (${Math.round(pct)}%)`}
                  />
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-gray-600">
              {result.liabilityBreakdown.map((b, i) => (
                <span key={b.category} className="flex items-center gap-1">
                  <span
                    className={`w-3 h-3 rounded-full ${barColors[i % barColors.length]}`}
                  />
                  {b.category}: {formatCurrency(b.total)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Assets vs Liabilities visual */}
        <div className="mb-4">
          <h3 className="font-bold text-gray-900 mb-3">
            Assets vs Liabilities
          </h3>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Assets</span>
                <span className="font-medium text-emerald-600">
                  {formatCurrency(result.totalAssets)}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-4">
                <div
                  className="bg-emerald-500 h-4 rounded-full transition-all"
                  style={{
                    width: `${
                      result.totalAssets > 0
                        ? Math.min(
                            100,
                            (result.totalAssets /
                              Math.max(
                                result.totalAssets,
                                result.totalLiabilities
                              )) *
                              100
                          )
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Liabilities</span>
                <span className="font-medium text-red-600">
                  {formatCurrency(result.totalLiabilities)}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-4">
                <div
                  className="bg-red-500 h-4 rounded-full transition-all"
                  style={{
                    width: `${
                      result.totalLiabilities > 0
                        ? Math.min(
                            100,
                            (result.totalLiabilities /
                              Math.max(
                                result.totalAssets,
                                result.totalLiabilities
                              )) *
                              100
                          )
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
  return (
    <div className="bg-gray-50 rounded-xl p-4 text-center">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className={`text-lg font-bold ${color}`}>{value}</p>
    </div>
  );
}
