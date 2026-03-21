import type { HeroContent, AboutContent, Article, WritingSectionContent, ExpertiseCategory, ContactContent, FooterContent } from "@/types/site";

export const heroContent: HeroContent = {
  desktopHeading: "TAL\nPERETZ",
  mobileHeading: "TAL\nPERETZ",
  subtitle: "Senior Engineer\nBackend Systems & Architecture",
  description:
    "I design and build backend systems that connect product needs, business logic, and scalable architecture.",
  primaryCta: { label: "Get in Touch", href: "#contact" },
  secondaryCta: { label: "Read Writing", href: "#writing" },
};

export const aboutContent: AboutContent = {
  desktopHeading: "BUILDING SYSTEMS THAT SCALE",
  mobileHeadingTop: "BUILDING SYSTEMS",
  mobileHeadingBottom: "THAT SCALE",
  paragraphs: [
    "I build <strong>backend systems</strong> that turn complex product and business requirements into reliable, scalable software. My work focuses on <strong>architecture</strong>, APIs, distributed systems, and engineering decisions that support real product growth.",
    "I approach software with a <strong>product-driven</strong> mindset, balancing technical clarity, maintainability, and long-term scalability. From system design to delivery, I focus on building solutions that work well today and remain resilient as complexity grows.",
  ],
  mobileParagraphs: [
    "I build <strong>backend systems</strong> that turn complex requirements into reliable, scalable software. My work focuses on <strong>architecture</strong>, APIs, and distributed systems built for growth.",
    "I work with a <strong>product-driven</strong> mindset, focusing on maintainability, clarity, and scalability from system design through delivery.",
  ],
  stats: [
    { label: "Philosophy", value: "Built to Scale" },
    { label: "Core Focus", value: "Backend Systems" },
  ],
};

export const writingSection: WritingSectionContent = {
  heading: "Articles & Insights",
  description:
    "Technical write-ups on production incidents, backend systems, and lessons learned while building and scaling real products.",
  footerNote: "More engineering articles coming soon.",
};

export const articles: Article[] = [
  {
    title: "We Didn't See It Coming: The Redis CPU Spike That Hit Hard",
    summary:
      "A production incident write-up covering unexpected Redis CPU saturation, root-cause analysis, and the engineering fix that restored stability.",
    meta: "Medium · Elementor Engineers",
    href: "https://medium.com/elementor-engineers/we-didnt-see-it-coming-the-redis-cpu-spike-that-hit-hard-12ebf465505c",
    ctaLabel: "Read Article",
  },
];

export const expertiseCategories: ExpertiseCategory[] = [
  {
    icon: "Server",
    title: "Backend Systems",
    items: [
      "Node.js service design",
      "TypeScript application architecture",
      "NestJS modular services",
    ],
  },
  {
    icon: "Layers",
    title: "APIs & Service Design",
    items: [
      "REST API design",
      "Business logic modeling",
      "Integration-oriented backend flows",
    ],
  },
  {
    icon: "Database",
    title: "Distributed Architecture",
    items: [
      "Event-driven systems",
      "Kafka and async workflows",
      "Scalability and system boundaries",
    ],
  },
  {
    icon: "Cpu",
    title: "Product Engineering",
    items: [
      "Translating product needs into systems",
      "Maintainable delivery across layers",
      "Backend-first technical ownership",
    ],
  },
];


export const contactContent: ContactContent = {
  label: "Get in Touch",
  heading: "Let's connect.",
  description: "Currently accepting select senior-level opportunities and architectural consulting.",
  ctaLabel: "Get in Touch",
};

export const footerContent: FooterContent = {
  name: "Tal Peretz",
  copyright: "© 2025 Tal Peretz. Architected with precision.",
};
