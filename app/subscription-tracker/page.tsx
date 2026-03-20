import type { Metadata } from "next";
import Link from "next/link";
import SubscriptionCalculator from "../components/SubscriptionCalculator";
import { subscriptionPresets } from "../lib/subscription-engine";
import RelatedCalculators from "../components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Subscription Tracker - See Your True Monthly Cost | CashCalcs",
  description:
    "Free subscription tracker. Add all your subscriptions to see total monthly and yearly cost, category breakdown, and savings potential.",
  keywords: [
    "subscription tracker",
    "subscription cost calculator",
    "how much do I spend on subscriptions",
    "subscription manager",
    "cancel subscriptions save money",
    "streaming cost calculator",
    "monthly subscription total",
  ],
  openGraph: {
    title: "Subscription Tracker - See Your True Monthly Cost | CashCalcs",
    description:
      "Free subscription tracker. Add all your subscriptions to see total monthly and yearly cost, category breakdown, and savings potential.",
    type: "website",
  },
};

export default function SubscriptionTrackerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Subscription{" "}
          <span className="text-rose-600">Tracker</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Add your subscriptions to see your true monthly cost.
          Find out where your money goes and what you could save.
        </p>
        <p className="text-sm text-gray-400">
          Free calculator. Your data never leaves your browser.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <SubscriptionCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Subscription Scenarios
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {subscriptionPresets.map((p) => (
            <Link
              key={p.slug}
              href={`/subscription-tracker/${p.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center"
            >
              <p className="font-bold text-gray-900 text-sm">{p.name}</p>
              <p className="text-xs text-gray-500 mt-1">
                {p.description.slice(0, 50)}...
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why Track Subscriptions?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-rose-600 mb-3">
              The Hidden Cost
            </h3>
            <p className="text-gray-700 text-sm">
              The average American spends $219/month on subscriptions but
              estimates only $86. That gap of $133/month is $1,596 per year
              going to services you may not even use regularly.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-rose-600 mb-3">
              Subscription Creep
            </h3>
            <p className="text-gray-700 text-sm">
              Services start cheap then raise prices. Netflix went from $8 to
              $15.49 in a few years. Each increase is small, but across 10+
              subscriptions, it adds up to hundreds more per year.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-rose-600 mb-3">
              The Audit Method
            </h3>
            <p className="text-gray-700 text-sm">
              Once a quarter, check each subscription: did I use this in the
              last 30 days? If not, cancel it. You can always resubscribe.
              Most people save $50-100/month this way.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-rose-600 mb-3">
              Invest the Savings
            </h3>
            <p className="text-gray-700 text-sm">
              Cutting $100/month in subscriptions and investing it at 8%
              returns grows to $18,295 in 10 years and $149,036 in 30 years.
              Small subscription savings compound into real wealth.
            </p>
          </div>
        </div>
      </section>

      <RelatedCalculators current="/subscription-tracker" />

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How much does the average person spend on subscriptions?</h3>
            <p className="text-gray-700 text-sm">The average American spends about $219 per month on subscriptions, according to C+R Research. This includes streaming services, music, software, gym memberships, and delivery services. Most people significantly underestimate their true spending.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What subscriptions should I cancel first?</h3>
            <p className="text-gray-700 text-sm">Start with subscriptions you have not used in the last 30 days. Then look for overlapping services (multiple streaming or music services). Finally, check if cheaper alternatives exist, like switching from premium to basic tiers or using free alternatives.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How can I find all my active subscriptions?</h3>
            <p className="text-gray-700 text-sm">Check your bank and credit card statements for the last 3 months and look for recurring charges. Also check your Apple App Store or Google Play subscriptions, and look in your email for renewal receipts. Many people discover forgotten subscriptions this way.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Subscription Tracker",
            description: "Free subscription tracker. See your total monthly cost and find savings.",
            url: "https://cashcalcs.com/subscription-tracker",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does the average person spend on subscriptions?",
                acceptedAnswer: { "@type": "Answer", text: "The average American spends about $219 per month on subscriptions. Most people significantly underestimate their true spending." },
              },
              {
                "@type": "Question",
                name: "What subscriptions should I cancel first?",
                acceptedAnswer: { "@type": "Answer", text: "Start with subscriptions you have not used in the last 30 days. Then look for overlapping services and check if cheaper alternatives exist." },
              },
              {
                "@type": "Question",
                name: "How can I find all my active subscriptions?",
                acceptedAnswer: { "@type": "Answer", text: "Check your bank and credit card statements for the last 3 months for recurring charges. Also check App Store and Google Play subscriptions." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
