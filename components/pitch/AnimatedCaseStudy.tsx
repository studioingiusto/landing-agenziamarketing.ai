"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Search, 
  MapPin, 
  TrendingUp, 
  FileText, 
  Lightbulb,
  CheckCircle,
  Sparkles,
  Clock,
  User,
  Cpu,
  ArrowRight,
  Target,
  Zap
} from "lucide-react";

type Phase = "intro" | "analysis" | "opportunity" | "decision" | "output" | "value";

export const AnimatedCaseStudy = () => {
  const [phase, setPhase] = useState<Phase>("intro");
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [showOutputs, setShowOutputs] = useState<number[]>([]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "intro") {
      timeout = setTimeout(() => setPhase("analysis"), 3000);
    } else if (phase === "analysis") {
      if (analysisProgress < 100) {
        timeout = setTimeout(() => {
          setAnalysisProgress(Math.min(analysisProgress + 4, 100));
        }, 50);
      } else {
        timeout = setTimeout(() => setPhase("opportunity"), 1500);
      }
    } else if (phase === "opportunity") {
      timeout = setTimeout(() => setPhase("decision"), 3000);
    } else if (phase === "decision") {
      timeout = setTimeout(() => setPhase("output"), 3000);
    } else if (phase === "output") {
      if (showOutputs.length < 3) {
        timeout = setTimeout(() => {
          setShowOutputs([...showOutputs, showOutputs.length]);
        }, 800);
      } else {
        timeout = setTimeout(() => setPhase("value"), 1500);
      }
    } else if (phase === "value") {
      timeout = setTimeout(() => {
        setPhase("intro");
        setAnalysisProgress(0);
        setShowOutputs([]);
      }, 4000);
    }

    return () => clearTimeout(timeout);
  }, [phase, analysisProgress, showOutputs]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="dashboard-card rounded-2xl p-6 md:p-8 border-2 border-[#9c55ff]/20">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
            Case Study: Agenzia Locale + Cliente Pisa
          </h3>
          <p className="text-white/60 text-sm">
            Come l'AI strategist lavora in azione
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* Phase 1: Intro - Setup */}
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-center gap-8 mb-8">
                {/* Agency */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                    <User className="w-10 h-10 text-blue-400" />
                  </div>
                  <div className="text-white font-semibold">Agenzia Locale</div>
                  <div className="text-white/60 text-xs">Cliente: Pisa</div>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <ArrowRight className="w-8 h-8 text-[#9c55ff]" />
                </motion.div>

                {/* AI Agent */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-[#9c55ff]/20 flex items-center justify-center mx-auto mb-3 relative">
                    <Cpu className="w-10 h-10 text-[#9c55ff]" />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#9c55ff]"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="text-white font-semibold">AI Strategist</div>
                  <div className="text-white/60 text-xs">Guided Strategy</div>
                </motion.div>
              </div>

              {/* Input Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="dashboard-card rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Search className="w-5 h-5 text-[#9c55ff]" />
                  <span className="text-white font-semibold">Keyword Target</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#9c55ff] mb-2">
                  "consulenza SEO Pisa"
                </div>
                <div className="flex items-center justify-center gap-1 text-white/60 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Local SEO opportunity</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Phase 2: SERP Analysis */}
          {phase === "analysis" && (
            <motion.div
              key="analysis"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                  <Search className="w-6 h-6 text-[#9c55ff]" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Analisi SERP</div>
                  <div className="text-white/60 text-sm">Nodo 2: Keyword Research</div>
                </div>
              </div>

              {/* SERP Results Mockup */}
              <div className="space-y-3">
                {[
                  { type: "directory", title: "Directory SEO Italia", domain: "seoitalia.it", icon: "🗂️" },
                  { type: "directory", title: "Elenco Consulenti Pisa", domain: "consulentipisa.com", icon: "📋" },
                  { type: "competitor", title: "Agenzia Competitor 1", domain: "competitor1.it", icon: "🏢" },
                  { type: "competitor", title: "Agenzia Competitor 2", domain: "competitor2.it", icon: "🏢" },
                ].map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className={`p-4 rounded-lg border ${
                      result.type === "directory"
                        ? "border-amber-500/30 bg-amber-500/5"
                        : "border-blue-500/30 bg-blue-500/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{result.icon}</div>
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold">{result.title}</div>
                        <div className="text-white/50 text-xs">{result.domain}</div>
                      </div>
                      {result.type === "directory" && (
                        <div className="bg-amber-500/20 text-amber-400 text-xs px-2 py-1 rounded">
                          Directory
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Analysis Progress */}
              <div className="bg-[#2a193c]/50 rounded-lg p-4 border border-[#9c55ff]/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70 text-sm">Analisi in corso...</span>
                  <span className="text-[#9c55ff] text-sm font-mono">{analysisProgress}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#9c55ff] to-[#c685ff]"
                    style={{ width: `${analysisProgress}%` }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 3: Opportunity Detected */}
          {phase === "opportunity" && (
            <motion.div
              key="opportunity"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Opportunità Rilevata</div>
                  <div className="text-white/60 text-sm">Gap Analysis completata</div>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-amber-500/10 to-transparent rounded-xl p-8 border-2 border-amber-500/30 relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 right-4 opacity-20"
                >
                  <Lightbulb className="w-20 h-20 text-amber-400" />
                </motion.div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-3">
                      💡 Gap Identificato
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      La SERP è dominata da <span className="text-amber-400 font-semibold">directory</span> e competitor locali,
                      ma <span className="text-amber-400 font-semibold">manca una pagina ottimizzata</span> che risponda
                      alle domande frequenti dei potenziali clienti.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3"
                  >
                    {[
                      { label: "Bassa competizione", icon: TrendingUp, color: "green" },
                      { label: "Intent chiaro", icon: Target, color: "blue" },
                      { label: "Local SEO", icon: MapPin, color: "purple" },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-[#2a193c] border border-white/10 rounded-lg p-3 flex items-center gap-2"
                        >
                          <Icon className={`w-4 h-4 ${
                            item.color === "green" ? "text-green-400" :
                            item.color === "blue" ? "text-blue-400" :
                            "text-[#9c55ff]"
                          }`} />
                          <span className="text-white/80 text-xs">{item.label}</span>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Phase 4: AI Decision */}
          {phase === "decision" && (
            <motion.div
              key="decision"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-[#9c55ff]" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Decisione Automatica</div>
                  <div className="text-white/60 text-sm">L'AI propone una strategia</div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-[#9c55ff]/10 to-transparent rounded-xl p-6 border-2 border-[#9c55ff]/30"
              >
                <div className="text-center mb-6">
                  <div className="text-xl font-bold text-white mb-2">
                    📋 Piano Editoriale Proposto
                  </div>
                  <div className="text-white/60 text-sm">
                    1 Pagina Servizio + 2 Articoli di Supporto
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      type: "Pagina Servizio",
                      title: "Consulenza SEO Pisa",
                      features: ["Struttura Local SEO", "Meta ottimizzati", "Schema markup"],
                      icon: "🎯",
                      color: "purple"
                    },
                    {
                      type: "Articolo #1",
                      title: "Come scegliere un consulente SEO locale",
                      features: ["Outline completo", "Link interni", "H2/H3 strutturati"],
                      icon: "📝",
                      color: "blue"
                    },
                    {
                      type: "Articolo #2",
                      title: "Quanto costa una consulenza SEO a Pisa",
                      features: ["FAQ integrate", "Tabelle comparazione", "CTA ottimizzate"],
                      icon: "💰",
                      color: "green"
                    },
                  ].map((content, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.3 }}
                      className={`dashboard-card rounded-lg p-4 border ${
                        content.color === "purple" ? "border-[#9c55ff]/30" :
                        content.color === "blue" ? "border-blue-500/30" :
                        "border-green-500/30"
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="text-2xl">{content.icon}</div>
                        <div className="flex-1">
                          <div className={`text-xs font-semibold mb-1 ${
                            content.color === "purple" ? "text-[#9c55ff]" :
                            content.color === "blue" ? "text-blue-400" :
                            "text-green-400"
                          }`}>
                            {content.type}
                          </div>
                          <div className="text-white font-semibold text-sm mb-2">
                            {content.title}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {content.features.map((feature, fIdx) => (
                              <div
                                key={fIdx}
                                className="bg-white/5 text-white/70 text-xs px-2 py-0.5 rounded"
                              >
                                ✓ {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Phase 5: Output Ready */}
          {phase === "output" && (
            <motion.div
              key="output"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Output Pronti</div>
                  <div className="text-white/60 text-sm">Contenuti SEO-ready generati</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Pagina Servizio", status: "ready", size: "2.4k parole" },
                  { label: "Articolo #1", status: "ready", size: "1.8k parole" },
                  { label: "Articolo #2", status: "ready", size: "1.6k parole" },
                ].map((output, idx) => (
                  <AnimatePresence key={idx}>
                    {showOutputs.includes(idx) && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="dashboard-card rounded-xl p-6 border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"
                        >
                          <CheckCircle className="w-8 h-8 text-green-400" />
                        </motion.div>
                        <div className="text-white font-semibold mb-1">{output.label}</div>
                        <div className="text-green-400 text-sm font-bold mb-2">✓ {output.status.toUpperCase()}</div>
                        <div className="text-white/60 text-xs">{output.size}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}
              </div>

              {showOutputs.length === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
                    <Sparkles className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">
                      Strategia completa pronta per pubblicazione
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Phase 6: Value Comparison */}
          {phase === "value" && (
            <motion.div
              key="value"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="inline-block"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#9c55ff] mb-2">
                    ⚡ Il Vero Valore
                  </div>
                </motion.div>
                <p className="text-white/70 text-sm">
                  Comportamento di uno strategist umano
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Human Time */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="dashboard-card rounded-xl p-6 border-2 border-blue-500/30"
                >
                  <div className="text-center">
                    <User className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                    <div className="text-white/70 text-sm mb-2">SEO Strategist Umano</div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">3-5 giorni</div>
                    <div className="text-white/50 text-xs">
                      Analisi + Ricerca + Pianificazione + Redazione
                    </div>
                  </div>
                </motion.div>

                {/* AI Time */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="dashboard-card rounded-xl p-6 border-2 border-[#9c55ff]/30 bg-gradient-to-br from-[#9c55ff]/10 to-transparent relative overflow-hidden"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-2 right-2 opacity-20"
                  >
                    <Zap className="w-16 h-16 text-[#9c55ff]" />
                  </motion.div>
                  <div className="text-center relative z-10">
                    <Cpu className="w-10 h-10 text-[#9c55ff] mx-auto mb-3" />
                    <div className="text-white/70 text-sm mb-2">AI Strategist</div>
                    <div className="text-4xl font-bold text-[#9c55ff] mb-2">
                      <span className="text-5xl">~8</span> minuti
                    </div>
                    <div className="text-white/50 text-xs mb-3">
                      Analisi + Decisione + Generazione completa
                    </div>
                    <div className="bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1 inline-block">
                      <span className="text-green-400 text-xs font-bold">-98% tempo</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Key Value Props */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-[#9c55ff]/5 to-transparent rounded-xl p-6 border border-[#9c55ff]/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  {[
                    { icon: Lightbulb, label: "Strategia autonoma", color: "amber" },
                    { icon: CheckCircle, label: "Decisioni spiegabili", color: "green" },
                    { icon: Zap, label: "Velocità x50", color: "purple" },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                      >
                        <Icon className={`w-8 h-8 mx-auto mb-2 ${
                          item.color === "amber" ? "text-amber-400" :
                          item.color === "green" ? "text-green-400" :
                          "text-[#9c55ff]"
                        }`} />
                        <div className="text-white/80 text-sm font-medium">{item.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {["intro", "analysis", "opportunity", "decision", "output", "value"].map((p) => (
            <div
              key={p}
              className={`h-1.5 rounded-full transition-all ${
                phase === p ? "bg-[#9c55ff] w-8" : "bg-white/20 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Caption */}
      <motion.div
        className="text-center mt-4 text-white/60 text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        💼 Caso reale: da opportunità a strategia completa in minuti
      </motion.div>
    </div>
  );
};

