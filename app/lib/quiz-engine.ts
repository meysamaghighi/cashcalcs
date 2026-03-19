export interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; points: number }[];
  category: "saving" | "debt" | "investing" | "budgeting" | "protection";
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How many months of expenses do you have saved as an emergency fund?",
    options: [
      { label: "Less than 1 month", points: 1 },
      { label: "1-2 months", points: 2 },
      { label: "3-5 months", points: 4 },
      { label: "6+ months", points: 5 },
    ],
    category: "saving",
  },
  {
    id: 2,
    question: "Do you follow a monthly budget?",
    options: [
      { label: "No, I wing it", points: 1 },
      { label: "I have a rough idea in my head", points: 2 },
      { label: "I track some categories", points: 3 },
      { label: "Yes, I track and review every month", points: 5 },
    ],
    category: "budgeting",
  },
  {
    id: 3,
    question: "How much of your income do you save or invest each month?",
    options: [
      { label: "Nothing — I spend it all", points: 1 },
      { label: "Less than 10%", points: 2 },
      { label: "10-20%", points: 4 },
      { label: "More than 20%", points: 5 },
    ],
    category: "saving",
  },
  {
    id: 4,
    question: "Do you carry credit card debt month to month?",
    options: [
      { label: "Yes, growing balance", points: 1 },
      { label: "Yes, but I am paying it down", points: 2 },
      { label: "Rarely — only in emergencies", points: 4 },
      { label: "Never — I pay in full every month", points: 5 },
    ],
    category: "debt",
  },
  {
    id: 5,
    question: "Are you investing for retirement?",
    options: [
      { label: "No, not yet", points: 1 },
      { label: "I have a 401(k) but do not contribute much", points: 2 },
      { label: "I contribute enough to get employer match", points: 3 },
      { label: "I max out retirement accounts", points: 5 },
    ],
    category: "investing",
  },
  {
    id: 6,
    question: "Do you know your net worth (assets minus debts)?",
    options: [
      { label: "No idea", points: 1 },
      { label: "I have a rough guess", points: 2 },
      { label: "I calculated it once", points: 3 },
      { label: "I track it regularly", points: 5 },
    ],
    category: "budgeting",
  },
  {
    id: 7,
    question: "How do you handle unexpected expenses ($500+)?",
    options: [
      { label: "Credit card or borrow from someone", points: 1 },
      { label: "Scramble to move money around", points: 2 },
      { label: "Dip into savings reluctantly", points: 3 },
      { label: "Pay from my emergency fund, no stress", points: 5 },
    ],
    category: "protection",
  },
  {
    id: 8,
    question: "Do you have life or disability insurance?",
    options: [
      { label: "No, neither", points: 1 },
      { label: "Only what my employer provides", points: 2 },
      { label: "I have life insurance", points: 3 },
      { label: "I have both life and disability coverage", points: 5 },
    ],
    category: "protection",
  },
  {
    id: 9,
    question: "How diversified are your investments?",
    options: [
      { label: "I do not invest", points: 1 },
      { label: "All in one stock or crypto", points: 2 },
      { label: "Mix of stocks and bonds", points: 3 },
      { label: "Diversified across stocks, bonds, real estate, etc.", points: 5 },
    ],
    category: "investing",
  },
  {
    id: 10,
    question: "Do you have financial goals written down?",
    options: [
      { label: "No goals at all", points: 1 },
      { label: "Vague goals in my head", points: 2 },
      { label: "I have some goals written down", points: 3 },
      { label: "Clear goals with timelines and dollar amounts", points: 5 },
    ],
    category: "budgeting",
  },
];

export interface QuizResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  grade: string;
  gradeColor: string;
  headline: string;
  description: string;
  categoryScores: {
    category: string;
    label: string;
    score: number;
    maxScore: number;
    recommendation: string;
    calculatorLink: string;
    calculatorName: string;
  }[];
}

export function calculateQuizResult(answers: number[]): QuizResult {
  const totalScore = answers.reduce((sum, a) => sum + a, 0);
  const maxScore = quizQuestions.length * 5;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let grade: string;
  let gradeColor: string;
  let headline: string;
  let description: string;

  if (percentage >= 85) {
    grade = "A";
    gradeColor = "text-emerald-600";
    headline = "Financial Rockstar";
    description =
      "You are in excellent financial shape. You budget, save, invest, and protect yourself against the unexpected. Keep optimizing and consider advanced strategies like tax-loss harvesting or FIRE planning.";
  } else if (percentage >= 70) {
    grade = "B";
    gradeColor = "text-blue-600";
    headline = "On Solid Ground";
    description =
      "You have good financial habits but there is room for improvement. Focus on the weakest areas below to level up your financial health.";
  } else if (percentage >= 50) {
    grade = "C";
    gradeColor = "text-amber-600";
    headline = "Getting There";
    description =
      "You have some financial basics covered but significant gaps remain. The good news: small changes in your weakest areas can make a big difference. Start with the top recommendation below.";
  } else if (percentage >= 30) {
    grade = "D";
    gradeColor = "text-orange-600";
    headline = "Needs Attention";
    description =
      "Your finances need work, but recognizing this is the first step. Start with building a $1,000 emergency fund and creating a simple budget. Small steps compound into big results.";
  } else {
    grade = "F";
    gradeColor = "text-rose-600";
    headline = "Fresh Start Needed";
    description =
      "Do not be discouraged — everyone starts somewhere. The fact that you took this quiz shows you care about improving. Start with one change: track your spending for one month.";
  }

  const categories: {
    key: string;
    label: string;
    recommendation: string;
    calculatorLink: string;
    calculatorName: string;
  }[] = [
    {
      key: "saving",
      label: "Saving",
      recommendation:
        "Build your emergency fund to 3-6 months of expenses. Automate a monthly transfer to a high-yield savings account.",
      calculatorLink: "/savings-goal",
      calculatorName: "Savings Goal Calculator",
    },
    {
      key: "debt",
      label: "Debt Management",
      recommendation:
        "Pay off high-interest debt using the avalanche method (highest rate first). Stop using credit cards you cannot pay in full.",
      calculatorLink: "/debt-payoff",
      calculatorName: "Debt Payoff Calculator",
    },
    {
      key: "investing",
      label: "Investing",
      recommendation:
        "Start with your employer 401(k) match (free money). Then open a Roth IRA. Index funds are the simplest path to building wealth.",
      calculatorLink: "/compound-interest",
      calculatorName: "Compound Interest Calculator",
    },
    {
      key: "budgeting",
      label: "Budgeting",
      recommendation:
        "Try the 50/30/20 rule: 50% needs, 30% wants, 20% savings. Track spending for one month to see where your money actually goes.",
      calculatorLink: "/budget",
      calculatorName: "Budget Calculator",
    },
    {
      key: "protection",
      label: "Protection",
      recommendation:
        "Build an emergency fund first, then get term life insurance if anyone depends on your income. Review your insurance coverage annually.",
      calculatorLink: "/guides/how-to-build-emergency-fund",
      calculatorName: "Emergency Fund Guide",
    },
  ];

  const categoryScores = categories.map((cat) => {
    const catQuestions = quizQuestions.filter((q) => q.category === cat.key);
    const catAnswers = catQuestions.map((q) => {
      const idx = quizQuestions.indexOf(q);
      return answers[idx] || 0;
    });
    const score = catAnswers.reduce((s, a) => s + a, 0);
    return {
      category: cat.key,
      label: cat.label,
      score,
      maxScore: catQuestions.length * 5,
      recommendation: cat.recommendation,
      calculatorLink: cat.calculatorLink,
      calculatorName: cat.calculatorName,
    };
  });

  // Sort by weakest first
  categoryScores.sort((a, b) => a.score / a.maxScore - b.score / b.maxScore);

  return {
    totalScore,
    maxScore,
    percentage,
    grade,
    gradeColor,
    headline,
    description,
    categoryScores,
  };
}
