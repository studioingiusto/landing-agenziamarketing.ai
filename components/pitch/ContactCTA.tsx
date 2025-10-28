"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

export const ContactCTA = () => {
  const [copied, setCopied] = useState(false);
  const email = "mattia@agenziamarketing.ai";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-0 w-96 h-96 bg-[#9c55ff] rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#c685ff] rounded-full blur-[120px]"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 dashboard-card rounded-3xl p-12 md:p-16 border-2 border-[#9c55ff]/30 text-center">
          {/* Sparkles Animation */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-8 right-8 opacity-30"
          >
            <Sparkles className="w-12 h-12 text-[#9c55ff]" />
          </motion.div>
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-8 left-8 opacity-30"
          >
            <Sparkles className="w-12 h-12 text-[#c685ff]" />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-title font-bold mb-4">
              <span className="gradient-text">Vuoi saperne di più?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl">
              Parliamo di come agenziamarketing.ai può trasformare il tuo business
            </p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="inline-block">
              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-r from-[#9c55ff] to-[#c685ff] rounded-2xl p-1 shadow-[0_0_30px_rgba(156,85,255,0.3)] hover:shadow-[0_0_50px_rgba(156,85,255,0.5)] transition-all duration-300"
              >
                <div className="bg-[#1a0f2e] rounded-xl px-8 py-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                    <Mail className="w-7 h-7 text-[#9c55ff]" />
                  </div>
                  <div className="text-left">
                    <div className="text-white/60 text-sm mb-1">Contattaci via email</div>
                    <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#c685ff] transition-colors">
                      {email}
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#9c55ff] group-hover:translate-x-1 transition-transform ml-4" />
                </div>
              </motion.button>

              {/* Copy Feedback */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 10 }}
                className="mt-3 text-green-400 text-sm font-medium"
              >
                ✓ Email copiata negli appunti!
              </motion.div>
            </div>
          </motion.div>

          {/* Additional CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/70 text-sm">Risposta entro 24h</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-[#9c55ff]" />
              <span className="text-white/70 text-sm">Demo personalizzata disponibile</span>
            </div>
          </motion.div>

          {/* Bottom Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-white/50 text-sm">
              Grazie per l'attenzione. Siamo pronti a mostrarti il futuro della SEO.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Brand Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="text-center mt-8"
      >
        <div className="text-3xl md:text-4xl font-title font-bold gradient-text mb-2">
          agenziamarketing.ai
        </div>
        <div className="text-white/40 text-sm">
          Strategia SEO automatizzata. Intelligenza umana, velocità AI.
        </div>
      </motion.div>
    </div>
  );
};

