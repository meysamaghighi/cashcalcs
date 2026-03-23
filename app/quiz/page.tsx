import type { Metadata } from "next";
import FinancialQuiz from "../components/FinancialQuiz";

export const metadata: Metadata = {
  title: "Financial Health Quiz - How Healthy Are Your Finances? | CashCalcs",
  description:
    "Take our free 10-question financial health quiz. Get a personalized score across saving, budgeting, debt, investing, and protection with actionable recommendations.",
  keywords: [
    "financial health quiz",
    "money quiz",
    "personal finance quiz",
    "financial literacy test",
    "financial wellness quiz",
    "am I good with money",
    "financial health score",
    "money management quiz",
  ],
  openGraph: {
    title: "Financial Health Quiz - How Healthy Are Your Finances? | CashCalcs",
    description:
      "Take our free 10-question financial health quiz. Get a personalized score across saving, budgeting, debt, investing, and protection with actionable recommendations.",
    type: "website",
  },
};

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-2xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Financial Health{" "}
          <span className="text-emerald-600">Quiz</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          10 questions. 2 minutes. Find out how healthy your finances really are.
        </p>
        <p className="text-sm text-gray-400">
          Free and anonymous. No email required.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 pb-12">
        <FinancialQuiz />
      </div>

      <section className="max-w-2xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What This Quiz Measures
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { label: "Saving", desc: "Emergency fund and savings habits", icon: "🏦" },
            { label: "Budgeting", desc: "Tracking spending and setting goals", icon: "📊" },
            { label: "Debt", desc: "Managing and reducing debt", icon: "💳" },
            { label: "Investing", desc: "Growing wealth for the future", icon: "📈" },
            { label: "Protection", desc: "Insurance and safety nets", icon: "🛡" },
          ].map((cat) => (
            <div
              key={cat.label}
              className="bg-white rounded-xl shadow-sm p-4 text-center"
            >
              <p className="text-2xl mb-1">{cat.icon}</p>
              <p className="font-bold text-gray-900 text-sm">{cat.label}</p>
              <p className="text-xs text-gray-500">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Grading Scale
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm">
            <thead>
              <tr className="border-b text-left text-gray-500">
                <th className="p-4">Grade</th>
                <th className="p-4">Score</th>
                <th className="p-4">What It Means</th>
              </tr>
            </thead>
            <tbody>
              {[
                { grade: "A", range: "85-100%", color: "text-emerald-600", meaning: "Excellent financial health — you are ahead of most people" },
                { grade: "B", range: "70-84%", color: "text-blue-600", meaning: "Solid foundation with room to optimize" },
                { grade: "C", range: "50-69%", color: "text-amber-600", meaning: "Some good habits but significant gaps remain" },
                { grade: "D", range: "30-49%", color: "text-orange-600", meaning: "Needs attention — focus on basics first" },
                { grade: "F", range: "0-29%", color: "text-rose-600", meaning: "Fresh start needed — small steps make a big difference" },
              ].map((row) => (
                <tr key={row.grade} className="border-b border-gray-50">
                  <td className={`p-4 font-black text-xl ${row.color}`}>{row.grade}</td>
                  <td className="p-4 font-medium text-gray-900">{row.range}</td>
                  <td className="p-4 text-gray-700">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-12">
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Is this quiz accurate?</h3>
            <p className="text-gray-700 text-sm">This quiz provides a general assessment of your financial habits across five key areas. It is not a substitute for professional financial advice, but it highlights strengths and areas for improvement.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">How can I improve my score?</h3>
            <p className="text-gray-700 text-sm">Focus on your lowest-scoring category first. Each result includes specific recommendations and links to our free calculators to help you take action.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-2">Is my data saved anywhere?</h3>
            <p className="text-gray-700 text-sm">No. This quiz runs entirely in your browser. We do not collect, store, or transmit your answers or results. Your financial information stays private.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://cashcalcs.com" },
              { "@type": "ListItem", position: 2, name: "Financial Health Quiz", item: "https://cashcalcs.com/quiz" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Financial Health Quiz",
            description:
              "Free 10-question financial health quiz with personalized score and recommendations.",
            url: "https://cashcalcs.com/quiz",
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
                name: "Is this financial health quiz accurate?",
                acceptedAnswer: { "@type": "Answer", text: "This quiz provides a general assessment across five key areas: saving, budgeting, debt, investing, and protection. It highlights strengths and areas for improvement." },
              },
              {
                "@type": "Question",
                name: "How can I improve my financial health score?",
                acceptedAnswer: { "@type": "Answer", text: "Focus on your lowest-scoring category first. Each result includes specific recommendations and links to free calculators." },
              },
              {
                "@type": "Question",
                name: "Is my quiz data saved anywhere?",
                acceptedAnswer: { "@type": "Answer", text: "No. The quiz runs entirely in your browser. No data is collected, stored, or transmitted." },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
