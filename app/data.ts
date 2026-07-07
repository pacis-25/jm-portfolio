export interface Experience {
  period: string;
  role: string;
  company: string;
  summary: string;
  points: string[];
  stack: string[];
}

export interface Highlight {
  k: string;
  title: string;
  desc: string;
  meta: string;
}

export interface SkillGroup {
  group: string;
  items: string;
}

export const CONFIG = {
  name: "John Mark Pacis",
  firstName: "John Mark",
  role: "Software Engineer · Frontend / Fullstack",
  location: "Pangasinan, Philippines",
  email: "johnmarkpacis.dev@gmail.com",
  github: "https://github.com/pacis-25",
  linkedin: "https://www.linkedin.com/in/john-mark-pacis-28b71a205",
} as const;

export interface StackItem {
  label: string;
  slug: string;
  color?: string;
}

export const STACK_MARQUEE: StackItem[] = [
  { label: "React", slug: "react", color: "61DAFB" },
  { label: "Next.js", slug: "nextdotjs", color: "E9EEF3" },
  { label: "TypeScript", slug: "typescript", color: "3178C6" },
  { label: "Vite", slug: "vite", color: "646CFF" },
  { label: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { label: "Fastify", slug: "fastify", color: "E9EEF3" },
  { label: "Spring Boot", slug: "springboot", color: "6DB33F" },
  { label: "Laravel", slug: "laravel", color: "FF2D20" },
  { label: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { label: "MySQL", slug: "mysql", color: "4479A1" },
  { label: "GraphQL", slug: "graphql", color: "E10098" },
  { label: "Cypress", slug: "cypress", color: "69D3A7" },
  { label: "Redux", slug: "redux", color: "764ABC" },
  { label: "Material UI", slug: "mui", color: "007FFF" },
  { label: "Mantine", slug: "mantine", color: "339AF0" },
  { label: "Docker", slug: "docker", color: "2496ED" },
  { label: "Claude", slug: "claude", color: "D97757" },
];

export const EXPERIENCE: Experience[] = [
  {
    period: "Jan 2026 - Jun 2026",
    role: "Full-Stack Developer",
    company: "Pivotly",
    summary:
      "Developed FirstCall, a dispatch management application on Pivotly's shared multi-tenant platform (React/Vite frontend, Fastify/TypeScript backend, PostgreSQL with Liquibase migrations).",
    points: [
      "Designed and built the Notification Safety Gate, a platform-wide safeguard spanning five repositories that intercepts outbound notifications with environment-aware routing",
      "Implemented end-to-end RBAC across three user roles, including custom claims, self-scoped APIs, and an admin Permissions Management page for claims and DAC policies",
      "Built a curated Audit Log (Action History) merging multiple data streams into a unified, human-readable timeline with deep-linking",
      "Built a new EmailConnector for the workflow engine from scratch, with SMTP integration, dynamic expression evaluation, and dependency-graph-aware execution",
      "Authored multi-tenant auth architecture documentation; applied an investigation-first workflow to validate assumptions before implementation",
    ],
    stack: ["React", "Vite", "TypeScript", "Fastify", "PostgreSQL", "Liquibase"],
  },
  {
    period: "Dec 2025 - Jan 2026",
    role: "Full-Stack Developer",
    company: "NYK-FIL Maritime E-Training Inc.",
    summary:
      "Built a digital appointment scheduling system for crew operations using Next.js and Laravel.",
    points: [
      "Crew-initiated booking with real-time slot availability and conflict prevention",
      "Department calendars with slot capacity management and scheduling controls",
      "QR code verification with guard-side scanning for instant appointment lookup",
      "Confirmation, reminders, cancellation flow, and audit-ready logs for operations",
    ],
    stack: ["Next.js", "Laravel", "MySQL"],
  },
  {
    period: "2022 - 2025",
    role: "Frontend Developer",
    company: "Inchcape Digital Delivery Center PH",
    summary:
      "Delivered scalable React frontends for global automotive brands in an Agile environment.",
    points: [
      "Built reusable React + Material UI components from Figma designs",
      "Migrated a full market to a new repository, porting and extending features (incl. Similar Stock for Lexus Singapore)",
      "Rolled out a new GA4 setup for JLR markets without disrupting other regions",
      "Automated end-to-end testing with Cypress; mentored junior developers",
    ],
    stack: ["React", "Material UI", "Cypress", "GraphQL"],
  },
  {
    period: "Jun 2024 - Apr 2025",
    role: "Full-Stack Developer",
    company: "Social Owl",
    summary:
      "Built B2B SaaS features for social media automation, scheduling, and analytics.",
    points: [
      "Custom drag-and-drop page builder using Puck with full customization",
      "Reporting and insights dashboards for Pinterest and Threads",
      "Collaborated with product and design on performance-focused, scalable features",
    ],
    stack: ["React", "TypeScript", "Node.js"],
  },
];

export const HIGHLIGHTS: Highlight[] = [
  {
    k: "01",
    title: "Notification Safety Gate",
    desc: "Platform-wide safeguard that intercepts outbound notifications before delivery, with environment-aware routing across three modes. Implemented across five repositories, from stored database functions to the admin frontend.",
    meta: "Fastify · PostgreSQL · TypeScript · Python",
  },
  {
    k: "02",
    title: "End-to-End RBAC & Permissions",
    desc: "Role-based access control across three user roles with custom claims, a permissions audit that split shared claims into granular per-menu claims, and an admin Permissions Management page for claims and DAC policies.",
    meta: "React · Fastify · PostgreSQL",
  },
  {
    k: "03",
    title: "Unified Audit Log (Action History)",
    desc: "Curated Service Request and Task audit timeline that merges multiple data streams client-side into a single human-readable history with deep-linking.",
    meta: "React · TypeScript",
  },
  {
    k: "04",
    title: "Appointment Scheduling Platform",
    desc: "End-to-end booking system for maritime crew operations: real-time slots, QR check-in with guard-side scanning, department calendars, and audit-ready reporting.",
    meta: "Next.js · Laravel",
  },
  {
    k: "05",
    title: "Drag-and-Drop Page Builder",
    desc: "Custom page builder on Puck for a B2B social media SaaS, giving non-technical users full layout control.",
    meta: "React · Puck · TypeScript",
  },
  {
    k: "06",
    title: "Automotive Market Migration",
    desc: "Migrated an entire market frontend to a new repository for a global automotive group, including feature porting, net-new development, and a GA4 rollout that left other regions untouched.",
    meta: "React · MUI · GraphQL · GA4",
  },
];

export const SKILLS: SkillGroup[] = [
  { group: "Frontend", items: "React.js · Next.js · TypeScript · Vite · Redux · Material UI · Mantine" },
  { group: "Backend", items: "Node.js · Fastify · Java (Spring Boot) · Laravel" },
  { group: "Data & APIs", items: "PostgreSQL · MySQL · Liquibase · GraphQL · REST" },
  { group: "Quality & Delivery", items: "Cypress · Docker · CI/CD · Agile (Scrum/Kanban) · RBAC · Jira" },
  { group: "AI Tooling", items: "Claude Code · Anthropic API · ChatGPT · AI-assisted development workflows" },
];
