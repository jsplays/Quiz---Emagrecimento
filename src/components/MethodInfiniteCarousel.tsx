import React from 'react';
import { Smartphone, Sparkles } from 'lucide-react';

interface MockupItem {
  id: string;
  badge: string;
  title: string;
  image: string;
}

const MOCKUPS: MockupItem[] = [
  {
    id: 'mockup-1',
    badge: 'GUIA PRINCIPAL',
    title: 'Protocolo Verão 42',
    image: '/src/assets/images/mockup_protocolo_principal.webp',
  },
  {
    id: 'mockup-2',
    badge: 'BÔNUS 1',
    title: 'Cardápio Rotativo 6 Semanas',
    image: '/src/assets/images/mockup_bonus_cardapio.webp',
  },
  {
    id: 'mockup-3',
    badge: 'BÔNUS 4',
    title: 'Guia Marmita Fit',
    image: '/src/assets/images/mockup_bonus_marmita.webp',
  },
];

// Duplicate for seamless infinite marquee loop
const INFINITE_LIST = [...MOCKUPS, ...MOCKUPS, ...MOCKUPS, ...MOCKUPS];

export const MethodInfiniteCarousel: React.FC = () => {
  return (
    <div className="space-y-3.5 text-center overflow-hidden">
      {/* Header */}
      <div className="space-y-1 px-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider font-mono">
          <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
          <span>Por Dentro do Método</span>
        </div>
        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
          Visualização Real no Celular
        </h3>
        <p className="text-xs text-slate-500 max-w-xs mx-auto">
          Tudo adaptado em formato prático para você navegar sem complicação
        </p>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-4 w-max animate-infinite-scroll hover:[animation-play-state:paused] active:[animation-play-state:paused] cursor-grab">
          {INFINITE_LIST.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[190px] sm:w-[210px] shrink-0 bg-slate-50 rounded-2xl border border-slate-200/90 p-3 shadow-sm flex flex-col items-center space-y-2 select-none"
            >
              {/* Phone Mockup Frame */}
              <div className="w-full aspect-[9/16] relative flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain pointer-events-none drop-shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Title & Badge */}
              <div className="text-center w-full pt-1">
                <span className="inline-block text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase tracking-wider mb-0.5">
                  {item.badge}
                </span>
                <p className="text-xs font-bold text-slate-800 truncate">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-slate-400 font-medium">
        Toque e arraste para explorar os materiais
      </p>
    </div>
  );
};
