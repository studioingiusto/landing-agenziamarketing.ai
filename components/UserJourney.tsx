"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Globe,
  Search,
  FileText,
  Key,
  BarChart,
  FileCode,
  ArrowRight,
} from "lucide-react";

interface JourneyStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  position: "left" | "right";
}

export function UserJourney() {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps: JourneyStep[] = [
    {
      id: 1,
      title: "Inserisci l’URL del tuo sito",
      description:
        "L’AI analizza struttura, contenuti e performance SEO per trovare errori e opportunità.",
      icon: <Globe className="w-6 h-6 text-[#9c55ff]" />,
      position: "left",
    },
    {
      id: 2,
      title: "Ricevi strategia e keyword vincenti",
      description:
        "Analizziamo il tuo mercato, i competitor e selezioniamo le migliori keyword dal database Google + AnswerThePublic.",
      icon: <FileText className="w-6 h-6 text-[#9c55ff]" />,
      position: "right",
    },
    {
      id: 3,
      title: "Genera contenuti ottimizzati SEO",
      description:
        "Articoli, schede prodotto e post già pronti, su misura per il tuo brand e personalizzabili nel tono di voce.",
      icon: <BarChart className="w-6 h-6 text-[#9c55ff]" />,
      position: "left",
    },
    {
      id: 4,
      title: "Pubblica con un clic",
      description:
        "Integra con WordPress, Shopify o altri CMS via Zapier e gestisci il tuo piano editoriale in automatico.",
      icon: <FileCode className="w-6 h-6 text-[#9c55ff]" />,
      position: "right",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepId = Number(entry.target.getAttribute("data-step-id"));

          if (entry.isIntersecting) {
            setActiveSteps((prev) =>
              prev.includes(stepId)
                ? prev
                : [...prev, stepId].sort((a, b) => a - b)
            );
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px",
        threshold: 0.5,
      }
    );

    const stepElements = document.querySelectorAll(".journey-step");
    stepElements.forEach((el) => observer.observe(el));

    return () => {
      stepElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="come-funziona" className="w-full max-w-5xl mx-auto py-24" ref={containerRef}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-medium font-title mb-6">
          <span className="gradient-text">
            Dalla scansione del sito ai contenuti pronti da pubblicare, 
            in pochi clic.
          </span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          {/* Da strategia a prima pagina Google in pochi clic. */}
        </p>
      </div>

      <div className="relative">
        {/* Central line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9c55ff]/0 via-[#9c55ff] to-[#9c55ff]/0 transform -translate-x-1/2 z-0">
          <div
            className="absolute top-0 bottom-0 w-full bg-[#9c55ff]"
            style={{
              height: `${Math.min(
                100,
                (activeSteps.length / steps.length) * 100
              )}%`,
              transition: "height 0.5s ease-out",
            }}
          />
        </div>

        {/* Steps */}
        <div className="relative z-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`journey-step flex md:items-center mb-32 last:mb-0 ${
                step.position === "left" ? "flex-row" : "flex-row-reverse"
              } ${
                step.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } relative`}
              data-step-id={step.id}
            >
              {/* Large background step number */}
              <div
                className={`absolute -z-10 select-none pointer-events-none
                  ${
                    step.position === "left"
                      ? "right-[20%] md:right-[25%]"
                      : "left-[20%] md:left-[25%]"
                  }
                  ${
                    step.id % 2 === 0
                      ? "md:left-[25%] md:right-auto"
                      : "md:right-[25%] md:left-auto"
                  }
                  top-1/2 -translate-y-1/2
                `}
              >
                <span
                  className={`text-[150px] md:text-[220px] lg:text-[280px] font-bold leading-none inline-block
                  ${
                    activeSteps.includes(step.id)
                      ? "text-stroke-active"
                      : "text-stroke-inactive"
                  }`}
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    transition: "all 0.5s ease",
                  }}
                >
                  {step.id}
                </span>
              </div>

              {/* Card */}
              <div
                className={`dashboard-card rounded-lg p-7 md:p-8 shadow-lg ${
                  step.position === "left"
                    ? "mr-10 md:mr-20 text-right"
                    : "ml-10 md:ml-20 text-left"
                } ${
                  step.id % 2 === 0
                    ? "md:ml-10 md:mr-20 md:text-right !pl-16"
                    : "md:mr-10 md:ml-20 md:text-left !pr-16"
                }
                w-full md:w-[calc(50%-2.5rem)] transition-all duration-500 ease-out transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(156,85,255,0.3)] relative z-10 min-h-[180px] flex flex-col justify-center`}
              >
                <div
                  className={`flex items-center ${
                    step.position === "left" ? "justify-end" : "justify-start"
                  } ${
                    step.id % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  } mb-4`}
                >
                  <div
                    className={`p-2 bg-[#2a193c]/80 rounded-full ${
                      step.position === "left" ? "order-2 ml-3" : "order-1 mr-3"
                    } ${
                      step.id % 2 === 0
                        ? "md:order-2 md:ml-3 md:mr-0"
                        : "md:order-1 md:mr-3 md:ml-0"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <h3
                    className={`text-white text-xl font-medium font-title ${
                      step.position === "left" ? "order-1" : "order-2"
                    } ${step.id % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-white/70 text-sm mb-2">{step.description}</p>
              </div>

              {/* Center dots */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                <div
                  className={`h-7 w-7 rounded-full transition-all duration-500 ${
                    activeSteps.includes(step.id)
                      ? "bg-[#9c55ff] shadow-[0_0_15px_rgba(156,85,255,0.7)]"
                      : "bg-[#2a193c] border-2 border-[#9c55ff]/30"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
