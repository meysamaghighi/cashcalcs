import type { Metadata } from "next";
import Link from "next/link";
import SideHustleCalculator from "../components/SideHustleCalculator";
import { sideHustles, getAllCategories } from "../lib/side-hustles";

export const metadata: Metadata = {
  title: "Side Hustle Calculator - Best Side Hustles 2026 | CashCalcs",
  description:
    "Free side hustle calculator. Get personalized recommendations based on your hours and skills. 30+ side hustles with earnings.",
  keywords: [
    "side hustle",
    "side hustle calculator",
    "make extra money",
    "side hustle ideas",
    "best side hustles 2026",
    "how to make extra money",
    "passive income ideas",
    "freelance work",
    "gig economy",
  ],
};

export default function SideHustlePage() {
  const categories = getAllCategories();
  const topEarners = [...sideHustles]
    .sort((a, b) => (b.hourlyLow + b.hourlyHigh) / 2 - (a.hourlyLow + a.hourlyHigh) / 2)
    .slice(0, 10);

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Find Your Perfect{" "}
          <span className="text-emerald-600">Side Hustle</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Tell us your available hours, skills, and preferences. We will match
          you with the best side hustles and show exactly how much you can earn.
        </p>
        <p className="text-sm text-gray-400">
          30+ side hustles with real earning data and platform links
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <SideHustleCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Browse Side Hustles by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat) => {
            const count = sideHustles.filter((h) => h.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/side-hustle/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center"
              >
                <p className="font-bold text-gray-900">{cat}</p>
                <p className="text-sm text-gray-500">{count} hustles</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Top 10 Highest-Paying Side Hustles in 2026
        </h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold">#</th>
                  <th className="px-4 py-3 text-sm font-semibold">Side Hustle</th>
                  <th className="px-4 py-3 text-sm font-semibold">Hourly Rate</th>
                  <th className="px-4 py-3 text-sm font-semibold">Difficulty</th>
                  <th className="px-4 py-3 text-sm font-semibold">Startup Cost</th>
                </tr>
              </thead>
              <tbody>
                {topEarners.map((h, i) => (
                  <tr key={h.slug} className={`border-b ${i % 2 === 0 ? "bg-gray-50" : ""}`}>
                    <td className="px-4 py-3 font-bold text-emerald-600">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={`/side-hustle/${h.slug}`} className="font-medium text-gray-900 hover:text-emerald-600">
                        {h.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-700">${h.hourlyLow}-${h.hourlyHigh}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        h.difficulty === "Easy" ? "bg-green-100 text-green-800" :
                        h.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>{h.difficulty}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{h.startupCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Finding the Best Side Hustle in 2026
        </h2>
        <div className="max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            Whether you want to pay off debt, build an emergency fund, or reach
            financial independence, a side hustle can accelerate your goals. The
            gig economy in 2026 offers more options than ever, from traditional
            freelancing to app-based work to online businesses.
          </p>
          <p>
            The best side hustle for you depends on three factors: your available
            time, your existing skills, and your earning goals. Someone with 5
            hours a week and coding skills might earn more from a single
            freelance project than someone driving 20 hours for a rideshare app.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">What is the highest paying side hustle?</h3>
            <p className="text-gray-700 text-sm">Web development and software engineering consulting are among the highest paying side hustles, earning $50-$150+ per hour. Other high-paying options include data science consulting, UX design, and financial consulting. The best side hustle for you depends on your skills and available time.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How much can I realistically earn from a side hustle?</h3>
            <p className="text-gray-700 text-sm">Most side hustlers earn $500-$2,000 per month working 10-15 hours per week. Earnings vary widely based on the hustle type, your skill level, and time invested. Use our calculator above to get a personalized estimate based on your situation.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Do I need to pay taxes on side hustle income?</h3>
            <p className="text-gray-700 text-sm">Yes. In the US, you must report side hustle income if you earn $400 or more in a year. You may need to pay self-employment tax (15.3%) in addition to income tax. Keep records of all income and expenses, and consider making quarterly estimated tax payments.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Side Hustle Calculator",
            description: "Free side hustle calculator with 30+ side hustles and earnings estimates.",
            url: "https://cashcalcs.com/side-hustle",
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
                name: "What is the highest paying side hustle?",
                acceptedAnswer: { "@type": "Answer", text: "Web development and software engineering consulting are among the highest paying side hustles, earning $50-$150+ per hour. Other high-paying options include data science consulting, UX design, and financial consulting." },
              },
              {
                "@type": "Question",
                name: "How much can I realistically earn from a side hustle?",
                acceptedAnswer: { "@type": "Answer", text: "Most side hustlers earn $500-$2,000 per month working 10-15 hours per week. Earnings vary widely based on the hustle type, your skill level, and time invested." },
              },
              {
                "@type": "Question",
                name: "Do I need to pay taxes on side hustle income?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. In the US, you must report side hustle income if you earn $400 or more in a year. You may need to pay self-employment tax (15.3%) in addition to income tax." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
