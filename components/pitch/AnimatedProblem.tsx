"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { BarChart, FileText, Search, Settings, TrendingUp, Zap, AlertCircle, Loader } from "lucide-react";
import type { PitchLocale } from "@/pitch.data";

interface Tab {
  id: number;
  name: string;
  icon: typeof BarChart;
}

const COPY: Record<
  PitchLocale,
  {
    urlBar: string;
    toolsOpen: string;
    warningBody: string;
    exploding: string;
    cap0: string;
    cap1: string;
    cap2: string;
    cap3: string;
  }
> = {
  it: {
    urlBar: "🌐 Gestione workflow SEO...",
    toolsOpen: "tool aperti contemporaneamente",
    warningBody: "Workflow frammentato. Nessuna guida strategica. Troppa complessità.",
    exploding: "Troppi tool, troppa confusione...",
    cap0: "Inizia il workflow SEO...",
    cap1: "Aprendo i tool necessari...",
    cap2: "Il caos aumenta...",
    cap3: "Reset...",
  },
  en: {
    urlBar: "🌐 Managing SEO workflow...",
    toolsOpen: "tools open at once",
    warningBody: "Fragmented workflow. No strategic guidance. Too much complexity.",
    exploding: "Too many tools, too much confusion...",
    cap0: "Starting the SEO workflow...",
    cap1: "Opening the tools you need...",
    cap2: "Chaos builds...",
    cap3: "Reset...",
  },
};

export interface AnimatedProblemProps {
  locale?: PitchLocale;
}

export const AnimatedProblem = ({ locale = "it" }: AnimatedProblemProps) => {
  const t = COPY[locale];
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [isExploding, setIsExploding] = useState(false);

  const possibleTabs: Omit<Tab, "id">[] = [
    { name: "SEMrush", icon: BarChart },
    { name: "Ahrefs", icon: Search },
    { name: "Screaming Frog", icon: Settings },
    { name: "Google Analytics", icon: TrendingUp },
    { name: "Jasper AI", icon: Zap },
    { name: "Surfer SEO", icon: FileText },
    { name: "Keyword Tool", icon: Search },
    { name: "Moz", icon: BarChart },
    { name: "ChatGPT", icon: Zap },
    { name: "Copyscape", icon: FileText },
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (tabs.length < 10 && !isExploding) {
      timeout = setTimeout(() => {
        const next = possibleTabs[tabs.length];
        setTabs([...tabs, { ...next, id: tabs.length }]);
      }, 600);
    }

    if (tabs.length === 10 && !isExploding) {
      timeout = setTimeout(() => {
        setIsExploding(true);
        setTimeout(() => {
          setTabs([]);
          setIsExploding(false);
        }, 1000);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [tabs, isExploding]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        className="dashboard-card rounded-xl overflow-hidden border-2 border-white/10"
        animate={{
          scale: isExploding ? 1.05 : 1,
          opacity: isExploding ? 0.5 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-[#1a0f26] border-b border-white/10 p-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 bg-[#2a193c] rounded px-3 py-1.5 text-white/40 text-xs">{t.urlBar}</div>
        </div>

        <div className="bg-[#2a193c] p-2 min-h-[60px] relative overflow-hidden">
          <div className="flex flex-wrap gap-1">
            <AnimatePresence>
              {tabs.map((tab, idx) => {
                const Icon = tab.icon;
                return (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      rotate: isExploding ? Math.random() * 360 : 0,
                      x: isExploding ? (Math.random() - 0.5) * 200 : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                      y: -50,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 bg-[#9c55ff]/20 hover:bg-[#9c55ff]/30 border border-[#9c55ff]/30 px-3 py-1.5 rounded-t-lg text-xs text-white/80 relative"
                  >
                    <Icon className="w-3 h-3" />
                    <span className="max-w-[80px] truncate">{tab.name}</span>
                    {idx >= tabs.length - 3 && (
                      <Loader className="w-3 h-3 animate-spin text-[#9c55ff]" />
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {tabs.length >= 7 && !isExploding && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#9c55ff]/30 rounded-full"
                    animate={{
                      x: [Math.random() * 100, Math.random() * 300, Math.random() * 100],
                      y: [Math.random() * 40, Math.random() * 60, Math.random() * 40],
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="bg-gradient-to-b from-[#2a193c] to-[#1a0f26] p-6">
          <AnimatePresence mode="wait">
            {tabs.length >= 5 && !isExploding && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-start gap-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4"
              >
                <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-yellow-500 font-semibold text-sm mb-1">
                    {tabs.length} {t.toolsOpen}
                  </div>
                  <div className="text-white/70 text-xs">{t.warningBody}</div>
                </div>
              </motion.div>
            )}

            {isExploding && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Loader className="w-12 h-12 text-[#9c55ff]/50" />
                </motion.div>
                <div className="text-white/50 text-sm mt-4">{t.exploding}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className="text-center mt-4 text-white/60 text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {tabs.length === 0
          ? t.cap0
          : tabs.length < 5
            ? t.cap1
            : tabs.length < 10
              ? t.cap2
              : t.cap3}
      </motion.div>
    </div>
  );
};
