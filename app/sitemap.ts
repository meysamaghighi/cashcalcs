import type { MetadataRoute } from "next";
import { sideHustles, getAllCategories } from "./lib/side-hustles";
import { debtTypes } from "./lib/debt-engine";
import { fireScenarios } from "./lib/fire-engine";
import { savingsGoals } from "./lib/savings-engine";
import { compoundScenarios } from "./lib/compound-engine";

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

  return [
    ...staticPages,
    ...sideHustlePages,
    ...categoryPages,
    ...debtPages,
    ...firePages,
    ...savingsPages,
    ...compoundPages,
  ];
}
