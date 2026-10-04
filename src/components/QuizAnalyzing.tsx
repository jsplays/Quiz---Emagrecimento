import React, { useEffect, useState } from 'react';
import { Loader2, CheckCircle2, Sparkles, ArrowRight, Target, RefreshCw } from 'lucide-react';

interface QuizAnalyzingProps {
  onComplete: () => void;
}

export const QuizAnalyzing: React.FC<QuizAnalyzingProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 700);
    const t2 = setTimeout(() => setStep(2), 1500);
    const t3 = setTimeout(() => setStep(3), 2300);
    const t4 = setTimeout(() => setCompleted(true), 3000);
    const t5 = setTimeout(() => {
      onComplete();
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <div className="w-full flex flex-col justify-center bg-white p-6 sm:p-8 text-center min-h-[500px] my-auto">
      <div className="space-y-6">
        {/* Animated Icon Container */}
        <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-25" />
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-700/25">
            {completed ? (
              <Target className="w-8 h-8 text-emerald-200 animate-pulse" />
            ) : (
              <RefreshCw className="w-8 h-8 animate-spin text-emerald-100" />
            )}
          </div>
        </div>

        {/* Status Header */}
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            {completed ? 'Avaliação Concluída!' : 'Organizando suas respostas...'}
          </h2>
          <p className="text-xs text-slate-500">
            Cruzando seu perfil com as diretrizes do Protocolo Verão 42
          </p>
        </div>

        {/* Verification Checklist - No emojis, clean Lucide checks */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-3.5">
          {/* Step 1 */}
          <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
              step >= 1 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-transparent'
            }`}>
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className={`text-xs transition-colors duration-300 ${
              step >= 1 ? 'text-slate-900 font-semibold' : 'text-slate-400'
            }`}>
              Pontos de retenção de líquido: <span className={step >= 1 ? 'text-emerald-700 font-bold' : ''}>Analisados</span>
            </span>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
              step >= 2 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-transparent'
            }`}>
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className={`text-xs transition-colors duration-300 ${
              step >= 2 ? 'text-slate-900 font-semibold' : 'text-slate-400'
            }`}>
              Necessidade de variedade no cardápio: <span className={step >= 2 ? 'text-emerald-700 font-bold' : ''}>Mapeada</span>
            </span>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
              step >= 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-transparent'
            }`}>
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className={`text-xs transition-colors duration-300 ${
              step >= 3 ? 'text-slate-900 font-semibold' : 'text-slate-400'
            }`}>
              Sugestão de rotina prática: <span className={step >= 3 ? 'text-emerald-700 font-bold' : ''}>Concluída</span>
            </span>
          </div>
        </div>

        {/* Completion Action */}
        {completed && (
          <button
            onClick={onComplete}
            className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <span>VER MEU RESULTADO AGORA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
