import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is an ETF? A Beginner's Guide to Exchange-Traded Funds | CashCalcs",
  description:
    "Learn what ETFs are, how they work, and why they are the most popular investment for beginners. Compare ETFs vs mutual funds vs stocks with real examples and strategies.",
  keywords: [
    "what is an ETF",
    "exchange traded fund",
    "ETF for beginners",
    "ETF vs mutual fund",
    "index fund ETF",
    "best ETFs",
    "how to invest in ETFs",
    "passive investing",
  ],
  openGraph: {
    title: "What Is an ETF? A Beginner's Guide to Exchange-Traded Funds",
    description:
      "Learn what ETFs are, how they work, and why they are the most popular investment for beginners. Compare ETFs vs mutual funds vs stocks.",
    type: "article",
  },
  alternates: {
    canonical: "/guides/what-is-an-etf",
  },
};

export default function WhatIsAnETF() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          {" > "}
          <Link href="/guides" className="hover:text-gray-700">Financial Guides</Link>
          {" > "}
          <span className="text-gray-900">What Is an ETF</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          What Is an ETF? A Beginner's Guide to Exchange-Traded Funds
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Exchange-Traded Funds (ETFs) are the simplest, cheapest, and most popular
          way for beginners to invest in stocks, bonds, and other assets. If you have
          ever heard advice like "just buy an index fund," ETFs are what people mean.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              ETF Definition: The Simple Version
            </h2>
            <p className="text-gray-700 mb-4">
              An ETF is a basket of stocks, bonds, or other assets that trades on stock
              exchanges like a single stock. Instead of buying 500 individual stocks,
              you buy one ETF share that owns tiny pieces of all 500.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-emerald-800 mb-2">Example: S&P 500 ETF (SPY or VOO)</h3>
              <p className="text-sm text-gray-700 mb-2">
                When you buy one share of an S&P 500 ETF for $500, you own tiny fractions
                of all 500 companies: Apple, Microsoft, Amazon, Tesla, Google, and 495 others.
              </p>
              <p className="text-sm text-gray-700">
                If the S&P 500 goes up 10%, your ETF goes up 10%. You get instant
                diversification with one purchase.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How ETFs Work
            </h2>
            <p className="text-gray-700 mb-4">
              ETFs are managed by investment companies (Vanguard, BlackRock, Fidelity).
              They create the fund, buy the underlying assets, and handle rebalancing.
              You just buy shares on the stock market.
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Trade like stocks.</strong> Buy and sell ETF shares during market
                hours (9:30am-4pm ET) at real-time prices. No minimum investment beyond
                one share.
              </li>
              <li>
                <strong>Track an index.</strong> Most ETFs track indexes like S&P 500,
                Total Stock Market, or Nasdaq 100. The ETF automatically matches the index
                performance.
              </li>
              <li>
                <strong>Automatic diversification.</strong> One ETF share spreads your
                money across hundreds or thousands of companies. Reduces risk vs. owning
                5-10 individual stocks.
              </li>
              <li>
                <strong>Low fees.</strong> ETFs charge expense ratios of 0.03-0.20%/year.
                A 0.03% fee means $3/year per $10,000 invested. Actively managed funds
                charge 0.50-1.50%.
              </li>
              <li>
                <strong>Tax efficient.</strong> ETFs have lower capital gains distributions
                than mutual funds due to their structure. Better for taxable accounts.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Types of ETFs
            </h2>
            <p className="text-gray-700 mb-4">
              ETFs cover nearly every asset class and strategy. The most common types:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Stock Index ETFs",
                  desc: "Track broad stock market indexes like S&P 500, Total US Market, or international markets. Most popular for long-term growth.",
                  examples: "SPY, VOO, VTI, ITOT (S&P 500 & Total Market)",
                },
                {
                  title: "Bond ETFs",
                  desc: "Hold government or corporate bonds. Lower risk, lower returns than stocks. Used for income and stability in portfolios.",
                  examples: "BND, AGG, TLT (Bond indexes)",
                },
                {
                  title: "Sector ETFs",
                  desc: "Focus on specific industries like technology, healthcare, energy, or finance. Higher risk due to concentration.",
                  examples: "XLK (Tech), XLV (Healthcare), XLE (Energy)",
                },
                {
                  title: "International ETFs",
                  desc: "Invest in stocks outside the US. Developed markets (Europe, Japan) or emerging markets (China, India, Brazil).",
                  examples: "VXUS, VEA (International), VWO (Emerging)",
                },
                {
                  title: "Dividend ETFs",
                  desc: "Hold stocks with high dividend yields. Generate income while still offering growth potential.",
                  examples: "VYM, SCHD, VIG (Dividend indexes)",
                },
                {
                  title: "Thematic ETFs",
                  desc: "Focus on trends like clean energy, AI, robotics, or cybersecurity. Higher fees, higher risk, more speculative.",
                  examples: "ICLN (Clean Energy), BOTZ (Robotics), ARKK (Innovation)",
                },
              ].map((type, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{type.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{type.desc}</p>
                  <p className="text-xs text-gray-500 italic">Examples: {type.examples}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              ETF vs Mutual Fund vs Individual Stocks
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-gray-900">Feature</th>
                    <th className="text-left py-3 text-gray-900">ETF</th>
                    <th className="text-left py-3 text-gray-900">Mutual Fund</th>
                    <th className="text-left py-3 text-gray-900">Individual Stocks</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">Trading</td>
                    <td>Real-time, like stocks</td>
                    <td>Once daily after close</td>
                    <td>Real-time, like ETFs</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Minimum</td>
                    <td>1 share ($50-500)</td>
                    <td>Often $1,000-3,000</td>
                    <td>1 share ($1-1,000+)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Fees</td>
                    <td>0.03-0.20%/year</td>
                    <td>0.50-1.50%/year</td>
                    <td>None (just trades)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Diversification</td>
                    <td>Hundreds-thousands</td>
                    <td>Hundreds-thousands</td>
                    <td>As many as you buy</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Tax Efficiency</td>
                    <td>High</td>
                    <td>Low-medium</td>
                    <td>High</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Best For</td>
                    <td>Most investors</td>
                    <td>401(k)s, IRAs</td>
                    <td>Advanced investors</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Bottom line:</strong> ETFs combine the diversification of mutual
              funds with the flexibility and low fees of stocks. Best of both worlds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How to Invest in ETFs
            </h2>
            <p className="text-gray-700 mb-4">
              Investing in ETFs is as simple as buying stocks. Here is the step-by-step:
            </p>
            <ol className="text-gray-700 space-y-3 list-decimal pl-6">
              <li>
                <strong>Open a brokerage account.</strong> Use Fidelity, Vanguard, Charles
                Schwab, or Robinhood. All offer commission-free ETF trades. Takes 10 minutes
                to open online.
              </li>
              <li>
                <strong>Fund your account.</strong> Link your bank account and transfer
                money. Start with $100-500 or whatever you can afford. No minimum required
                at most brokers.
              </li>
              <li>
                <strong>Choose an ETF.</strong> For beginners, start with a Total Stock
                Market or S&P 500 index ETF. Examples: VTI (Vanguard Total Market), VOO
                (Vanguard S&P 500), SCHB (Schwab Total Market).
              </li>
              <li>
                <strong>Place your order.</strong> Search the ETF ticker symbol (e.g. VTI),
                choose number of shares, and click buy. Money is deducted from your account
                instantly.
              </li>
              <li>
                <strong>Set up automatic investing.</strong> Most brokers let you auto-invest
                $50-200/month. Dollar-cost averaging removes emotion and builds wealth
                consistently.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Best ETFs for Beginners
            </h2>
            <p className="text-gray-700 mb-4">
              If you are new to investing, these ETFs are simple, low-cost, and proven:
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-1">VTI or ITOT - Total US Stock Market</h3>
                <p className="text-gray-700 text-sm mb-1">
                  Owns 3,500+ US companies (large, mid, small cap). The ultimate
                  diversification. 0.03% fee. Warren Buffett recommends index funds
                  like this for most investors.
                </p>
                <p className="text-xs text-gray-500">Historical return: ~10%/year long-term</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-1">VOO or SPY - S&P 500</h3>
                <p className="text-gray-700 text-sm mb-1">
                  Tracks 500 largest US companies. Apple, Microsoft, Amazon, etc. Slightly
                  less diversified than VTI but nearly identical performance. 0.03% fee.
                </p>
                <p className="text-xs text-gray-500">Historical return: ~10%/year long-term</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-1">BND or AGG - Total Bond Market</h3>
                <p className="text-gray-700 text-sm mb-1">
                  Thousands of US bonds (government + corporate). Lower returns (~4-5%/year)
                  but more stable. Use for conservative portfolios or near retirement.
                </p>
                <p className="text-xs text-gray-500">Historical return: ~4%/year long-term</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              A simple starter portfolio: 80% VTI + 20% BND (or 100% VTI if young and
              risk-tolerant). Rebalance annually.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Common ETF Mistakes to Avoid
            </h2>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>
                <strong>Trading too often.</strong> ETFs are buy-and-hold investments.
                Trading frequently erases gains via taxes and emotional mistakes. Invest
                monthly and check quarterly.
              </li>
              <li>
                <strong>Chasing hot sectors.</strong> Thematic ETFs (AI, crypto, cannabis)
                are tempting but risky. Stick to broad market indexes until you have
                experience.
              </li>
              <li>
                <strong>Ignoring expense ratios.</strong> A 0.50% fee vs 0.03% costs
                $47,000 on $100K over 30 years. Always check fees. Lower is better.
              </li>
              <li>
                <strong>Buying leveraged or inverse ETFs.</strong> These are short-term
                trading tools, not long-term investments. They decay over time and are
                extremely risky for beginners.
              </li>
              <li>
                <strong>Forgetting to reinvest dividends.</strong> ETFs pay dividends
                quarterly. Set dividends to auto-reinvest to compound returns faster.
              </li>
            </ul>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Calculate Your Investment Growth</h2>
            <p className="text-gray-400 mb-4">See how much your ETF investments could grow over time with compound interest.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/investment-calculator" className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors">Investment Calculator</Link>
              <Link href="/compound-interest" className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors">Compound Interest</Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/investment-calculator"
            className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors text-lg"
          >
            Calculate Investment Returns
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What Is an ETF? A Beginner's Guide to Exchange-Traded Funds",
            description: "Learn what ETFs are, how they work, and why they are the most popular investment for beginners. Compare ETFs vs mutual funds vs stocks.",
            author: { "@type": "Organization", name: "CashCalcs" },
            publisher: { "@type": "Organization", name: "CashCalcs" },
            url: "https://cashcalcs.com/guides/what-is-an-etf",
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
              { "@type": "ListItem", position: 3, name: "What Is an ETF" },
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
                name: "What is an ETF in simple terms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An ETF (Exchange-Traded Fund) is a basket of stocks, bonds, or other assets that trades like a single stock. Instead of buying 500 individual stocks, you buy one ETF share that owns tiny pieces of all 500. ETFs provide instant diversification, low fees (0.03-0.20%/year), and trade in real-time on stock exchanges."
                }
              },
              {
                "@type": "Question",
                name: "Are ETFs good for beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, ETFs are ideal for beginners. They offer automatic diversification (reducing risk), extremely low fees, no minimum investment beyond one share, and simple buying/selling. Index ETFs like VTI or VOO let beginners invest in the entire market with one purchase. Warren Buffett recommends index funds for most investors."
                }
              },
              {
                "@type": "Question",
                name: "What is the difference between an ETF and a stock?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A stock is ownership in one company. An ETF is a basket of many stocks. Buying Apple stock means you only own Apple. Buying an S&P 500 ETF means you own 500 companies. ETFs reduce risk through diversification. Both trade in real-time on stock exchanges, but ETFs spread risk across many companies while individual stocks concentrate it."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
