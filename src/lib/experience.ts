export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  href?: string;
  period: string;
  location: string;
  summary: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "fen",
    role: "Co-Founder",
    company: "Front End Now",
    href: "https://learnfrontendnow.com",
    period: "Mar 2023 — Present",
    location: "Remote",
    summary:
      "Helping beginners land frontend roles through structured programs, coaching, and accountability — without needing a degree first.",
  },
  {
    id: "eo",
    role: "Lead Frontend Developer",
    company: "EO Charging",
    href: "https://www.linkedin.com/company/eo-charging",
    period: "Sep 2022 — May 2025",
    location: "Stowmarket, UK · Remote",
    summary:
      "Lead frontend on the Depot Squad for EO Portal: analytical dashboards, customised maps, UI libraries, micro-frontend architecture. Partnered with product on UI/UX in Figma. Built in-house accessibility audit tooling for WCAG 2.1 AA monitoring.",
  },
  {
    id: "thrive",
    role: "Senior Product Engineer",
    company: "THRIVE LXP",
    href: "https://www.linkedin.com/company/thrivelearning",
    period: "Jun 2020 — Sep 2022",
    location: "Nottingham, UK · Remote",
    summary:
      "React, MUI, TypeScript product UI with a heavy focus on accessibility, design systems, testing, and UX. Owned the shared component library across apps; bespoke/MUI hybrid components. Accessibility audits and cross-team education.",
  },
  {
    id: "jh",
    role: "Mid Frontend Developer",
    company: "JH",
    href: "https://www.linkedin.com/company/jh",
    period: "Mar 2018 — Jul 2020",
    location: "Nottingham, UK",
    summary:
      "Magento 1 & 2 storefronts, React PWAs, and WordPress builds — shipping production interfaces across ecommerce and marketing.",
  },
  {
    id: "roller",
    role: "Frontend Web Developer",
    company: "Roller Agency",
    href: "https://www.linkedin.com/company/roller-agency",
    period: "Apr 2017 — Mar 2018",
    location: "Nottingham, UK",
    summary:
      "Static sites, Angular/Firebase, Shopify, React/Ruby, WordPress, and Umbraco projects — broad stack exposure at agency pace.",
  },
  {
    id: "muscle",
    role: "Junior Frontend Developer",
    company: "Muscle Foods Ltd",
    href: "https://www.linkedin.com/company/muscle-foods-limited",
    period: "Dec 2015 — Apr 2017",
    location: "Nottingham, UK",
    summary:
      "Landing pages, frontend apps in JS, and close collaboration with design on campaigns.",
  },
];
