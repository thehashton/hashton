export type Testimonial = {
  id: string;
  author: string;
  role: string;
  href: string;
  body: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "roy-blanco",
    author: "Roy Blanco",
    role: "Developer mentored at Front End Now",
    href: "https://www.linkedin.com/in/roy-blanco-8402041a1",
    body: `Harry's deep knowledge of Web Development fundamentals was invaluable in helping me understand complex concepts. He is incredibly talented, breaking down difficult building processes into manageable steps without making me feel overwhelmed. Dare I say a "Wizard", typing code at an incredible pace with the mindset to match.

The specific and actionable feedback they provided at FrontEndNow on my code reviews helped me improve my code quality and adopt best practices for responsive design.

Their guidance on how to structure a project from introductory HTML tutorials (cern w3) to production ready and completely responsive UIs enabled me to showcase my portfolio effectively made a huge difference in my job search preparation.

They fostered a supportive learning environment, always encouraging me to ask specific questions and learn from my mistakes (Which were in abundance).

Thanks to their mentorship, I was able to confidently tackle challenging projects involving HTML/CSS/JavaScript/React/NextJS/TypeScript/SCSS/Github, Web-page building and complex UI, which ultimately improved my opportunities in my Web Development Journey.`,
  },
  {
    id: "alan-hernandez",
    author: "Alan Hernandez",
    role: "Developer mentored at Front End Now",
    href: "https://www.linkedin.com/in/alan-hernandez-aa8458326",
    body: `Harry played a huge role in my growth as a developer. His mentorship helped me understand React, Next.js, TypeScript, and core web dev principles with confidence. He has a talent for breaking down difficult concepts and giving real-world guidance that actually sticks. I highly recommend Harry to anyone looking to grow in front-end development.`,
  },
];
