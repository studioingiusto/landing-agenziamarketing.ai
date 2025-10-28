"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { TrendingUp, Globe, Building2 } from "lucide-react";

export const AnimatedMarket = () => {
  const [phase, setPhase] = useState<"tam" | "italy">("tam");
  const [tamProgress, setTamProgress] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "tam") {
      // Animate TAM growth
      if (tamProgress < 100) {
        timeout = setTimeout(() => {
          setTamProgress(Math.min(tamProgress + 2, 100));
        }, 30);
      } else {
        timeout = setTimeout(() => setPhase("italy"), 1500);
      }
    } else if (phase === "italy") {
      timeout = setTimeout(() => {
        setPhase("tam");
        setTamProgress(0);
      }, 3500);
    }

    return () => clearTimeout(timeout);
  }, [phase, tamProgress]);

  const currentTam = 74.6 + (tamProgress / 100) * (154.6 - 74.6);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="dashboard-card rounded-2xl p-6 md:p-8 border-2 border-[#9c55ff]/20">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
            Opportunità di Mercato
          </h3>
          <p className="text-white/60 text-sm">
            SEO Software Market - Crescita e Target
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* TAM Global Phase */}
          {phase === "tam" && (
            <motion.div
              key="tam"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#9c55ff]" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">TAM Globale</div>
                  <div className="text-white/60 text-sm">SEO Software Market</div>
                </div>
              </div>

              {/* Growth Chart */}
              <div className="relative h-64 flex items-end justify-center gap-12">
                {/* 2024 Bar */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-24 bg-gradient-to-t from-blue-500/80 to-blue-400/80 rounded-t-lg relative"
                    initial={{ height: 0 }}
                    animate={{ height: "120px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute -top-12 left-1/2 -translate-x-1/2 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="text-2xl font-bold text-blue-400">$74.6B</div>
                    </motion.div>
                  </motion.div>
                  <div className="text-white/60 text-sm mt-3 font-semibold">2024</div>
                </div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center mb-8"
                >
                  <TrendingUp className="w-8 h-8 text-[#9c55ff]" />
                </motion.div>

                {/* 2030 Bar - Animated Growth */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-24 bg-gradient-to-t from-[#9c55ff] to-[#c685ff] rounded-t-lg relative"
                    style={{ height: `${120 + (tamProgress / 100) * 120}px` }}
                    transition={{ duration: 0.1 }}
                  >
                    <motion.div
                      className="absolute -top-12 left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="text-2xl font-bold text-[#9c55ff]">
                        ${currentTam.toFixed(1)}B
                      </div>
                    </motion.div>
                  </motion.div>
                  <div className="text-white/60 text-sm mt-3 font-semibold">2030</div>
                </div>
              </div>

              {/* Growth Percentage */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-bold">+107% crescita</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Italy Market Phase */}
          {phase === "italy" && (
            <motion.div
              key="italy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Mercato Italia</div>
                  <div className="text-white/60 text-sm">Agenzie di Comunicazione</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Total Agencies */}
                <motion.div
                  className="dashboard-card rounded-xl p-6 border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-4xl md:text-5xl font-bold text-blue-400 mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, type: "spring" }}
                    >
                      ~24k
                    </motion.div>
                    <div className="text-white/70 text-sm">Agenzie totali</div>
                  </div>
                </motion.div>

                {/* SEO Focused */}
                <motion.div
                  className="dashboard-card rounded-xl p-6 border border-[#9c55ff]/30 bg-[#9c55ff]/5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-4xl md:text-5xl font-bold text-[#9c55ff] mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                    >
                      30-60%
                    </motion.div>
                    <div className="text-white/70 text-sm">con focus SEO</div>
                  </div>
                </motion.div>
              </div>

              {/* Visual Representation */}
              <motion.div
                className="flex justify-center gap-1 flex-wrap max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {Array.from({ length: 100 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-sm ${
                      i < 45 ? "bg-[#9c55ff]" : "bg-white/10"
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.01 }}
                  />
                ))}
              </motion.div>
              <div className="text-center text-white/60 text-xs">
                Ogni punto = 1% delle agenzie
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {["tam", "italy"].map((p) => (
            <div
              key={p}
              className={`w-2 h-2 rounded-full transition-all ${
                phase === p ? "bg-[#9c55ff] w-8" : "bg-white/20"
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
        💼 Mercato globale in forte crescita, opportunità Italia
      </motion.div>
    </div>
  );
};

