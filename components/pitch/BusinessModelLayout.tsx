"use client";

import { motion } from "framer-motion";
import { Zap, Briefcase, Rocket, TrendingUp, DollarSign, Percent, RefreshCw, Users } from "lucide-react";

interface BusinessModelLayoutProps {
  bullets: Array<{ text: string; tag?: string }>;
}

export const BusinessModelLayout = ({ bullets }: BusinessModelLayoutProps) => {
  const pricingTiers = [
    {
      name: "Starter",
      icon: Zap,
      priceRange: "€49–99",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/5",
      borderColor: "border-blue-500/30",
      target: "Freelance / PMI",
    },
    {
      name: "Agency",
      icon: Briefcase,
      priceRange: "€299–499",
      color: "purple",
      gradient: "from-[#9c55ff] to-[#c685ff]",
      bgGradient: "from-[#9c55ff]/10 to-[#c685ff]/5",
      borderColor: "border-[#9c55ff]/30",
      target: "Agenzie medio-piccole",
      featured: true,
    },
    {
      name: "Agency+",
      icon: Rocket,
      priceRange: "€999–1.999",
      color: "amber",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-500/10 to-orange-500/5",
      borderColor: "border-amber-500/30",
      target: "Enterprise / Scale-up",
    },
  ];

  const metrics = [
    {
      icon: DollarSign,
      label: "ARPA Obiettivo",
      value: "~€1.800",
      suffix: "/anno",
      description: "Coerente con piani e usage",
      color: "green",
    },
    {
      icon: Percent,
      label: "Margine Lordo",
      value: "75-80%",
      suffix: "",
      description: "Nodi modulari e caching API (run cost < €0,30) — l'architettura stessa è il motore di efficienza",
      color: "emerald",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 bg-[#9c55ff]/10 border border-[#9c55ff]/30 rounded-full px-4 py-2 mb-4">
          <TrendingUp className="w-4 h-4 text-[#9c55ff]" />
          <span className="text-[#9c55ff] text-sm font-semibold">SaaS Tierizzato + Usage-Based</span>
        </div>
      </motion.div>

      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingTiers.map((tier, idx) => {
          const Icon = tier.icon;
          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative"
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-[#9c55ff] text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPOLARE
                  </div>
                </div>
              )}
              <div
                className={`dashboard-card rounded-2xl p-6 border-2 ${tier.borderColor} bg-gradient-to-br ${tier.bgGradient} h-full`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${tier.gradient} flex items-center justify-center`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Name */}
                <div className="text-center mb-3">
                  <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-white/60 text-xs">{tier.target}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-4">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                    {tier.priceRange}
                  </div>
                  <div className="text-white/50 text-xs mt-1">/mese</div>
                </div>

                {/* Divider */}
                <div className={`h-px bg-gradient-to-r ${tier.gradient} opacity-20 my-4`} />

                {/* Usage Info */}
                <div className="text-center">
                  <div className="text-white/70 text-xs">
                    + crediti usage-based
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Economics Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="dashboard-card rounded-2xl p-8 border-2 border-[#9c55ff]/20"
      >
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">📊 Economics</h3>
          <p className="text-white/60 text-sm">Metriche chiave del modello di business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className={`dashboard-card rounded-xl p-6 border-2 ${
                  metric.color === "green"
                    ? "border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent"
                    : "border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center ${
                      metric.color === "green" ? "bg-green-500/20" : "bg-emerald-500/20"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        metric.color === "green" ? "text-green-400" : "text-emerald-400"
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="text-white/70 text-sm mb-2">{metric.label}</div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span
                        className={`text-3xl font-bold ${
                          metric.color === "green" ? "text-green-400" : "text-emerald-400"
                        }`}
                      >
                        {metric.value}
                      </span>
                      {metric.suffix && (
                        <span className="text-white/50 text-sm">{metric.suffix}</span>
                      )}
                    </div>
                    <div className="text-white/60 text-xs leading-relaxed">{metric.description}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Revenue Expansion Loop - NEW */}
      {bullets[3] && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="dashboard-card rounded-2xl p-8 border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Revenue Expansion Loop</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {bullets[3].text.split(':')[1] || bullets[3].text}
              </p>
            </div>
          </div>

          {/* Expansion Modules */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {[
              { label: "Domini aggiuntivi", color: "blue" },
              { label: "Report white-label", color: "purple" },
              { label: "Audit multipli", color: "amber" },
              { label: "Moduli AI avanzati", color: "green" },
            ].map((module, idx) => (
              <motion.div
                key={module.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-3 text-center hover:border-[#9c55ff]/30 transition-all"
              >
                <div className="text-white/80 text-xs font-medium">{module.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Retention & Growth Strategy - NEW */}
      {bullets[4] && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          className="dashboard-card rounded-2xl p-8 border-2 border-[#9c55ff]/30"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#9c55ff]/20 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-[#9c55ff]" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-3">Retention & Scalability</h3>
              
              {/* Retention Rate */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl font-bold text-[#9c55ff]">80%</div>
                <div className="text-white/70 text-sm">
                  Retention annua stimata<br/>
                  <span className="text-white/50 text-xs">(benchmark SEMrush/SurferSEO)</span>
                </div>
              </div>

              {/* Growth Path */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="bg-[#9c55ff]/20 text-[#9c55ff] text-sm font-medium px-3 py-1.5 rounded-full">
                  PLG
                </div>
                <div className="text-white/50">→</div>
                <div className="bg-blue-500/20 text-blue-400 text-sm font-medium px-3 py-1.5 rounded-full">
                  Agenzie
                </div>
                <div className="text-white/50">→</div>
                <div className="bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1.5 rounded-full">
                  White-label Enterprise
                </div>
              </div>

              <p className="text-white/60 text-xs leading-relaxed">
                Scalabilità orizzontale via API e integrazioni CMS
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Model Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.3 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/80 text-sm">
            Modello scalabile con alta marginalità, revenue expansion e forte retention
          </span>
        </div>
      </motion.div>
    </div>
  );
};

