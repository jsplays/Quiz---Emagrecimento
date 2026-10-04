import React, { useState } from 'react';
import { X, Search, Sparkles, Check, ArrowRight, BookOpen, MinusCircle, CheckCircle2 } from 'lucide-react';
import { SMART_SUBSTITUTIONS_SAMPLE } from '../data/quizData';

interface SubstitutionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBuy: () => void;
}

export const SubstitutionsModal: React.FC<SubstitutionsModalProps> = ({ isOpen, onClose, onBuy }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filtered = SMART_SUBSTITUTIONS_SAMPLE.filter(
    (item) =>
      item.original.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.substitute.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-white leading-tight">
                Buscador de 150 Substituições Inteligentes
              </h3>
              <p className="text-[11px] text-slate-300">
                Prévia interativa do bônus incluído no acesso
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-slate-100 bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Pesquise por: pão, doce, refrigerante, salada..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
            />
          </div>
          <p className="text-[11px] text-slate-500 mt-2 flex items-center justify-between">
            <span>Exibindo {filtered.length} exemplos práticos</span>
            <span className="font-semibold text-emerald-800">Comida de verdade</span>
          </p>
        </div>

        {/* Cards Scrollable Body */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1 bg-slate-50/50">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-slate-600 text-xs">
              Nenhum item encontrado com esse termo. O guia completo contém 150 trocas catalogadas.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded font-mono">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-mono">
                    {item.caloricReduction}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-rose-50/60 border border-rose-100">
                    <span className="text-[10px] font-bold text-rose-700 flex items-center gap-1 mb-1">
                      <MinusCircle className="w-3 h-3" />
                      Evitar:
                    </span>
                    <p className="font-medium text-slate-800">{item.original}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="text-[10px] font-bold text-emerald-800 flex items-center gap-1 mb-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Substituir por:
                    </span>
                    <p className="font-semibold text-emerald-950">{item.substitute}</p>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 leading-normal">
                  <strong className="text-slate-800">Por que desincha:</strong> {item.benefit}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Modal CTA Footer */}
        <div className="p-4 border-t border-slate-100 bg-white space-y-2">
          <button
            onClick={() => {
              onClose();
              onBuy();
            }}
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <span>LIBERAR AS 150 SUBSTITUIÇÕES POR R$ 19,90</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-center text-[10px] text-slate-400">
            Acesso imediato no celular · Garantia incondicional de 7 dias
          </p>
        </div>
      </div>
    </div>
  );
};
