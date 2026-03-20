"use client";

import { useState, useMemo } from "react";
import {
  calculateSubscriptions,
  formatCurrency,
  toMonthly,
  subscriptionCategories,
  type Subscription,
  type SubscriptionCategory,
  type BillingCycle,
} from "../lib/subscription-engine";
import ShareButton from "./ShareButton";

let nextId = 1;
function genId(): string {
  return `sub-${nextId++}-${Date.now()}`;
}

export default function SubscriptionCalculator({
  defaultSubs,
}: {
  defaultSubs?: Omit<Subscription, "id">[];
}) {
  const [subs, setSubs] = useState<Subscription[]>(
    defaultSubs
      ? defaultSubs.map((s) => ({ ...s, id: genId() }))
      : [
          { id: genId(), name: "Netflix", cost: 15.49, cycle: "monthly", category: "streaming" },
          { id: genId(), name: "Spotify", cost: 11.99, cycle: "monthly", category: "music" },
          { id: genId(), name: "Amazon Prime", cost: 139, cycle: "yearly", category: "streaming" },
        ]
  );

  const result = useMemo(() => calculateSubscriptions(subs), [subs]);

  const addSub = () => {
    setSubs([
      ...subs,
      { id: genId(), name: "", cost: 0, cycle: "monthly", category: "other" },
    ]);
  };

  const removeSub = (id: string) => {
    setSubs(subs.filter((s) => s.id !== id));
  };

  const updateSub = (id: string, field: string, value: string | number) => {
    setSubs(subs.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  return (
    <div className="space-y-8">
      {/* Subscription List */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Your Subscriptions
          </h2>
          <span className="text-sm text-gray-500">
            {subs.length} subscription{subs.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="space-y-3">
          {subs.map((sub) => (
            <div key={sub.id} className="flex flex-wrap gap-2 items-center">
              <input
                type="text"
                value={sub.name}
                onChange={(e) => updateSub(sub.id, "name", e.target.value)}
                placeholder="Service name"
                className="input text-gray-900 flex-1 min-w-[130px]"
              />
              <select
                value={sub.category}
                onChange={(e) =>
                  updateSub(
                    sub.id,
                    "category",
                    e.target.value as SubscriptionCategory
                  )
                }
                className="input text-gray-900 w-36"
              >
                {subscriptionCategories.map((c) => (
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
                  value={sub.cost || ""}
                  onChange={(e) => updateSub(sub.id, "cost", +e.target.value)}
                  min={0}
                  step={0.01}
                  placeholder="0.00"
                  className="input text-gray-900 w-24 !pl-7"
                />
              </div>
              <select
                value={sub.cycle}
                onChange={(e) =>
                  updateSub(sub.id, "cycle", e.target.value as BillingCycle)
                }
                className="input text-gray-900 w-28"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
              <button
                onClick={() => removeSub(sub.id)}
                className="text-red-400 hover:text-red-600 text-lg px-2"
                aria-label="Remove subscription"
              >
                x
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addSub}
          className="mt-4 text-rose-600 font-medium text-sm hover:underline"
        >
          + Add Subscription
        </button>
      </div>

      {/* Results */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Subscription Costs</h2>
          <ShareButton title="Subscription Tracker" text="Check out this free subscription cost tracker!" />
        </div>

        {/* Big numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-rose-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Monthly</p>
            <p className="text-2xl font-bold text-rose-600">
              {formatCurrency(result.totalMonthly)}
            </p>
          </div>
          <div className="bg-rose-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Yearly</p>
            <p className="text-2xl font-bold text-rose-600">
              {formatCurrency(result.totalYearly)}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Per Day</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatCurrency(result.costPerDay)}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-1">Subscriptions</p>
            <p className="text-2xl font-bold text-gray-900">
              {result.subscriptionCount}
            </p>
          </div>
        </div>

        {/* Category breakdown bar */}
        {result.categoryBreakdown.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">
              Spending by Category
            </h3>
            <div className="flex rounded-full h-6 overflow-hidden mb-2">
              {result.categoryBreakdown.map((b) => {
                const pct = (b.monthly / result.totalMonthly) * 100;
                return (
                  <div
                    key={b.category}
                    className={`${b.color} transition-all`}
                    style={{ width: `${pct}%` }}
                    title={`${b.category}: ${formatCurrency(b.monthly)}/mo (${Math.round(pct)}%)`}
                  />
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-gray-600">
              {result.categoryBreakdown.map((b) => (
                <span key={b.category} className="flex items-center gap-1">
                  <span className={`w-3 h-3 rounded-full ${b.color}`} />
                  {b.category}: {formatCurrency(b.monthly)}/mo
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Individual subscription costs (sorted by monthly cost) */}
        {subs.length > 0 && (
          <div>
            <h3 className="font-bold text-gray-900 mb-3">
              Cost Per Subscription
            </h3>
            <div className="space-y-2">
              {[...subs]
                .sort(
                  (a, b) =>
                    toMonthly(b.cost, b.cycle) - toMonthly(a.cost, a.cycle)
                )
                .map((sub) => {
                  const monthly = toMonthly(sub.cost, sub.cycle);
                  const pct =
                    result.totalMonthly > 0
                      ? (monthly / result.totalMonthly) * 100
                      : 0;
                  const cat = subscriptionCategories.find(
                    (c) => c.key === sub.category
                  );
                  return (
                    <div key={sub.id} className="flex items-center gap-3">
                      <span className="w-32 text-sm text-gray-900 font-medium truncate">
                        {sub.name || "Unnamed"}
                      </span>
                      <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                        <div
                          className={`${cat?.color || "bg-gray-500"} h-4 rounded-full transition-all`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="w-20 text-right text-sm font-medium text-gray-700">
                        {formatCurrency(monthly)}/mo
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* Savings projection */}
        {result.totalMonthly > 0 && (
          <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <h3 className="font-bold text-emerald-800 mb-2">
              What if you invested this instead?
            </h3>
            <p className="text-sm text-emerald-700">
              If you invested {formatCurrency(result.totalMonthly)}/month at 8%
              annual returns, you would have{" "}
              <strong>
                $
                {Math.round(
                  result.totalMonthly *
                    ((Math.pow(1 + 0.08 / 12, 120) - 1) / (0.08 / 12))
                ).toLocaleString()}
              </strong>{" "}
              in 10 years and{" "}
              <strong>
                $
                {Math.round(
                  result.totalMonthly *
                    ((Math.pow(1 + 0.08 / 12, 360) - 1) / (0.08 / 12))
                ).toLocaleString()}
              </strong>{" "}
              in 30 years.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
