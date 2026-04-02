import { PitchData } from "./pitch.data";

const shortEn: PitchData = {
  brand: {
    name: "agenziamarketing.ai",
    tagline: "Automated SEO strategy. Human intelligence, AI speed.",
    logoUrl: "/logo-placeholder.svg",
    primaryColor: "#2E86DE",
  },

  elevator: {
    thirtySec:
      "agenziamarketing.ai is an AI SEO agent that tells you what to create, why, and in what order. Guided Strategy mirrors how a human strategist thinks: it analyzes real SERPs, plans content, generates it, and validates it technically—all in one flow. You don't need to know what to write: it decides based on your data.",
    twoMin:
      "SEO teams today juggle too many tools: one for analysis, one for keywords, one for content, one for reporting. We built an orchestrator that starts from data—SERPs, intents, competitors—and automatically produces the full strategy: what to create, when, and why. It guides every project with transparency and human-in-the-loop control. It's not a writer: it's a digital SEO strategist.",
    full: "SEO doesn't need another text generator—it needs strategic guidance. agenziamarketing.ai turns years of method, training, and real cases into an AI system that analyzes, decides, and creates. Guided Strategy means the agent understands context, chooses where to strike, plans the right content, produces it, and validates it technically. A closed loop—Decision → Content → Validation—that mirrors a professional SEO workflow. A site survey gathered responses from companies, freelancers, and SMBs asking for one end-to-end platform for analysis, strategy, and content. That is exactly what agenziamarketing.ai delivers.",
  },

  sections: [
    {
      id: "hero",
      title: "Hero",
      bullets: [
        {
          text: "Enter the URL: the AI analyzes the site and returns strategy and ready-to-publish content.",
        },
        {
          text: "End-to-end flow: analysis → keywords → editorial plan → content → publishing.",
        },
      ],
    },

    {
      id: "problema",
      title: "Problem",
      bullets: [
        {
          text: "Typical stack: 5–10 tools per project, slow and fragmented workflows.",
        },
        {
          text: "Most tools focus on the final act (writing/optimization), not strategy.",
        },
        {
          text: "No guidance: nothing tells you ‘what to create and in what order’ for the real case.",
        },
        {
          text: "Generative AI is often a black box: governance and explainability are required.",
        },
      ],
    },

    {
      id: "why-now",
      title: "Why now",
      bullets: [
        {
          text: "AI Overviews and zero-click are reshaping SEO: you need integrated strategy, not content alone.",
        },
        {
          text: "Google accepts AI content when it's useful, coherent, and transparent → native governance matters.",
        },
        {
          text: "AI marketing adoption 70–88%, but weak integration and operational control.",
        },
      ],
    },

    {
      id: "soluzione",
      title: "Solution",
      bullets: [
        {
          text: "Input→Output in 5 steps: site analysis, keywords & intent, editorial plan, SEO-ready content, validation & publishing.",
        },
        {
          text: "Decision → Content → Validation: from the ‘why’ to SEO-ready HTML, with checklists and operational notes.",
        },
        {
          text: "Node-based AI SEO agent: works on real data (SERPs, intents, Core Web Vitals—including INP) with explainability by design.",
        },
        {
          text: "White-label for agencies: full workflow, customizable and scalable.",
        },
        {
          text: "Integrations: WordPress, Shopify, Zapier; tracking with Google Search Console and Looker Studio.",
        },
      ],
    },

    {
      id: "integrazioni",
      title: "Integrations",
      bullets: [
        {
          text: "WordPress: direct push of SEO-ready content (titles, meta, H1/H2, optional schema).",
        },
        {
          text: "Shopify: product/category descriptions with structure and suggested internal linking.",
        },
        {
          text: "Zapier: editorial automation (status, assignments, publishing, notifications).",
        },
        {
          text: "Headless CMS / Webhook: output to custom CMS and tailored editorial pipelines.",
        },
        {
          text: "GSC / Looker: clicks/impressions monitoring and white-label client reporting.",
        },
        {
          text: "BYO API keys and workspace data isolation: client credentials, data segregation, configurable retention.",
        },
      ],
    },

    {
      id: "proof",
      title: "Proof of Concept",
      bullets: [
        {
          text: "3 pilot sites analyzed with dual flow: manual SEO vs integrated AI agent.",
        },
        {
          text: "The system mirrors an SEO specialist's decisions, cutting strategy and production time by 65%.",
        },
        {
          text: "High consistency on clusters/intent and detected opportunities (≈95% qualitative match vs human strategy).",
        },
        {
          text: "Pipeline started: 10 qualified leads (agencies and SMBs) interested in the beta.",
        },
        {
          text: "Next step: quantitative validation on real traffic and keywords (GSC & SERP tracking).",
        },
      ],
    },

    {
      id: "mercato",
      title: "Market",
      bullets: [
        { text: "Global SEO software TAM $74.6B → $154.6B (2030)." },
        { text: "Italy: ~24k communication agencies (30–60% with SEO)." },
      ],
    },

    {
      id: "business",
      title: "Business Model",
      bullets: [
        {
          text: "Tiered SaaS with usage-based credits: monthly/annual subscription and cost proportional to AI node usage.",
        },
        {
          text: "Starter €49–99 / Agency €299–499 / Agency+ €999–1,999 → blended ARPA ~€1,800/year per account.",
        },
        {
          text: "75–80% gross margin thanks to modular nodes and API caching (run cost < €0.30); the architecture itself drives efficiency.",
        },
        {
          text: "Revenue expansion loop: extra domains, white-label reports, multiple audits, and advanced AI modules (SERP intelligence, Local SEO, backlinks).",
        },
        {
          text: "~80% annual retention assumed (SEMrush/SurferSEO benchmark). PLG → agencies → white-label enterprise, horizontal scale via API and CMS integrations.",
        },
      ],
    },

    {
      id: "gtm",
      title: "Go-To-Market",
      bullets: [
        { text: "10 interested customers (agencies + SMBs)." },
        {
          text: "8–12s demo of ‘input→output’ across the 1→5 flow (analysis, keywords, plan, content, publishing).",
        },
        {
          text: "Guided beta: Guided Strategy as the Aha! moment (the system shows what to publish now—and why).",
        },
        { text: "PLG demo + guided onboarding + ‘AI-safe SEO’ community." },
        {
          text: "Active waitlist; user survey → >70% willing to try the beta (PLG pipeline).",
        },
      ],
    },

    {
      id: "team",
      title: "Team",
      bullets: [
        {
          text: "Mattia — Founder (developer + SEO strategist). Led SEO and performance for major Italian national publishers—Quotidiano Nazionale, Il Resto del Carlino, La Nazione, Il Giorno—with aggregate monthly traffic in the millions. That real-world method is now encoded in the AI system.",
          tag: "Founder",
          // @ts-ignore
          photo: "/team/mattia.jpg",
        },
        {
          text: "Advisor: Fabio Antichi — SEO & Google Ads consultant since 2010, instructor ('SEO from 0 to 100'), author of 'News Marketing'.",
          tag: "Advisor",
          // @ts-ignore
          photo: "/team/fabio-antichi.jpg",
        },
        {
          text: "Advisor value: sector credibility, agency/freelance network, alignment on governance and 'AI-safe SEO' execution.",
        },
      ],
      citations: [
        { label: "Official website", href: "https://www.fabioantichi.it/" },
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

    {
      id: "example",
      title: "Concrete example (Q&A)",
      bullets: [
        {
          text: "Real case: a local agency analyzes a client site based in Pisa. Via Node 2, the agent finds that for ‘SEO consulting Pisa’ the SERP is dominated by directories and local competitors, but no page answers frequent questions from prospects.",
        },
        {
          text: "Automatic decision: the agent proposes a ‘SEO consulting Pisa’ service page with optimized Local SEO structure plus two support articles—‘How to choose a local SEO consultant’ and ‘How much does SEO consulting cost in Pisa’—with outlines, internal links, and meta ready.",
        },
        {
          text: "Outcome: autonomous, explainable strategy. The AI doesn't just write copy: it spots real ranking opportunities, builds the editorial plan, and justifies every choice with data and SERP analysis—like a human strategist, in minutes.",
        },
      ],
    },

    {
      id: "contact",
      title: "Want to know more?",
      bullets: [
        {
          text: "Email mattia@agenziamarketing.ai",
        },
      ],
    },
  ],

  kpis: [
    {
      label: "Real case studies",
      value: "10+",
      description:
        "Internal tests with agencies, freelancers, and SMBs: Guided Strategy consistently mirrored human decisions on keywords, intents, and content.",
    },
    {
      label: "Operational time saved",
      value: "-68%",
      description:
        "From 22h to 7h to complete an SEO flow (audit + strategy + content + validation). Automation cuts time without sacrificing quality or control.",
    },
    {
      label: "AI vs human decision match",
      value: "95%",
      description:
        "The system makes the same choices as an experienced SEO strategist in 95% of cases, with full transparency on selection criteria.",
    },
    {
      label: "Beta waitlist",
      value: "30+",
      description:
        "Agencies and SMBs already on the public beta waitlist with ongoing feedback: market validation and clear interest.",
    },
    {
      label: "Positive feedback (survey)",
      value: "87%",
      description:
        "Users who say they'd replace 5–10 separate tools with one platform. Estimated NPS +61, 70% retention post-demo.",
    },
  ],

  kpiContext: {
    summary:
      "A mid-size agency with 20 SEO clients saves over 300 hours per month—the equivalent of two full-time roles—by integrating agenziamarketing.ai. Average margin rises from 30% to over 55% without increasing operating costs.",
    subpoints: [
      "➡️ Full automation: analysis, strategy, content, and validation in one decisional flow.",
      "➡️ No steep learning curve: Guided Strategy explains every step, cutting errors and revisions.",
      "➡️ Direct impact on productivity and margins for agencies and SEO consultants.",
    ],
  },
};

export default shortEn;
