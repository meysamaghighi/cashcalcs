export type BillingCycle = "weekly" | "monthly" | "yearly";

export interface Subscription {
  id: string;
  name: string;
  cost: number;
  cycle: BillingCycle;
  category: SubscriptionCategory;
}

export type SubscriptionCategory =
  | "streaming"
  | "music"
  | "productivity"
  | "gaming"
  | "fitness"
  | "news"
  | "cloud"
  | "food"
  | "other";

export const subscriptionCategories: {
  key: SubscriptionCategory;
  label: string;
  color: string;
}[] = [
  { key: "streaming", label: "Streaming", color: "bg-red-500" },
  { key: "music", label: "Music", color: "bg-pink-500" },
  { key: "productivity", label: "Productivity", color: "bg-blue-500" },
  { key: "gaming", label: "Gaming", color: "bg-purple-500" },
  { key: "fitness", label: "Fitness", color: "bg-green-500" },
  { key: "news", label: "News & Media", color: "bg-amber-500" },
  { key: "cloud", label: "Cloud & Storage", color: "bg-cyan-500" },
  { key: "food", label: "Food & Delivery", color: "bg-orange-500" },
  { key: "other", label: "Other", color: "bg-gray-500" },
];

export function toMonthly(cost: number, cycle: BillingCycle): number {
  if (cycle === "weekly") return cost * 52 / 12;
  if (cycle === "yearly") return cost / 12;
  return cost;
}

export function toYearly(cost: number, cycle: BillingCycle): number {
  if (cycle === "weekly") return cost * 52;
  if (cycle === "monthly") return cost * 12;
  return cost;
}

export interface SubscriptionResult {
  totalMonthly: number;
  totalYearly: number;
  categoryBreakdown: { category: string; color: string; monthly: number }[];
  costPerDay: number;
  subscriptionCount: number;
}

export function calculateSubscriptions(
  subs: Subscription[]
): SubscriptionResult {
  const totalMonthly = subs.reduce(
    (sum, s) => sum + toMonthly(s.cost, s.cycle),
    0
  );
  const totalYearly = subs.reduce(
    (sum, s) => sum + toYearly(s.cost, s.cycle),
    0
  );

  const categoryBreakdown = subscriptionCategories
    .map((cat) => {
      const monthly = subs
        .filter((s) => s.category === cat.key)
        .reduce((sum, s) => sum + toMonthly(s.cost, s.cycle), 0);
      return { category: cat.label, color: cat.color, monthly };
    })
    .filter((b) => b.monthly > 0);

  return {
    totalMonthly,
    totalYearly,
    categoryBreakdown,
    costPerDay: totalYearly / 365,
    subscriptionCount: subs.length,
  };
}

export function formatCurrency(amount: number): string {
  return "$" + amount.toFixed(2);
}

export interface SubscriptionPreset {
  slug: string;
  name: string;
  description: string;
  content: string;
  defaultSubs: Omit<Subscription, "id">[];
  seoTitle: string;
  seoDescription: string;
}

export const subscriptionPresets: SubscriptionPreset[] = [
  {
    slug: "average-american",
    name: "Average American",
    description:
      "How much does the average American spend on subscriptions per month?",
    content:
      "The average American spends $219 per month on subscriptions, according to recent surveys. Many people underestimate their spending by 2-3x because subscriptions are easy to forget about. Common subscriptions include streaming services ($15-20 each), music ($10-15), cloud storage ($3-10), and gym memberships ($30-60). The key is awareness: once you see the total, you can decide what is worth keeping.",
    defaultSubs: [
      { name: "Netflix", cost: 15.49, cycle: "monthly", category: "streaming" },
      { name: "Spotify", cost: 11.99, cycle: "monthly", category: "music" },
      { name: "Amazon Prime", cost: 139, cycle: "yearly", category: "streaming" },
      { name: "Disney+", cost: 13.99, cycle: "monthly", category: "streaming" },
      { name: "YouTube Premium", cost: 13.99, cycle: "monthly", category: "streaming" },
      { name: "iCloud+", cost: 2.99, cycle: "monthly", category: "cloud" },
      { name: "Gym Membership", cost: 40, cycle: "monthly", category: "fitness" },
      { name: "ChatGPT Plus", cost: 20, cycle: "monthly", category: "productivity" },
      { name: "Adobe Creative Cloud", cost: 54.99, cycle: "monthly", category: "productivity" },
    ],
    seoTitle: "Average American Subscription Spending Calculator",
    seoDescription:
      "See how the average American spends $219/month on subscriptions. Compare your spending and find subscriptions to cut.",
  },
  {
    slug: "cord-cutter",
    name: "Cord Cutter",
    description:
      "Tracking streaming costs after cutting cable to see if you are really saving.",
    content:
      "Many cord cutters discover they are spending almost as much on streaming services as they did on cable. With Netflix, Hulu, Disney+, HBO Max, and others each costing $10-20/month, the total can quickly reach $80-100+. The key advantage over cable is flexibility: you can rotate services month to month, subscribing only when a show you want is available.",
    defaultSubs: [
      { name: "Netflix", cost: 15.49, cycle: "monthly", category: "streaming" },
      { name: "Hulu", cost: 17.99, cycle: "monthly", category: "streaming" },
      { name: "Disney+", cost: 13.99, cycle: "monthly", category: "streaming" },
      { name: "HBO Max", cost: 15.99, cycle: "monthly", category: "streaming" },
      { name: "Apple TV+", cost: 9.99, cycle: "monthly", category: "streaming" },
      { name: "Peacock", cost: 7.99, cycle: "monthly", category: "streaming" },
    ],
    seoTitle: "Cord Cutter Subscription Cost Calculator",
    seoDescription:
      "Track your streaming costs after cutting cable. See your total monthly spend on Netflix, Hulu, Disney+, and more.",
  },
  {
    slug: "student-budget",
    name: "Student Budget",
    description:
      "Common subscriptions for college students and how to minimize costs.",
    content:
      "College students spend an average of $100-150/month on subscriptions. Many services offer student discounts: Spotify and Hulu bundle for $5.99, Amazon Prime Student is $7.49/month, Apple Music is $5.99. GitHub, Notion, and Figma offer free plans for students. Before paying full price, always check if a student discount exists.",
    defaultSubs: [
      { name: "Spotify + Hulu (Student)", cost: 5.99, cycle: "monthly", category: "music" },
      { name: "Amazon Prime Student", cost: 7.49, cycle: "monthly", category: "streaming" },
      { name: "Netflix (Basic)", cost: 6.99, cycle: "monthly", category: "streaming" },
      { name: "iCloud+ (50GB)", cost: 0.99, cycle: "monthly", category: "cloud" },
      { name: "Gym (Student Rate)", cost: 25, cycle: "monthly", category: "fitness" },
      { name: "ChatGPT Plus", cost: 20, cycle: "monthly", category: "productivity" },
    ],
    seoTitle: "Student Subscription Budget Calculator",
    seoDescription:
      "Track student subscriptions and find discounts. See how much you spend monthly on streaming, music, and tools.",
  },
  {
    slug: "family-plan",
    name: "Family Plan",
    description:
      "Total cost of family subscriptions and how to optimize with family plans.",
    content:
      "Families often spend $300-500/month on subscriptions across all members. Family plans can save 40-60%: Spotify Family ($16.99 for 6 people vs $11.99 each), Apple One Family ($22.95 for Apple Music, TV+, Arcade, iCloud), YouTube Premium Family ($22.99 for 5 people). The biggest savings come from consolidating individual subscriptions into family tiers.",
    defaultSubs: [
      { name: "Netflix (Premium)", cost: 22.99, cycle: "monthly", category: "streaming" },
      { name: "Spotify Family", cost: 16.99, cycle: "monthly", category: "music" },
      { name: "YouTube Premium Family", cost: 22.99, cycle: "monthly", category: "streaming" },
      { name: "Disney+ (No Ads)", cost: 13.99, cycle: "monthly", category: "streaming" },
      { name: "Amazon Prime", cost: 139, cycle: "yearly", category: "streaming" },
      { name: "Apple One Family", cost: 22.95, cycle: "monthly", category: "cloud" },
      { name: "Family Gym", cost: 80, cycle: "monthly", category: "fitness" },
      { name: "Costco", cost: 65, cycle: "yearly", category: "food" },
    ],
    seoTitle: "Family Subscription Cost Calculator",
    seoDescription:
      "Track total family subscription costs. See how much your household spends monthly and find savings with family plans.",
  },
  {
    slug: "digital-nomad",
    name: "Digital Nomad",
    description:
      "Essential subscriptions for remote workers and digital nomads.",
    content:
      "Digital nomads typically spend $150-300/month on essential subscriptions: VPN ($5-10), cloud storage ($10-20), productivity tools ($20-50), communication ($0-15), and entertainment ($30-60). The most important investment is a reliable VPN and good internet tools. Many nomads also pay for coworking space passes ($100-200/month) and travel insurance.",
    defaultSubs: [
      { name: "NordVPN", cost: 59.88, cycle: "yearly", category: "productivity" },
      { name: "Google Workspace", cost: 7.20, cycle: "monthly", category: "productivity" },
      { name: "Notion", cost: 10, cycle: "monthly", category: "productivity" },
      { name: "Slack Pro", cost: 8.75, cycle: "monthly", category: "productivity" },
      { name: "Spotify", cost: 11.99, cycle: "monthly", category: "music" },
      { name: "Netflix", cost: 15.49, cycle: "monthly", category: "streaming" },
      { name: "iCloud+ (200GB)", cost: 2.99, cycle: "monthly", category: "cloud" },
      { name: "World Nomads Insurance", cost: 150, cycle: "monthly", category: "other" },
    ],
    seoTitle: "Digital Nomad Subscription Cost Calculator",
    seoDescription:
      "Track essential digital nomad subscriptions. See monthly costs for VPN, tools, streaming, and insurance.",
  },
  {
    slug: "minimalist",
    name: "Minimalist",
    description:
      "The bare essentials: what subscriptions do you actually need?",
    content:
      "A minimalist subscription budget focuses on services you use daily. Most people only need 2-3 subscriptions: one streaming service (rotate monthly), one music service, and cloud backup. Everything else is optional. The goal is not zero subscriptions, but conscious spending. Ask yourself: did I use this in the last 7 days? If not, cancel it.",
    defaultSubs: [
      { name: "Spotify", cost: 11.99, cycle: "monthly", category: "music" },
      { name: "Netflix", cost: 15.49, cycle: "monthly", category: "streaming" },
      { name: "iCloud+ (50GB)", cost: 0.99, cycle: "monthly", category: "cloud" },
    ],
    seoTitle: "Minimalist Subscription Budget Calculator",
    seoDescription:
      "See how little you can spend on subscriptions. Calculate the true cost of a minimalist approach to digital services.",
  },
  {
    slug: "gamer",
    name: "Gamer",
    description:
      "Total cost of gaming subscriptions: Game Pass, PS Plus, Switch Online, and more.",
    content:
      "Gaming subscriptions have exploded in recent years. Xbox Game Pass Ultimate ($16.99/month), PlayStation Plus Premium ($17.99/month), and Nintendo Switch Online ($3.99/month) can quickly add up. Add in streaming, Discord Nitro, and gaming-related YouTube/Twitch subscriptions, and many gamers spend $50-100+/month. Game Pass and PS Plus can save money vs buying games individually if you play 2+ new games per month.",
    defaultSubs: [
      { name: "Xbox Game Pass Ultimate", cost: 16.99, cycle: "monthly", category: "gaming" },
      { name: "PlayStation Plus Premium", cost: 17.99, cycle: "monthly", category: "gaming" },
      { name: "Nintendo Switch Online", cost: 3.99, cycle: "monthly", category: "gaming" },
      { name: "Discord Nitro", cost: 9.99, cycle: "monthly", category: "gaming" },
      { name: "Twitch Sub (x2)", cost: 11.98, cycle: "monthly", category: "streaming" },
      { name: "Spotify", cost: 11.99, cycle: "monthly", category: "music" },
      { name: "Netflix", cost: 15.49, cycle: "monthly", category: "streaming" },
    ],
    seoTitle: "Gamer Subscription Cost Calculator",
    seoDescription:
      "Track all your gaming subscriptions. See total monthly cost for Game Pass, PS Plus, Switch Online, and more.",
  },
  {
    slug: "freelancer-tools",
    name: "Freelancer Tools",
    description:
      "Essential paid tools for freelancers and their total monthly cost.",
    content:
      "Freelancers often spend $100-300/month on tools: project management ($0-25), design tools ($20-55), accounting ($15-30), communication ($0-15), and cloud storage ($3-20). These are tax-deductible business expenses. The key is avoiding tool overlap: do not pay for both Notion and Asana, or both Dropbox and Google Drive. Audit your tools quarterly.",
    defaultSubs: [
      { name: "Adobe Creative Cloud", cost: 54.99, cycle: "monthly", category: "productivity" },
      { name: "Figma Pro", cost: 15, cycle: "monthly", category: "productivity" },
      { name: "Notion", cost: 10, cycle: "monthly", category: "productivity" },
      { name: "QuickBooks", cost: 30, cycle: "monthly", category: "productivity" },
      { name: "Zoom Pro", cost: 13.33, cycle: "monthly", category: "productivity" },
      { name: "Google Workspace", cost: 7.20, cycle: "monthly", category: "cloud" },
      { name: "Canva Pro", cost: 12.99, cycle: "monthly", category: "productivity" },
      { name: "Grammarly Premium", cost: 12, cycle: "monthly", category: "productivity" },
    ],
    seoTitle: "Freelancer Tool Subscription Calculator",
    seoDescription:
      "Track freelancer tool costs. See total monthly spending on Adobe, Figma, accounting, and productivity subscriptions.",
  },
];

export function getPresetBySlug(
  slug: string
): SubscriptionPreset | undefined {
  return subscriptionPresets.find((p) => p.slug === slug);
}
