export type WritingLink = {
  title: string;
  href: string;
  topic: string;
};

/** Curated posts — link out to LinkedIn */
export const writingLinks: WritingLink[] = [
  {
    title: 'What "Clean Code" Actually Means on Real Teams',
    href: "https://www.linkedin.com/posts/harryfen_what-clean-code-actually-means-on-real-activity-7424958061397807104-3Ird",
    topic: "Engineering culture",
  },
  {
    title: 'Why "Years of Experience" Matters Less Than You Think',
    href: "https://www.linkedin.com/posts/harryfen_why-years-of-experience-matters-less-than-activity-7423853002412863488-6WNL",
    topic: "Careers",
  },
  {
    title: "When a Frontend App Feels Slow, Most Developers Reach for the Wrong Fixes",
    href: "https://www.linkedin.com/posts/harryfen_when-a-frontend-app-feels-slow-most-developers-activity-7423504367447896064-7cuZ",
    topic: "Performance",
  },
  {
    title: "Frontend Developers Don’t Fail Because of Code — They Fail Because of Change Cost",
    href: "https://www.linkedin.com/posts/harryfen_frontend-developers-dont-fail-because-of-activity-7422470067331862528-_w95",
    topic: "Architecture",
  },
];
