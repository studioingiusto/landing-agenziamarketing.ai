import React from "react";
import { Check, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";

// Keywords used for SEO optimization (not displayed in UI):
// Automazione SEO AI
// AI SEO Keyword Research
// Contenuti SEO AI

export function BenefitsSection() {
  return (
    <div id="perche" className="w-full max-w-5xl mx-auto py-24">
      {/* Header */}
      <div className="text-center mb-12">
        {/* <div className="bg-[#2a193c]/80 backdrop-blur-sm rounded-full px-4 py-1 flex items-center gap-2 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
          <span className="bg-[#9c55ff] text-[10px] font-bold px-2 py-0.5 rounded-full">
            BENEFIT
          </span>
          <span className="text-[#a865ff] text-sm">
            Perché scegliere agenziamarketing.ai?
          </span>
        </div> */}

        <h2 className="text-3xl md:text-5xl font-medium font-title mb-6">
          <span className="gradient-text">
            Perché scegliere
            <br />
            agenziamarketing.ai?
          </span>
          {/* La SEO ora è semplice, veloce e automatizzata. */}
        </h2>
      </div>

      {/* Benefits List */}
      <div className="dashboard-card rounded-lg p-8 md:p-10 shadow-lg bg-[#2a193c]/85 backdrop-blur-sm border border-[#ffffff15] mb-12 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute top-0 right-0 bottom-0 left-0 -z-0 pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 grid grid-cols-5 md:grid-cols-8 grid-rows-8">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/5 relative">
                {i % 4 === 0 && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#9c55ff]/20 grid-dot-pulse"></div>
                )}
                {i % 7 === 0 && (
                  <div className="absolute bottom-1 right-1 w-2 h-2 border border-[#9c55ff]/30 rounded-sm"></div>
                )}
                {i % 9 === 0 && (
                  <div className="absolute top-1 left-1 w-1 h-1 bg-[#9c55ff]/15 rounded-full grid-dot-pulse" style={{ animationDelay: '2s' }}></div>
                )}
                {i % 13 === 0 && (
                  <div className="absolute bottom-1 left-1 w-1 h-2 bg-[#9c55ff]/10"></div>
                )}
                {i % 11 === 0 && (
                  <div className="absolute top-1 right-1 w-2 h-1 border-t border-r border-[#9c55ff]/20"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Tech Lines */}
          <div className="absolute h-px w-20 grid-line-horizontal top-1/4 right-1/4"></div>
          <div className="absolute h-px w-16 grid-line-horizontal bottom-1/3 right-1/5" style={{ animationDelay: '3s' }}></div>
          <div className="absolute h-16 w-px grid-line-vertical top-1/6 right-1/3" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute h-px w-24 grid-line-horizontal top-2/3 right-1/3" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute h-12 w-px grid-line-vertical bottom-1/4 right-1/6" style={{ animationDelay: '4s' }}></div>
          
          {/* Floating Partner Logos - Hidden on mobile, visible on md screens and up */}
          <div className="absolute right-0 top-0 bottom-0 w-3/5 md:w-1/2 pointer-events-none overflow-hidden z-10 hidden md:block">
            <div className="floating-logo absolute top-[25%] right-[15%] bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-white/30" 
                 style={{ '--rotation': '12deg' } as React.CSSProperties}>
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image 
                  src="/partners/wordpress.svg" 
                  alt="WordPress" 
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  priority
                />
              </div>
            </div>
            
            <div className="floating-logo absolute top-[30%] right-[45%] bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-white/30" 
                 style={{ '--rotation': '-8deg', animationDelay: '1.5s' } as React.CSSProperties}>
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image 
                  src="/partners/shopify.svg" 
                  alt="Shopify" 
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  priority
                />
              </div>
            </div>
            
            <div className="floating-logo absolute top-[50%] right-[25%] bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-white/30" 
                 style={{ '--rotation': '5deg', animationDelay: '0.8s' } as React.CSSProperties}>
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image 
                  src="/partners/google.svg" 
                  alt="Google" 
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  priority
                />
              </div>
            </div>
            
            <div className="floating-logo absolute top-[55%] right-[55%] bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-white/30" 
                 style={{ '--rotation': '-15deg', animationDelay: '2.2s' } as React.CSSProperties}>
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image 
                  src="/partners/answerthepublic.svg" 
                  alt="Answer The Public" 
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  priority
                />
              </div>
            </div>

            <div className="floating-logo absolute top-[70%] right-[35%] bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-white/30" 
                 style={{ '--rotation': '7deg', animationDelay: '1.8s' } as React.CSSProperties}>
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image 
                  src="/partners/zapier.svg" 
                  alt="Zapier" 
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Purple Gradient Overlay - Modified for desktop only */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a193c] via-[#2a193c]/80 to-transparent"></div>
        </div>
        
        <div className="space-y-8 flex flex-col relative z-10">
          <div className="max-w-lg w-full">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-[#9c55ff]" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-white text-lg font-medium mb-1">Analisi SEO istantanea</h3>
                <p className="text-white/70">L'AI scansiona il tuo sito e trova subito errori che ti bloccano in SERP.</p>
              </div>
            </div>
          </div>

          <div className="max-w-lg w-full">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-[#9c55ff]" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-white text-lg font-medium mb-1">Keyword AI Predittiva</h3>
                <p className="text-white/70">Scopri le keyword vincenti prima dei tuoi competitor con accesso diretto ai dati Google</p>
              </div>
            </div>
          </div>

          <div className="max-w-lg w-full">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-[#9c55ff]" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-white text-lg font-medium mb-1">Creazione automatica di contenuti SEO-ready</h3>
                <p className="text-white/70">Articoli, schede prodotto e copy in pochi secondi.</p>
              </div>
            </div>
          </div>

          <div className="max-w-lg w-full">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-[#9c55ff]" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-white text-lg font-medium mb-1">Monitoraggio e ottimizzazione continua</h3>
                <p className="text-white/70">Strategia basata sui tuoi dati, non su template generici. <br />L'AI migliora la tua strategia ogni giorno.</p>
              </div>
            </div>
          </div>

          <div className="max-w-lg w-full">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-[#9c55ff]" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-white text-lg font-medium mb-1">Pubblicazione diretta</h3>
                <p className="text-white/70">Integra il contenuto generato su WordPress, Shopify e altri CMS e schedula la pubblicazione.</p>
              </div>
            </div>
          </div>
          
          {/* Mobile Partner Logos - Now in the main content flow */}
          <div className="flex justify-center items-center gap-3 pt-6 mt-4 border-t border-white/10 md:hidden">
            <div className="floating-logo bg-white/20 backdrop-blur-sm p-2 rounded-lg shadow-lg w-12 h-12 flex items-center justify-center border border-white/30"
                 style={{ '--rotation': '12deg' } as React.CSSProperties}>
              <div className="relative w-8 h-8">
                <Image 
                  src="/partners/wordpress.svg" 
                  alt="WordPress" 
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  priority
                />
              </div>
            </div>
            
            <div className="floating-logo bg-white/20 backdrop-blur-sm p-2 rounded-lg shadow-lg w-12 h-12 flex items-center justify-center border border-white/30"
                 style={{ '--rotation': '-8deg', animationDelay: '1.5s' } as React.CSSProperties}>
              <div className="relative w-8 h-8">
                <Image 
                  src="/partners/shopify.svg" 
                  alt="Shopify" 
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  priority
                />
              </div>
            </div>
            
            <div className="floating-logo bg-white/20 backdrop-blur-sm p-2 rounded-lg shadow-lg w-12 h-12 flex items-center justify-center border border-white/30"
                 style={{ '--rotation': '5deg', animationDelay: '0.8s' } as React.CSSProperties}>
              <div className="relative w-8 h-8">
                <Image 
                  src="/partners/google.svg" 
                  alt="Google" 
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  priority
                />
              </div>
            </div>
            
            <div className="floating-logo bg-white/20 backdrop-blur-sm p-2 rounded-lg shadow-lg w-12 h-12 flex items-center justify-center border border-white/30"
                 style={{ '--rotation': '-15deg', animationDelay: '2.2s' } as React.CSSProperties}>
              <div className="relative w-8 h-8">
                <Image 
                  src="/partners/answerthepublic.svg" 
                  alt="Answer The Public" 
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  priority
                />
              </div>
            </div>
            
            <div className="floating-logo bg-white/20 backdrop-blur-sm p-2 rounded-lg shadow-lg w-12 h-12 flex items-center justify-center border border-white/30"
                 style={{ '--rotation': '7deg', animationDelay: '1.8s' } as React.CSSProperties}>
              <div className="relative w-8 h-8">
                <Image 
                  src="/partners/zapier.svg" 
                  alt="Zapier" 
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 dashboard-card rounded-lg p-6 flex flex-col items-center text-center">
          <TrendingUp className="h-12 w-12 text-[#9c55ff] mb-4" />
          <h3 className="text-white text-xl font-medium mb-2">
            {/* Più traffico, meno lavoro. */}
            Risultati reali, meno spesa e più intelligenza.
          </h3>
          {/* <p className="text-white/70">
            Ottimizza la tua presenza online con meno sforzo e risultati
            migliori.
          </p> */}
        </div>

        <div className="flex-1 dashboard-card rounded-lg p-6 flex flex-col items-center text-center">
          <Zap className="h-12 w-12 text-[#9c55ff] mb-4" />
          <h3 className="text-white text-xl font-medium mb-2">
            agenziamarketing.ai fa il lavoro per te.
          </h3>
          {/* <p className="text-white/70">
            La potenza dell'AI applicata alla SEO per risultati immediati.
          </p> */}
        </div>
      </div>
    </div>
  );
}
