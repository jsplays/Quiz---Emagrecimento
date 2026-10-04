/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { QuizWelcome } from './components/QuizWelcome';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizAnalyzing } from './components/QuizAnalyzing';
import { QuizResult } from './components/QuizResult';
import { CheckoutModal } from './components/CheckoutModal';
import { SubstitutionsModal } from './components/SubstitutionsModal';
import { QUIZ_QUESTIONS } from './data/quizData';
import { QuizAnswers } from './types/quiz';

type ScreenState = 'welcome' | 'quiz' | 'analyzing' | 'result';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  // Modals state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSubstitutionsOpen, setIsSubstitutionsOpen] = useState(false);

  // Start the quiz
  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScreen('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Answer a question
  const handleSelectOption = (optionId: string) => {
    const questionNumber = QUIZ_QUESTIONS[currentQuestionIndex].id;
    const newAnswers = { ...answers, [questionNumber]: optionId };
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setScreen('analyzing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Previous question
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setScreen('welcome');
    }
  };

  // Analysis complete -> show result
  const handleAnalysisComplete = () => {
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Restart quiz
  const handleRestart = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setScreen('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 flex flex-col items-center justify-start sm:py-8 sm:px-4 text-slate-800">
      <main className="w-full sm:max-w-md bg-white sm:rounded-3xl sm:shadow-2xl sm:border sm:border-slate-200 overflow-hidden flex flex-col min-h-screen sm:min-h-0">
        {screen === 'welcome' && (
          <QuizWelcome onStart={handleStartQuiz} />
        )}

        {screen === 'quiz' && (
          <QuizQuestion
            question={QUIZ_QUESTIONS[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={QUIZ_QUESTIONS.length}
            selectedOptionId={answers[QUIZ_QUESTIONS[currentQuestionIndex].id]}
            onSelectOption={handleSelectOption}
            onPrev={handlePrevQuestion}
          />
        )}

        {screen === 'analyzing' && (
          <QuizAnalyzing onComplete={handleAnalysisComplete} />
        )}

        {screen === 'result' && (
          <QuizResult
            answers={answers}
            onOpenCheckout={() => setIsCheckoutOpen(true)}
            onRestart={handleRestart}
          />
        )}
      </main>

      {/* Interactive Modals */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      <SubstitutionsModal
        isOpen={isSubstitutionsOpen}
        onClose={() => setIsSubstitutionsOpen(false)}
        onBuy={() => setIsCheckoutOpen(true)}
      />
    </div>
  );
}
