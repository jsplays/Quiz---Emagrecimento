import React from 'react';
import { AlertCircle, ShieldCheck } from 'lucide-react';

interface LegalDisclaimerProps {
  className?: string;
  compact?: boolean;
}

export const LegalDisclaimer: React.FC<LegalDisclaimerProps> = ({ className = '', compact = false }) => {
  return (
    <footer className={`border-t border-amber-900/10 bg-amber-50/70 text-slate-600 text-xs leading-relaxed px-4 py-8 rounded-2xl ${className}`}>
      <div className="max-w-xl mx-auto space-y-4">
        <div className="flex items-center gap-2 text-slate-800 font-semibold text-xs uppercase tracking-wider">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Aviso Importante e Diretrizes de Segurança</span>
        </div>

        <div className="space-y-2.5 text-[11px] text-slate-600 leading-normal text-justify">
          <p>
            Este material tem finalidade exclusivamente educativa e não substitui consulta, diagnóstico ou tratamento realizado por médico, nutricionista ou outro profissional de saúde habilitado.
          </p>

          {!compact && (
            <>
              <p>
                As sugestões são gerais e podem não ser adequadas para todas as pessoas. Gestantes, lactantes, adolescentes, idosos ou pessoas com condições de saúde preexistentes (como diabetes, hipertensão ou doenças gastrointestinais) devem buscar orientação individualizada antes de iniciar mudanças alimentares.
              </p>
              <p>
                Não existem resultados garantidos ou iguais para todas as pessoas. Os resultados variam de acordo com a resposta biológica individual, histórico de saúde e nível de engajamento aos novos hábitos. O objetivo deste programa é incentivar escolhas alimentares mais conscientes e organizadas.
              </p>
              <p className="font-medium text-slate-700">
                Interrompa o uso e procure atendimento especializado caso sinta qualquer desconforto ou sintoma atípico.
              </p>
            </>
          )}
        </div>

        <div className="pt-3 border-t border-amber-900/10 flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Protocolo Verão 42 · Todos os direitos reservados</span>
          </div>
          <span>Privacidade Garantida · LGPD</span>
        </div>
      </div>
    </footer>
  );
};
