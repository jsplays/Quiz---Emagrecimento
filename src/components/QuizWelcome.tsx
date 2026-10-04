import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Sun, CheckCircle2, Sparkles, Activity } from 'lucide-react';
import { LegalDisclaimer } from './LegalDisclaimer';
import heroImage from '../assets/images/verao_lifestyle_hero_1791066089211.jpg';

interface QuizWelcomeProps {
  onStart: () => void;
}

export const QuizWelcome: React.FC<QuizWelcomeProps> = ({ onStart }) => {
  return (
    <div className="w-full flex flex-col bg-white text-center">
      {/* Top Header */}
      <header className="px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-bold tracking-wider text-slate-100 uppercase font-mono">
            PROTOCOLO VERÃO 42
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
          <Clock className="w-3.5 h-3.5 text-emerald-400" />
          <span>45 segundos</span>
        </div>
      </header>

      {/* Hero Visual Container */}
      <div className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden">
        <img
          src={heroImage || '/images/verao_lifestyle_hero_1791066089211.jpg'}
          alt="Alimentação saudável e hábitos de verão"
          className="w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex flex-col justify-end items-center p-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide mb-2 border border-white/15">
            <Sun className="w-3.5 h-3.5 text-emerald-400" />
            Avaliação Oficial de Hábitos &amp; Retenção
          </span>
          <p className="text-slate-100 text-sm font-medium leading-relaxed max-w-sm">
            Mapeamento individual de rotina, retenção de líquidos e organização alimentar
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 pt-7 pb-8 flex flex-col items-center space-y-6">
        <div className="space-y-3 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 text-slate-900">
            <Sun className="w-5 h-5 text-emerald-600 shrink-0" />
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              Avaliação de Hábitos &amp; Retenção de Verão
            </h1>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Descubra em 45 segundos como pequenos ajustes na sua alimentação podem te ajudar a desinchar e ter mais disposição para o verão.
          </p>
        </div>

        {/* Value Highlights List - Sober, Clean Slate styling */}
        <div className="w-full max-w-md p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-left">
          <div className="flex items-start gap-3 text-xs text-slate-700">
            <div className="p-1 rounded-md bg-emerald-50 text-emerald-700 shrink-0 mt-0.5 border border-emerald-200/60">
              <Activity className="w-3.5 h-3.5" />
            </div>
            <div>
              <strong className="text-slate-900 block font-semibold">Identificação de Retenção Hídrica</strong>
              <span className="text-slate-500">Mapeie se o inchaço decorre de excesso de sódio, falta de água ou desorganização de horários.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 text-xs text-slate-700">
            <div className="p-1 rounded-md bg-emerald-50 text-emerald-700 shrink-0 mt-0.5 border border-emerald-200/60">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <strong className="text-slate-900 block font-semibold">Sem Dietas Radicais ou Passar Fome</strong>
              <span className="text-slate-500">Alimentação real com saciedade, nutrientes e sabor sem privação desnecessária.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 text-xs text-slate-700">
            <div className="p-1 rounded-md bg-emerald-50 text-emerald-700 shrink-0 mt-0.5 border border-emerald-200/60">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <strong className="text-slate-900 block font-semibold">Direcionamento Realista</strong>
              <span className="text-slate-500">Opções práticas para implementar em 15 a 30 minutos na rotina diária.</span>
            </div>
          </div>
        </div>

        {/* Trust Points */}
        <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% Gratuito &amp; Seguro
          </span>
          <span className="text-slate-300">|</span>
          <span className="font-medium">8 Perguntas Rápidas</span>
          <span className="text-slate-300">|</span>
          <span className="font-medium">Resultado Imediato</span>
        </div>

        {/* CTA */}
        <div className="w-full max-w-md space-y-2.5 pt-1">
          <button
            onClick={onStart}
            className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold text-base shadow-md flex items-center justify-center gap-2.5 transition-all cursor-pointer group"
          >
            <span>INICIAR AVALIAÇÃO GRATUITA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-center text-[11px] text-slate-400">
            Não é necessário cadastro de dados bancários para iniciar.
          </p>
        </div>

        {/* Legal Disclaimer */}
        <div className="w-full pt-2">
          <LegalDisclaimer compact />
        </div>
      </div>
    </div>
  );
};
