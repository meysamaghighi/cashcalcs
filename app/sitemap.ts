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
import { loanScenarios } from "./lib/loan-engine";
import { salaryScenarios } from "./lib/salary-engine";
import { taxScenarios } from "./lib/tax-engine";
import { carScenarios } from "./lib/car-engine";
import { retirementScenarios } from "./lib/retirement-engine";
import { inflationPages } from "./lib/inflation-pages";
import { investmentScenarios } from "./lib/investment-engine";

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
    { url: `${BASE}/guides/how-to-build-emergency-fund`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/how-to-pay-off-student-loans`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/how-to-start-investing`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/how-does-inflation-work`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/how-to-create-a-budget`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/what-is-compound-interest`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/how-to-pay-off-credit-card-debt`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/how-to-reduce-monthly-expenses`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/retirement-planning-for-beginners`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/how-to-build-credit`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/what-is-an-etf`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/how-to-negotiate-salary`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/renting-vs-buying`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/how-to-start-a-side-hustle`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/guides/what-is-dollar-cost-averaging`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/budget`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/loan-calculator`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/salary-calculator`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/car-calculator`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/retirement-calculator`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/tax-calculator`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/investment-calculator`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/inflation-calculator`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/quiz`, lastModified: now, priority: 0.8 },
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
    ...loanScenarios.map((s) => ({
      url: `${BASE}/loan-calculator/${s.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...salaryScenarios.map((s) => ({
      url: `${BASE}/salary-calculator/${s.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...taxScenarios.map((s) => ({
      url: `${BASE}/tax-calculator/${s.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...carScenarios.map((s) => ({
      url: `${BASE}/car-calculator/${s.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...retirementScenarios.map((s) => ({
      url: `${BASE}/retirement-calculator/${s.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...inflationPages.map((p) => ({
      url: `${BASE}/inflation-calculator/${p.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...investmentScenarios.map((s) => ({
      url: `${BASE}/investment-calculator/${s.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
