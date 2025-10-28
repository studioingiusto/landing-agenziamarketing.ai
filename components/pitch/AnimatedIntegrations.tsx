"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, Package, Webhook, BarChart, Key, FileCode } from "lucide-react";

interface Integration {
  id: number;
  name: string;
  icon: any;
  data: string;
  color: string;
}

const integrations: Integration[] = [
  { id: 1, name: "WordPress", icon: FileCode, data: "Contenuto pubblicato", color: "from-blue-500 to-blue-600" },
  { id: 2, name: "Shopify", icon: Package, data: "Descrizioni prodotto", color: "from-green-500 to-green-600" },
  { id: 3, name: "Zapier", icon: Zap, data: "Automazione attivata", color: "from-orange-500 to-orange-600" },
  { id: 4, name: "Webhook", icon: Webhook, data: "Dati inviati", color: "from-purple-500 to-purple-600" },
  { id: 5, name: "GSC/Looker", icon: BarChart, data: "Report generato", color: "from-cyan-500 to-cyan-600" },
  { id: 6, name: "API Keys", icon: Key, data: "Credenziali sicure", color: "from-pink-500 to-pink-600" },
];

export const AnimatedIntegrations = () => {
  const [activeIntegration, setActiveIntegration] = useState(-1);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (activeIntegration < integrations.length) {
      timeout = setTimeout(() => {
        setActiveIntegration(activeIntegration + 1);
        setShowData(true);
        setTimeout(() => setShowData(false), 800);
      }, 1500);
    } else {
      // Reset after showing all
      timeout = setTimeout(() => {
        setActiveIntegration(-1);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [activeIntegration]);

  const getPosition = (index: number) => {
    const angle = (index * 60 - 90) * (Math.PI / 180); // 60° intervals for 6 items
    const radius = 180;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="dashboard-card rounded-2xl p-8 md:p-12 border-2 border-[#9c55ff]/20 relative overflow-hidden min-h-[500px] flex items-center justify-center">
        {/* Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-[#9c55ff]/10 via-transparent to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Central Hub */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Integration Nodes */}
          {integrations.map((integration, idx) => {
            const position = getPosition(idx);
            const isActive = activeIntegration >= idx;
            const isCurrent = activeIntegration === idx;
            const Icon = integration.icon;

            return (
              <div key={integration.id}>
                {/* Connection Line */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="absolute top-1/2 left-1/2 origin-left"
                      style={{
                        width: 180,
                        height: 2,
                        transform: `rotate(${idx * 60 - 90}deg)`,
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`w-full h-full bg-gradient-to-r ${integration.color}`} />
                      
                      {/* Data Pulse */}
                      {isCurrent && showData && (
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"
                          animate={{ x: [0, 180] }}
                          transition={{ duration: 0.8 }}
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Integration Card */}
                <motion.div
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    x: position.x - 60,
                    y: position.y - 50,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.3,
                    scale: isActive ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <motion.div
                    className={`dashboard-card rounded-xl p-4 w-32 border-2 ${
                      isActive ? "border-[#9c55ff]" : "border-white/10"
                    }`}
                    animate={{
                      boxShadow: isCurrent
                        ? ["0 0 0 0 rgba(156,85,255,0.7)", "0 0 0 8px rgba(156,85,255,0)"]
                        : "0 0 0 0 rgba(156,85,255,0)",
                    }}
                    transition={{ duration: 1, repeat: isCurrent ? Infinity : 0 }}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${integration.color} flex items-center justify-center mx-auto mb-2`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Name */}
                    <div className="text-white font-semibold text-xs text-center">
                      {integration.name}
                    </div>

                    {/* Data Label */}
                    <AnimatePresence>
                      {isCurrent && showData && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#9c55ff] text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                        >
                          {integration.data}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}

          {/* Central Hub Logo */}
          <motion.div
            className="relative z-10 dashboard-card rounded-2xl p-6 border-2 border-[#9c55ff] bg-[#1a0f26]"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#9c55ff] to-[#c685ff] flex items-center justify-center">
              <div className="text-white font-bold text-center text-xs leading-tight">
                agenzia<br/>marketing<br/>.ai
              </div>
            </div>
            <div className="text-white/80 text-xs text-center mt-3 font-semibold">
              Integration Hub
            </div>
          </motion.div>
        </div>

        {/* Progress Text */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm text-center">
          {activeIntegration < 0 && "Inizializzazione hub..."}
          {activeIntegration >= 0 && activeIntegration < integrations.length && (
            <span>
              Connessione a <span className="text-[#9c55ff] font-semibold">
                {integrations[activeIntegration].name}
              </span>
            </span>
          )}
          {activeIntegration >= integrations.length && "✓ Tutte le integrazioni attive"}
        </div>
      </div>

      {/* Caption */}
      <motion.div
        className="text-center mt-4 text-white/60 text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🔌 Connessioni sicure con i principali CMS e tool
      </motion.div>
    </div>
  );
};

