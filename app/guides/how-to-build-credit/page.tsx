import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Build Credit from Scratch: Step-by-Step Guide | CashCalcs",
  description:
    "Learn how to build credit from scratch with no credit history. Proven strategies including secured cards, credit builder loans, authorized user status, and responsible credit habits.",
  keywords: [
    "how to build credit",
    "build credit from scratch",
    "no credit history",
    "credit score tips",
    "secured credit card",
    "credit builder loan",
    "improve credit score",
    "establish credit",
  ],
  openGraph: {
    title: "How to Build Credit from Scratch: Step-by-Step Guide",
    description:
      "Learn how to build credit from scratch with no credit history. Proven strategies including secured cards, credit builder loans, and responsible credit habits.",
    type: "article",
  },
};

export default function HowToBuildCredit() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Financial Guides</Link>
          {" > "}
          <span className="text-gray-900">How to Build Credit</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How to Build Credit from Scratch: Step-by-Step Guide
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Building credit from zero takes patience, but it is simpler than you think.
          Whether you are starting fresh, rebuilding after mistakes, or establishing
          credit as a young adult, these proven strategies will get you to a strong
          credit score within 6-12 months.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Why Credit Matters
            </h2>
            <p className="text-gray-700 mb-4">
              Your credit score affects nearly every major financial decision:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Lower interest rates.</strong> A 720+ score can save you $50,000+
                in interest on a mortgage compared to a 620 score.
              </li>
              <li>
                <strong>Rental approvals.</strong> Landlords check credit. Bad credit
                means denied applications or higher deposits.
              </li>
              <li>
                <strong>Job opportunities.</strong> Some employers check credit for
                finance, government, or management positions.
              </li>
              <li>
                <strong>Better credit cards.</strong> Access rewards cards with 2-5%
                cashback, travel perks, and sign-up bonuses worth $500-1,000.
              </li>
              <li>
                <strong>Insurance premiums.</strong> Many insurers use credit-based
                insurance scores. Better credit = lower car and home insurance rates.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How Credit Scores Are Calculated
            </h2>
            <p className="text-gray-700 mb-4">
              Understanding what affects your score helps you build it faster. FICO
              scores (300-850) are based on five factors:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Factor</th>
                    <th className="text-center py-3 text-gray-900">Weight</th>
                    <th className="text-left py-3 text-gray-900">What It Means</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">Payment History</td>
                    <td className="text-center">35%</td>
                    <td>On-time vs. late payments</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Credit Utilization</td>
                    <td className="text-center">30%</td>
                    <td>% of credit limit used</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Credit Age</td>
                    <td className="text-center">15%</td>
                    <td>Length of credit history</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Credit Mix</td>
                    <td className="text-center">10%</td>
                    <td>Variety of accounts</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">New Credit</td>
                    <td className="text-center">10%</td>
                    <td>Recent credit inquiries</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 1: Get Your First Credit Account
            </h2>
            <p className="text-gray-700 mb-4">
              You cannot build credit without credit. Here are the easiest ways to
              start when you have no credit history:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Secured Credit Card",
                  desc: "Deposit $200-500 as collateral, get a credit card with that limit. Use it for small purchases, pay in full monthly. After 6-12 months, upgrade to unsecured card and get deposit back. Best starter option for most people.",
                  example: "Discover It Secured, Capital One Secured Mastercard",
                },
                {
                  title: "Credit Builder Loan",
                  desc: "Borrow $300-1,000 but funds are held in savings. Make monthly payments for 12-24 months, then receive the money. Builds credit while forcing savings. Available from credit unions and online lenders.",
                  example: "Self, Credit Strong, local credit unions",
                },
                {
                  title: "Become an Authorized User",
                  desc: "Ask a parent or spouse to add you to their credit card as authorized user. Their payment history and credit age transfer to your report. Instant credit boost if they have good history. No risk if you do not use the card.",
                },
                {
                  title: "Student Credit Card",
                  desc: "If you are in college, student cards have easier approval. Lower limits ($500-1,000) but build credit the same way. Many offer cashback or rewards.",
                  example: "Discover It Student, Capital One SavorOne Student",
                },
              ].map((method, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{method.desc}</p>
                  {method.example && (
                    <p className="text-xs text-gray-500 italic">Examples: {method.example}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 2: Use Credit Responsibly
            </h2>
            <p className="text-gray-700 mb-4">
              Getting credit is step one. Using it wisely is how you actually build
              a strong score.
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Pay on time, every time.</strong> Set up autopay for at least
                the minimum payment. Payment history is 35% of your score. One late
                payment can drop your score 60-100 points.
              </li>
              <li>
                <strong>Keep utilization under 30%.</strong> If your limit is $500, keep
                balance under $150. Under 10% is ideal. High utilization tanks your score
                even if you pay on time.
              </li>
              <li>
                <strong>Pay in full monthly.</strong> Avoid interest charges. Credit
                cards charge 20-30% APR. Carrying a balance costs money and does not
                improve your score faster.
              </li>
              <li>
                <strong>Use your card regularly.</strong> Inactive accounts may be closed
                by the issuer. Use it for 1-2 small purchases per month (gas, groceries)
                and pay immediately.
              </li>
              <li>
                <strong>Set up payment reminders.</strong> Use calendar alerts or app
                notifications 3-5 days before due date. Never miss a payment.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 3: Build Credit Faster
            </h2>
            <p className="text-gray-700 mb-4">
              Once you have your first account, these strategies accelerate credit
              building:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Report rent and utility payments.</strong> Services like Experian
                Boost, RentReporters, or Rental Kharma add rent, phone, and utility
                payments to your credit report. Instant score boost if you have been
                paying on time.
              </li>
              <li>
                <strong>Request credit limit increases.</strong> After 6-12 months of
                on-time payments, request a limit increase. Higher limits lower utilization
                even if spending stays the same. Do not request too often (once per year max).
              </li>
              <li>
                <strong>Add a second credit account.</strong> After 6 months, apply for
                a second card or credit builder loan. Multiple accounts with good history
                build credit faster. Space applications 6+ months apart.
              </li>
              <li>
                <strong>Diversify credit mix.</strong> Having both revolving credit (cards)
                and installment loans (car, personal loan) boosts your score. Not urgent,
                but helps long-term.
              </li>
              <li>
                <strong>Monitor your credit.</strong> Use free services like Credit Karma,
                Experian, or your bank's free credit score. Check monthly for errors,
                fraud, and progress.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Common Credit Building Mistakes
            </h2>
            <p className="text-gray-700 mb-4">
              Avoid these pitfalls that slow progress or hurt your score:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Applying for too many cards at once.</strong> Each application
                is a hard inquiry that lowers your score 5-10 points. Too many inquiries
                in 6 months signals risk to lenders.
              </li>
              <li>
                <strong>Closing old accounts.</strong> Closing your first credit card
                reduces credit age and total available credit (raises utilization). Keep
                old accounts open even if you do not use them.
              </li>
              <li>
                <strong>Maxing out cards.</strong> Using 90-100% of your limit tanks
                your score even if you pay on time. Keep balances low or pay multiple
                times per month.
              </li>
              <li>
                <strong>Co-signing for others.</strong> If they miss payments, your
                credit suffers. Only co-sign if you are willing to make payments yourself.
              </li>
              <li>
                <strong>Ignoring errors.</strong> 1 in 5 credit reports has errors.
                Dispute incorrect late payments, accounts you did not open, or wrong
                balances at annualcreditreport.com.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Timeline: What to Expect
            </h2>
            <p className="text-gray-700 mb-4">
              Building credit takes time, but you will see progress within months:
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 mb-1">Month 1-3: First Account Opens</h3>
                <p className="text-sm text-gray-700">
                  Secured card or credit builder loan appears on report. Score may start
                  at 620-680 with one account and no missed payments.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-1">Month 6: Visible Progress</h3>
                <p className="text-sm text-gray-700">
                  6 months of on-time payments boosts score to 680-720. Utilization under
                  30%. Ready to apply for second card or request limit increase.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 mb-1">Month 12: Established Credit</h3>
                <p className="text-sm text-gray-700">
                  12 months of perfect payments, 2-3 accounts, utilization under 10% =
                  720-760 score. Eligible for rewards cards, better loan rates.
                </p>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 mb-1">Year 2+: Strong Credit</h3>
                <p className="text-sm text-gray-700">
                  Continued responsible use pushes score to 760-800+. Access to premium
                  cards, lowest interest rates, best terms on mortgages and loans.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Plan Your Financial Future</h2>
            <p className="text-gray-400 mb-4">Use our free calculators to manage debt, plan loans, and track financial progress.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/loan-calculator" className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">Loan Calculator</Link>
              <Link href="/debt-payoff" className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-colors">Debt Payoff</Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/loan-calculator"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors text-lg"
          >
            Calculate Loan Payments
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Build Credit from Scratch: Step-by-Step Guide",
            description: "Learn how to build credit from scratch with no credit history. Proven strategies including secured cards, credit builder loans, and responsible credit habits.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/how-to-build-credit",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "CashCalcs", item: "https://cashcalcs.com" },
              { "@type": "ListItem", position: 2, name: "Guides", item: "https://cashcalcs.com/guides" },
              { "@type": "ListItem", position: 3, name: "How to Build Credit" },
            ],
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
                name: "How long does it take to build credit from scratch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Building credit from zero takes 6-12 months to reach a good score (680-720). Open a secured credit card or credit builder loan, make on-time payments, keep utilization under 30%, and your score will grow. After 12 months of responsible use with 2-3 accounts, you can reach 720-760."
                }
              },
              {
                "@type": "Question",
                name: "What is the fastest way to build credit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The fastest way to build credit: 1) Become an authorized user on someone's good account (instant history), 2) Open a secured credit card and use it monthly with on-time payments, 3) Report rent/utility payments via Experian Boost, 4) Keep utilization under 10%, 5) Never miss a payment. This combination can build a 700+ score in 6-9 months."
                }
              },
              {
                "@type": "Question",
                name: "Do I need to carry a balance to build credit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, carrying a balance does not build credit faster and wastes money on interest. Credit cards report to bureaus whether you carry a balance or not. The myth is common but false. Pay your statement balance in full every month to build credit without paying 20-30% APR interest."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
