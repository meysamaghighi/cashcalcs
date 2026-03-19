"use client";

import { useState } from "react";
import Link from "next/link";
import {
  quizQuestions,
  calculateQuizResult,
  type QuizResult,
} from "../lib/quiz-engine";

export default function FinancialQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);

    if (currentQ + 1 < quizQuestions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setResult(calculateQuizResult(newAnswers));
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    return (
      <div className="space-y-8">
        {/* Score Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <p className="text-sm text-gray-500 mb-2">Your Financial Health Score</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              className={`text-7xl font-black ${result.gradeColor}`}
            >
              {result.grade}
            </div>
            <div className="text-left">
              <p className="text-3xl font-bold text-gray-900">
                {result.totalScore}/{result.maxScore}
              </p>
              <p className="text-gray-500">{result.percentage}%</p>
            </div>
          </div>
          <h2 className={`text-2xl font-bold mb-2 ${result.gradeColor}`}>
            {result.headline}
          </h2>
          <p className="text-gray-700 max-w-lg mx-auto">{result.description}</p>
        </div>

        {/* Score Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex rounded-full h-4 overflow-hidden bg-gray-100">
            <div
              className={`transition-all rounded-full ${
                result.percentage >= 70
                  ? "bg-emerald-500"
                  : result.percentage >= 50
                  ? "bg-amber-500"
                  : "bg-rose-500"
              }`}
              style={{ width: `${result.percentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Your Breakdown (weakest first)
          </h3>
          <div className="space-y-6">
            {result.categoryScores.map((cat) => {
              const pct = Math.round((cat.score / cat.maxScore) * 100);
              const barColor =
                pct >= 70
                  ? "bg-emerald-500"
                  : pct >= 50
                  ? "bg-amber-500"
                  : "bg-rose-500";
              return (
                <div key={cat.category}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-gray-900">{cat.label}</span>
                    <span className="text-sm text-gray-500">
                      {cat.score}/{cat.maxScore} ({pct}%)
                    </span>
                  </div>
                  <div className="flex rounded-full h-3 overflow-hidden bg-gray-100 mb-2">
                    <div
                      className={`${barColor} transition-all rounded-full`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {cat.recommendation}
                  </p>
                  <Link
                    href={cat.calculatorLink}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Try our {cat.calculatorName} &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Share / Retake */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={restart}
            className="px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => {
              const text = `I scored ${result.percentage}% (Grade: ${result.grade}) on the CashCalcs Financial Health Quiz! How healthy are your finances? https://cashcalcs.com/quiz`;
              if (navigator.share) {
                navigator.share({ text }).catch(() => {});
              } else {
                navigator.clipboard.writeText(text).then(() => {
                  alert("Result copied to clipboard!");
                }).catch(() => {});
              }
            }}
            className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Share Your Score
          </button>
        </div>
      </div>
    );
  }

  const q = quizQuestions[currentQ];
  const progress = ((currentQ) / quizQuestions.length) * 100;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>
            Question {currentQ + 1} of {quizQuestions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="flex rounded-full h-2 overflow-hidden bg-gray-100">
          <div
            className="bg-emerald-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          {q.question}
        </h2>
        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.points)}
              className="w-full text-left px-5 py-4 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-300 border-2 border-gray-100 rounded-xl transition-colors text-gray-800 font-medium"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
