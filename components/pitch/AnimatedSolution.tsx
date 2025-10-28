"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Globe, Search, Calendar, FileText, CheckCircle, Sparkles, ArrowRight, Zap, Brain, Database } from "lucide-react";

interface Step {
  id: number;
  title: string;
  icon: any;
  data: string;
  color: string;
}

const steps: Step[] = [
  { id: 1, title: "Analisi Sito", icon: Globe, data: "Scansione tecnica + CWV", color: "from-blue-500 to-cyan-500" },
  { id: 2, title: "Keyword & Intent", icon: Search, data: "147 keyword identificate", color: "from-cyan-500 to-teal-500" },
  { id: 3, title: "Piano Editoriale", icon: Calendar, data: "12 contenuti pianificati", color: "from-teal-500 to-green-500" },
  { id: 4, title: "Contenuti SEO", icon: FileText, data: "Generazione in corso...", color: "from-green-500 to-emerald-500" },
  { id: 5, title: "Validazione", icon: CheckCircle, data: "SEO-ready ✓", color: "from-emerald-500 to-[#9c55ff]" },
];

export const AnimatedSolution = () => {
  const [phase, setPhase] = useState<"input" | "pipeline" | "cycle" | "output">("input");
  const [activeStep, setActiveStep] = useState(0);
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Fase 1: Input (1.5s)
    if (phase === "input") {
      timeout = setTimeout(() => {
        setPhase("pipeline");
        setActiveStep(0);
      }, 1500);
    }

    // Fase 2: Pipeline progressiva (1.6s per step)
    if (phase === "pipeline") {
      if (activeStep < steps.length) {
        timeout = setTimeout(() => {
          setActiveStep(activeStep + 1);
          setParticles([...particles, activeStep]);
        }, 1600);
      } else {
        timeout = setTimeout(() => setPhase("cycle"), 800);
      }
    }

    // Fase 3: Cycle zoom (3s)
    if (phase === "cycle") {
      timeout = setTimeout(() => setPhase("output"), 3000);
    }

    // Fase 4: Output (2.5s)
    if (phase === "output") {
      timeout = setTimeout(() => {
        setPhase("input");
        setActiveStep(0);
        setParticles([]);
      }, 2500);
    }

    return () => clearTimeout(timeout);
  }, [phase, activeStep, particles]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="dashboard-card rounded-2xl p-8 md:p-12 border-2 border-[#9c55ff]/20 relative overflow-hidden">
        {/* Background Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#9c55ff]/30 rounded-full"
              animate={{
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* INPUT PHASE */}
        <AnimatePresence>
          {phase === "input" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center min-h-[400px]"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mb-6"
              >
                <Database className="w-20 h-20 text-[#9c55ff]" />
              </motion.div>
              <div className="text-white text-2xl md:text-3xl font-bold mb-3">
                Input: www.sitodaanalizzare.it
              </div>
              <div className="text-white/60 text-sm">
                Inizializzazione pipeline AI...
              </div>
              <motion.div
                className="mt-6 flex gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#9c55ff]"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PIPELINE PHASE */}
        <AnimatePresence>
          {phase === "pipeline" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[400px]"
            >
              <div className="mb-8 text-center">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                  Guided Strategy Pipeline
                </h3>
                <p className="text-white/60 text-sm">
                  Trasformazione automatica: Input → Output SEO-ready
                </p>
              </div>

              {/* Pipeline Steps */}
              <div className="relative">
                {/* Connection Lines */}
                <div className="absolute top-12 left-0 right-0 h-1 hidden md:block">
                  <div className="relative h-full">
                    {steps.map((_, idx) => (
                      idx < steps.length - 1 && (
                        <motion.div
                          key={idx}
                          className="absolute h-full bg-gradient-to-r from-[#9c55ff] to-transparent"
                          style={{
                            left: `${(idx / steps.length) * 100 + 10}%`,
                            width: `${(1 / steps.length) * 100 - 10}%`,
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: activeStep > idx ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      )
                    ))}
                  </div>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    const isActive = activeStep > idx;
                    const isCurrent = activeStep === idx;

                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: isActive || isCurrent ? 1 : 0.3,
                          y: 0,
                          scale: isCurrent ? 1.05 : 1,
                        }}
                        className="relative"
                      >
                        {/* Step Node */}
                        <div
                          className={`relative dashboard-card rounded-xl p-4 border-2 transition-all ${
                            isActive
                              ? "border-[#9c55ff] shadow-[0_0_20px_rgba(156,85,255,0.3)]"
                              : "border-white/10"
                          }`}
                        >
                          {/* Icon */}
                          <motion.div
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-3 mx-auto`}
                            animate={{
                              boxShadow: isCurrent
                                ? ["0 0 0 0 rgba(156,85,255,0.7)", "0 0 0 10px rgba(156,85,255,0)"]
                                : "0 0 0 0 rgba(156,85,255,0)",
                            }}
                            transition={{ duration: 1, repeat: isCurrent ? Infinity : 0 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>

                          {/* Title */}
                          <div className="text-white font-semibold text-sm text-center mb-2">
                            {step.title}
                          </div>

                          {/* Data */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-[#9c55ff] text-xs text-center"
                              >
                                {step.data}
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Number Badge */}
                          <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            isActive ? "bg-[#9c55ff] text-white" : "bg-white/10 text-white/40"
                          }`}>
                            {step.id}
                          </div>
                        </div>

                        {/* Flowing Particles */}
                        {isCurrent && (
                          <motion.div
                            className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#9c55ff] rounded-full"
                            animate={{
                              x: [0, 50],
                              y: [0, -10, 0],
                              opacity: [1, 0],
                            }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CYCLE ZOOM PHASE */}
        <AnimatePresence>
          {phase === "cycle" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center min-h-[400px]"
            >
              <div className="text-white text-xl md:text-2xl font-bold mb-8 text-center">
                Il Ciclo Interno: Decision → Content → Validation
              </div>

              {/* Circular Flow */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Center Icon */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#9c55ff] to-[#c685ff] flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Brain className="w-10 h-10 text-white" />
                </motion.div>

                {/* Orbiting Nodes */}
                {["Decision", "Content", "Validation"].map((label, idx) => {
                  const angle = (idx * 120 - 90) * (Math.PI / 180);
                  const radius = 100;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={label}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        x: x - 40,
                        y: y - 40,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.3 }}
                    >
                      <div className="dashboard-card rounded-lg p-3 border-2 border-[#9c55ff]/50 bg-[#1a0f26]">
                        <div className="text-white font-semibold text-sm text-center whitespace-nowrap">
                          {label}
                        </div>
                        <div className="text-[#9c55ff] text-xs text-center">
                          {label === "Decision" && "Perché"}
                          {label === "Content" && "Cosa"}
                          {label === "Validation" && "Come"}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Connecting Line Animation */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-1 h-32 bg-gradient-to-b from-[#9c55ff] to-transparent origin-top"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ x: -0.5, y: -16 }}
                />
              </div>

              <div className="text-white/60 text-sm mt-8 text-center max-w-md">
                Loop continuo che replica il flusso mentale di un SEO professionista
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* OUTPUT PHASE */}
        <AnimatePresence>
          {phase === "output" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center min-h-[400px]"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
                className="mb-6"
              >
                <CheckCircle className="w-24 h-24 text-green-500" />
              </motion.div>

              <div className="text-white text-2xl md:text-3xl font-bold mb-4 text-center">
                ✓ Contenuto SEO-Ready
              </div>

              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {["Technical ✓", "Content ✓", "Strategy ✓"].map((badge, idx) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {badge}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 text-white/70"
              >
                <span>Ready to publish</span>
                <ArrowRight className="w-5 h-5" />
                <div className="flex gap-2">
                  <span className="bg-[#9c55ff]/20 text-[#9c55ff] px-3 py-1 rounded text-xs">
                    WordPress
                  </span>
                  <span className="bg-[#9c55ff]/20 text-[#9c55ff] px-3 py-1 rounded text-xs">
                    Shopify
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase Indicator */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {["input", "pipeline", "cycle", "output"].map((p) => (
            <div
              key={p}
              className={`w-2 h-2 rounded-full transition-all ${
                phase === p ? "bg-[#9c55ff] w-6" : "bg-white/20"
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
        {phase === "input" && "📥 Input domain"}
        {phase === "pipeline" && `⚙️ Pipeline in esecuzione (Step ${activeStep}/${steps.length})`}
        {phase === "cycle" && "🔄 Ciclo decisionale interno"}
        {phase === "output" && "✅ Output SEO-ready"}
      </motion.div>
    </div>
  );
};

