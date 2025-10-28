"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { BarChart, FileText, Search, Settings, TrendingUp, Zap, AlertCircle, Loader } from "lucide-react";

interface Tab {
  id: number;
  name: string;
  icon: any;
}

export const AnimatedProblem = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [isExploding, setIsExploding] = useState(false);
  
  const possibleTabs = [
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
    
    // Fase 1: Aggiungi tab una alla volta
    if (tabs.length < 10 && !isExploding) {
      timeout = setTimeout(() => {
        const nextTab = possibleTabs[tabs.length];
        setTabs([...tabs, { ...nextTab, id: tabs.length }]);
      }, 600);
    }
    
    // Fase 2: Explode e reset
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
      {/* Browser Window Mockup */}
      <motion.div
        className="dashboard-card rounded-xl overflow-hidden border-2 border-white/10"
        animate={{
          scale: isExploding ? 1.05 : 1,
          opacity: isExploding ? 0.5 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Browser Header */}
        <div className="bg-[#1a0f26] border-b border-white/10 p-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 bg-[#2a193c] rounded px-3 py-1.5 text-white/40 text-xs">
            🌐 Managing SEO workflow...
          </div>
        </div>

        {/* Tabs Container */}
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

          {/* Chaos Overlay */}
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
                      x: [
                        Math.random() * 100,
                        Math.random() * 300,
                        Math.random() * 100,
                      ],
                      y: [
                        Math.random() * 40,
                        Math.random() * 60,
                        Math.random() * 40,
                      ],
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

        {/* Content Area with Warning */}
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
                    {tabs.length} tool aperti contemporaneamente
                  </div>
                  <div className="text-white/70 text-xs">
                    Workflow frammentato. Nessuna guida strategica. Troppa complessità.
                  </div>
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
                <div className="text-white/50 text-sm mt-4">
                  Troppi tool, troppa confusione...
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Caption */}
      <motion.div
        className="text-center mt-4 text-white/60 text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {tabs.length === 0 ? "Inizia il workflow SEO..." : 
         tabs.length < 5 ? "Aprendo i tool necessari..." :
         tabs.length < 10 ? "Il caos aumenta..." :
         "Reset..."}
      </motion.div>
    </div>
  );
};

