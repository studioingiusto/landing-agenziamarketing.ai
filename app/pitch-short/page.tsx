"use client";

import React, { useState } from "react";
import pitchDataShort from "@/pitch.data.short";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/pitch/AnimatedSection";
import { AnimatedCounter } from "@/components/pitch/AnimatedCounter";
import { MagneticButton } from "@/components/pitch/MagneticButton";
import { TiltCard } from "@/components/pitch/TiltCard";
import { ParticleBackground } from "@/components/pitch/ParticleBackground";
import { ScrollProgress } from "@/components/pitch/ScrollProgress";
import { AnimatedDemo } from "@/components/pitch/AnimatedDemo";
import { AnimatedProblem } from "@/components/pitch/AnimatedProblem";
import { AnimatedWhyNow } from "@/components/pitch/AnimatedWhyNow";
import { AnimatedSolution } from "@/components/pitch/AnimatedSolution";
import { AnimatedIntegrations } from "@/components/pitch/AnimatedIntegrations";
import { AnimatedProof } from "@/components/pitch/AnimatedProof";
import { AnimatedMarket } from "@/components/pitch/AnimatedMarket";
import { BusinessModelLayout } from "@/components/pitch/BusinessModelLayout";
import { AnimatedGTM } from "@/components/pitch/AnimatedGTM";
import { AnimatedCaseStudy } from "@/components/pitch/AnimatedCaseStudy";
import { ContactCTA } from "@/components/pitch/ContactCTA";

export default function PitchShortPage() {
  const [data] = useState(pitchDataShort);
  const visibleSections = data.sections.filter((s) => !s.hidden);

  return (
    <div className="bg-main-gradient snap-y snap-mandatory h-screen overflow-y-scroll">
      <ScrollProgress />

      {/* HERO SECTION - Full Screen */}
      <AnimatedSection className="flex items-center justify-center relative overflow-hidden">
        <ParticleBackground />
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Animated Title */}
            <motion.h1 
              className="text-5xl md:text-8xl font-title font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">{data.brand.name}</span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-4xl text-white/90 mb-12 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {data.brand.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MagneticButton
                className="bg-[#9c55ff] hover:bg-[#a865ff] text-white px-8 py-4 rounded-full text-lg font-medium shadow-[0_0_30px_rgba(156,85,255,0.5)] transition-all inline-flex items-center gap-2"
                onClick={() => {
                  document.getElementById("kpis")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Sparkles className="w-5 h-5" />
                Scopri il Pitch
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </AnimatedSection>

      {/* KPI DASHBOARD SECTION */}
      {data.kpis && data.kpis.length > 0 && (
        <AnimatedSection id="kpis" className="flex items-center justify-center py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.h2
              className="text-4xl md:text-6xl font-title font-bold text-center mb-12 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Proof of Concept
            </motion.h2>

            {/* KPI Grid con Descrizioni */}
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {data.kpis.map((kpi, idx) => (
                  <StaggerItem key={idx}>
                    <motion.div
                      className="dashboard-card rounded-2xl p-6 h-full border-2 border-[#9c55ff]/20 hover:border-[#9c55ff]/40 transition-all"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-4xl md:text-5xl font-bold text-[#9c55ff] mb-3">
                        {kpi.value.includes("%") ? (
                          <>
                            <AnimatedCounter
                              value={parseInt(kpi.value.replace(/[^0-9-]/g, ""))}
                              suffix="%"
                              prefix={kpi.value.includes("+") ? "+" : kpi.value.includes("-") ? "-" : ""}
                            />
                          </>
                        ) : (
                          kpi.value
                        )}
                      </div>
                      <div className="text-white font-semibold text-base mb-3">
                        {kpi.label}
                      </div>
                      {kpi.description && (
                        <div className="text-white/70 text-sm leading-relaxed">
                          {kpi.description}
                        </div>
                      )}
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* KPI Context - Impatto Economico */}
            {data.kpiContext && (
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="dashboard-card rounded-2xl p-8 border-2 border-[#9c55ff]/30 bg-gradient-to-br from-[#9c55ff]/5 to-transparent">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#9c55ff]/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-[#9c55ff]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-title font-bold text-white mb-4">
                        Impatto Economico
                      </h3>
                      <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                        {data.kpiContext.summary}
                      </p>
                      <div className="space-y-3">
                        {data.kpiContext.subpoints.map((point, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 text-white/80 text-sm md:text-base"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-[#9c55ff] flex-shrink-0">➡️</span>
                            <span>{point.replace("➡️ ", "")}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Elevator Pitch */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="dashboard-card rounded-2xl p-8 md:p-10 border-2 border-[#9c55ff]/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#9c55ff]/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#9c55ff]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-title font-bold text-white">
                    Elevator Pitch
                  </h3>
                </div>
                <div className="space-y-4 text-white/90 text-base md:text-lg leading-relaxed">
                  {data.elevator.full.split(". ").map((sentence, idx) => {
                    const highlightedSentence = sentence
                      .replace(
                        /(Guided Strategy|Decision → Content → Validation|end-to-end)/g,
                        '<span class="text-[#9c55ff] font-semibold">$1</span>'
                      )
                      .replace(
                        /(analizza|decide|crea|capisce|sceglie|pianifica|produce|valida)/g,
                        '<span class="text-white font-medium">$1</span>'
                      );
                    
                    return (
                      <p
                        key={idx}
                        dangerouslySetInnerHTML={{
                          __html: highlightedSentence + (idx < data.elevator.full.split(". ").length - 1 ? "." : ""),
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      )}

      {/* SECTIONS - Elegant Cards */}
      {visibleSections.map((section, idx) => (
        <AnimatedSection
          key={section.id}
          id={section.id}
          className="flex items-center justify-center py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Section Header - Hidden for contact section */}
              {section.id !== "contact" && (
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-[#9c55ff]/20 flex items-center justify-center text-[#9c55ff] font-bold text-xl"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {idx + 1}
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-title font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                </div>
              )}

              {/* Hero Section - Special Layout with Demo */}
              {section.id === "hero" ? (
                <div>
                  {/* Standard Bullets */}
                  <StaggerContainer>
                    <div className="space-y-6 mb-12">
                      {section.bullets.map((bullet: any, bIdx: number) => (
                        <StaggerItem key={bIdx}>
                          <motion.div
                            className="flex items-start gap-4 p-6 rounded-xl bg-[#2a193c]/50 border border-white/5 hover:border-[#9c55ff]/30 transition-all"
                            whileHover={{ x: 10 }}
                          >
                            <div className="w-3 h-3 rounded-full bg-[#9c55ff] mt-2 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-white/90 text-lg leading-relaxed">
                                {bullet.text}
                              </p>
                              {bullet.tag && (
                                <span className="inline-block mt-2 bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-3 py-1 rounded-full">
                                  {bullet.tag}
                                </span>
                              )}
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>

                  {/* Animated Demo */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <AnimatedDemo />
                  </motion.div>
                </div>
              ) : section.id === "problema" ? (
                /* Problema Section - Special Layout with Animation */
                <div>
                  {/* Standard Bullets */}
                  <StaggerContainer>
                    <div className="space-y-6 mb-12">
                      {section.bullets.map((bullet: any, bIdx: number) => (
                        <StaggerItem key={bIdx}>
                          <motion.div
                            className="flex items-start gap-4 p-6 rounded-xl bg-[#2a193c]/50 border border-white/5 hover:border-[#9c55ff]/30 transition-all"
                            whileHover={{ x: 10 }}
                          >
                            <div className="w-3 h-3 rounded-full bg-[#9c55ff] mt-2 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-white/90 text-lg leading-relaxed">
                                {bullet.text}
                              </p>
                              {bullet.tag && (
                                <span className="inline-block mt-2 bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-3 py-1 rounded-full">
                                  {bullet.tag}
                                </span>
                              )}
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>

                  {/* Animated Problem */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <AnimatedProblem />
                  </motion.div>
                </div>
              ) : section.id === "why-now" ? (
                /* Why Now Section - Special Layout with Animation */
                <div>
                  {/* Standard Bullets */}
                  <StaggerContainer>
                    <div className="space-y-6 mb-12">
                      {section.bullets.map((bullet: any, bIdx: number) => (
                        <StaggerItem key={bIdx}>
                          <motion.div
                            className="flex items-start gap-4 p-6 rounded-xl bg-[#2a193c]/50 border border-white/5 hover:border-[#9c55ff]/30 transition-all"
                            whileHover={{ x: 10 }}
                          >
                            <div className="w-3 h-3 rounded-full bg-[#9c55ff] mt-2 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-white/90 text-lg leading-relaxed">
                                {bullet.text}
                              </p>
                              {bullet.tag && (
                                <span className="inline-block mt-2 bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-3 py-1 rounded-full">
                                  {bullet.tag}
                                </span>
                              )}
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>

                  {/* Animated Why Now */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <AnimatedWhyNow />
                  </motion.div>
                </div>
              ) : section.id === "soluzione" ? (
                /* Soluzione Section - Special Layout with Pipeline Animation */
                <div>
                  {/* Standard Bullets */}
                  <StaggerContainer>
                    <div className="space-y-6 mb-12">
                      {section.bullets.map((bullet: any, bIdx: number) => (
                        <StaggerItem key={bIdx}>
                          <motion.div
                            className="flex items-start gap-4 p-6 rounded-xl bg-[#2a193c]/50 border border-white/5 hover:border-[#9c55ff]/30 transition-all"
                            whileHover={{ x: 10 }}
                          >
                            <div className="w-3 h-3 rounded-full bg-[#9c55ff] mt-2 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-white/90 text-lg leading-relaxed">
                                {bullet.text}
                              </p>
                              {bullet.tag && (
                                <span className="inline-block mt-2 bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-3 py-1 rounded-full">
                                  {bullet.tag}
                                </span>
                              )}
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>

                  {/* Animated Solution Pipeline */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <AnimatedSolution />
                  </motion.div>
                </div>
              ) : section.id === "integrazioni" ? (
                /* Integrazioni Section - Special Layout with Hub Animation */
                <div>
                  {/* Standard Bullets */}
                  <StaggerContainer>
                    <div className="space-y-6 mb-12">
                      {section.bullets.map((bullet: any, bIdx: number) => (
                        <StaggerItem key={bIdx}>
                          <motion.div
                            className="flex items-start gap-4 p-6 rounded-xl bg-[#2a193c]/50 border border-white/5 hover:border-[#9c55ff]/30 transition-all"
                            whileHover={{ x: 10 }}
                          >
                            <div className="w-3 h-3 rounded-full bg-[#9c55ff] mt-2 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-white/90 text-lg leading-relaxed">
                                {bullet.text}
                              </p>
                              {bullet.tag && (
                                <span className="inline-block mt-2 bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-3 py-1 rounded-full">
                                  {bullet.tag}
                                </span>
                              )}
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>

                  {/* Animated Integrations Hub */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <AnimatedIntegrations />
                  </motion.div>
                </div>
              ) : section.id === "proof" ? (
                /* Proof Section - Special Layout with Comparison Animation */
                <div>
                  {/* Standard Bullets */}
                  <StaggerContainer>
                    <div className="space-y-6 mb-12">
                      {section.bullets.map((bullet: any, bIdx: number) => (
                        <StaggerItem key={bIdx}>
                          <motion.div
                            className="flex items-start gap-4 p-6 rounded-xl bg-[#2a193c]/50 border border-white/5 hover:border-[#9c55ff]/30 transition-all"
                            whileHover={{ x: 10 }}
                          >
                            <div className="w-3 h-3 rounded-full bg-[#9c55ff] mt-2 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-white/90 text-lg leading-relaxed">
                                {bullet.text}
                              </p>
                              {bullet.tag && (
                                <span className="inline-block mt-2 bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-3 py-1 rounded-full">
                                  {bullet.tag}
                                </span>
                              )}
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>

                  {/* Animated Proof Comparison */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <AnimatedProof />
                  </motion.div>
                </div>
              ) : section.id === "mercato" ? (
                /* Mercato Section - Special Layout with Market Animation */
                <div>
                  {/* Standard Bullets */}
                  <StaggerContainer>
                    <div className="space-y-6 mb-12">
                      {section.bullets.map((bullet: any, bIdx: number) => (
                        <StaggerItem key={bIdx}>
                          <motion.div
                            className="flex items-start gap-4 p-6 rounded-xl bg-[#2a193c]/50 border border-white/5 hover:border-[#9c55ff]/30 transition-all"
                            whileHover={{ x: 10 }}
                          >
                            <div className="w-3 h-3 rounded-full bg-[#9c55ff] mt-2 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-white/90 text-lg leading-relaxed">
                                {bullet.text}
                              </p>
                              {bullet.tag && (
                                <span className="inline-block mt-2 bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-3 py-1 rounded-full">
                                  {bullet.tag}
                                </span>
                              )}
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>

                  {/* Animated Market Growth */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <AnimatedMarket />
                  </motion.div>
                </div>
              ) : section.id === "business" ? (
                /* Business Model Section - Enhanced Layout */
                <div>
                  {/* Custom Business Model Layout */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <BusinessModelLayout bullets={section.bullets} />
                  </motion.div>
                </div>
              ) : section.id === "gtm" ? (
                /* GTM Section - Special Layout with Customer Journey Animation */
                <div>
                  {/* Standard Bullets */}
                  <StaggerContainer>
                    <div className="space-y-6 mb-12">
                      {section.bullets.map((bullet: any, bIdx: number) => (
                        <StaggerItem key={bIdx}>
                          <motion.div
                            className="flex items-start gap-4 p-6 rounded-xl bg-[#2a193c]/50 border border-white/5 hover:border-[#9c55ff]/30 transition-all"
                            whileHover={{ x: 10 }}
                          >
                            <div className="w-3 h-3 rounded-full bg-[#9c55ff] mt-2 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-white/90 text-lg leading-relaxed">
                                {bullet.text}
                              </p>
                              {bullet.tag && (
                                <span className="inline-block mt-2 bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-3 py-1 rounded-full">
                                  {bullet.tag}
                                </span>
                              )}
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>

                  {/* Animated GTM Customer Journey */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <AnimatedGTM />
                  </motion.div>
                </div>
              ) : section.id === "example" ? (
                /* Example Section - Case Study Animation */
                <div>
                  {/* Standard Bullets */}
                  <StaggerContainer>
                    <div className="space-y-6 mb-12">
                      {section.bullets.map((bullet: any, bIdx: number) => (
                        <StaggerItem key={bIdx}>
                          <motion.div
                            className="flex items-start gap-4 p-6 rounded-xl bg-[#2a193c]/50 border border-white/5 hover:border-[#9c55ff]/30 transition-all"
                            whileHover={{ x: 10 }}
                          >
                            <div className="w-3 h-3 rounded-full bg-[#9c55ff] mt-2 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-white/90 text-lg leading-relaxed">
                                {bullet.text}
                              </p>
                              {bullet.tag && (
                                <span className="inline-block mt-2 bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-3 py-1 rounded-full">
                                  {bullet.tag}
                                </span>
                              )}
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>

                  {/* Animated Case Study */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <AnimatedCaseStudy />
                  </motion.div>
                </div>
              ) : section.id === "contact" ? (
                /* Contact Section - Final CTA (no header) */
                <div className="flex items-center justify-center">
                  <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <ContactCTA />
                  </motion.div>
                </div>
              ) : section.id === "team" ? (
                /* Team Section - Special Layout */
                <StaggerContainer>
                  <div className="space-y-8">
                    {section.bullets.map((bullet: any, bIdx: number) => {
                      const photo = bullet.photo;
                      const hasPhoto = photo;
                      const name = bullet.text.split("—")[0].trim();
                      const initials = name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2);

                      return hasPhoto ? (
                        <StaggerItem key={bIdx}>
                          <TiltCard>
                            <div className="dashboard-card rounded-2xl p-8 border-2 border-[#9c55ff]/20">
                              <div className="flex flex-col md:flex-row gap-8 items-center">
                                {/* Photo */}
                                <motion.div
                                  className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#9c55ff]/20 bg-[#2a193c] flex-shrink-0"
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#9c55ff]/30 to-[#2a193c]">
                                    <span className="text-5xl font-bold text-white/90">
                                      {initials}
                                    </span>
                                  </div>
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                      src={photo}
                                      alt={bullet.tag || "Team member"}
                                      width={160}
                                      height={160}
                                      className="w-full h-full object-cover scale-110"
                                      style={{
                                        objectFit: "cover",
                                        objectPosition: bIdx === 0 ? "50% 20%" : "center center",
                                      }}
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                      }}
                                    />
                                  </div>
                                </motion.div>

                                {/* Info */}
                                <div className="flex-1 text-center md:text-left">
                                  {bullet.tag && (
                                    <div className="inline-block bg-[#9c55ff]/20 text-[#9c55ff] text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
                                      {bullet.tag}
                                    </div>
                                  )}
                                  <p className="text-white/90 text-xl leading-relaxed">
                                    {bullet.text}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </TiltCard>
                        </StaggerItem>
                      ) : (
                        <StaggerItem key={bIdx}>
                          <div className="text-white/80 text-lg pl-6 border-l-2 border-[#9c55ff]/30">
                            {bullet.text}
                          </div>
                        </StaggerItem>
                      );
                    })}
                  </div>
                </StaggerContainer>
              ) : (
                /* Standard Bullets */
                <StaggerContainer>
                  <div className="space-y-6">
                    {section.bullets.map((bullet: any, bIdx: number) => (
                      <StaggerItem key={bIdx}>
                        <motion.div
                          className="flex items-start gap-4 p-6 rounded-xl bg-[#2a193c]/50 border border-white/5 hover:border-[#9c55ff]/30 transition-all"
                          whileHover={{ x: 10 }}
                        >
                          <div className="w-3 h-3 rounded-full bg-[#9c55ff] mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-white/90 text-lg leading-relaxed">
                              {bullet.text}
                            </p>
                            {bullet.tag && (
                              <span className="inline-block mt-2 bg-[#9c55ff]/20 text-[#9c55ff] text-xs px-3 py-1 rounded-full">
                                {bullet.tag}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              )}

              {/* Citations */}
              {section.citations && section.citations.length > 0 && (
                <motion.div
                  className="mt-8 pt-8 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white/70 text-sm font-medium mb-4">
                    Collegamenti:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {section.citations.map((citation: any, cIdx: number) => (
                      <motion.a
                        key={cIdx}
                        href={citation.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#9c55ff] hover:text-[#a865ff] text-sm bg-[#9c55ff]/10 hover:bg-[#9c55ff]/20 px-4 py-2 rounded-full transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {citation.label}
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </AnimatedSection>
      ))}

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          .dashboard-card {
            background: white !important;
            border: 1px solid #e5e7eb !important;
          }
          * {
            color: black !important;
          }
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(156, 85, 255, 0.5);
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 85, 255, 0.8);
        }
      `}</style>
    </div>
  );
}
