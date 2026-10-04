import React, { useState } from 'react';
import {
  CheckCircle2,
  Gift,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Droplets,
  Zap,
  Utensils,
  Star,
  Download,
  BadgeCheck,
  Check,
} from 'lucide-react';
import { QuizAnswers } from '../types/quiz';
import { FAQ_ITEMS } from '../data/quizData';
import { WhatsAppTestimonials } from './WhatsAppTestimonials';
import { MethodInfiniteCarousel } from './MethodInfiniteCarousel';
import { LegalDisclaimer } from './LegalDisclaimer';

interface QuizResultProps {
  answers: QuizAnswers;
  onOpenCheckout: () => void;
  onRestart: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  answers,
  onOpenCheckout,
  onRestart,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const isHydrationLow = answers[5] === 'menos_1l' || answers[5] === '1_a_2l';
  const hasSweetTooth = answers[4] === 'doces';
  const hasAnxiety = answers[4] === 'ansiedade';
  const hasWeekendStruggle = answers[4] === 'fim_de_semana_foco' || answers[2] === 'fim_de_semana';
  const isFastPaced = answers[7] === '15min';

  return (
    <div className="w-full flex flex-col bg-white pb-10 text-center">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-slate-900 text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-100 font-mono">
            PROTOCOLO VERÃO 42
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
          <BadgeCheck className="w-4 h-4 text-emerald-400" />
          <span>Diagnóstico Concluído</span>
        </div>
      </header>

      {/* Diagnostic Overview */}
      <div className="p-4 sm:p-6 border-b border-slate-100 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider font-mono">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span>Diagnóstico do Perfil</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Resultado da Avaliação: Foco em Desinchaço e Organização
        </h1>

        {/* Diagnosis Quote Box */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-slate-900">
            "Com base nas suas respostas, sua principal oportunidade está em organizar a sequência das refeições e aumentar a variedade dos alimentos para combater a retenção de líquidos e a falta de rotina."
          </p>
        </div>

        {/* 3 Personalized Action Points */}
        <div className="space-y-2.5 pt-1 text-left">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Seus 3 Pontos de Ajuste Imediato:
          </h3>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
            <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 mt-0.5">
              <Droplets className="w-4 h-4 text-sky-600" />
            </div>
            <div className="text-xs space-y-0.5">
              <strong className="text-slate-900 font-semibold block">
                {isHydrationLow ? 'Estratégia de Hidratação Anti-Retenção' : 'Aporte de Potássio e Minerais'}
              </strong>
              <p className="text-slate-600 leading-snug">
                {isHydrationLow
                  ? 'O baixo consumo de água força o organismo a estocar líquidos e sódio. O Desafio 7 Dias ativa a eliminação natural do excesso.'
                  : 'Sua ingestão de água é positiva. O foco será potencializar o equilíbrio celular com temperos digestivos e alimentos diuréticos.'}
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
            <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 mt-0.5">
              <Zap className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-xs space-y-0.5">
              <strong className="text-slate-900 font-semibold block">
                {hasSweetTooth
                  ? 'Controle de Fissura por Doces à Tarde'
                  : hasAnxiety
                  ? 'Estabilização de Ansiedade Alimentar'
                  : hasWeekendStruggle
                  ? 'Planejamento para o Final de Semana'
                  : 'Sequenciamento Prático de Macronutrientes'}
              </strong>
              <p className="text-slate-600 leading-snug">
                {hasSweetTooth
                  ? 'As 20 Receitas de Doces Fit saciam o paladar com fibras e cacau puro, sem gerar picos de glicemia ou retenção.'
                  : hasAnxiety
                  ? 'Refeições balanceadas com proteínas saciantes minimizam a vontade compulsiva no período noturno.'
                  : 'Estratégias de compensação leve aos sábados e domingos para manter o convívio social sem reiniciar do zero.'}
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
            <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 mt-0.5">
              <Utensils className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-xs space-y-0.5">
              <strong className="text-slate-900 font-semibold block">
                {isFastPaced ? 'Preparações Express em até 15 Minutos' : 'Organização Prática da Cozinha'}
              </strong>
              <p className="text-slate-600 leading-snug">
                Cardápios rotativos rápidos e montagens descomplicadas para que você não precise passar horas cozinhando.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 1. O QUE VOCÊ VAI RECEBER (CENTRALIZADO, HARMONIOSO E CLARO COMO A SOLUÇÃO DO PROBLEMA) */}
      <div className="p-4 sm:p-6 border-b border-slate-100 bg-slate-50/50 text-center space-y-4">
        {/* Solution Eyebrow & Title */}
        <div className="space-y-1.5 max-w-sm mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>A Solução Para o Seu Problema</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
            O Que Você Vai Receber Imediatamente
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            O método passo a passo desenhado para eliminar a retenção de líquidos, desinchar o abdômen e organizar sua rotina alimentar de forma definitiva.
          </p>
        </div>

        {/* Harmonious Centered Content Card */}
        <div className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4 max-w-md mx-auto">
          {/* Top Status Pill */}
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono uppercase tracking-wider">
            ACESSO VITALÍCIO IMEDIATO
          </div>

          {/* Centralized Stack of Benefits */}
          <div className="space-y-3 text-center">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100/80">
              <p className="text-xs font-bold text-slate-900">
                Protocolo Verão 42
              </p>
              <p className="text-[11px] text-emerald-700 font-medium">
                Guia principal passo a passo para desinchar com comida de verdade
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100/80">
              <p className="text-xs font-bold text-slate-900">
                BÔNUS 1: Cardápio Rotativo (6 Semanas)
              </p>
              <p className="text-[11px] text-emerald-700 font-medium">
                Fim da dúvida do que comer: refeições variadas sem monotonia
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100/80">
              <p className="text-xs font-bold text-slate-900">
                BÔNUS 2: Buscador de 150 Substituições
              </p>
              <p className="text-[11px] text-emerald-700 font-medium">
                Trocas inteligentes e práticas para nunca enjoar dos pratos
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100/80">
              <p className="text-xs font-bold text-slate-900">
                BÔNUS 3: Desafio 7 Dias Anti-Inchaço
              </p>
              <p className="text-[11px] text-emerald-700 font-medium">
                Sprint inicial de hidratação para desinflamar e ver resultado rápido
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100/80">
              <p className="text-xs font-bold text-slate-900">
                BÔNUS 4: Guia Marmita Fit
              </p>
              <p className="text-[11px] text-emerald-700 font-medium">
                Cozinhe apenas 1x na semana e ganhe praticidade nos dias úteis
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100/80">
              <p className="text-xs font-bold text-slate-900">
                BÔNUS 5: 20 Receitas de Doces Fit
              </p>
              <p className="text-[11px] text-emerald-700 font-medium">
                Mate a vontade de doce sem peso na consciência e sem açúcar refinado
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100/80">
              <p className="text-xs font-bold text-slate-900">
                BÔNUS 6: Áudios de Motivação Diária
              </p>
              <p className="text-[11px] text-emerald-700 font-medium">
                21 pílulas de áudio para blindar o foco e manter a constância
              </p>
            </div>
          </div>

          {/* Bottom Highlight Pills */}
          <div className="pt-2 border-t border-slate-100 space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold">
              <Gift className="w-3.5 h-3.5 text-emerald-600" />
              <span>Todos os 6 Bônus Inclusos Sem Custo Extra</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Acesso vitalício no celular e computador
            </p>
          </div>
        </div>
      </div>

      {/* 2. DEPOIMENTOS EM FORMATO VERTICAL (UM ABAIXO DO OUTRO) */}
      <div className="p-4 sm:p-6 border-b border-slate-100 bg-slate-50/60">
        <WhatsAppTestimonials />
      </div>

      {/* 3. FOTOS DENTRO DO MÉTODO EM CARROSSEL INFINITO (ABAIXO DOS DEPOIMENTOS) */}
      <div className="p-4 sm:p-6 border-b border-slate-100 bg-white">
        <MethodInfiniteCarousel />
      </div>

      {/* 4. CARD DE OFERTA FIEL AO ANEXO FORNECIDO PELO USUÁRIO */}
      <div className="p-4 sm:p-6 border-b border-slate-100 bg-slate-50/40 flex justify-center">
        <div className="w-full max-w-sm rounded-3xl bg-white border-[2.5px] border-blue-600 shadow-2xl overflow-hidden text-center transition-all">
          {/* Top Orange Ribbon (MELHOR ESCOLHA) */}
          <div className="bg-[#ff5500] text-white font-black text-xs uppercase py-2 px-4 flex items-center justify-center gap-1.5 tracking-wider font-display shadow-xs">
            <Star className="w-3.5 h-3.5 fill-white text-white" />
            <span>MELHOR ESCOLHA</span>
          </div>

          {/* Card Body */}
          <div className="p-5 sm:p-6 space-y-3.5">
            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-black text-[#1e3a8a] tracking-wide uppercase font-display">
              PROTOCOLO VERÃO 42
            </h3>

            {/* Price Block */}
            <div className="space-y-1">
              <span className="text-slate-400 line-through text-xs font-bold font-mono block">
                R$ 97,00
              </span>
              <div className="text-4xl sm:text-5xl font-black text-[#00ba51] tracking-tight font-mono">
                R$ 19,90
              </div>
              <p className="text-slate-500 text-xs font-medium">
                Pagamento único
              </p>

              <div className="pt-1">
                <span className="inline-flex items-center gap-1 bg-[#e6f9ed] text-[#00873a] text-xs font-bold py-1 px-3.5 rounded-full font-mono">
                  🔥 ECONOMIZE R$ 77,10
                </span>
              </div>
            </div>

            {/* Subheader */}
            <p className="text-[#1e3a8a] text-xs font-black uppercase tracking-wider pt-2 font-display text-center">
              ACESSO COMPLETO + TODOS OS 6 BÔNUS
            </p>

            {/* Checklist with Green Checkmarks - 100% Centralized Structure */}
            <div className="space-y-2.5 py-1 text-center max-w-xs mx-auto text-xs font-bold text-slate-800">
              <div className="flex items-center justify-center gap-2 text-center">
                <Check className="w-4 h-4 text-[#00ba51] stroke-[3] shrink-0" />
                <span>+150 Trocas Inteligentes de Alimentos</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <Check className="w-4 h-4 text-[#00ba51] stroke-[3] shrink-0" />
                <span>Protocolo Verão 42 (Guia Principal)</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <Check className="w-4 h-4 text-[#00ba51] stroke-[3] shrink-0" />
                <span>Cardápio Rotativo de 6 Semanas</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <Check className="w-4 h-4 text-[#00ba51] stroke-[3] shrink-0" />
                <span>Desafio 7 Dias Anti-Inchaço</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <Check className="w-4 h-4 text-[#00ba51] stroke-[3] shrink-0" />
                <span>Guia Marmita Fit para a Semana</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <Check className="w-4 h-4 text-[#00ba51] stroke-[3] shrink-0" />
                <span>20 Receitas de Doces Fit Deliciosas</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <Check className="w-4 h-4 text-[#00ba51] stroke-[3] shrink-0" />
                <span>21 Áudios de Foco &amp; Constância</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <Check className="w-4 h-4 text-[#00ba51] stroke-[3] shrink-0" />
                <span>Atualizações Gratuitas</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <Check className="w-4 h-4 text-[#00ba51] stroke-[3] shrink-0" />
                <span>Suporte Prioritário VIP</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <Check className="w-4 h-4 text-[#00ba51] stroke-[3] shrink-0" />
                <span>Acesso Vitalício Imediato</span>
              </div>
            </div>

            {/* Blue Bonus Pill Box */}
            <div className="bg-[#eff6ff] border border-[#bfdbfe] text-[#1e3a8a] text-xs font-bold py-2.5 px-3.5 rounded-xl flex items-center justify-center gap-1.5 shadow-xs text-center">
              <Gift className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Bônus exclusivos (valor R$ 97,00 por R$ 0,00)</span>
            </div>

            {/* Mint Delivery Pill Box */}
            <div className="bg-[#ecfdf5] text-[#047857] text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 text-center">
              <Download className="w-3.5 h-3.5 text-[#047857] shrink-0" />
              <span>Receba no seu e-mail e WhatsApp</span>
            </div>

            {/* CTA Button Link Directly to Lowify Checkout */}
            <a
              href="https://pay.lowify.com.br/checkout?product_id=TaQucU"
              target="_top"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-[#00ba51] hover:bg-[#009e44] active:scale-[0.99] text-white font-black text-sm sm:text-base shadow-lg shadow-[#00ba51]/30 uppercase tracking-wide flex items-center justify-center transition-all cursor-pointer no-underline"
            >
              <span>QUERO MEU PROTOCOLO VERÃO 42</span>
            </a>
          </div>
        </div>
      </div>

      {/* 5. BLOCO EXCLUSIVO DA GARANTIA DE 7 DIAS (ABAIXO DO CARD) */}
      <div className="p-4 sm:p-6 border-b border-slate-100 bg-white">
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex items-start gap-3.5 text-left max-w-sm mx-auto">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div className="space-y-1 text-xs">
            <h4 className="font-extrabold text-slate-900 text-sm">
              Garantia Incondicional de 7 Dias
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Você tem 7 dias para testar todo o <strong>Protocolo Verão 42</strong> e todos os materiais. Se por qualquer motivo não se adaptar ou achar que não é para sua rotina, basta nos enviar uma mensagem e devolveremos 100% do seu dinheiro. Sem burocracia, conforme o Código de Defesa do Consumidor.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="p-4 sm:p-6 border-b border-slate-100 space-y-4 text-left">
        <div className="text-center space-y-1">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
            Perguntas Frequentes
          </h4>
          <p className="text-xs text-slate-500">
            Tire suas dúvidas sobre o acesso e o funcionamento
          </p>
        </div>

        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 text-xs font-semibold text-slate-800 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Legal & Medical Disclaimer */}
      <div className="p-4 sm:p-6">
        <LegalDisclaimer />
      </div>

      {/* Retake Quiz Option */}
      <div className="px-6 text-center">
        <button
          onClick={onRestart}
          className="text-xs font-medium text-slate-500 hover:text-slate-800 underline cursor-pointer"
        >
          Refazer avaliação de hábitos
        </button>
      </div>
    </div>
  );
};
