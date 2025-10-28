"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Play, 
  Users, 
  Zap, 
  TrendingUp, 
  UserPlus, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  MessageCircle,
  RefreshCw
} from "lucide-react";

type Phase = "demo" | "pipeline" | "aha" | "conversion" | "community";

export const AnimatedGTM = () => {
  const [phase, setPhase] = useState<Phase>("demo");
  const [demoProgress, setDemoProgress] = useState(0);
  const [showAha, setShowAha] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "demo") {
      // Demo 8-12s animation
      if (demoProgress < 100) {
        timeout = setTimeout(() => {
          setDemoProgress(Math.min(demoProgress + 1, 100));
        }, 100); // 10s total
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

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="dashboard-card rounded-2xl p-6 md:p-8 border-2 border-[#9c55ff]/20">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
            Customer Journey - GTM Strategy
          </h3>
          <p className="text-white/60 text-sm">
            Dal primo contatto alla community attiva
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* Phase 1: Quick Demo */}
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
                  <div className="text-white font-bold text-lg">Demo Veloce 8-12s</div>
                  <div className="text-white/60 text-sm">Input → Output immediato</div>
                </div>
              </div>

              {/* Demo Flow Visualization */}
              <div className="bg-[#2a193c]/50 rounded-xl p-6 border border-[#9c55ff]/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 text-xs font-bold">1</span>
                    </div>
                    <span className="text-white/70 text-sm">Input URL</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                      <span className="text-[#9c55ff] text-xs font-bold">5</span>
                    </div>
                    <span className="text-white/70 text-sm">Ready to Publish</span>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="space-y-2 mb-4">
                  {[
                    { step: 1, label: "Analisi", progress: Math.min(demoProgress * 5, 100) },
                    { step: 2, label: "Keyword", progress: Math.max(0, Math.min((demoProgress - 20) * 5, 100)) },
                    { step: 3, label: "Piano", progress: Math.max(0, Math.min((demoProgress - 40) * 5, 100)) },
                    { step: 4, label: "Contenuti", progress: Math.max(0, Math.min((demoProgress - 60) * 5, 100)) },
                    { step: 5, label: "Pubblicazione", progress: Math.max(0, Math.min((demoProgress - 80) * 5, 100)) },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <div className="w-20 text-white/60 text-xs">{item.label}</div>
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#9c55ff] to-[#c685ff]"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      {item.progress >= 100 && (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Timer */}
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

          {/* Phase 2: Pipeline (10 clienti + waitlist) */}
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
                  <div className="text-white font-bold text-lg">Pipeline Attiva</div>
                  <div className="text-white/60 text-sm">Interesse validato dal mercato</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Early Customers */}
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
                    <div className="text-white font-semibold mb-1">Clienti Interessati</div>
                    <div className="text-white/60 text-xs">Agenzie + PMI già acquisite</div>
                  </div>
                </motion.div>

                {/* Waitlist */}
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
                    <div className="text-white font-semibold mb-1">Conversion Rate</div>
                    <div className="text-white/60 text-xs">Disponibili a testare la beta</div>
                  </div>
                </motion.div>
              </div>

              {/* Funnel Visual */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center"
              >
                <div className="text-center">
                  <div className="text-white/60 text-sm mb-2">Pipeline PLG</div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      Waitlist
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40" />
                    <div className="bg-[#9c55ff]/20 text-[#9c55ff] px-3 py-1 rounded-full text-sm">
                      Beta Testers
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Phase 3: Aha Moment - Guided Strategy */}
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
                  <div className="text-white font-bold text-lg">Aha! Moment</div>
                  <div className="text-white/60 text-sm">Guided Strategy in azione</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-500/10 to-transparent rounded-xl p-8 border-2 border-amber-500/30 relative overflow-hidden">
                {/* Background Sparkles */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360] 
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
                      💡 "Il sistema mi dice cosa pubblicare ORA"
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-white/70 text-sm"
                    >
                      Con motivazione chiara e priorità automatica
                    </motion.p>
                  </div>

                  {/* Example Guided Strategy Card */}
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
                            <div className="text-white font-semibold text-sm mb-1">
                              Pubblica: "Guida SEO Local 2025"
                            </div>
                            <div className="text-white/60 text-xs leading-relaxed">
                              ✓ Keyword gap rilevato: "SEO local" (1.2k vol, bassa comp.)<br/>
                              ✓ Intent: informational → guida pratica<br/>
                              ✓ Priorità: ALTA (opportunità rapida)
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-green-500/10 border border-green-500/30 rounded px-3 py-1.5 text-green-400 text-xs text-center">
                            ✓ Contenuto pronto
                          </div>
                          <div className="flex-1 bg-blue-500/10 border border-blue-500/30 rounded px-3 py-1.5 text-blue-400 text-xs text-center">
                            ROI stimato: 3 mesi
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 4: Beta Conversion */}
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
                  <div className="text-white font-bold text-lg">Beta Guidata</div>
                  <div className="text-white/60 text-sm">Onboarding assistito</div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { step: "Demo Personalizzata", icon: Play, status: "complete" },
                  { step: "Onboarding Guidato", icon: Target, status: "complete" },
                  { step: "Primo Progetto", icon: Sparkles, status: "active" },
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
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.status === "complete"
                          ? "bg-green-500/20"
                          : "bg-[#9c55ff]/20"
                      }`}>
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

          {/* Phase 5: PLG Community Loop */}
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
                  <div className="text-white font-bold text-lg">PLG Loop + Community</div>
                  <div className="text-white/60 text-sm">"AI-safe SEO" Growth Engine</div>
                </div>
              </div>

              {/* Community Growth Visualization */}
              <div className="relative">
                {/* Center: Product */}
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

                {/* Growth Elements Around */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: Users, label: "Community", desc: "AI-safe SEO", color: "blue" },
                    { icon: TrendingUp, label: "Referral", desc: "Word of Mouth", color: "green" },
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
                          item.color === "blue" ? "border-blue-500/30" :
                          item.color === "green" ? "border-green-500/30" :
                          "border-[#9c55ff]/30"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center ${
                          item.color === "blue" ? "bg-blue-500/20" :
                          item.color === "green" ? "bg-green-500/20" :
                          "bg-[#9c55ff]/20"
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            item.color === "blue" ? "text-blue-400" :
                            item.color === "green" ? "text-green-400" :
                            "text-[#9c55ff]"
                          }`} />
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
                  <span className="text-white/80 text-sm">Self-sustaining Growth Loop</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {["demo", "pipeline", "aha", "conversion", "community"].map((p) => (
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
        🚀 Pipeline PLG validata con early customers
      </motion.div>
    </div>
  );
};

