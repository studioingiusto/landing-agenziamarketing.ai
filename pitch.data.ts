// app/pitch/pitch.data.ts

// Singolo bullet point di una sezione
export interface PitchBullet {
  text: string;
  tag?: string; // opzionale: per etichette tipo "KPI", "Focus", "Quote"
}

// Singolo link di citazione o fonte
export interface PitchCitation {
  label: string;
  href: string;
}

// Sezione principale del pitch (Problema, Soluzione, ecc.)
export interface PitchSection {
  id: string;
  title: string;
  bullets: PitchBullet[];
  speakerNotes?: string; // note orali o contestuali del relatore
  citations?: PitchCitation[]; // fonti collegate
  hidden?: boolean; // per nascondere sezioni temporaneamente
}

// Versioni elevator del pitch
export interface Elevator {
  full: string; // versione completa
  twoMin: string; // versione 2 minuti
  thirtySec: string; // versione 30 secondi
}

// KPI o metriche sintetiche mostrate nel ribbon
export interface PitchKPI {
  label: string;
  value: string;
  description?: string; // descrizione estesa del KPI
}

// Contesto economico/operativo per i KPI
export interface PitchKPIContext {
  summary: string; // sintesi dell'impatto economico
  subpoints: string[]; // punti chiave aggiuntivi
}

// Dati di brand e personalizzazione del pitch
export interface PitchBrand {
  name: string;
  tagline: string;
  logoUrl?: string;
  primaryColor?: string;
}

// Struttura completa del pitch
export interface PitchData {
  brand: PitchBrand;
  elevator: Elevator;
  sections: PitchSection[];
  kpis?: PitchKPI[];
  kpiContext?: PitchKPIContext;
}
// app/pitch/data.pitch.ts

const data: PitchData = {
  brand: {
    name: "agenziamarketing.ai",
    tagline: "Strategia SEO automatizzata. Intelligenza umana, velocità AI.",
    logoUrl: "/logo-placeholder.svg",
    primaryColor: "#2E86DE",
  },

  elevator: {
    thirtySec:
      "agenziamarketing.ai è un agente AI che ragiona come un SEO strategist senior: analizza SERP reali, pianifica, genera contenuti SEO-ready, valida tecnica/UX e misura i risultati — con governance, white-label e flusso end-to-end.",
    twoMin:
      "La SEO è cambiata: AI Overviews e zero-click comprimono i click, Google chiede contenuti utili e spiegabili. Agenzie e freelance lottano tra tool frammentati e poco tempo. agenziamarketing.ai traduce anni di metodo e corsi avanzati in un sistema operativo SEO a nodi: analisi contesto → SERP & intent → strategia & calendario → contenuti HTML SEO-ready → validazione CWV/UX → reporting. A differenza dei writer AI, qui c’è governance: decisioni spiegabili, checklist attive e white-label per il multi-cliente. Roadmap: editorialPlanNode in produzione, template dinamici, monitoring e nodo link building. Cerchiamo partner per scalare il modello Agency e costruire case ROI.",
    full: "Non servono più tool scollegati: serve un agente che pensi e agisca come un SEO strategist. agenziamarketing.ai unisce analisi, strategia, contenuti e controllo tecnico in un unico flusso. È l’amplificatore di expertise per agenzie e freelance: più velocità, più coerenza, più risultati.",
  },

  sections: [
    {
      id: "why-now",
      title: "Perché ora",
      bullets: [
        {
          text: "AI Overviews e indicizzazione selettiva impongono strategie integrate (non solo testi).",
        },
        {
          text: "Google accetta AI content se è utile, di qualità e trasparente → serve governance nativa.",
        },
        {
          text: "Adozione AI nello stack marketing 70–88%: servono soluzioni integrate e spiegabili.",
        },
      ],
      citations: [
        {
          label: "McKinsey 2025 — State of AI",
          href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
        },
      ],
    },

    {
      id: "mercato",
      title: "Mercato (TAM / SAM / SOM)",
      bullets: [
        {
          text: "TAM SEO software (globale): ~USD 74,6 mld (2024) → USD 154,6 mld (2030), CAGR ~13,5%.",
        },
        {
          text: "Italia: ~24.046 agenzie pubblicitarie/comunicazione (IBISWorld). Quota SEO-servibile stimata 30–60% (~9.600 agenzie).",
        },
        {
          text: "EU proxy x3 → ~28.800 target. ARPA stimato €1.800/anno → SAM ≈ €51,8M.",
        },
        {
          text: "SOM iniziale: 50 account × €1.800 = €90k ARR (cohort design partner & early adopters).",
        },
      ],
      citations: [
        {
          label: "IBISWorld IT — Advertising Agencies",
          href: "https://www.ibisworld.com/italy/industry/advertising-agencies/200291/",
        },
      ],
    },

    {
      id: "proof",
      title: "Proof of Concept / Internal Results",
      bullets: [
        {
          text: "Test interni su n=3 siti pilota: +28% clic organici in 60 giorni (Google Search Console).",
        },
        {
          text: "+18% keyword in Top-10 SERP rispetto alla baseline (45 giorni).",
        },
        {
          text: "Tempo di produzione contenuti SEO-ready ridotto del 65% (6h → <2h per articolo).",
        },
        { text: "70% dei contenuti supera l’80% dei check SEO al primo run." },
        {
          text: "Metriche interne non ancora pubblicate — prossima fase: case study ufficiali e benchmark ROI per agenzie.",
        },
      ],
    },

    {
      id: "moat",
      title: "Moat (difendibilità)",
      bullets: [
        {
          text: "Knowledge asset cumulativi: pattern intent→struttura, co-occorrenze, anchor map, metriche AIO proprietarie.",
        },
        {
          text: "Checklist & template proprietari, auto-lingua/location, governance by-design (explainability).",
        },
        {
          text: "Standardizzazione workflow per agency (white-label, report business-ready).",
        },
        {
          text: "Esempi: (1) pattern intent→H1/H2 ricorrenti; (2) co-occorrenze entità per cluster; (3) anchor map che riduce cannibalizzazioni (−20–30% collisioni intra-cluster nei test interni).",
        },
      ],
    },

    {
      id: "team",
      title: "Team",
      bullets: [
        {
          text: "Mattia — Founder (dev + SEO strategist). Metodo reale → sistema AI.",
        },
        {
          text: "Advisor: Fabio Antichi — Consulente SEO/Google Ads dal 2010, docente, autore ‘News Marketing’ (network & credibilità).",
        },
      ],
    },

    {
      id: "ask",
      title: "The Ask / Use of Funds",
      bullets: [
        { text: "Round: Pre-seed €250.000 per 18 mesi di runway." },
        {
          text: "Uso fondi: 45% Prodotto, 25% Dati/Infra, 20% GTM, 10% Compliance/Ops.",
        },
        {
          text: "Milestone: 50 account paganti, €90k ARR, 2 case pubblici con uplift >20% clic GSC.",
        },
      ],
    },

    {
      id: "appendix",
      title: "Appendix (fonti chiave)",
      bullets: [
        {
          text: "Google Search Essentials: https://developers.google.com/search/docs/essentials",
        },
        {
          text: "AI-generated content & Helpful Content: https://developers.google.com/search/docs/essentials/creating-helpful-content",
        },
      ],
    },
  ],

  kpis: [
    { label: "Design partner", value: "10 (agenzie + PMI interessate)" },
    { label: "TTFV mediano", value: "< 60 minuti (target)" },
    { label: "Checklist pass rate", value: "70–80% al primo run" },
    { label: "ARR iniziale", value: "€90k (50 account)" },
  ],
};

export default data;
