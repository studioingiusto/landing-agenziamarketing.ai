"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, TrendingUp, Brain, Search } from "lucide-react";

export const AnimatedWhyNow = () => {
  const [phase, setPhase] = useState<"traditional" | "aiOverview" | "zeroClick" | "adoption" | "moment">("traditional");
  const [adoption, setAdoption] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Fase 1: Traditional SERP (2s)
    if (phase === "traditional") {
      timeout = setTimeout(() => setPhase("aiOverview"), 2000);
    }

    // Fase 2: AI Overview appears (2s)
    if (phase === "aiOverview") {
      timeout = setTimeout(() => setPhase("zeroClick"), 2000);
    }

    // Fase 3: Zero-click expands (2s)
    if (phase === "zeroClick") {
      timeout = setTimeout(() => {
        setPhase("adoption");
        setAdoption(0);
      }, 2000);
    }

    // Fase 4: Adoption counter (2s)
    if (phase === "adoption") {
      if (adoption < 88) {
        timeout = setTimeout(() => setAdoption(adoption + 2), 30);
      } else {
        timeout = setTimeout(() => setPhase("moment"), 500);
      }
    }

    // Fase 5: Momento "Why Now" (2s)
    if (phase === "moment") {
      timeout = setTimeout(() => {
        setPhase("traditional");
        setAdoption(0);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [phase, adoption]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Google Search Mockup */}
      <motion.div
        className="dashboard-card rounded-xl overflow-hidden border-2 border-white/10 relative"
        animate={{
          borderColor: phase === "moment" ? "rgba(156, 85, 255, 0.8)" : "rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Search Header */}
        <div className="bg-white p-4 flex items-center gap-3 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400" />
          <div className="flex-1 text-gray-600 text-sm">
            come migliorare la SEO del mio sito
          </div>
          <div className="w-8 h-8 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#9c55ff]" />
          </div>
        </div>

        {/* SERP Results */}
        <div className="bg-white p-6 space-y-4">
          {/* AI Overview - Only visible after phase 1 */}
          <AnimatePresence>
            {(phase === "aiOverview" || phase === "zeroClick" || phase === "adoption" || phase === "moment") && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  height: "auto", 
                  y: 0,
                  scale: phase === "zeroClick" ? 1.02 : 1,
                }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border-2 border-blue-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900 text-sm">
                    AI Overview
                  </span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4 text-purple-500" />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-700 text-sm space-y-2"
                >
                  <p>
                    Per migliorare la SEO, inizia con un'<span className="font-semibold">analisi tecnica completa</span>, 
                    ottimizza i contenuti per le keyword rilevanti e costruisci una strategia di link building.
                  </p>
                  
                  {phase === "zeroClick" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="bg-white/50 rounded p-3 text-xs space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>✓ Audit tecnico e core web vitals</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>✓ Ricerca keyword e analisi competitor</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>✓ Contenuti ottimizzati e link building</span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                <div className="mt-3 text-xs text-gray-500">
                  Zero-click result • Powered by AI
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Traditional Results - Fade out after AI Overview */}
          <motion.div
            animate={{
              opacity: phase === "traditional" ? 1 : 0.3,
              scale: phase === "traditional" ? 1 : 0.98,
            }}
            className="space-y-4"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b border-gray-100 pb-3">
                <div className="text-blue-600 text-sm font-medium mb-1">
                  Guida SEO completa {i} • esempio-seo.com
                </div>
                <div className="text-gray-600 text-xs">
                  Scopri le migliori strategie SEO per il 2025. Tecniche avanzate, 
                  tool consigliati e case study reali...
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Adoption Stats - Bottom Banner */}
        <AnimatePresence>
          {(phase === "adoption" || phase === "moment") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-gradient-to-r from-[#9c55ff] to-[#c685ff] p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {adoption}% adozione AI nel marketing
                    </div>
                    <div className="text-white/80 text-xs">
                      Ma scarsa integrazione e controllo operativo
                    </div>
                  </div>
                </div>
                <div className="text-white/60 text-xs">2024-2025</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* "Why Now" Moment - Overlay on Animation Container */}
        <AnimatePresence>
          {phase === "moment" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 bg-gradient-to-br from-[#9c55ff]/95 to-[#c685ff]/95 backdrop-blur-sm flex items-center justify-center z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
                className="text-center px-4"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="inline-block mb-4"
                >
                  <Sparkles className="w-12 h-12 text-white" />
                </motion.div>
                <div className="text-white text-3xl md:text-4xl font-bold mb-3">
                  ⚡ IL MOMENTO È ADESSO
                </div>
                <div className="text-white/90 text-base md:text-lg">
                  La SEO sta cambiando. Serve adattarsi subito.
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Caption */}
      <motion.div
        className="text-center mt-4 text-white/60 text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {phase === "traditional" && "SERP tradizionale..."}
        {phase === "aiOverview" && "AI Overview appare ✨"}
        {phase === "zeroClick" && "Zero-click result si espande 📊"}
        {phase === "adoption" && `Adozione AI: ${adoption}% 📈`}
        {phase === "moment" && "⚡ WHY NOW"}
      </motion.div>
    </div>
  );
};

