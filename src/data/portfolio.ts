// ─────────────────────────────────────────────────────────────
//  Edit this single file to update every piece of content on
//  the site. Items marked with "TODO" are placeholders — swap
//  them for your real information.
// ─────────────────────────────────────────────────────────────

import type { StaticImageData } from "next/image";

// Static imports of the project screenshots in /src/assets —
// Next.js injects width / height / blur placeholder automatically.
import banglaNewsPic from "@/assets/bangla-news-pic.png";
import bazarDorPic from "@/assets/bazar-dor-pic.png";
import fitLogPic from "@/assets/fit-log-pic.png";
import bplDreamPic from "@/assets/bpl-dream-pic.png";

export const siteConfig = {
  name: "Ozayer",
  role: "Full-Stack Developer",
  // Short line used in the hero section
  tagline: "I build fast, polished products for the web.",
  // Used for SEO / social cards
  description:
    "Ozayer — Full-Stack Developer crafting fast, accessible web apps with React, Next.js, Node.js, JavaScript and TypeScript. Explore my projects, skills and experience.",
  // Used by every mail action on the site — press "copy" in the contact
  // section to confirm it looks right before deploying.
  email: "ozayer212714@gmail.com",
  // TODO: Replace with your real location
  location: "Cumilla, Bangladesh",
  timezone: "GMT+6",
  // TODO: Set this to your deployed site URL (used for SEO / sitemap)
  siteUrl: "https://ozayer-portfolio.vercel.app",
  // TODO: Link your actual résumé PDF (e.g. drop it in /public)
  resumeUrl:
    "https://drive.google.com/file/d/1WpvYobA2ZvF36yPcWHYpcej-1u9Hreem/view?usp=sharing",
  availability: "Open to full-time roles & freelance work",
};

// Pre-filled email links used across the site.
const emailSubject = encodeURIComponent("Hello Ozayer — let's connect");

/** Opens the visitor's default mail client with a prefilled subject. */
export const mailtoHref = `mailto:${siteConfig.email}?subject=${emailSubject}`;

/** Opens Gmail's compose screen in the browser — for visitors with no mail app. */
export const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  siteConfig.email,
)}&su=${emailSubject}`;

export type NavLink = { id: string; label: string };

export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export type SocialName = "github" | "linkedin" | "x" | "mail";

export type Social = { name: string; url: string; icon: SocialName };

export const socials: Social[] = [
  // TODO: Replace the "#" links with your real profile URLs
  { name: "GitHub", url: "https://github.com/ozayercoder", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ozayer-ibne-kamal",
    icon: "linkedin",
  },
  { name: "Email", url: gmailComposeHref, icon: "mail" },
];

// Tech ticker shown under the hero CTA
export const heroTech = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "MongoDB ",
];

// TODO: Adjust the bio to sound like you
export const aboutParagraphs = [
  "I'm a self-driven full-stack developer who loves turning ideas into real products — from the first sketch to the deployed app. My happy place is the sweet spot between thoughtful UI and a reliable, well-structured backend.",
  "On the front end I work in React and Next.js, care about performance budgets and accessibility, and reach for TypeScript as soon as a project has more than one file. On the back end I build clean REST APIs, design pragmatic schemas, and keep systems boringly easy to maintain.",
  "Right now I'm focused on shipping production-grade projects, learning in public, and finding a team where I can grow fast and ship often.",
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "1+", label: "Years writing code" },
  { value: "10+", label: "Projects done" },
  { value: "15+", label: "Technologies used" },
  { value: "∞", label: "Curiosity" },
];

export type SkillGroupName = "frontend" | "backend" | "tools";

export type SkillGroup = {
  name: SkillGroupName;
  title: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "frontend",
    title: "Frontend",
    blurb: "Interfaces that feel instant and look intentional.",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Responsive Design",
      "Accessibility",
      "Bootstrap",
    ],
  },
  {
    name: "backend",
    title: "Backend",
    blurb: "APIs and data layers that hold up under real traffic.",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Better Auth"],
  },
  {
    name: "tools",
    title: "Tools & Platforms",
    blurb: "The workflow that keeps projects moving.",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Figma",
      "Daisy UI",
      "Hero UI",
      "Shadcn",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  /** Screenshot imported from /src/assets, shown in the Projects section. */
  image: StaticImageData;
  // TODO: Replace "#" with real repository / live links
  github: string;
  demo: string;
};

export const projects: Project[] = [
  // TODO: Replace with your real projects
  {
    title: "Bangla News 24",
    subtitle: "Realtime News",
    description:
      "A modern Bangla news platform delivering category-based news through a clean interface, seamless navigation, and a reader-first experience.",
    tags: ["Next.js", "TypeScript", "Better Auth", "MongoDB"],
    image: banglaNewsPic,
    github: "https://github.com/ozayercoder/Bangla-News-24",
    demo: "https://bangla-news-24-opal.vercel.app",
  },
  {
    title: "Bazar Dor",
    subtitle: "Realtime Stats of products prices",
    description:
      "A Bangla market-price platform helping users track daily commodity prices, compare market rates, and spot rising and falling prices with ease.",
    tags: ["Next.js", "TypeScript", "Better Auth", "MongoDB"],
    image: bazarDorPic,
    github: "https://github.com/ozayercoder/Assignmetn-7",
    demo: "https://bazar-dor-ozayer.vercel.app",
  },
  {
    title: "Fit Log",
    subtitle: "Dynamic workout library",
    description:
      "A dynamic workout library to explore exercises, plan daily workouts, track completed sessions, and save favorite routines.",
    tags: ["Next.js", "TypeScript", "React"],
    image: fitLogPic,
    github: "https://github.com/ozayercoder/Assignment-6-fit-log",
    demo: "https://assignment-6-fit-log-two.vercel.app/",
  },
  {
    title: "BPL Dream 11",
    subtitle: "BPL Dream 11 set up",
    description:
      "A BPL fantasy cricket platform where users explore players, build their dream teams, and manage player selections within a virtual budget.",
    tags: ["Next.js", "TypeScript"],
    image: bplDreamPic,
    github: "https://github.com/ozayercoder/BPL-Dream-11",
    demo: "https://1st-bpl-dream.netlify.app",
  },
];

export type EntryType = "work" | "education";

export type ExperienceItem = {
  type: EntryType;
  period: string;
  role: string;
  org: string;
  points: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  // TODO: Replace with your real experience & education
  {
    type: "work",
    period: "2026 — Present",
    role: "Freelance Full-Stack Developer",
    org: "Self-employed",
    points: [
      "Designed, built and deployed complete web apps for small businesses — from UI design and API development to hosting and monitoring.",
      "Set up reusable Next.js starter with auth, CMS wiring and CI, cutting new-project setup from days to hours.",
    ],
    tags: ["Next.js", "TypeScript", "MongoDB", "JavaScript"],
  },
];
