import type { MetadataRoute } from "next";
import { sideHustles, getAllCategories } from "./lib/side-hustles";
import { debtTypes } from "./lib/debt-engine";
import { fireScenarios } from "./lib/fire-engine";
import { savingsGoals } from "./lib/savings-engine";
import { compoundScenarios } from "./lib/compound-engine";
import { networthScenarios } from "./lib/networth-engine";
import { subscriptionPresets } from "./lib/subscription-engine";
import { mortgageScenarios } from "./lib/mortgage-engine";
import { budgetScenarios } from "./lib/budget-engine";

const BASE = "https://cashcalcs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE, lastModified: now, priority: 1.0 },
    { url: `${BASE}/side-hustle`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/debt-payoff`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/fire-calculator`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/savings-goal`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/compound-interest`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/net-worth`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/subscription-tracker`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/mortgage-calculator`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/guides/how-to-calculate-net-worth`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/debt-avalanche-vs-snowball`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/how-much-house-can-i-afford`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/what-is-the-fire-movement`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/50-30-20-budget-rule`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/budget`, lastModified: now, priority: 0.9 },
  ];

  const sideHustlePages = sideHustles.map((h) => ({
    url: `${BASE}/side-hustle/${h.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const categoryPages = getAllCategories().map((cat) => ({
    url: `${BASE}/side-hustle/category/${cat.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: now,
    priority: 0.6,
  }));

  const debtPages = debtTypes.map((dt) => ({
    url: `${BASE}/debt-payoff/${dt.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const firePages = fireScenarios.map((s) => ({
    url: `${BASE}/fire-calculator/${s.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const savingsPages = savingsGoals.map((g) => ({
    url: `${BASE}/savings-goal/${g.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const compoundPages = compoundScenarios.map((s) => ({
    url: `${BASE}/compound-interest/${s.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const networthPages = networthScenarios.map((s) => ({
    url: `${BASE}/net-worth/${s.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...sideHustlePages,
    ...categoryPages,
    ...debtPages,
    ...firePages,
    ...savingsPages,
    ...compoundPages,
    ...networthPages,
    ...subscriptionPresets.map((p) => ({
      url: `${BASE}/subscription-tracker/${p.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...mortgageScenarios.map((s) => ({
      url: `${BASE}/mortgage-calculator/${s.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...budgetScenarios.map((s) => ({
      url: `${BASE}/budget/${s.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
