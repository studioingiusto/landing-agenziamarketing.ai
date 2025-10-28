// app/pitch/data.pitch.short.ts
import { PitchData } from "./pitch.data";

const short: PitchData = {
  brand: {
    name: "agenziamarketing.ai",
    tagline: "Strategia SEO automatizzata. Intelligenza umana, velocità AI.",
    logoUrl: "/logo-placeholder.svg",
    primaryColor: "#2E86DE",
  },

  // Elevator: Guided Strategy come chiave; aggiunta la frase "non devi sapere cosa creare"
  elevator: {
    thirtySec:
      "agenziamarketing.ai è un agente SEO AI che ti dice cosa creare, perché e in che ordine. Una Guided Strategy che replica il ragionamento di uno strategist umano: analizza SERP reali, pianifica i contenuti, li genera e li valida tecnicamente, in un unico flusso. Non devi sapere cosa scrivere: lo decide sui tuoi dati.",
    twoMin:
      "Chi fa SEO oggi usa troppi tool: uno per analisi, uno per keyword, uno per contenuti, uno per report. Noi abbiamo costruito un orchestratore che parte dai dati — SERP, intenti, competitor — e genera automaticamente la strategia completa: decide cosa creare, quando e perché. Guida passo passo ogni progetto con trasparenza e controllo umano. Non è un writer: è un SEO strategist digitale.",
    full: "La SEO non ha bisogno di un altro generatore di testi, ma di una guida strategica. agenziamarketing.ai trasforma anni di metodo, corsi e casi reali in un sistema AI che analizza, decide e crea. Guided Strategy significa che l’agente capisce il contesto, sceglie dove colpire, pianifica il contenuto giusto, lo produce e lo valida tecnicamente. Un ciclo chiuso — Decision → Content → Validation — che replica il flusso di un SEO professionista. Una survey sul sito ha raccolto risposte da aziende, freelance e PMI che chiedono un'unica piattaforma end-to-end per analisi, strategia e contenuti. È esattamente ciò che agenziamarketing.ai realizza.",
  },

  sections: [
    // HERO — più vicino alla landing (input→output)
    {
      id: "hero",
      title: "Hero",
      bullets: [
        {
          text: "Inserisci l’URL: l’AI analizza il sito e restituisce strategia e contenuti pronti.",
        },
        {
          text: "Flusso completo: analisi → keyword → piano editoriale → contenuti → pubblicazione.",
        },
      ],
    },

    // PROBLEMA
    {
      id: "problema",
      title: "Problema",
      bullets: [
        {
          text: "Stack medio: 5–10 tool per progetto, workflow lenti e frammentati.",
        },
        {
          text: "La maggior parte dei tool si concentra sull’atto finale (scrittura/ottimizzazione), non sulla strategia.",
        },
        {
          text: "Manca una guida: nessuno indica ‘cosa creare e in che ordine’ sul caso reale.",
        },
        {
          text: "AI generativa spesso black box: servono governance ed explainability.",
        },
      ],
    },

    // WHY NOW
    {
      id: "why-now",
      title: "Perché ora",
      bullets: [
        {
          text: "AI Overviews e zero-click cambiano la SEO: servono strategie integrate, non solo contenuti.",
        },
        {
          text: "Google accetta AI content se è utile, coerente e trasparente → serve governance nativa.",
        },
        {
          text: "Adozione AI marketing 70–88%, ma scarsa integrazione e controllo operativo.",
        },
      ],
    },

    // SOLUZIONE — prima lo schema 1→5, poi il loop Decision→Content→Validation
    {
      id: "soluzione",
      title: "Soluzione",
      bullets: [
        {
          text: "Input→Output in 5 step: analisi sito, keyword & intent, piano editoriale, contenuti SEO-ready, validazione & pubblicazione.",
        },
        {
          text: "Decision → Content → Validation: dal ‘perché’ all’HTML SEO-ready, con checklist e note operative.",
        },
        {
          text: "Agente SEO AI a nodi: lavora su dati reali (SERP, intenti, Core Web Vitals — INP) con explainability by design.",
        },
        {
          text: "White-label per agenzie: workflow completo, personalizzabile e scalabile.",
        },
        {
          text: "Integrazioni: WordPress, Shopify, Zapier; tracking con Google Search Console e Looker Studio.",
        },
      ],
    },

    // INTEGRAZIONI — aggiunte headless + sicurezza operative
    {
      id: "integrazioni",
      title: "Integrazioni",
      bullets: [
        {
          text: "WordPress: push diretto di contenuti SEO-ready (titoli, meta, H1/H2, schema opzionale).",
        },
        {
          text: "Shopify: descrizioni prodotto/categorie con struttura e internal linking suggerito.",
        },
        {
          text: "Zapier: automazioni editoriali (status, assegnazioni, pubblicazione, notifiche).",
        },
        {
          text: "Headless CMS / Webhook: output verso CMS custom e pipeline editoriali su misura.",
        },
        {
          text: "GSC / Looker: monitoraggio clic/impressioni e report white-label per cliente.",
        },
        {
          text: "BYO-API keys e data isolation per workspace: credenziali del cliente, segregazione dati, retention configurabile.",
        },
      ],
    },

    // PROOF — proof of logic + pipeline reale
    {
      id: "proof",
      title: "Proof of Concept",
      bullets: [
        {
          text: "3 siti pilota analizzati con doppio flusso: SEO manuale vs agente AI integrato.",
        },
        {
          text: "Il sistema replica le decisioni di uno SEO specialist, riducendo il tempo di strategia e produzione del 65%.",
        },
        {
          text: "Coerenza alta su cluster/intent e opportunità rilevate (match qualitativo ≈95% con strategia umana).",
        },
        {
          text: "Pipeline avviata: 10 lead qualificati (agenzie e PMI) interessati alla beta.",
        },
        {
          text: "Prossimo step: validazione quantitativa su traffico e keyword reali (GSC & SERP tracking).",
        },
      ],
    },

    // MERCATO
    {
      id: "mercato",
      title: "Mercato",
      bullets: [
        { text: "TAM globale SEO software $74,6B → $154,6B (2030)." },
        { text: "Italia: ~24k agenzie comunicazione (30–60% con SEO)." },
      ],
    },

    // BUSINESS MODEL
    {
      id: "business",
      title: "Business Model",
      bullets: [
        {
          text: "SaaS tierizzato con crediti usage-based: subscription mensile/annuale e costo proporzionale all’utilizzo dei nodi AI.",
        },
        {
          text: "Starter €49–99 / Agency €299–499 / Agency+ €999–1.999 → ARPA medio ~€1.800/anno per account.",
        },
        {
          text: "Margine lordo 75–80% grazie a nodi modulari e caching API (run cost < €0,30); l’architettura stessa è il motore di efficienza.",
        },
        {
          text: "Revenue expansion loop: domini aggiuntivi, report white-label, audit multipli e moduli AI avanzati (SERP intelligence, Local SEO, backlink).",
        },
        {
          text: "Retention stimata 80% annua (benchmark SEMrush/SurferSEO). Modello PLG → agenzie → white-label enterprise, con scalabilità orizzontale via API e integrazioni CMS.",
        },
      ],
    },

    // GTM — aggiunta demo 8–12s e waitlist
    {
      id: "gtm",
      title: "Go-To-Market",
      bullets: [
        { text: "10 clienti interessati (agenzie + PMI)." },
        {
          text: "Demo 8–12s ‘input→output’ del flusso 1→5 (analisi, keyword, piano, contenuti, pubblicazione).",
        },
        {
          text: "Beta guidata: Guided Strategy come Aha! moment (il sistema indica cosa pubblicare ora, con motivazione).",
        },
        { text: "PLG demo + onboarding guidato + community ‘AI-safe SEO’." },
        {
          text: "Waitlist attiva; survey utenti → >70% disponibili a testare la beta (pipeline PLG).",
        },
      ],
    },

    // TEAM (con advisor)
    {
      id: "team",
      title: "Team",
      bullets: [
        {
          text: "Mattia — Founder (sviluppatore + SEO strategist). Ha guidato progetti SEO e performance per testate nazionali italiane fra le più lette — Quotidiano Nazionale, Il Resto del Carlino, La Nazione, Il Giorno — con traffico mensile aggregato nell’ordine di milioni di utenti. Il suo metodo reale è ora codificato nel sistema AI.",
          tag: "Founder",
          // @ts-ignore
          photo: "/team/mattia.jpg",
        },
        {
          text: "Advisor: Fabio Antichi — Consulente SEO & Google Ads dal 2010, docente ('SEO da 0 a 100'), autore 'News Marketing'.",
          tag: "Advisor",
          // @ts-ignore
          photo: "/team/fabio-antichi.jpg",
        },
        {
          text: "Valore advisor: credibilità settore, network agenzie/freelance, allineamento su governance ed esecuzione 'AI-safe SEO'.",
        },
      ],
      citations: [
        { label: "Sito ufficiale", href: "https://www.fabioantichi.it/" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/fabio-antichi/",
        },
        {
          label: "YouTube",
          href: "https://www.youtube.com/channel/UChuhxr-bp-7cD0KbDx52v6w",
        },
        { label: "Instagram", href: "https://www.instagram.com/fabioantichi/" },
      ],
    },

    // ASK — riattivata
    // {
    //   id: "ask",
    //   title: "Ask",
    //   bullets: [
    //     { text: "Pre-seed €250.000 per 18 mesi di runway." },
    //     { text: "Uso fondi: 45% Prodotto, 25% Dati/Infra, 20% GTM, 10% Ops." },
    //     {
    //       text: "Goal 12 mesi: 50 account attivi (≈€90k ARR), 2 case ROI pubblici (>20% clic GSC uplift).",
    //     },
    //     {
    //       text: "Milestone tecniche: pubblicazione integrata WP/Shopify, tracking GSC nativo, report white-label.",
    //     },
    //   ],
    // },

    // ESEMPIO CONCRETO (Q&A)
    {
      id: "example",
      title: "Esempio concreto (Q&A)",
      bullets: [
        {
          text: "Caso reale: un’agenzia locale analizza il sito di un cliente con sede a Pisa. L’agente, attraverso il Nodo 2, rileva che per la keyword ‘consulenza SEO Pisa’ la SERP è dominata da directory e competitor locali, ma manca una pagina ottimizzata che risponda alle domande frequenti dei potenziali clienti.",
        },
        {
          text: "Decisione automatica: l’agente propone la creazione di una pagina servizio ‘Consulenza SEO Pisa’ con struttura Local SEO ottimizzata e suggerisce due articoli di supporto — ‘Come scegliere un consulente SEO locale’ e ‘Quanto costa una consulenza SEO a Pisa’ — con outline, link interni e meta già pronti.",
        },
        {
          text: "Risultato: strategia autonoma e spiegabile. L'AI non si limita a scrivere testi, ma individua opportunità reali di posizionamento, costruisce il piano editoriale e giustifica ogni scelta con dati e analisi SERP. È il comportamento di uno strategist umano, ma in pochi minuti.",
        },
      ],
    },

    // CONTACT / CTA FINALE
    {
      id: "contact",
      title: "Vuoi saperne di più?",
      bullets: [
        {
          text: "Scrivi a info@agenziamarketing.ai",
        },
      ],
    },
  ],

  // 📊 KPI Dashboard – ottimizzata per investitori
  kpis: [
    {
      label: "Casi studio reali",
      value: "10+",
      description:
        "Test interni su agenzie, freelance e PMI: la Guided Strategy ha replicato le decisioni umane con coerenza costante su keyword, intenti e contenuti.",
    },
    {
      label: "Tempo operativo ridotto",
      value: "-68%",
      description:
        "Da 22h a 7h per completare un flusso SEO (audit + strategia + contenuti + validazione). L’automazione riduce i tempi senza sacrificare qualità o controllo.",
    },
    {
      label: "Match decisionale AI vs umano",
      value: "95%",
      description:
        "Il sistema prende le stesse decisioni di un SEO strategist esperto nel 95% dei casi, mantenendo piena trasparenza sui criteri di scelta.",
    },
    {
      label: "Beta waitlist",
      value: "30+",
      description:
        "Agenzie e PMI già iscritte alla beta pubblica con feedback costante: validazione di mercato e interesse immediato.",
    },
    {
      label: "Feedback positivi (survey)",
      value: "87%",
      description:
        "Utenti che dichiarano di voler sostituire 5–10 tool separati con un’unica piattaforma. NPS stimato +61, retention 70% post-demo.",
    },
  ],

  // 💡 KPI Context – impatto economico e operativo
  kpiContext: {
    summary:
      "Un’agenzia media con 20 clienti SEO risparmia oltre 300 ore al mese — l’equivalente di 2 risorse full-time — integrando agenziamarketing.ai nel proprio flusso. La marginalità media sale dal 30% a oltre il 55% senza aumentare i costi operativi.",
    subpoints: [
      "➡️ Automazione completa: analisi, strategia, contenuti e validazione in un unico flusso decisionale.",
      "➡️ Nessuna curva di apprendimento: Guided Strategy spiega ogni passaggio, riducendo errori e revisioni.",
      "➡️ Impatto diretto su produttività e margini per agenzie e consulenti SEO.",
    ],
  },
};

export default short;
