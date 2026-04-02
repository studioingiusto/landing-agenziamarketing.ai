"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Play,
  Zap,
  TrendingUp,
  UserPlus,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  MessageCircle,
  RefreshCw,
} from "lucide-react";
import type { PitchLocale } from "@/pitch.data";

type Phase = "demo" | "pipeline" | "aha" | "conversion" | "community";

const COPY: Record<
  PitchLocale,
  {
    header: string;
    sub: string;
    demoTitle: string;
    demoSub: string;
    inputUrl: string;
    readyPublish: string;
    steps: [string, string, string, string, string];
    pipelineTitle: string;
    pipelineSub: string;
    interestedCustomers: string;
    customersSub: string;
    conversionRate: string;
    conversionSub: string;
    plgFunnel: string;
    ahaTitle: string;
    ahaSub: string;
    quote: string;
    quoteSub: string;
    cardTitle: string;
    cardLines: [string, string, string];
    readyChip: string;
    roiChip: string;
    betaTitle: string;
    betaSub: string;
    onboardingSteps: [string, string, string];
    communityTitle: string;
    communitySub: string;
    growthLoop: string;
    caption: string;
  }
> = {
  it: {
    header: "Customer Journey - GTM Strategy",
    sub: "Dal primo contatto alla community attiva",
    demoTitle: "Demo Veloce 8-12s",
    demoSub: "Input → Output immediato",
    inputUrl: "Input URL",
    readyPublish: "Ready to Publish",
    steps: ["Analisi", "Keyword", "Piano", "Contenuti", "Pubblicazione"],
    pipelineTitle: "Pipeline Attiva",
    pipelineSub: "Interesse validato dal mercato",
    interestedCustomers: "Clienti Interessati",
    customersSub: "Agenzie + PMI già acquisite",
    conversionRate: "Conversion Rate",
    conversionSub: "Disponibili a testare la beta",
    plgFunnel: "Pipeline PLG",
    ahaTitle: "Aha! Moment",
    ahaSub: "Guided Strategy in azione",
    quote: '💡 "Il sistema mi dice cosa pubblicare ORA"',
    quoteSub: "Con motivazione chiara e priorità automatica",
    cardTitle: 'Pubblica: "Guida SEO Local 2025"',
    cardLines: [
      '✓ Keyword gap rilevato: "SEO local" (1.2k vol, bassa comp.)',
      "✓ Intent: informational → guida pratica",
      "✓ Priorità: ALTA (opportunità rapida)",
    ],
    readyChip: "✓ Contenuto pronto",
    roiChip: "ROI stimato: 3 mesi",
    betaTitle: "Beta Guidata",
    betaSub: "Onboarding assistito",
    onboardingSteps: ["Demo Personalizzata", "Onboarding Guidato", "Primo Progetto"],
    communityTitle: "PLG Loop + Community",
    communitySub: '"AI-safe SEO" Growth Engine',
    growthLoop: "Self-sustaining Growth Loop",
    caption: "🚀 Pipeline PLG validata con early customers",
  },
  en: {
    header: "Customer journey — GTM strategy",
    sub: "From first touch to an active community",
    demoTitle: "Quick 8–12s demo",
    demoSub: "Immediate input → output",
    inputUrl: "Input URL",
    readyPublish: "Ready to publish",
    steps: ["Analysis", "Keywords", "Plan", "Content", "Publishing"],
    pipelineTitle: "Active pipeline",
    pipelineSub: "Market-validated interest",
    interestedCustomers: "Interested customers",
    customersSub: "Agencies + SMBs already engaged",
    conversionRate: "Conversion rate",
    conversionSub: "Willing to try the beta",
    plgFunnel: "PLG pipeline",
    ahaTitle: "Aha! moment",
    ahaSub: "Guided Strategy in action",
    quote: '💡 "The system tells me what to publish NOW"',
    quoteSub: "Clear rationale and automatic priority",
    cardTitle: 'Publish: "Local SEO guide 2025"',
    cardLines: [
      '✓ Keyword gap: "local SEO" (1.2k vol., low comp.)',
      "✓ Intent: informational → practical guide",
      "✓ Priority: HIGH (quick win)",
    ],
    readyChip: "✓ Content ready",
    roiChip: "Est. ROI: 3 months",
    betaTitle: "Guided beta",
    betaSub: "Assisted onboarding",
    onboardingSteps: ["Personalized demo", "Guided onboarding", "First project"],
    communityTitle: "PLG loop + community",
    communitySub: '"AI-safe SEO" growth engine',
    growthLoop: "Self-sustaining growth loop",
    caption: "🚀 PLG pipeline validated with early customers",
  },
};

export interface AnimatedGTMProps {
  locale?: PitchLocale;
}

export const AnimatedGTM = ({ locale = "it" }: AnimatedGTMProps) => {
  const t = COPY[locale];
  const [phase, setPhase] = useState<Phase>("demo");
  const [demoProgress, setDemoProgress] = useState(0);
  const [showAha, setShowAha] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "demo") {
      if (demoProgress < 100) {
        timeout = setTimeout(() => {
          setDemoProgress(Math.min(demoProgress + 1, 100));
        }, 100);
      } else {
        timeout = setTimeout(() => setPhase("pipeline"), 1000);
      }
    } else if (phase === "pipeline") {
      timeout = setTimeout(() => setPhase("aha"), 3000);
    } else if (phase === "aha") {
      if (!showAha) {
        timeout = setTimeout(() => setShowAha(true), 1000);
      } else {
        timeout = setTimeout(() => setPhase("conversion"), 2500);
      }
    } else if (phase === "conversion") {
      timeout = setTimeout(() => setPhase("community"), 3000);
    } else if (phase === "community") {
      timeout = setTimeout(() => {
        setPhase("demo");
        setDemoProgress(0);
        setShowAha(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [phase, demoProgress, showAha]);

  const demoSteps = [0, 1, 2, 3, 4].map((s) => ({
    step: s + 1,
    label: t.steps[s],
    progress: Math.max(0, Math.min((demoProgress - s * 20) * 5, 100)),
  }));

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="dashboard-card rounded-2xl p-6 md:p-8 border-2 border-[#9c55ff]/20">
        <div className="text-center mb-8">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{t.header}</h3>
          <p className="text-white/60 text-sm">{t.sub}</p>
        </div>

        <AnimatePresence mode="wait">
          {phase === "demo" && (
            <motion.div
              key="demo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-[#9c55ff]" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{t.demoTitle}</div>
                  <div className="text-white/60 text-sm">{t.demoSub}</div>
                </div>
              </div>

              <div className="bg-[#2a193c]/50 rounded-xl p-6 border border-[#9c55ff]/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 text-xs font-bold">1</span>
                    </div>
                    <span className="text-white/70 text-sm">{t.inputUrl}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                      <span className="text-[#9c55ff] text-xs font-bold">5</span>
                    </div>
                    <span className="text-white/70 text-sm">{t.readyPublish}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {demoSteps.map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <div className="w-20 text-white/60 text-xs">{item.label}</div>
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#9c55ff] to-[#c685ff]"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      {item.progress >= 100 && <CheckCircle className="w-4 h-4 text-green-400" />}
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-[#9c55ff]/10 border border-[#9c55ff]/30 rounded-full px-4 py-2">
                    <div className="w-2 h-2 rounded-full bg-[#9c55ff] animate-pulse" />
                    <span className="text-[#9c55ff] text-sm font-mono">
                      {Math.floor((demoProgress / 100) * 10)}s / 10s
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {phase === "pipeline" && (
            <motion.div
              key="pipeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{t.pipelineTitle}</div>
                  <div className="text-white/60 text-sm">{t.pipelineSub}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="dashboard-card rounded-xl p-6 border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, type: "spring" }}
                      className="text-5xl font-bold text-green-400 mb-2"
                    >
                      10
                    </motion.div>
                    <div className="text-white font-semibold mb-1">{t.interestedCustomers}</div>
                    <div className="text-white/60 text-xs">{t.customersSub}</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="dashboard-card rounded-xl p-6 border-2 border-[#9c55ff]/30 bg-gradient-to-br from-[#9c55ff]/10 to-transparent"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      className="text-5xl font-bold text-[#9c55ff] mb-2"
                    >
                      70%+
                    </motion.div>
                    <div className="text-white font-semibold mb-1">{t.conversionRate}</div>
                    <div className="text-white/60 text-xs">{t.conversionSub}</div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center"
              >
                <div className="text-center">
                  <div className="text-white/60 text-sm mb-2">{t.plgFunnel}</div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Waitlist</div>
                    <ArrowRight className="w-4 h-4 text-white/40" />
                    <div className="bg-[#9c55ff]/20 text-[#9c55ff] px-3 py-1 rounded-full text-sm">Beta Testers</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {phase === "aha" && (
            <motion.div
              key="aha"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{t.ahaTitle}</div>
                  <div className="text-white/60 text-sm">{t.ahaSub}</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-500/10 to-transparent rounded-xl p-8 border-2 border-amber-500/30 relative overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 opacity-20"
                >
                  <Sparkles className="w-24 h-24 text-amber-400" />
                </motion.div>

                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl md:text-3xl font-bold text-white mb-3"
                    >
                      {t.quote}
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-white/70 text-sm"
                    >
                      {t.quoteSub}
                    </motion.p>
                  </div>

                  <AnimatePresence>
                    {showAha && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-[#2a193c] rounded-lg p-4 border border-amber-500/30"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-semibold text-sm mb-1">{t.cardTitle}</div>
                            <div className="text-white/60 text-xs leading-relaxed">
                              {t.cardLines.map((line, i) => (
                                <span key={i}>
                                  {line}
                                  <br />
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-green-500/10 border border-green-500/30 rounded px-3 py-1.5 text-green-400 text-xs text-center">
                            {t.readyChip}
                          </div>
                          <div className="flex-1 bg-blue-500/10 border border-blue-500/30 rounded px-3 py-1.5 text-blue-400 text-xs text-center">
                            {t.roiChip}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          {phase === "conversion" && (
            <motion.div
              key="conversion"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{t.betaTitle}</div>
                  <div className="text-white/60 text-sm">{t.betaSub}</div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { step: t.onboardingSteps[0], icon: Play, status: "complete" as const },
                  { step: t.onboardingSteps[1], icon: Target, status: "complete" as const },
                  { step: t.onboardingSteps[2], icon: Sparkles, status: "active" as const },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.2 }}
                      className={`flex items-center gap-4 p-4 rounded-lg border ${
                        item.status === "active"
                          ? "border-[#9c55ff]/30 bg-[#9c55ff]/5"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          item.status === "complete" ? "bg-green-500/20" : "bg-[#9c55ff]/20"
                        }`}
                      >
                        {item.status === "complete" ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <Icon className="w-5 h-5 text-[#9c55ff]" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm">{item.step}</div>
                      </div>
                      {item.status === "active" && (
                        <div className="w-2 h-2 rounded-full bg-[#9c55ff] animate-pulse" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {phase === "community" && (
            <motion.div
              key="community"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#9c55ff]" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{t.communityTitle}</div>
                  <div className="text-white/60 text-sm">{t.communitySub}</div>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-center mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-[#9c55ff] to-[#c685ff] flex items-center justify-center relative"
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#9c55ff]"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: Users, label: "Community", desc: "AI-safe SEO", color: "blue" },
                    { icon: TrendingUp, label: "Referral", desc: "Word of mouth", color: "green" },
                    { icon: Sparkles, label: "Product", desc: "Self-serve", color: "purple" },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.2 }}
                        className={`dashboard-card rounded-xl p-4 text-center border ${
                          item.color === "blue"
                            ? "border-blue-500/30"
                            : item.color === "green"
                              ? "border-green-500/30"
                              : "border-[#9c55ff]/30"
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center ${
                            item.color === "blue"
                              ? "bg-blue-500/20"
                              : item.color === "green"
                                ? "bg-green-500/20"
                                : "bg-[#9c55ff]/20"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${
                              item.color === "blue"
                                ? "text-blue-400"
                                : item.color === "green"
                                  ? "text-green-400"
                                  : "text-[#9c55ff]"
                            }`}
                          />
                        </div>
                        <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                        <div className="text-white/60 text-xs">{item.desc}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 bg-[#9c55ff]/10 border border-[#9c55ff]/30 rounded-full px-4 py-2">
                  <RefreshCw className="w-4 h-4 text-[#9c55ff]" />
                  <span className="text-white/80 text-sm">{t.growthLoop}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-8">
          {(["demo", "pipeline", "aha", "conversion", "community"] as const).map((p) => (
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
