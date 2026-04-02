"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import {
  Search,
  MapPin,
  TrendingUp,
  FileText,
  Lightbulb,
  CheckCircle,
  Sparkles,
  Cpu,
  ArrowRight,
  Target,
  Zap,
  User,
} from "lucide-react";
import type { PitchLocale } from "@/pitch.data";

type Phase = "intro" | "analysis" | "opportunity" | "decision" | "output" | "value";

function strings(locale: PitchLocale) {
  if (locale === "en") {
    return {
      headerTitle: "Case study: local agency + Pisa client",
      headerSub: "How the AI strategist works in practice",
      localAgency: "Local agency",
      clientPisa: "Client: Pisa",
      aiStrategist: "AI strategist",
      guided: "Guided Strategy",
      keywordTarget: "Target keyword",
      kw: '"SEO consulting Pisa"',
      localOpp: "Local SEO opportunity",
      serpTitle: "SERP analysis",
      serpSub: "Node 2: keyword research",
      serpResults: [
        { type: "directory" as const, title: "Italy SEO directory", domain: "seoitaly.com", icon: "🗂️" },
        { type: "directory" as const, title: "Pisa consultants list", domain: "consultantspisa.com", icon: "📋" },
        { type: "competitor" as const, title: "Competitor agency 1", domain: "competitor1.it", icon: "🏢" },
        { type: "competitor" as const, title: "Competitor agency 2", domain: "competitor2.it", icon: "🏢" },
      ],
      directory: "Directory",
      analyzing: "Analyzing...",
      oppTitle: "Opportunity detected",
      oppSub: "Gap analysis complete",
      gapTitle: "💡 Gap identified",
      gapBody:
        "The SERP is dominated by directories and local competitors, but there is no optimized page that answers prospects’ frequent questions.",
      chips: ["Low competition", "Clear intent", "Local SEO"],
      decisionTitle: "Automatic decision",
      decisionSub: "The AI proposes a strategy",
      planTitle: "📋 Proposed editorial plan",
      planSub: "1 service page + 2 support articles",
      contentBlocks: [
        {
          type: "Service page",
          title: "SEO consulting Pisa",
          features: ["Local SEO structure", "Optimized meta", "Schema markup"],
          icon: "🎯",
          color: "purple" as const,
        },
        {
          type: "Article #1",
          title: "How to choose a local SEO consultant",
          features: ["Full outline", "Internal links", "Structured H2/H3"],
          icon: "📝",
          color: "blue" as const,
        },
        {
          type: "Article #2",
          title: "How much does SEO consulting cost in Pisa",
          features: ["FAQ blocks", "Comparison tables", "Optimized CTAs"],
          icon: "💰",
          color: "green" as const,
        },
      ],
      outputTitle: "Outputs ready",
      outputSub: "SEO-ready content generated",
      outputs: [
        { label: "Service page", status: "ready", size: "2.4k words" },
        { label: "Article #1", status: "ready", size: "1.8k words" },
        { label: "Article #2", status: "ready", size: "1.6k words" },
      ],
      readyBanner: "Full strategy ready to publish",
      valueTitle: "⚡ The real value",
      valueSub: "Behaviour of a human strategist",
      humanStrategist: "Human SEO strategist",
      humanTime: "3–5 days",
      humanSub: "Analysis + research + planning + writing",
    aiStrategistLabel: "AI strategist",
    aiTimeNumber: "~8",
    aiTimeUnit: "min",
    aiSub: "Analysis + decision + full generation",
      timeSaved: "-98% time",
      valueChips: ["Autonomous strategy", "Explainable decisions", "50× speed"],
      caption: "💼 Real case: from opportunity to full strategy in minutes",
    };
  }
  return {
    headerTitle: "Case Study: Agenzia Locale + Cliente Pisa",
    headerSub: "Come l'AI strategist lavora in azione",
    localAgency: "Agenzia Locale",
    clientPisa: "Cliente: Pisa",
    aiStrategist: "AI Strategist",
    guided: "Guided Strategy",
    keywordTarget: "Keyword Target",
    kw: '"consulenza SEO Pisa"',
    localOpp: "Local SEO opportunity",
    serpTitle: "Analisi SERP",
    serpSub: "Nodo 2: Keyword Research",
    serpResults: [
      { type: "directory" as const, title: "Directory SEO Italia", domain: "seoitalia.it", icon: "🗂️" },
      { type: "directory" as const, title: "Elenco Consulenti Pisa", domain: "consulentipisa.com", icon: "📋" },
      { type: "competitor" as const, title: "Agenzia Competitor 1", domain: "competitor1.it", icon: "🏢" },
      { type: "competitor" as const, title: "Agenzia Competitor 2", domain: "competitor2.it", icon: "🏢" },
    ],
    directory: "Directory",
    analyzing: "Analisi in corso...",
    oppTitle: "Opportunità Rilevata",
    oppSub: "Gap Analysis completata",
    gapTitle: "💡 Gap Identificato",
    gapBody:
      "La SERP è dominata da directory e competitor locali, ma manca una pagina ottimizzata che risponda alle domande frequenti dei potenziali clienti.",
    chips: ["Bassa competizione", "Intent chiaro", "Local SEO"],
    decisionTitle: "Decisione Automatica",
    decisionSub: "L'AI propone una strategia",
    planTitle: "📋 Piano Editoriale Proposto",
    planSub: "1 Pagina Servizio + 2 Articoli di Supporto",
    contentBlocks: [
      {
        type: "Pagina Servizio",
        title: "Consulenza SEO Pisa",
        features: ["Struttura Local SEO", "Meta ottimizzati", "Schema markup"],
        icon: "🎯",
        color: "purple" as const,
      },
      {
        type: "Articolo #1",
        title: "Come scegliere un consulente SEO locale",
        features: ["Outline completo", "Link interni", "H2/H3 strutturati"],
        icon: "📝",
        color: "blue" as const,
      },
      {
        type: "Articolo #2",
        title: "Quanto costa una consulenza SEO a Pisa",
        features: ["FAQ integrate", "Tabelle comparazione", "CTA ottimizzate"],
        icon: "💰",
        color: "green" as const,
      },
    ],
    outputTitle: "Output Pronti",
    outputSub: "Contenuti SEO-ready generati",
    outputs: [
      { label: "Pagina Servizio", status: "ready", size: "2.4k parole" },
      { label: "Articolo #1", status: "ready", size: "1.8k parole" },
      { label: "Articolo #2", status: "ready", size: "1.6k parole" },
    ],
    readyBanner: "Strategia completa pronta per pubblicazione",
    valueTitle: "⚡ Il Vero Valore",
    valueSub: "Comportamento di uno strategist umano",
    humanStrategist: "SEO Strategist Umano",
    humanTime: "3-5 giorni",
    humanSub: "Analisi + Ricerca + Pianificazione + Redazione",
    aiStrategistLabel: "AI Strategist",
    aiTimeNumber: "~8",
    aiTimeUnit: "minuti",
    aiSub: "Analisi + Decisione + Generazione completa",
    timeSaved: "-98% tempo",
    valueChips: ["Strategia autonoma", "Decisioni spiegabili", "Velocità x50"],
    caption: "💼 Caso reale: da opportunità a strategia completa in minuti",
  };
}

export interface AnimatedCaseStudyProps {
  locale?: PitchLocale;
}

export const AnimatedCaseStudy = ({ locale = "it" }: AnimatedCaseStudyProps) => {
  const t = useMemo(() => strings(locale), [locale]);
  const [phase, setPhase] = useState<Phase>("intro");
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [showOutputs, setShowOutputs] = useState<number[]>([]);

  useEffect(() => {
    setPhase("intro");
    setAnalysisProgress(0);
    setShowOutputs([]);
  }, [locale]);

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

  const chipIcons = [TrendingUp, Target, MapPin];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="dashboard-card rounded-2xl p-6 md:p-8 border-2 border-[#9c55ff]/20">
        <div className="text-center mb-8">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{t.headerTitle}</h3>
          <p className="text-white/60 text-sm">{t.headerSub}</p>
        </div>

        <AnimatePresence mode="wait">
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-center gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                    <User className="w-10 h-10 text-blue-400" />
                  </div>
                  <div className="text-white font-semibold">{t.localAgency}</div>
                  <div className="text-white/60 text-xs">{t.clientPisa}</div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
                  <ArrowRight className="w-8 h-8 text-[#9c55ff]" />
                </motion.div>

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
                  <div className="text-white font-semibold">{t.aiStrategist}</div>
                  <div className="text-white/60 text-xs">{t.guided}</div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="dashboard-card rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Search className="w-5 h-5 text-[#9c55ff]" />
                  <span className="text-white font-semibold">{t.keywordTarget}</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#9c55ff] mb-2">{t.kw}</div>
                <div className="flex items-center justify-center gap-1 text-white/60 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{t.localOpp}</span>
                </div>
              </motion.div>
            </motion.div>
          )}

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
                  <div className="text-white font-bold text-lg">{t.serpTitle}</div>
                  <div className="text-white/60 text-sm">{t.serpSub}</div>
                </div>
              </div>

              <div className="space-y-3">
                {t.serpResults.map((result, idx) => (
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
                        <div className="bg-amber-500/20 text-amber-400 text-xs px-2 py-1 rounded">{t.directory}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-[#2a193c]/50 rounded-lg p-4 border border-[#9c55ff]/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70 text-sm">{t.analyzing}</span>
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
                  <div className="text-white font-bold text-lg">{t.oppTitle}</div>
                  <div className="text-white/60 text-sm">{t.oppSub}</div>
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
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-6">
                    <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-3">{t.gapTitle}</div>
                    <p className="text-white/80 leading-relaxed">{t.gapBody}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3"
                  >
                    {t.chips.map((label, idx) => {
                      const Icon = chipIcons[idx];
                      const color = idx === 0 ? "green" : idx === 1 ? "blue" : "purple";
                      return (
                        <div key={label} className="bg-[#2a193c] border border-white/10 rounded-lg p-3 flex items-center gap-2">
                          <Icon
                            className={`w-4 h-4 ${
                              color === "green" ? "text-green-400" : color === "blue" ? "text-blue-400" : "text-[#9c55ff]"
                            }`}
                          />
                          <span className="text-white/80 text-xs">{label}</span>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}

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
                  <div className="text-white font-bold text-lg">{t.decisionTitle}</div>
                  <div className="text-white/60 text-sm">{t.decisionSub}</div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-[#9c55ff]/10 to-transparent rounded-xl p-6 border-2 border-[#9c55ff]/30"
              >
                <div className="text-center mb-6">
                  <div className="text-xl font-bold text-white mb-2">{t.planTitle}</div>
                  <div className="text-white/60 text-sm">{t.planSub}</div>
                </div>

                <div className="space-y-3">
                  {t.contentBlocks.map((content, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.3 }}
                      className={`dashboard-card rounded-lg p-4 border ${
                        content.color === "purple"
                          ? "border-[#9c55ff]/30"
                          : content.color === "blue"
                            ? "border-blue-500/30"
                            : "border-green-500/30"
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="text-2xl">{content.icon}</div>
                        <div className="flex-1">
                          <div
                            className={`text-xs font-semibold mb-1 ${
                              content.color === "purple"
                                ? "text-[#9c55ff]"
                                : content.color === "blue"
                                  ? "text-blue-400"
                                  : "text-green-400"
                            }`}
                          >
                            {content.type}
                          </div>
                          <div className="text-white font-semibold text-sm mb-2">{content.title}</div>
                          <div className="flex flex-wrap gap-1">
                            {content.features.map((feature, fIdx) => (
                              <div key={fIdx} className="bg-white/5 text-white/70 text-xs px-2 py-0.5 rounded">
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
                  <div className="text-white font-bold text-lg">{t.outputTitle}</div>
                  <div className="text-white/60 text-sm">{t.outputSub}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {t.outputs.map((output, idx) => (
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
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                  <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
                    <Sparkles className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">{t.readyBanner}</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {phase === "value" && (
            <motion.div
              key="value"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="inline-block">
                  <div className="text-3xl md:text-4xl font-bold text-[#9c55ff] mb-2">{t.valueTitle}</div>
                </motion.div>
                <p className="text-white/70 text-sm">{t.valueSub}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="dashboard-card rounded-xl p-6 border-2 border-blue-500/30"
                >
                  <div className="text-center">
                    <User className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                    <div className="text-white/70 text-sm mb-2">{t.humanStrategist}</div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{t.humanTime}</div>
                    <div className="text-white/50 text-xs">{t.humanSub}</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="dashboard-card rounded-xl p-6 border-2 border-[#9c55ff]/30 bg-gradient-to-br from-[#9c55ff]/10 to-transparent relative overflow-hidden"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-2 right-2 opacity-20"
                  >
                    <Zap className="w-16 h-16 text-[#9c55ff]" />
                  </motion.div>
                  <div className="text-center relative z-10">
                    <Cpu className="w-10 h-10 text-[#9c55ff] mx-auto mb-3" />
                    <div className="text-white/70 text-sm mb-2">{t.aiStrategistLabel}</div>
                    <div className="text-4xl font-bold text-[#9c55ff] mb-2">
                      <span className="text-5xl">{t.aiTimeNumber}</span> {t.aiTimeUnit}
                    </div>
                    <div className="text-white/50 text-xs mb-3">{t.aiSub}</div>
                    <div className="bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1 inline-block">
                      <span className="text-green-400 text-xs font-bold">{t.timeSaved}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-[#9c55ff]/5 to-transparent rounded-xl p-6 border border-[#9c55ff]/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  {[Lightbulb, CheckCircle, Zap].map((Icon, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                    >
                      <Icon
                        className={`w-8 h-8 mx-auto mb-2 ${
                          idx === 0 ? "text-amber-400" : idx === 1 ? "text-green-400" : "text-[#9c55ff]"
                        }`}
                      />
                      <div className="text-white/80 text-sm font-medium">{t.valueChips[idx]}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-8">
          {(["intro", "analysis", "opportunity", "decision", "output", "value"] as const).map((p) => (
            <div
              key={p}
              className={`h-1.5 rounded-full transition-all ${phase === p ? "bg-[#9c55ff] w-8" : "bg-white/20 w-1.5"}`}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="text-center mt-4 text-white/60 text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {t.caption}
      </motion.div>
    </div>
  );
};
