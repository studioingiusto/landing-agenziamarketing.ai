"use client";
import {
  ChevronRight,
  Globe,
  Sparkles,
  Target,
  BarChart3,
  Zap,
  CheckCircle2,
  FileText,
  ArrowUpRight,
  ArrowRight,
  Menu,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <h1 className="text-5xl md:text-7xl mb-6 max-w-4xl font-medium !leading-[1.1] font-title">
        <span className="gradient-text">
          SEO senza limiti.
          <br />
          Inserisci il tuo sito,
          <br />
          l'AI fa il resto.
        </span>
      </h1>

      <p className="text-white/90 max-w-3xl mb-10 text-xl font-normal">
        agenziamarketing.ai ti restituisce in pochi minuti un'analisi SEO
        completa, keyword vincenti e contenuti già pronti da pubblicare.
      </p>

      <Link
        href="#form"
        className="bg-white text-[#2a193c] mb-10 px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors font-title shadow-[0_4px_20px_rgba(255,255,255,0.3)] scroll-smooth"
        onClick={(e) => {
          e.preventDefault();
          const formElement = document.getElementById("form");
          if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Prova ora
      </Link>

      {/* Dashboard Preview - Desktop (hidden on small screens) */}
      <div className="w-full max-w-5xl dashboard-container hidden md:block">
        <div className="bg-[#020103]/90 backdrop-blur-md rounded-lg border border-[#ffffff15] overflow-hidden">
          {/* Browser Controls */}
          <div className="flex items-center gap-1 p-2 border-b border-[#ffffff10] bg-[#0f0a16]">
            <div className="flex gap-1.5 pl-1">
              <div className="browser-dot red"></div>
              <div className="browser-dot yellow"></div>
              <div className="browser-dot green"></div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 border-r border-[#ffffff10] p-4 bg-[#1a0f26]/70 backdrop-blur-sm">
              <div className="dashboard-card rounded-md p-3 flex items-center gap-2 mb-4">
                <span className="text-white font-medium font-title text-sm">
                  agenziamarketing.ai
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 p-2 text-white bg-[#9c55ff]/20 rounded-md">
                  <div className="w-5 h-5 rounded-full bg-[#9c55ff] flex items-center justify-center text-xs text-white font-medium">
                    1
                  </div>
                  <span className="text-sm">Setup sito web</span>
                </div>
                <div className="flex items-center gap-2 p-2 text-white/70 hover:text-white">
                  <div className="w-5 h-5 rounded-full bg-[#ffffff20] flex items-center justify-center text-xs text-white/70 font-medium">
                    2
                  </div>
                  <span className="text-sm">Ricerca Keywords</span>
                </div>
                <div className="flex items-center gap-2 p-2 text-white/70 hover:text-white">
                  <div className="w-5 h-5 rounded-full bg-[#ffffff20] flex items-center justify-center text-xs text-white/70 font-medium">
                    3
                  </div>
                  <span className="text-sm">Strategia SEO contenuti</span>
                </div>
                <div className="flex items-center gap-2 p-2 text-white/70 hover:text-white">
                  <div className="w-5 h-5 rounded-full bg-[#ffffff20] flex items-center justify-center text-xs text-white/70 font-medium">
                    4
                  </div>
                  <span className="text-sm">Generazione contenuti</span>
                </div>
                <div className="flex items-center gap-2 p-2 text-white/70 hover:text-white">
                  <div className="w-5 h-5 rounded-full bg-[#ffffff20] flex items-center justify-center text-xs text-white/70 font-medium">
                    5
                  </div>
                  <span className="text-sm">Pubblicazione e gestione</span>
                </div>
              </div>
            </div>

            {/* Main Content - Setup Wizard */}
            <div className="flex-1 p-4 bg-[#150a1f]/80 backdrop-blur-sm">
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-white/90 text-lg font-title">
                    Setup sito web
                  </div>
                  <div className="ml-2 bg-[#9c55ff] text-white text-xs px-2 py-0.5 rounded-full">
                    Step 1 di 5
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-[#2a193c] hover:bg-[#3a294c] text-white/80 px-3 py-1.5 rounded-md text-sm transition-colors">
                    Salta
                  </button>
                  <button className="bg-[#9c55ff] hover:bg-[#a865ff] text-white px-3 py-1.5 rounded-md text-sm transition-colors shadow-[0_0_10px_rgba(156,85,255,0.3)] flex items-center gap-1">
                    Prossimo
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Multiple "Screenshots" in a Carousel-like Layout */}
              <div className="relative">
                {/* Screenshot 1: Website Setup */}
                <div className="dashboard-card rounded-md p-5 mb-4">
                  <h3 className="text-white text-lg font-title mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-[#9c55ff]" />
                    Inserisci il tuo sito web
                  </h3>

                  <div className="mb-6">
                    <p className="text-white/80 text-sm mb-4">
                      Analizzeremo il tuo sito web per identificare le
                      opportunità SEO e creare una strategia personalizzata.
                    </p>

                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Globe className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                        <div className="flex-1 bg-[#2a193c]/70 border border-[#ffffff20] rounded-lg px-4 py-3 text-white/50 focus:outline-none focus:ring-2 focus:ring-[#9c55ff]/50">
                          https://agenziamarketing.ai
                        </div>
                      </div>
                      <button className="bg-[#9c55ff] px-4 py-2 rounded-md text-white font-medium shadow-[0_0_10px_rgba(156,85,255,0.3)] hover:bg-[#a865ff] transition-colors">
                        Analizza
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="dashboard-card rounded-md p-3 flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-[#9c55ff]/20 flex items-center justify-center mb-2">
                        <Sparkles className="w-5 h-5 text-[#9c55ff]" />
                      </div>
                      <h4 className="text-white text-sm font-medium mb-1">
                        Analisi di mercato
                      </h4>
                      <p className="text-white/60 text-xs">
                        Scansiona il tuo sito con i nostri algoritmi AI avanzati
                      </p>
                    </div>

                    <div className="dashboard-card rounded-md p-3 flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-[#9c55ff]/20 flex items-center justify-center mb-2">
                        <Target className="w-5 h-5 text-[#9c55ff]" />
                      </div>
                      <h4 className="text-white text-sm font-medium mb-1">
                        Analisi dei competitor
                      </h4>
                      <p className="text-white/60 text-xs">
                        Scopri come ti posizioni rispetto ai tuoi competitor
                      </p>
                    </div>

                    <div className="dashboard-card rounded-md p-3 flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-[#9c55ff]/20 flex items-center justify-center mb-2">
                        <BarChart3 className="w-5 h-5 text-[#9c55ff]" />
                      </div>
                      <h4 className="text-white text-sm font-medium mb-1">
                        Metriche di performance
                      </h4>
                      <p className="text-white/60 text-xs">
                        Monitora il tuo progresso SEO nel tempo
                      </p>
                    </div>
                  </div>
                </div>

                {/* Screenshot 2: Analysis in Progress (Partially Visible) */}
                <div className="dashboard-card rounded-md p-5 mb-4 transform translate-y-4 scale-95 opacity-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#150a1f] opacity-50 rounded-md pointer-events-none"></div>

                  <h3 className="text-white text-lg font-title mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-[#9c55ff]" />
                    Analizziamo il tuo sito web
                  </h3>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">
                        agenziamarketing.ai
                      </span>
                      <span className="text-white/60 text-xs">
                        67% completato
                      </span>
                    </div>

                    <div className="w-full h-2 bg-[#2a193c] rounded-full overflow-hidden mb-3">
                      <div className="h-full bg-[#9c55ff] rounded-full w-[67%]"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="dashboard-card rounded-md p-3">
                      <div className="flex items-center mb-2">
                        <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#4ade80]" />
                        <h4 className="text-white text-sm">SEO tecnica</h4>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">
                          Velocità di caricamento pagina
                        </span>
                        <span className="text-[#4ade80]">Ottimo</span>
                      </div>
                    </div>

                    <div className="dashboard-card rounded-md p-3">
                      <div className="flex items-center mb-2">
                        <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#4ade80]" />
                        <h4 className="text-white text-sm">
                          Analisi dei contenuti
                        </h4>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Numero di parole</span>
                        <span className="text-white/80">1,245</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screenshot 3: Strategy (Even Less Visible) */}
                <div className="dashboard-card rounded-md p-5 transform translate-y-8 scale-90 opacity-60 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#150a1f] opacity-70 rounded-md pointer-events-none"></div>

                  <h3 className="text-white text-lg font-title mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-[#9c55ff]" />
                    La tua strategia SEO
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="dashboard-card rounded-md p-3">
                      <h4 className="text-white text-sm font-medium mb-2">
                        Keywords suggerite
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-2 py-0.5 rounded">
                          strategia seo
                        </span>
                        <span className="bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-2 py-0.5 rounded">
                          strumenti seo ai
                        </span>
                        <span className="bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-2 py-0.5 rounded">
                          ottimizzazione contenuti
                        </span>
                      </div>
                    </div>

                    <div className="dashboard-card rounded-md p-3">
                      <h4 className="text-white text-sm font-medium mb-2">
                        Piano dei contenuti
                      </h4>
                      <div className="flex items-center text-white/80 text-xs">
                        <ArrowUpRight className="w-3.5 h-3.5 mr-1.5 text-[#9c55ff]" />
                        Genera 3 post blog al mese
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#9c55ff]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffffff30]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffffff30]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffffff30]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffffff30]"></div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="flex justify- mt-6">
                <div className="flex gap-3">
                  <button className="bg-[#2a193c] hover:bg-[#3a294c] text-white/80 px-4 py-2 rounded-md text-sm transition-colors">
                    Salva step
                  </button>
                  <button className="bg-[#9c55ff] hover:bg-[#a865ff] text-white px-4 py-2 rounded-md text-sm transition-colors shadow-[0_0_10px_rgba(156,85,255,0.3)] flex items-center gap-1.5">
                    Continua
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dashboard Preview (visible only on small screens) */}
      <div className="w-full max-w-xs dashboard-container md:hidden">
        <div className="mobile-device">
          {/* Mobile Device Frame */}
          <div className="mobile-frame bg-[#020103] overflow-hidden border-4 border-[#2a193c] shadow-[0_0_80px_rgba(156,85,255,0.4)]">
            {/* App Header */}
            <div className="bg-[#1a0f26] px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-white font-medium font-title text-sm">
                  agenziamarketing.ai
                </span>
              </div>
              <button className="text-white">
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Content */}
            <div className="bg-[#150a1f] h-[500px] overflow-y-auto p-4">
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-white/90 text-sm font-title">
                    Setup sito web
                  </div>
                  <div className="ml-2 bg-[#9c55ff] text-white text-[10px] px-2 py-0.5 rounded-full">
                    Step 1 di 5
                  </div>
                </div>
              </div>

              {/* URL Input */}
              <div className="dashboard-card rounded-md p-4 mb-4">
                <h3 className="text-white text-sm font-title mb-3 flex items-center">
                  <Globe className="w-4 h-4 mr-1.5 text-[#9c55ff]" />
                  Inserisci il tuo sito web
                </h3>

                <p className="text-white/80 text-xs mb-3">
                  Analizzeremo il tuo sito web per identificare opportunità SEO.
                </p>

                <div className="relative mb-3">
                  <Globe className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                  <div className="flex-1 bg-[#2a193c]/70 border border-[#ffffff20] rounded-lg px-4 py-3 text-sm text-white/50 focus:outline-none focus:ring-2 focus:ring-[#9c55ff]/50">
                    https://agenziamarketing.ai
                  </div>
                </div>

                <button className="w-full bg-[#9c55ff] py-2.5 rounded-md text-white font-medium shadow-[0_0_10px_rgba(156,85,255,0.3)] hover:bg-[#a865ff] transition-colors text-sm">
                  Analizza
                </button>
              </div>

              {/* Features */}
              <h3 className="text-white text-sm font-title mb-3">
                Funzionalità chiave
              </h3>

              <div className="space-y-3 mb-4">
                <div className="dashboard-card rounded-md p-3 flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#9c55ff]/20 flex-shrink-0 flex items-center justify-center mr-3">
                    <Sparkles className="w-4 h-4 text-[#9c55ff]" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-white text-xs font-medium mb-1">
                      Analisi di mercato
                    </h4>
                    <p className="text-white/60 text-[11px]">
                      Scansiona il tuo sito con i nostri algoritmi AI avanzati
                    </p>
                  </div>
                </div>

                <div className="dashboard-card rounded-md p-3 flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#9c55ff]/20 flex-shrink-0 flex items-center justify-center mr-3">
                    <Target className="w-4 h-4 text-[#9c55ff]" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-white text-xs font-medium mb-1">
                      Analisi dei competitor
                    </h4>
                    <p className="text-white/60 text-[11px]">
                      Scopri come ti posizioni rispetto ai tuoi competitor
                    </p>
                  </div>
                </div>

                <div className="dashboard-card rounded-md p-3 flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#9c55ff]/20 flex-shrink-0 flex items-center justify-center mr-3">
                    <BarChart3 className="w-4 h-4 text-[#9c55ff]" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-white text-xs font-medium mb-1">
                      Metriche di performance
                    </h4>
                    <p className="text-white/60 text-[11px]">
                      Monitora il tuo progresso SEO nel tempo
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional "Screenshots" in a Carousel-like Layout (Mobile) */}
              <div className="relative mt-6 mb-6">
                {/* Screenshot 2: Analysis in Progress (Partially Visible) */}
                <div className="dashboard-card rounded-md p-4 mb-3 transform translate-y-2 scale-95 opacity-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#150a1f] opacity-50 rounded-md pointer-events-none"></div>

                  <h3 className="text-white text-sm font-title mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-1.5 text-[#9c55ff]" />
                    Analizziamo il tuo sito web
                  </h3>

                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-white/80 text-xs">
                        agenziamarketing.ai
                      </span>
                      <span className="text-white/60 text-[10px]">
                        67% completato
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-[#2a193c] rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-[#9c55ff] rounded-full w-[67%]"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="dashboard-card rounded-md p-2">
                      <div className="flex items-center mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-[#4ade80]" />
                        <h4 className="text-white text-xs">SEO tecnica</h4>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-white/60 text-left">
                          Velocità di caricamento pagina
                        </span>
                        <span className="text-[#4ade80]">Ottimo</span>
                      </div>
                    </div>

                    <div className="dashboard-card rounded-md p-2">
                      <div className="flex items-center mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-[#4ade80]" />
                        <h4 className="text-white text-xs">Contenuti</h4>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-white/60">Parole</span>
                        <span className="text-white/80">1,245</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screenshot 3: Strategy (Even Less Visible) */}
                <div className="dashboard-card rounded-md p-4 transform translate-y-4 scale-90 opacity-60 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#150a1f] opacity-70 rounded-md pointer-events-none"></div>

                  <h3 className="text-white text-sm font-title mb-3 flex items-center">
                    <FileText className="w-4 h-4 mr-1.5 text-[#9c55ff]" />
                    La tua strategia SEO
                  </h3>

                  <div className="space-y-2">
                    <div className="dashboard-card rounded-md p-2">
                      <h4 className="text-white text-xs font-medium mb-1.5">
                        Keywords suggerite
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-[#9c55ff]/20 text-[#9c55ff] text-[10px] px-1.5 py-0.5 rounded">
                          strategia seo
                        </span>
                        <span className="bg-[#9c55ff]/20 text-[#9c55ff] text-[10px] px-1.5 py-0.5 rounded">
                          strumenti seo ai
                        </span>
                      </div>
                    </div>

                    <div className="dashboard-card rounded-md p-2">
                      <h4 className="text-white text-xs font-medium mb-1.5">
                        Piano dei contenuti
                      </h4>
                      <div className="flex items-center text-white/80 text-[10px]">
                        <ArrowUpRight className="w-3 h-3 mr-1 text-[#9c55ff]" />
                        Genera 3 post blog al mese
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots (Mobile) */}
              <div className="flex justify-center mb-4 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#9c55ff]"></div>
                <div className="w-2 h-2 rounded-full bg-[#ffffff30]"></div>
                <div className="w-2 h-2 rounded-full bg-[#ffffff30]"></div>
                <div className="w-2 h-2 rounded-full bg-[#ffffff30]"></div>
                <div className="w-2 h-2 rounded-full bg-[#ffffff30]"></div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-[#2a193c] hover:bg-[#3a294c] text-white/80 py-2.5 rounded-md text-xs transition-colors">
                  Skip
                </button>
                <button className="flex-1 bg-[#9c55ff] hover:bg-[#a865ff] text-white py-2.5 rounded-md text-xs transition-colors shadow-[0_0_10px_rgba(156,85,255,0.3)] flex items-center justify-center gap-1">
                  Continue
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
