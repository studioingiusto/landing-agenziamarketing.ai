"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { User, Cpu, CheckCircle, Zap } from "lucide-react";
import type { PitchLocale } from "@/pitch.data";

interface Task {
  id: number;
  name: string;
  manualTime: number;
  aiTime: number;
}

function tasksForLocale(locale: PitchLocale): Task[] {
  if (locale === "en") {
    return [
      { id: 1, name: "Site analysis", manualTime: 3, aiTime: 1 },
      { id: 2, name: "Keyword research", manualTime: 4, aiTime: 1.5 },
      { id: 3, name: "Content plan", manualTime: 3.5, aiTime: 1 },
      { id: 4, name: "Content creation", manualTime: 5, aiTime: 2 },
      { id: 5, name: "SEO validation", manualTime: 2.5, aiTime: 0.8 },
    ];
  }
  return [
    { id: 1, name: "Analisi sito", manualTime: 3, aiTime: 1 },
    { id: 2, name: "Keyword research", manualTime: 4, aiTime: 1.5 },
    { id: 3, name: "Piano contenuti", manualTime: 3.5, aiTime: 1 },
    { id: 4, name: "Creazione contenuto", manualTime: 5, aiTime: 2 },
    { id: 5, name: "Validazione SEO", manualTime: 2.5, aiTime: 0.8 },
  ];
}

const COPY: Record<
  PitchLocale,
  {
    header: string;
    sub: string;
    manualWorkflow: string;
    aiWorkflow: string;
    completedIn: string;
    timeSaved: string;
    matchTitle: string;
    matchBody: string;
    statLabels: [string, string, string];
    taskRunning: string;
    analyzing: string;
    validationDone: string;
    caption: string;
  }
> = {
  it: {
    header: "Doppio Flusso: Validazione Comparativa",
    sub: "SEO Manuale vs AI Agent sugli stessi progetti",
    manualWorkflow: "Workflow manuale",
    aiWorkflow: "Workflow automatico",
    completedIn: "Completato in",
    timeSaved: "-65% tempo risparmiato!",
    matchTitle: "Match Qualitativo",
    matchBody:
      "Coerenza alta su cluster, intent e opportunità rilevate.<br/>L'AI replica le decisioni di un SEO specialist.",
    statLabels: ["Tempo ridotto", "Qualità mantenuta", "Lead generati"],
    taskRunning: "Task in corso:",
    analyzing: "Analisi dei risultati...",
    validationDone: "✓ Validazione completata con successo",
    caption: "📊 Test validati su oltre 10 siti pilota",
  },
  en: {
    header: "Dual flow: comparative validation",
    sub: "Manual SEO vs AI agent on the same projects",
    manualWorkflow: "Manual workflow",
    aiWorkflow: "Automated workflow",
    completedIn: "Completed in",
    timeSaved: "-65% time saved!",
    matchTitle: "Qualitative match",
    matchBody:
      "High consistency on clusters, intent, and detected opportunities.<br/>The AI mirrors an SEO specialist’s decisions.",
    statLabels: ["Time saved", "Quality held", "Leads generated"],
    taskRunning: "Current task:",
    analyzing: "Analyzing results...",
    validationDone: "✓ Validation completed successfully",
    caption: "📊 Validated on 10+ pilot sites",
  },
};

export interface AnimatedProofProps {
  locale?: PitchLocale;
}

export const AnimatedProof = ({ locale = "it" }: AnimatedProofProps) => {
  const t = COPY[locale];
  const tasks = useMemo(() => tasksForLocale(locale), [locale]);
  const [activeTask, setActiveTask] = useState(0);
  const [manualProgress, setManualProgress] = useState(0);
  const [aiProgress, setAiProgress] = useState(0);
  const [manualComplete, setManualComplete] = useState(false);
  const [aiComplete, setAiComplete] = useState(false);
  const [showMatch, setShowMatch] = useState(false);

  useEffect(() => {
    setActiveTask(0);
    setManualProgress(0);
    setAiProgress(0);
    setManualComplete(false);
    setAiComplete(false);
    setShowMatch(false);
  }, [locale]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (activeTask < tasks.length) {
      const task = tasks[activeTask];
      const manualDuration = task.manualTime * 1000;
      const aiDuration = task.aiTime * 1000;

      if (aiProgress < 100) {
        timeout = setTimeout(() => {
          setAiProgress(Math.min(aiProgress + 100 / (aiDuration / 50), 100));
        }, 50);
      }

      if (manualProgress < 100) {
        timeout = setTimeout(() => {
          setManualProgress(Math.min(manualProgress + 100 / (manualDuration / 50), 100));
        }, 50);
      }

      if (manualProgress >= 100 && aiProgress >= 100) {
        timeout = setTimeout(() => {
          setActiveTask(activeTask + 1);
          setManualProgress(0);
          setAiProgress(0);
        }, 500);
      }
    } else if (!manualComplete && !aiComplete) {
      setManualComplete(true);
      setAiComplete(true);
      timeout = setTimeout(() => setShowMatch(true), 800);
    } else if (showMatch) {
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
  }, [activeTask, manualProgress, aiProgress, manualComplete, aiComplete, showMatch, tasks]);

  const totalManualTime = tasks.reduce((acc, x) => acc + x.manualTime, 0);
  const totalAiTime = tasks.reduce((acc, x) => acc + x.aiTime, 0);
  const statValues = ["-65%", "95%", "10"] as const;

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="dashboard-card rounded-2xl p-6 md:p-8 border-2 border-[#9c55ff]/20">
        <div className="text-center mb-8">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{t.header}</h3>
          <p className="text-white/60 text-sm">{t.sub}</p>
        </div>

        <AnimatePresence mode="wait">
          {!showMatch ? (
            <motion.div
              key="comparison"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">SEO Specialist</div>
                    <div className="text-white/60 text-xs">{t.manualWorkflow}</div>
                  </div>
                  <div className="text-blue-400 text-sm font-mono">{totalManualTime}h</div>
                </div>

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
                          {isComplete && <CheckCircle className="w-4 h-4 text-green-400" />}
                        </div>
                        {isActive && (
                          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div className="h-full bg-blue-500" style={{ width: `${manualProgress}%` }} />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {manualComplete && !showMatch && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-green-400 font-semibold">
                      {t.completedIn} {totalManualTime}h
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-[#9c55ff]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">AI Agent</div>
                    <div className="text-white/60 text-xs">{t.aiWorkflow}</div>
                  </div>
                  <div className="text-[#9c55ff] text-sm font-mono flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {totalAiTime}h
                  </div>
                </div>

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
                          {isComplete && <CheckCircle className="w-4 h-4 text-green-400" />}
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

                {aiComplete && !showMatch && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-[#9c55ff]/10 border border-[#9c55ff]/30 rounded-lg text-center"
                  >
                    <CheckCircle className="w-8 h-8 text-[#9c55ff] mx-auto mb-2" />
                    <div className="text-[#9c55ff] font-semibold">
                      {t.completedIn} {totalAiTime}h
                    </div>
                    <div className="text-green-400 text-xs mt-1">{t.timeSaved}</div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ) : (
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
                <div className="text-5xl md:text-6xl font-bold text-[#9c55ff] mb-3">95%</div>
                <div className="text-white text-xl md:text-2xl font-semibold mb-2">{t.matchTitle}</div>
                <div
                  className="text-white/60 text-sm max-w-md"
                  dangerouslySetInnerHTML={{ __html: t.matchBody }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
                {t.statLabels.map((label, idx) => {
                  const color = idx === 0 ? "green" : idx === 1 ? "purple" : "blue";
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.2 }}
                      className="dashboard-card rounded-lg p-4 text-center border border-white/10"
                    >
                      <div
                        className={`text-2xl font-bold mb-1 ${
                          color === "green"
                            ? "text-green-400"
                            : color === "purple"
                              ? "text-[#9c55ff]"
                              : "text-blue-400"
                        }`}
                      >
                        {statValues[idx]}
                      </div>
                      <div className="text-white/70 text-xs">{label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mt-6 text-white/60 text-sm">
          {!showMatch ? (
            activeTask < tasks.length ? (
              <span>
                {t.taskRunning}{" "}
                <span className="text-[#9c55ff] font-semibold">{tasks[activeTask].name}</span>
              </span>
            ) : (
              t.analyzing
            )
          ) : (
            t.validationDone
          )}
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
