import React from 'react';
import { Clock, Calendar, FileQuestion, Users, X, Check, ArrowRight } from 'lucide-react';

export function ComparisonSection() {
  return (
    <div id='prima-dopo' className="w-full max-w-5xl mx-auto py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-medium font-title mb-6">
          <span className="gradient-text">La SEO ora è semplice, veloce e automatizzata.</span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Scopri la differenza prima e dopo l'utilizzo di agenziamarketing.ai
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Before Column */}
        <div className="space-y-6 flex flex-col">
          <div className="bg-[#2a193c]/80 backdrop-blur-sm rounded-lg px-6 py-4 flex items-center gap-2 justify-center shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <span className="text-white/80 text-xl font-medium font-title relative">
              Prima <span className="text-[#ff6b6b]">senza</span> agenziamarketing.ai
              <div className="absolute -bottom-2 w-full h-0.5 bg-[#ff6b6b]/70"></div>
            </span>
          </div>

          <div className="dashboard-card rounded-lg p-6 shadow-lg bg-[#2a193c]/85 backdrop-blur-sm border border-[#ffffff10] flex-grow flex flex-col">
            <div className="space-y-4 flex-grow">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <div className="h-6 w-6 rounded-full bg-[#ff6b6b]/20 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-[#ff6b6b]" />
                  </div>
                </div>
                <div className='text-left'>
                  <h3 className="text-white text-lg font-medium mb-1">Giorni di ricerca manuale</h3>
                  <p className="text-white/70">Ore investite in ricerche di keyword e analisi dei competitor senza garanzia di risultati.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <div className="h-6 w-6 rounded-full bg-[#ff6b6b]/20 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-[#ff6b6b]" />
                  </div>
                </div>
                <div className='text-left'>
                  <h3 className="text-white text-lg font-medium mb-1">Settimane per creare contenuti</h3>
                  <p className="text-white/70">Tempi lunghi di produzione di articoli e contenuti ottimizzati.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <div className="h-6 w-6 rounded-full bg-[#ff6b6b]/20 flex items-center justify-center">
                    <FileQuestion className="h-4 w-4 text-[#ff6b6b]" />
                  </div>
                </div>
                <div className='text-left'>
                  <h3 className="text-white text-lg font-medium mb-1">Strategia incerta</h3>
                  <p className="text-white/70">Difficoltà nel sapere quali azioni portano realmente risultati SEO.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <div className="h-6 w-6 rounded-full bg-[#ff6b6b]/20 flex items-center justify-center">
                    <Users className="h-4 w-4 text-[#ff6b6b]" />
                  </div>
                </div>
                <div className='text-left'>
                  <h3 className="text-white text-lg font-medium mb-1">Team e freelancer costosi</h3>
                  <p className="text-white/70">Spese elevate per assumere e gestire professionisti SEO.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#ffffff15] text-center">
              <div className="flex items-center justify-center space-x-4">
                <X className="h-6 w-6 text-[#ff6b6b]" />
                <span className="text-white/70">Investimento elevato</span>
                <X className="h-6 w-6 text-[#ff6b6b]" />
                <span className="text-white/70">Risultati incerti</span>
              </div>
            </div>
          </div>
        </div>

        {/* After Column */}
        <div className="space-y-6 flex flex-col">
          <div className="bg-[#2a193c]/80 backdrop-blur-sm rounded-lg px-6 py-4 flex items-center gap-2 justify-center shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <span className="text-white/80 text-xl font-medium font-title relative">
              Dopo <span className="text-[#9c55ff]">con</span> agenziamarketing.ai
              <div className="absolute -bottom-2 w-full h-0.5 bg-[#9c55ff]/70"></div>
            </span>
          </div>

          <div className="dashboard-card rounded-lg p-6 shadow-lg bg-[#2a193c]/85 backdrop-blur-sm border border-[#ffffff10] flex-grow flex flex-col">
            <div className="space-y-4 flex-grow">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <div className="h-6 w-6 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-[#9c55ff]" />
                  </div>
                </div>
                <div className='text-left'>
                  <h3 className="text-white text-lg font-medium mb-1">Analisi in pochi secondi</h3>
                  <p className="text-white/70">L'AI analizza il tuo sito ed estrae keywords vincenti in pochi istanti.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <div className="h-6 w-6 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-[#9c55ff]" />
                  </div>
                </div>
                <div className='text-left'>
                  <h3 className="text-white text-lg font-medium mb-1">Contenuti immediati</h3>
                  <p className="text-white/70">Generazione automatica di articoli e copy ottimizzati per Google.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <div className="h-6 w-6 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-[#9c55ff]" />
                  </div>
                </div>
                <div className='text-left'>
                  <h3 className="text-white text-lg font-medium mb-1">Strategia basata sui dati</h3>
                  <p className="text-white/70">Raccomandazioni SEO precise e personalizzate per il tuo business.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <div className="h-6 w-6 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-[#9c55ff]" />
                  </div>
                </div>
                <div className='text-left'>
                  <h3 className="text-white text-lg font-medium mb-1">Tutto in un unico strumento</h3>
                  <p className="text-white/70">Eliminazione di costi per team e strumenti multipli.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#ffffff15] text-center">
              <div className="flex items-center justify-center space-x-4">
                <Check className="h-6 w-6 text-[#9c55ff]" />
                <span className="text-white/70">Costi ridotti</span>
                <Check className="h-6 w-6 text-[#9c55ff]" />
                <span className="text-white/70">Risultati rapidi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center arrow for desktop */}
      {/* <div className="hidden md:flex justify-center my-8 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-[#9c55ff] rounded-full p-3 shadow-[0_0_15px_rgba(156,85,255,0.7)]">
            <ArrowRight className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff6b6b] to-[#9c55ff] transform -translate-y-1/2"></div>
      </div> */}
    </div>
  );
} 