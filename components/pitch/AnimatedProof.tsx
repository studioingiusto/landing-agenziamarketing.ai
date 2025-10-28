"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { User, Cpu, Clock, CheckCircle, Zap } from "lucide-react";

interface Task {
  id: number;
  name: string;
  manualTime: number; // in seconds for animation
  aiTime: number;
}

const tasks: Task[] = [
  { id: 1, name: "Analisi sito", manualTime: 3, aiTime: 1 },
  { id: 2, name: "Keyword research", manualTime: 4, aiTime: 1.5 },
  { id: 3, name: "Piano contenuti", manualTime: 3.5, aiTime: 1 },
  { id: 4, name: "Creazione contenuto", manualTime: 5, aiTime: 2 },
  { id: 5, name: "Validazione SEO", manualTime: 2.5, aiTime: 0.8 },
];

export const AnimatedProof = () => {
  const [activeTask, setActiveTask] = useState(0);
  const [manualProgress, setManualProgress] = useState(0);
  const [aiProgress, setAiProgress] = useState(0);
  const [manualComplete, setManualComplete] = useState(false);
  const [aiComplete, setAiComplete] = useState(false);
  const [showMatch, setShowMatch] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (activeTask < tasks.length) {
      const task = tasks[activeTask];
      const manualDuration = task.manualTime * 1000;
      const aiDuration = task.aiTime * 1000;

      // AI progress
      if (aiProgress < 100) {
        timeout = setTimeout(() => {
          setAiProgress(Math.min(aiProgress + (100 / (aiDuration / 50)), 100));
        }, 50);
      }

      // Manual progress (slower)
      if (manualProgress < 100) {
        timeout = setTimeout(() => {
          setManualProgress(Math.min(manualProgress + (100 / (manualDuration / 50)), 100));
        }, 50);
      }

      // Move to next task when manual completes
      if (manualProgress >= 100 && aiProgress >= 100) {
        timeout = setTimeout(() => {
          setActiveTask(activeTask + 1);
          setManualProgress(0);
          setAiProgress(0);
        }, 500);
      }
    } else if (!manualComplete && !aiComplete) {
      // Show completion
      setManualComplete(true);
      setAiComplete(true);
      timeout = setTimeout(() => setShowMatch(true), 800);
    } else if (showMatch) {
      // Reset after showing match
      timeout = setTimeout(() => {
        setActiveTask(0);
        setManualProgress(0);
        setAiProgress(0);
        setManualComplete(false);
        setAiComplete(false);
        setShowMatch(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [activeTask, manualProgress, aiProgress, manualComplete, aiComplete, showMatch]);

  const totalManualTime = tasks.reduce((acc, t) => acc + t.manualTime, 0);
  const totalAiTime = tasks.reduce((acc, t) => acc + t.aiTime, 0);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="dashboard-card rounded-2xl p-6 md:p-8 border-2 border-[#9c55ff]/20">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
            Doppio Flusso: Validazione Comparativa
          </h3>
          <p className="text-white/60 text-sm">
            SEO Manuale vs AI Agent sugli stessi progetti
          </p>
        </div>

        {/* Comparison Section */}
        <AnimatePresence mode="wait">
          {!showMatch ? (
            <motion.div
              key="comparison"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Manual Column */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">SEO Specialist</div>
                    <div className="text-white/60 text-xs">Workflow manuale</div>
                  </div>
                  <div className="text-blue-400 text-sm font-mono">
                    {totalManualTime}h
                  </div>
                </div>

                {/* Tasks */}
                <div className="space-y-3">
                  {tasks.map((task, idx) => {
                    const isActive = activeTask === idx;
                    const isComplete = activeTask > idx;

                    return (
                      <motion.div
                        key={task.id}
                        className={`p-3 rounded-lg border transition-all ${
                          isActive
                            ? "bg-blue-500/10 border-blue-500/30"
                            : isComplete
                            ? "bg-white/5 border-white/10"
                            : "bg-transparent border-white/5"
                        }`}
                        animate={{
                          opacity: isActive || isComplete ? 1 : 0.4,
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white text-sm">{task.name}</span>
                          {isComplete && (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                        {isActive && (
                          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-blue-500"
                              style={{ width: `${manualProgress}%` }}
                            />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Completion */}
                {manualComplete && !showMatch && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-green-400 font-semibold">
                      Completato in {totalManualTime}h
                    </div>
                  </motion.div>
                )}
              </div>

              {/* AI Column */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-[#9c55ff]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">AI Agent</div>
                    <div className="text-white/60 text-xs">Workflow automatico</div>
                  </div>
                  <div className="text-[#9c55ff] text-sm font-mono flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {totalAiTime}h
                  </div>
                </div>

                {/* Tasks */}
                <div className="space-y-3">
                  {tasks.map((task, idx) => {
                    const isActive = activeTask === idx;
                    const isComplete = activeTask > idx;

                    return (
                      <motion.div
                        key={task.id}
                        className={`p-3 rounded-lg border transition-all ${
                          isActive
                            ? "bg-[#9c55ff]/10 border-[#9c55ff]/30"
                            : isComplete
                            ? "bg-white/5 border-white/10"
                            : "bg-transparent border-white/5"
                        }`}
                        animate={{
                          opacity: isActive || isComplete ? 1 : 0.4,
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white text-sm">{task.name}</span>
                          {isComplete && (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                        {isActive && (
                          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#9c55ff] to-[#c685ff]"
                              style={{ width: `${aiProgress}%` }}
                            />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Completion */}
                {aiComplete && !showMatch && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-[#9c55ff]/10 border border-[#9c55ff]/30 rounded-lg text-center"
                  >
                    <CheckCircle className="w-8 h-8 text-[#9c55ff] mx-auto mb-2" />
                    <div className="text-[#9c55ff] font-semibold">
                      Completato in {totalAiTime}h
                    </div>
                    <div className="text-green-400 text-xs mt-1">
                      -65% tempo risparmiato!
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ) : (
            /* Match Quality Result */
            <motion.div
              key="match"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
                transition={{ duration: 1.5 }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-[#9c55ff] to-[#c685ff] flex items-center justify-center mb-6"
              >
                <CheckCircle className="w-12 h-12 text-white" />
              </motion.div>

              <div className="text-center mb-8">
                <div className="text-5xl md:text-6xl font-bold text-[#9c55ff] mb-3">
                  95%
                </div>
                <div className="text-white text-xl md:text-2xl font-semibold mb-2">
                  Match Qualitativo
                </div>
                <div className="text-white/60 text-sm max-w-md">
                  Coerenza alta su cluster, intent e opportunità rilevate.<br/>
                  L'AI replica le decisioni di un SEO specialist.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
                {[
                  { label: "Tempo ridotto", value: "-65%", color: "green" },
                  { label: "Qualità mantenuta", value: "95%", color: "purple" },
                  { label: "Lead generati", value: "10", color: "blue" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="dashboard-card rounded-lg p-4 text-center border border-white/10"
                  >
                    <div className={`text-2xl font-bold mb-1 ${
                      stat.color === "green" ? "text-green-400" :
                      stat.color === "purple" ? "text-[#9c55ff]" :
                      "text-blue-400"
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Caption */}
        <div className="text-center mt-6 text-white/60 text-sm">
          {!showMatch ? (
            activeTask < tasks.length ? (
              <span>
                Task in corso: <span className="text-[#9c55ff] font-semibold">{tasks[activeTask].name}</span>
              </span>
            ) : (
              "Analisi dei risultati..."
            )
          ) : (
            "✓ Validazione completata con successo"
          )}
        </div>
      </div>

      {/* Caption */}
      <motion.div
        className="text-center mt-4 text-white/60 text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        📊 Test validati su oltre 10 siti pilota
      </motion.div>
    </div>
  );
};

