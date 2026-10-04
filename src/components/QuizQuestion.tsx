import React, { useState } from 'react';
import { ArrowLeft, Check, Sparkles, Target, Compass } from 'lucide-react';
import { QuizQuestionData } from '../types/quiz';

interface QuizQuestionProps {
  question: QuizQuestionData;
  currentIndex: number;
  totalQuestions: number;
  selectedOptionId?: string;
  onSelectOption: (optionId: string) => void;
  onPrev: () => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOptionId,
  onSelectOption,
  onPrev,
}) => {
  const [animatingOption, setAnimatingOption] = useState<string | null>(null);

  const progressPercentage = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleSelect = (optionId: string) => {
    setAnimatingOption(optionId);
    setTimeout(() => {
      onSelectOption(optionId);
      setAnimatingOption(null);
    }, 280);
  };

  return (
    <div className="w-full flex flex-col bg-white min-h-screen sm:min-h-0">
      {/* Top Header & Progress */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 pt-5 pb-4 border-b border-slate-100">
        <div className="flex items-center justify-between mb-3">
          {currentIndex > 0 ? (
            <button
              onClick={onPrev}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors py-1 px-2.5 -ml-2 rounded-lg cursor-pointer hover:bg-slate-100"
              aria-label="Voltar para a pergunta anterior"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>PROTOCOLO VERÃO 42</span>
            </div>
          )}

          <div className="text-right">
            <span className="text-xs font-bold text-emerald-800 tabular-nums">
              Pergunta {currentIndex + 1} de {totalQuestions}
            </span>
          </div>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Main Question Body */}
      <div className="px-6 py-8 flex flex-col justify-between space-y-8 flex-1">
        <div className="space-y-6">
          {/* Question Kicker */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>{question.category}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug text-balance">
              {question.title}
            </h2>
          </div>

          {/* Options Grid */}
          <div className="space-y-3" role="radiogroup" aria-label={question.title}>
            {question.options.map((option, idx) => {
              const isSelected = selectedOptionId === option.id;
              const isAnimating = animatingOption === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  disabled={animatingOption !== null}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative flex items-start gap-4 ${
                    isSelected || isAnimating
                      ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-2 ring-emerald-500/20'
                      : 'border-slate-200 bg-white hover:border-emerald-400 hover:bg-slate-50/70 shadow-xs'
                  }`}
                  role="radio"
                  aria-checked={isSelected}
                >
                  {/* Indicator Box */}
                  <div
                    className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected || isAnimating
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-300 bg-slate-100 text-slate-500'
                    }`}
                  >
                    {(isSelected || isAnimating) ? (
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    ) : (
                      <span className="text-[11px] font-bold font-mono">
                        {String.fromCharCode(65 + idx)}
                      </span>
                    )}
                  </div>

                  {/* Option Content */}
                  <div className="flex-1 pr-1">
                    <p className={`text-sm font-semibold leading-snug ${
                      isSelected || isAnimating ? 'text-emerald-950 font-bold' : 'text-slate-800'
                    }`}>
                      {option.label}
                    </p>
                    {option.subtext && (
                      <p className={`text-xs mt-1 leading-normal ${
                        isSelected || isAnimating ? 'text-emerald-800/80' : 'text-slate-500'
                      }`}>
                        {option.subtext}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footnote */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Selecione uma opção para continuar</span>
          <span className="font-semibold text-emerald-800 font-mono tabular-nums">{progressPercentage}%</span>
        </div>
      </div>
    </div>
  );
};
