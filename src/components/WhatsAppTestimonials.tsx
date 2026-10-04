import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PRINTS = [
  {
    id: 'print-paula',
    src: '/src/assets/images/print_paula_portal.png',
    alt: 'Depoimento real WhatsApp sobre acesso prático pelo celular',
  },
  {
    id: 'print-mariana',
    src: '/src/assets/images/print_mariana_biquini.png',
    alt: 'Depoimento real WhatsApp sobre desinchaço e biquíni no dia 15',
  },
  {
    id: 'print-camila',
    src: '/src/assets/images/print_camila_doce.png',
    alt: 'Depoimento real WhatsApp sobre sobremesa fit sem açúcar',
  },
];

export const WhatsAppTestimonials: React.FC = () => {
  return (
    <div className="space-y-6 text-center">
      {/* Header */}
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
          <span>Resultados Reais</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Depoimentos Reais no WhatsApp
        </h3>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">
          Conversas reais de alunas compartilhando a experiência com o método
        </p>
      </div>

      {/* Vertical Stack: One Below the Other */}
      <div className="space-y-4 max-w-sm mx-auto">
        {PRINTS.map((item, index) => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-slate-950 transition-transform duration-200"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto object-contain block"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
