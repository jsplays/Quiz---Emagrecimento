import React, { useState, useEffect } from 'react';
import { X, Check, Copy, ShieldCheck, Lock, Sparkles, CheckCircle2, ArrowRight, Clock, QrCode } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const pixCode = '00020101021226840014br.gov.bcb.pix2562pix.protocoloverao42.com.br/qr/v2/cddl2mgrd5ht520400005303986540519.905802BR5922PROTOCOLO VERAO 426009SAO PAULO62070503***63048E2F';

  const handleCopyPix = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(pixCode);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSimulatePayment = () => {
    setIsPaid(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold tracking-wider uppercase font-mono">
              CHECKOUT SEGURO · PROTOCOLO VERÃO 42
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {isPaid ? (
            /* Success State */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">
                  Acesso Liberado com Sucesso!
                </h3>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Seja muito bem-vinda ao <strong>Protocolo Verão 42</strong>. Seus dados de acesso foram enviados para o seu e-mail e WhatsApp.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Próximos passos imediatos:
                </p>
                <ul className="space-y-1 text-slate-700 pl-4 list-disc">
                  <li>Inicie pelo <strong>Desafio 7 Dias Anti-Inchaço</strong></li>
                  <li>Salve o link do seu guia na tela inicial do seu celular</li>
                  <li>Acesse o <strong>Buscador de 150 Trocas</strong> antes das suas compras</li>
                </ul>
              </div>

              <button
                onClick={() => {
                  alert('Demonstração concluída com sucesso! Seu acesso simulado foi validado.');
                  setIsPaid(false);
                  onClose();
                }}
                className="w-full py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>ACESSAR O MATERIAL AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Checkout Flow */
            <>
              {/* Order Summary Card */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Protocolo Verão 42 + Todos os 6 Bônus
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Acesso imediato no celular · Garantia 7 dias
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 line-through block font-mono">
                    De R$ 436,00
                  </span>
                  <span className="text-base font-extrabold text-emerald-700 tabular-nums font-mono">
                    R$ 19,90
                  </span>
                </div>
              </div>

              {/* Payment Method Switcher */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`py-2 px-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    paymentMethod === 'pix'
                      ? 'bg-white text-emerald-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  PIX (Aprovação Imediata)
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2 px-3 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Cartão de Crédito
                </button>
              </div>

              {paymentMethod === 'pix' ? (
                /* PIX Box */
                <div className="space-y-3.5">
                  <div className="text-center space-y-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full font-mono">
                      <Clock className="w-3.5 h-3.5 text-amber-700" />
                      Valor promocional expira em {formattedTime}
                    </span>
                    <p className="text-xs text-slate-600">
                      Escaneie o QR Code no aplicativo do seu banco ou copie a chave:
                    </p>
                  </div>

                  {/* QR Code Graphic Box */}
                  <div className="p-4 bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center shadow-xs">
                    <div className="relative w-40 h-40 bg-slate-900 p-2.5 rounded-xl flex items-center justify-center">
                      <div className="w-full h-full bg-white rounded-lg p-2 grid grid-cols-6 gap-1">
                        <div className="bg-slate-900 col-span-2 row-span-2 rounded-sm" />
                        <div className="bg-slate-900" />
                        <div className="bg-slate-900" />
                        <div className="bg-slate-900 col-span-2 row-span-2 rounded-sm" />
                        <div className="bg-slate-900 col-span-2" />
                        <div className="bg-slate-900 col-span-2" />
                        <div className="bg-slate-900" />
                        <div className="bg-emerald-600 rounded-sm flex items-center justify-center">
                          <span className="text-[7px] text-white font-black">42</span>
                        </div>
                        <div className="bg-slate-900" />
                        <div className="bg-slate-900" />
                        <div className="bg-slate-900 col-span-2 row-span-2 rounded-sm" />
                        <div className="bg-slate-900" />
                        <div className="bg-slate-900" />
                        <div className="bg-slate-900" />
                        <div className="bg-slate-900" />
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono mt-2">
                      Valor exato: R$ 19,90 (sem taxas adicionais)
                    </span>
                  </div>

                  {/* Copy Paste Code Box */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-slate-700 block">
                      Código PIX Copia e Cola:
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        readOnly
                        value={pixCode}
                        className="flex-1 py-2 px-3 bg-slate-100 border border-slate-200 rounded-xl text-[11px] font-mono text-slate-600 select-all"
                      />
                      <button
                        onClick={handleCopyPix}
                        className="py-2 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-white" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar PIX</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirmation Button */}
                  <button
                    onClick={handleSimulatePayment}
                    className="w-full py-4 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all mt-2"
                  >
                    <span>JÁ FIZ O PIX, LIBERAR MEU ACESSO</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                /* Card Form */
                <div className="space-y-3 py-2 text-xs">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Número do Cartão:
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Validade:</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">CVV:</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSimulatePayment}
                    className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md mt-2 cursor-pointer"
                  >
                    Pagar R$ 19,90 no Cartão (ou 2x R$ 10,38)
                  </button>
                </div>
              )}

              {/* Security Seals */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-around text-[10px] text-slate-500">
                <span className="flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  7 Dias de Garantia
                </span>
                <span>|</span>
                <span>Criptografia 256-bit</span>
                <span>|</span>
                <span>Acesso Imediato</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
