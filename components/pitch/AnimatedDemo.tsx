"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const AnimatedDemo = () => {
  const [phase, setPhase] = useState<"typing" | "ready" | "loading" | "complete">("typing");
  const [typedText, setTypedText] = useState("");
  const [progress, setProgress] = useState(0);
  
  const domainToType = "www.sitodaanalizzare.it";

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Fase 1: Typing animation
    if (phase === "typing") {
      if (typedText.length < domainToType.length) {
        timeout = setTimeout(() => {
          setTypedText(domainToType.slice(0, typedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setPhase("ready"), 500);
      }
    }

    // Fase 2: Ready to submit
    if (phase === "ready") {
      timeout = setTimeout(() => setPhase("loading"), 1000);
    }

    // Fase 3: Loading progress
    if (phase === "loading") {
      if (progress < 100) {
        timeout = setTimeout(() => {
          setProgress(progress + 2);
        }, 30);
      } else {
        timeout = setTimeout(() => setPhase("complete"), 500);
      }
    }

    // Fase 4: Complete - restart loop
    if (phase === "complete") {
      timeout = setTimeout(() => {
        setTypedText("");
        setProgress(0);
        setPhase("typing");
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [phase, typedText, progress]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Input Field */}
      <motion.div
        className="dashboard-card rounded-xl p-4 border-2 border-[#9c55ff]/30"
        animate={{
          borderColor: phase === "loading" ? "rgba(156, 85, 255, 0.6)" : "rgba(156, 85, 255, 0.3)",
        }}
      >
        <div className="flex items-center gap-3">
          {/* Input */}
          <div className="flex-1 bg-[#2a193c] rounded-lg px-4 py-3 border border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-white/50 text-sm">🌐</span>
              <span className="text-white font-mono text-sm">
                {typedText}
                {phase === "typing" && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-[#9c55ff]"
                  >
                    |
                  </motion.span>
                )}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            className="bg-[#9c55ff] hover:bg-[#a865ff] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
            animate={{
              scale: phase === "ready" ? [1, 1.05, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: phase === "ready" ? Infinity : 0,
            }}
          >
            <span className="hidden sm:inline">Analizza</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Loading Bar */}
        <AnimatePresence>
          {(phase === "loading" || phase === "complete") && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-4 h-4 text-[#9c55ff]" />
                <span className="text-white/80 text-sm">
                  {phase === "loading" ? "Analisi in corso..." : "Strategia pronta! ✨"}
                </span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#9c55ff] to-[#c685ff]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Loading Steps */}
              {phase === "loading" && (
                <motion.div
                  className="mt-3 space-y-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <div className={`w-1.5 h-1.5 rounded-full ${progress > 20 ? "bg-[#9c55ff]" : "bg-white/20"}`} />
                    <span className={progress > 20 ? "text-white/90" : ""}>Analisi SERP</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <div className={`w-1.5 h-1.5 rounded-full ${progress > 40 ? "bg-[#9c55ff]" : "bg-white/20"}`} />
                    <span className={progress > 40 ? "text-white/90" : ""}>Identificazione keyword</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <div className={`w-1.5 h-1.5 rounded-full ${progress > 60 ? "bg-[#9c55ff]" : "bg-white/20"}`} />
                    <span className={progress > 60 ? "text-white/90" : ""}>Strategia contenuti</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <div className={`w-1.5 h-1.5 rounded-full ${progress > 80 ? "bg-[#9c55ff]" : "bg-white/20"}`} />
                    <span className={progress > 80 ? "text-white/90" : ""}>Validazione tecnica</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

