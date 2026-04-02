"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { PitchLocale } from "@/pitch.data";

const COPY: Record<
  PitchLocale,
  {
    title: string;
    subtitle: string;
    emailLabel: string;
    copied: string;
    reply24h: string;
    customDemo: string;
    footer: string;
  }
> = {
  it: {
    title: "Vuoi saperne di più?",
    subtitle: "Parliamo di come agenziamarketing.ai può trasformare il tuo business",
    emailLabel: "Contattaci via email",
    copied: "✓ Email copiata negli appunti!",
    reply24h: "Risposta entro 24h",
    customDemo: "Demo personalizzata disponibile",
    footer: "Grazie per l'attenzione. Siamo pronti a mostrarti il futuro della SEO.",
  },
  en: {
    title: "Want to know more?",
    subtitle: "Let's talk about how agenziamarketing.ai can transform your business",
    emailLabel: "Contact us by email",
    copied: "✓ Email copied to clipboard!",
    reply24h: "Reply within 24h",
    customDemo: "Personalized demo available",
    footer: "Thanks for your time. We're ready to show you the future of SEO.",
  },
};

export interface ContactCTAProps {
  locale?: PitchLocale;
  tagline: string;
}

export const ContactCTA = ({ locale = "it", tagline }: ContactCTAProps) => {
  const [copied, setCopied] = useState(false);
  const email = "mattia@agenziamarketing.ai";
  const t = COPY[locale];

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
        <div className="absolute inset-0">
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

        <div className="relative z-10 dashboard-card rounded-3xl p-12 md:p-16 border-2 border-[#9c55ff]/30 text-center">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-title font-bold mb-4">
              <span className="gradient-text">{t.title}</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl">{t.subtitle}</p>
          </motion.div>

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
                    <div className="text-white/60 text-sm mb-1">{t.emailLabel}</div>
                    <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#c685ff] transition-colors">
                      {email}
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#9c55ff] group-hover:translate-x-1 transition-transform ml-4" />
                </div>
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 10 }}
                className="mt-3 text-green-400 text-sm font-medium"
              >
                {t.copied}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/70 text-sm">{t.reply24h}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-[#9c55ff]" />
              <span className="text-white/70 text-sm">{t.customDemo}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-white/50 text-sm">{t.footer}</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="text-center mt-8"
      >
        <div className="text-3xl md:text-4xl font-title font-bold gradient-text mb-2">agenziamarketing.ai</div>
        <div className="text-white/40 text-sm">{tagline}</div>
      </motion.div>
    </div>
  );
};
