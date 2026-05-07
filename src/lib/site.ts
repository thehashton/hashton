export const site = {
  name: "Harry Ashton",
  nickname: "Hashton",
  title: "Senior Frontend Engineer · Design Systems · Accessibility",
  tagline:
    "Ex-Lead Frontend Developer. I ship interfaces, systems, and teams — and I teach others to do the same.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://hashton.vercel.app",
  location: "United States · Remote",
  email: "hello@learnfrontendnow.com",
  links: {
    linkedin: "https://www.linkedin.com/in/harryfen/",
    github: "https://github.com/thehashton/",
    x: "https://x.com/TheHashton",
    youtube: "https://www.youtube.com/@FrontendNow",
    tiktok: "https://www.tiktok.com/@thehashton",
    instagram: "https://www.instagram.com/thehashton/",
    coaching: "https://learnfrontendnow.com",
  },
  stats: {
    yearsExperience: "14+",
    jobsHelped: "70+",
  },
} as const;
