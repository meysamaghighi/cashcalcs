import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import MobileNav from "./components/MobileNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cashcalcs.com"),
  title: "CashCalcs - Free Financial Calculators",
  description:
    "16 free financial calculators: budget, savings, debt, FIRE, retirement, tax, investment, mortgage, loan, salary, inflation, car, compound interest, net worth, side hustles, and subscriptions.",
  openGraph: {
    title: "CashCalcs - Free Financial Calculators",
    description: "16 free calculators for budgeting, savings, debt, retirement, taxes, investments, and more.",
    type: "website",
    siteName: "CashCalcs",
  },
};

const navLinks = [
  { href: "/budget", label: "Budget", color: "hover:text-amber-600" },
  { href: "/savings-goal", label: "Savings", color: "hover:text-purple-600" },
  { href: "/debt-payoff", label: "Debt", color: "hover:text-blue-600" },
  { href: "/investment-calculator", label: "Invest", color: "hover:text-green-600" },
  { href: "/retirement-calculator", label: "Retire", color: "hover:text-blue-600" },
  { href: "/tax-calculator", label: "Tax", color: "hover:text-indigo-600" },
  { href: "/mortgage-calculator", label: "Mortgage", color: "hover:text-sky-600" },
  { href: "/fire-calculator", label: "FIRE", color: "hover:text-indigo-600" },
];

const allNavLinks = [
  ...navLinks,
  { href: "/side-hustle", label: "Side Hustle", color: "hover:text-emerald-600" },
  { href: "/compound-interest", label: "Compound Interest", color: "hover:text-teal-600" },
  { href: "/net-worth", label: "Net Worth", color: "hover:text-orange-600" },
  { href: "/subscription-tracker", label: "Subscriptions", color: "hover:text-rose-600" },
  { href: "/loan-calculator", label: "Loans", color: "hover:text-violet-600" },
  { href: "/salary-calculator", label: "Salary", color: "hover:text-cyan-600" },
  { href: "/car-calculator", label: "Car", color: "hover:text-lime-600" },
  { href: "/inflation-calculator", label: "Inflation", color: "hover:text-red-600" },
  { href: "/quiz", label: "Quiz", color: "hover:text-emerald-600" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-2621005924235240"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VY7HQL60ZB"
          strategy="beforeInteractive"
        />
        <Script id="ga-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VY7HQL60ZB');`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-extrabold text-lg text-gray-900">
              CashCalcs
            </Link>
            {/* Desktop nav */}
            <div className="hidden md:flex gap-4 text-sm font-medium text-gray-600 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${link.color} transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/#calculators" className="text-gray-400 hover:text-gray-700 transition-colors">
                More
              </Link>
            </div>
            {/* Mobile nav */}
            <MobileNav links={allNavLinks} />
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-100 py-8 mt-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6 text-xs">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Side Hustles</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/side-hustle" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/side-hustle/freelance-writing" className="hover:text-gray-700">Freelance Writing</Link></li>
                  <li><Link href="/side-hustle/web-development" className="hover:text-gray-700">Web Development</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Debt Payoff</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/debt-payoff" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/debt-payoff/credit-card-debt" className="hover:text-gray-700">Credit Card</Link></li>
                  <li><Link href="/debt-payoff/student-loan-debt" className="hover:text-gray-700">Student Loan</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">FIRE</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/fire-calculator" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/fire-calculator/retire-at-40" className="hover:text-gray-700">Retire at 40</Link></li>
                  <li><Link href="/fire-calculator/coast-fire" className="hover:text-gray-700">Coast FIRE</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Savings Goals</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/savings-goal" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/savings-goal/emergency-fund" className="hover:text-gray-700">Emergency Fund</Link></li>
                  <li><Link href="/savings-goal/house-down-payment" className="hover:text-gray-700">Down Payment</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Compound Interest</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/compound-interest" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/compound-interest/millionaire-calculator" className="hover:text-gray-700">Millionaire</Link></li>
                  <li><Link href="/compound-interest/rule-of-72" className="hover:text-gray-700">Rule of 72</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Net Worth</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/net-worth" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/net-worth/net-worth-by-age-30" className="hover:text-gray-700">By Age 30</Link></li>
                  <li><Link href="/net-worth/millennial-net-worth" className="hover:text-gray-700">Millennial</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Subscriptions</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/subscription-tracker" className="hover:text-gray-700">Tracker</Link></li>
                  <li><Link href="/subscription-tracker/average-american" className="hover:text-gray-700">Average American</Link></li>
                  <li><Link href="/subscription-tracker/cord-cutter" className="hover:text-gray-700">Cord Cutter</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Mortgage</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/mortgage-calculator" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/mortgage-calculator/first-time-buyer" className="hover:text-gray-700">First-Time Buyer</Link></li>
                  <li><Link href="/mortgage-calculator/15-year-mortgage" className="hover:text-gray-700">15-Year</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Car</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/car-calculator" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/car-calculator/50k-salary" className="hover:text-gray-700">$50K Salary</Link></li>
                  <li><Link href="/car-calculator/used-car-budget" className="hover:text-gray-700">Used Car</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Budget</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/budget" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/budget/50k-salary" className="hover:text-gray-700">$50K Salary</Link></li>
                  <li><Link href="/budget/100k-salary" className="hover:text-gray-700">$100K Salary</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Loans</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/loan-calculator" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/loan-calculator/auto-loan" className="hover:text-gray-700">Auto Loan</Link></li>
                  <li><Link href="/loan-calculator/personal-loan" className="hover:text-gray-700">Personal Loan</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Salary</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/salary-calculator" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/salary-calculator/20-an-hour" className="hover:text-gray-700">$20/Hour</Link></li>
                  <li><Link href="/salary-calculator/100k-salary" className="hover:text-gray-700">$100K Salary</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Retirement</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/retirement-calculator" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/retirement-calculator/retire-at-60" className="hover:text-gray-700">Early at 60</Link></li>
                  <li><Link href="/retirement-calculator/retire-at-65" className="hover:text-gray-700">Standard at 65</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Tax</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/tax-calculator" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/tax-calculator/75k-income" className="hover:text-gray-700">$75K Income</Link></li>
                  <li><Link href="/tax-calculator/100k-income" className="hover:text-gray-700">$100K Income</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Investment</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/investment-calculator" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/investment-calculator/sp500-returns" className="hover:text-gray-700">S&P 500</Link></li>
                  <li><Link href="/investment-calculator/roth-ira-growth" className="hover:text-gray-700">Roth IRA</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Inflation</h3>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li><Link href="/inflation-calculator" className="hover:text-gray-700">Calculator</Link></li>
                  <li><Link href="/inflation-calculator/10-year-inflation" className="hover:text-gray-700">10-Year</Link></li>
                  <li><Link href="/inflation-calculator/retirement-inflation" className="hover:text-gray-700">Retirement</Link></li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center gap-6 mb-6 text-xs text-gray-500">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Guides</h3>
                <ul className="space-y-1">
                  <li><Link href="/guides/how-to-calculate-net-worth" className="hover:text-gray-700">Net Worth Guide</Link></li>
                  <li><Link href="/guides/debt-avalanche-vs-snowball" className="hover:text-gray-700">Avalanche vs Snowball</Link></li>
                  <li><Link href="/guides/how-much-house-can-i-afford" className="hover:text-gray-700">How Much House?</Link></li>
                  <li><Link href="/guides/what-is-the-fire-movement" className="hover:text-gray-700">FIRE Movement</Link></li>
                  <li><Link href="/guides/50-30-20-budget-rule" className="hover:text-gray-700">50/30/20 Rule</Link></li>
                  <li><Link href="/guides/how-to-build-emergency-fund" className="hover:text-gray-700">Emergency Fund</Link></li>
                  <li><Link href="/guides/how-to-pay-off-student-loans" className="hover:text-gray-700">Student Loans</Link></li>
                  <li><Link href="/guides/how-to-start-investing" className="hover:text-gray-700">Start Investing</Link></li>
                  <li><Link href="/guides/how-does-inflation-work" className="hover:text-gray-700">Inflation Guide</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">More</h3>
                <ul className="space-y-1">
                  <li><Link href="/quiz" className="hover:text-gray-700">Financial Health Quiz</Link></li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center">
              CashCalcs.com - Free financial calculators. Not financial advice.
            </p>
            <p className="text-xs text-gray-400 text-center mt-2">
              <Link href="https://benchmybrain.com" className="hover:text-gray-600">BenchMyBrain</Link> - Free brain &amp; speed tests
              {" | "}
              <Link href="https://doodlelab.fun" className="hover:text-gray-600">DoodleLab</Link> - Free drawing games
              {" | "}
              <Link href="https://playmini.fun" className="hover:text-gray-600">PlayMini</Link> - Free browser games
            </p>
          </div>
        </footer>

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2621005924235240"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
