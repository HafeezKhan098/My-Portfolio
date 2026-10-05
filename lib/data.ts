export const profile = {
  name: "Hafeez Ullah",
  shortName: "Hafeez",
  role: "AI & Web Developer",
  descriptor: "Computer Science student · Independent developer",
  location: "Balochistan, Pakistan",
  email: "hafeezkaka098@gmail.com",
  emailCompose:
    "https://mail.google.com/mail/?view=cm&fs=1&to=hafeezkaka098@gmail.com",
  github: "https://github.com/hafeezkhan098",
  linkedin: "",
  cvUrl: "/cv.pdf",
  photoUrl: "/profile.jpg",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export const projects = [
  {
    number: "01",
    name: "ProposalHero",
    type: "AI PRODUCT",
    description:
      "An AI proposal workspace for Fiverr and Upwork freelancers. It turns a client brief into a job-specific draft, then lets the freelancer edit and humanize it before sending.",
    result: "Live product",
    status: "Live",
    tech: ["Next.js", "TypeScript", "AI", "Tailwind CSS"],
    liveUrl: "https://proposalhero.vercel.app/",
    githubUrl: "https://github.com/hafeezkhan098/proposalhero",
    previewUrl: "propose.png",
    featured: true,
    tone: "violet",
  },

  {
    number: "02",
    name: "TaleemAI",
    type: "EDTECH · AI",
    description:
      "A bilingual AI and career guidance platform designed around students in Balochistan—helping them explore education pathways, scholarships, universities and careers.",
    result: "Product in development",
    status: "In development",
    tech: ["Next.js", "TypeScript", "AI", "Education UX"],
    liveUrl: "https://taleemai-nine.vercel.app/",
    githubUrl: "",
    previewUrl: "taleemai.png",
    featured: true,
    tone: "cyan",
  },

  {
    number: "03",
    name: "Mussavir School",
    type: "EDUCATION WEBSITE",
    description:
      "A modern school website concept for Mussavir High School Pishin, designed to make admissions, school information, faculty and contact details easier to discover on mobile.",
    result: "Live preview",
    status: "Live preview",
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    liveUrl: "https://hafeezkhan098.github.io/mussavir-school-pishin/",
    githubUrl:
      "https://github.com/hafeezkhan098/mussavir-school-pishin",
    previewUrl:
      "https://hafeezkhan098.github.io/mussavir-school-pishin/",
    featured: true,
    tone: "amber",
  },

  {
    number: "04",
    name: "Business Website Concepts",
    type: "WEB DESIGN · DEVELOPMENT",
    description:
      "A growing collection of responsive website concepts for cafés, hotels and local businesses—built to practice real-world layout, mobile UX, branding and conversion-focused presentation.",
    result: "Multiple builds",
    status: "Multiple builds",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveUrl: "https://github.com/hafeezkhan098",
    githubUrl: "https://github.com/hafeezkhan098",
    previewUrl: "https://github.com/hafeezkhan098",
    featured: false,
    tone: "rose",
  },
];

/*
 * ProjectCard.tsx imports this as a type.
 * Keeping it derived from the actual projects array means the type
 * automatically stays synchronized with the project data above.
 */
export type Project = (typeof projects)[number];

/* -------------------------------------------------------------------------- */
/* Skills                                                                     */
/* -------------------------------------------------------------------------- */

export const skills = {
  core: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
  ],

  build: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Vercel",
  ],

  ai: [
    "Generative AI",
    "AI APIs",
    "Prompt Engineering",
    "AI Product UX",
  ],
};

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

export const services = [
  {
    title: "Business & personal websites",
    description:
      "Clean, responsive websites that make a business, school, service or personal brand look credible and easy to contact.",
  },

  {
    title: "AI-powered web products",
    description:
      "Useful AI features and product interfaces built around a real workflow—not AI added just to sound impressive.",
  },

  {
    title: "Landing pages & product sites",
    description:
      "Focused pages with clear messaging, strong hierarchy and obvious next steps for visitors.",
  },
];

/* -------------------------------------------------------------------------- */
/* Education                                                                  */
/* -------------------------------------------------------------------------- */

/*
 * These exports are required by Education.tsx.
 *
 * The current homepage does not render Education.tsx, so there is no reason
 * to invent education details that were not present in the final portfolio
 * data file.
 *
 * Add your exact education information here later if you decide to display
 * this section.
 */
export const education: Array<{
  school: string;
  credential: string;
  year: string;
  score: string;
}> = [];

/* -------------------------------------------------------------------------- */
/* Experience                                                                 */
/* -------------------------------------------------------------------------- */

export const experience: Array<{
  role: string;
  org: string;
  period: string;
  description: string;
}> = [];

/* -------------------------------------------------------------------------- */
/* Leadership                                                                 */
/* -------------------------------------------------------------------------- */

export const leadership: Array<{
  role: string;
  org: string;
  description: string;
}> = [];

/* -------------------------------------------------------------------------- */
/* Goals                                                                      */
/* -------------------------------------------------------------------------- */

export const goals = {
  heading: "Where I'm heading",

  paragraphs: [
    "I learn by building. Each project is an opportunity to solve a real problem, improve the interface and ship something people can actually use.",

    "I'm currently studying Computer Science while developing websites, AI-assisted workflows and small products independently.",

    "My direction is software engineering and AI, with a particular interest in making complex technology feel simple and useful.",
  ],
};

/* -------------------------------------------------------------------------- */
/* Currently learning                                                         */
/* -------------------------------------------------------------------------- */

export const learning = [
  "python",
  "Software engineering",
  "AI / ML",
  "Product thinking",
];