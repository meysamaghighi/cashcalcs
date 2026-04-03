import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Negotiate Your Salary: Step-by-Step Guide | CashCalcs",
  description:
    "Learn how to negotiate your salary like a pro. Research market rates, build your case, handle counteroffers, and avoid common mistakes. Proven strategies that get results.",
  keywords: [
    "how to negotiate salary",
    "salary negotiation tips",
    "negotiate job offer",
    "ask for a raise",
    "salary negotiation script",
    "negotiate starting salary",
    "counteroffer salary",
    "salary research",
  ],
  openGraph: {
    title: "How to Negotiate Your Salary: Step-by-Step Guide",
    description:
      "Learn how to negotiate your salary like a pro. Research market rates, build your case, and handle counteroffers with confidence.",
    type: "article",
  },
};

export default function HowToNegotiateSalary() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Financial Guides</Link>
          {" > "}
          <span className="text-gray-900">How to Negotiate Salary</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          How to Negotiate Your Salary: Step-by-Step Guide
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Salary negotiation is the fastest way to earn more money. A single 10%
          negotiation on a $60,000 offer is $6,000 per year -- $60,000+ over a decade.
          Yet 60% of workers never negotiate. Here is how to do it right.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Why You Must Negotiate
            </h2>
            <p className="text-gray-700 mb-4">
              Employers expect negotiation. First offers are rarely the best offers.
              Here is what you gain by negotiating:
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-emerald-800 mb-2">Example: $60K vs $66K Over 10 Years</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Year 1: $6,000 more ($66K vs $60K)</li>
                <li>With 3% annual raises, Year 10 salary: $88,633 vs $80,576</li>
                <li>Total earnings over 10 years: $756,093 vs $687,357</li>
                <li><strong className="text-emerald-800">Difference: $68,736 from one 10-minute negotiation</strong></li>
              </ul>
            </div>
            <p className="text-gray-700 mt-4">
              Every raise, promotion, and bonus builds on your starting salary. A low
              starting point costs you hundreds of thousands over your career.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 1: Research Market Rates
            </h2>
            <p className="text-gray-700 mb-4">
              You cannot negotiate without data. Know what your role pays in your
              location before the conversation starts.
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Use salary research sites.</strong> Glassdoor, Payscale, Levels.fyi
                (tech), Salary.com, and LinkedIn Salary show ranges by job title, location,
                and experience. Aim for the 50th-75th percentile.
              </li>
              <li>
                <strong>Ask your network.</strong> Reach out to people in similar roles
                on LinkedIn. Most professionals will share salary ranges if asked privately.
                Real data beats online averages.
              </li>
              <li>
                <strong>Check job postings.</strong> Some states require salary ranges
                in postings (CA, CO, NY, WA). Look at 10-20 similar jobs to find the range.
              </li>
              <li>
                <strong>Factor in cost of living.</strong> $80K in Austin is worth more
                than $80K in San Francisco. Use cost of living calculators to adjust
                expectations for high-cost cities.
              </li>
              <li>
                <strong>Account for experience.</strong> Entry-level, 2-5 years, 5-10 years,
                and senior roles have different ranges. Be honest about your experience level.
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              Use our{" "}
              <Link href="/salary-calculator" className="text-purple-600 font-medium hover:underline">
                salary calculator
              </Link>{" "}
              to see take-home pay after taxes for different offer amounts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 2: Build Your Case
            </h2>
            <p className="text-gray-700 mb-4">
              Negotiation is not about what you want. It is about what value you bring.
              Prepare evidence of your worth:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Quantify your achievements",
                  desc: "Do not say 'I am a hard worker.' Say 'I increased sales 25%, saved the company $50K, or managed a team of 10.' Numbers prove impact.",
                },
                {
                  title: "Highlight unique skills",
                  desc: "Certifications, technical skills, language fluency, or niche expertise that few candidates have. Rare skills justify higher pay.",
                },
                {
                  title: "Show market data",
                  desc: "Reference salary research. 'Based on Glassdoor and Payscale, the median for this role in [city] is $75-85K.' Data removes emotion.",
                },
                {
                  title: "Mention competing offers",
                  desc: "If you have other offers, mention them without naming companies. 'I have another offer at $70K but prefer your company.' Creates urgency.",
                },
                {
                  title: "Reference internal equity",
                  desc: "If you know peers at the company earn more for similar work, mention it carefully. 'I understand similar roles here pay $X-Y range.'",
                },
              ].map((tip, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-gray-700 text-sm">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 3: When to Negotiate
            </h2>
            <p className="text-gray-700 mb-4">
              Timing matters. Negotiate at the right moment to maximize success:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>After the offer, before acceptance.</strong> Once they make an
                offer, they want you. You have maximum leverage. Never negotiate before
                an offer -- you have no leverage yet.
              </li>
              <li>
                <strong>Wait for them to give a number first.</strong> If asked about
                salary expectations early, deflect: 'I would like to learn more about
                the role first. What is the budget for this position?' Anchor high if
                forced to answer.
              </li>
              <li>
                <strong>For raises: after big wins.</strong> Negotiate raises after
                completing major projects, exceeding goals, or taking on new responsibilities.
                Tie the request to recent value delivered.
              </li>
              <li>
                <strong>Annual review cycle.</strong> Most companies do raises during
                annual reviews. Prepare your case 1-2 months in advance and schedule
                a conversation with your manager.
              </li>
              <li>
                <strong>Not during the interview.</strong> Focus on fit and showcasing
                skills during interviews. Save salary talk for after the offer.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Step 4: The Negotiation Script
            </h2>
            <p className="text-gray-700 mb-4">
              Here is a proven framework for the actual conversation:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 space-y-4">
              <div>
                <p className="font-bold text-blue-800 mb-1">1. Express enthusiasm</p>
                <p className="text-sm text-gray-700 italic">
                  "Thank you for the offer! I am excited about this role and the opportunity
                  to contribute to [company/team]."
                </p>
              </div>
              <div>
                <p className="font-bold text-blue-800 mb-1">2. Present your case</p>
                <p className="text-sm text-gray-700 italic">
                  "Based on my research and [specific value/skills/experience], I was
                  expecting a salary in the range of [X-Y]. Is there flexibility to move
                  closer to [target number]?"
                </p>
              </div>
              <div>
                <p className="font-bold text-blue-800 mb-1">3. Stay silent and listen</p>
                <p className="text-sm text-gray-700 italic">
                  Let them respond. Do not fill the silence. The first person to speak
                  often loses ground. Wait for their counteroffer or explanation.
                </p>
              </div>
              <div>
                <p className="font-bold text-blue-800 mb-1">4. Negotiate beyond salary</p>
                <p className="text-sm text-gray-700 italic">
                  If they cannot move on base salary, ask for: signing bonus, stock options,
                  extra PTO, remote work flexibility, earlier review for raise, or
                  professional development budget.
                </p>
              </div>
              <div>
                <p className="font-bold text-blue-800 mb-1">5. Close positively</p>
                <p className="text-sm text-gray-700 italic">
                  "I appreciate you working with me on this. If we can land at [final number]
                  or [alternative], I am ready to accept today."
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How Much Should You Ask For?
            </h2>
            <p className="text-gray-700 mb-4">
              The right number depends on your leverage, but these are safe ranges:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Situation</th>
                    <th className="text-center py-3 text-gray-900">Ask For</th>
                    <th className="text-left py-3 text-gray-900">Why</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">New job offer</td>
                    <td className="text-center">10-20%</td>
                    <td>Standard negotiation range</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Internal promotion</td>
                    <td className="text-center">10-15%</td>
                    <td>New responsibilities justify bump</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Annual raise</td>
                    <td className="text-center">5-10%</td>
                    <td>Above inflation, tied to performance</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Competing offer</td>
                    <td className="text-center">15-25%</td>
                    <td>Strong leverage from outside interest</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Market correction</td>
                    <td className="text-center">10-20%</td>
                    <td>You are underpaid vs. market</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Always ask for 10-15% more than your minimum acceptable number. Employers
              will negotiate down, so start high. The worst they can say is no.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Common Negotiation Mistakes
            </h2>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Accepting the first offer.</strong> Employers expect negotiation.
                Saying yes immediately signals you would have taken less. Always counter.
              </li>
              <li>
                <strong>Negotiating too early.</strong> Do not talk salary before they
                want to hire you. You have zero leverage before an offer.
              </li>
              <li>
                <strong>Giving a number first.</strong> Whoever names a number first
                loses. Deflect or anchor high if forced. Make them show their budget.
              </li>
              <li>
                <strong>Apologizing or sounding uncertain.</strong> 'I was hoping maybe
                we could discuss salary?' sounds weak. Be confident: 'Based on my research,
                I am targeting $X-Y for this role.'
              </li>
              <li>
                <strong>Negotiating over email only.</strong> Tone gets lost in text.
                Negotiate over phone or video call where you can read reactions and build
                rapport. Follow up in writing.
              </li>
              <li>
                <strong>Bluffing about other offers.</strong> Do not lie about competing
                offers. If they ask for details and you cannot provide them, you lose
                all credibility.
              </li>
              <li>
                <strong>Making it personal.</strong> 'I need more money for rent' is
                weak. Focus on value delivered and market data, not personal finances.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              What If They Say No?
            </h2>
            <p className="text-gray-700 mb-4">
              Rejection happens. Here is how to handle it:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Ask why.</strong> 'Can you help me understand what would need to
                change for us to reach [target]?' This uncovers if it is budget, performance,
                or policy.
              </li>
              <li>
                <strong>Negotiate other terms.</strong> If salary is fixed, ask for signing
                bonus, stock, extra PTO, or flexible work. Total compensation matters more
                than base salary alone.
              </li>
              <li>
                <strong>Request a timeline for review.</strong> 'Can we revisit this in
                6 months after I demonstrate value?' Get a commitment for future discussion.
              </li>
              <li>
                <strong>Accept or walk.</strong> If the offer is too low and they will not
                budge, you have two choices: accept and plan to leave in 1-2 years, or
                decline and keep searching.
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              Most employers will move at least 5-10%. If they refuse to negotiate at all,
              that is a red flag about company culture.
            </p>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">See Your Take-Home Pay</h2>
            <p className="text-gray-400 mb-4">Use our calculators to compare different salary offers and see after-tax income.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/salary-calculator" className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">Salary Calculator</Link>
              <Link href="/tax-calculator" className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors">Tax Calculator</Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/salary-calculator"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors text-lg"
          >
            Calculate Your Take-Home Pay
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Negotiate Your Salary: Step-by-Step Guide",
            description: "Learn how to negotiate your salary like a pro. Research market rates, build your case, and handle counteroffers with confidence.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/how-to-negotiate-salary",
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
              { "@type": "ListItem", position: 3, name: "How to Negotiate Salary" },
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
                name: "How much should I negotiate for salary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For new job offers, negotiate 10-20% above the initial offer. For annual raises, ask for 5-10% based on performance. For promotions, request 10-15%. Always research market rates first and aim for the 50th-75th percentile for your role, location, and experience. Ask for 10-15% more than your minimum acceptable number since employers will negotiate down."
                }
              },
              {
                "@type": "Question",
                name: "When should I negotiate my salary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Negotiate after receiving a formal offer, not during interviews. Once they make an offer, you have maximum leverage because they want you. For raises, negotiate after completing major projects or during annual review cycles. Never negotiate before an offer -- you have no leverage yet. Always let the employer name a number first."
                }
              },
              {
                "@type": "Question",
                name: "What if my salary negotiation is rejected?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If they say no to salary, negotiate other terms: signing bonus, stock options, extra PTO, remote work flexibility, or earlier performance review. Ask why they cannot meet your request and what would need to change. Request a timeline to revisit in 6 months. If they refuse to negotiate anything, consider it a red flag about company culture. You can accept and plan to leave in 1-2 years or decline the offer."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
