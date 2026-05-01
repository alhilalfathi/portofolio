// ============================================================
// PORTFOLIO STATIC DATA
// Edit this file to update your portfolio content
// ============================================================

export const personalInfo = {
  name: "Gazanuha Alhilal Fathiakbar",
  role: "Fullstack Developer",
  tagline: "Building scalable backend systems with Go and crafting modern web apps.",
  bio: "I'm a Fullstack Developer with a deep focus on backend architecture using Go. I design and build high-performance APIs, distributed systems, and database-heavy applications — then pair them with clean, responsive frontends. Clean Architecture and Developer Experience are my north stars.",
  bioExtended:
    "Currently exploring distributed tracing, event-driven microservices, and performance-first frontend patterns. I believe great software is invisible — it just works.",
  email: "alhilal.fathi@gmail.com",
  github: "https://github.com/alhilalfathi",
  linkedin: "https://linkedin.com/in/alhilalfathi",
  twitter: "https://twitter.com/alhilalfth",
  location: "Remote / Jakarta",
  available: true,
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const projects = [
  {
    id: "asset-tracking",
    title: "Asset Tracking System",
    description:
      "A real-time enterprise asset tracking platform built with clean architecture principles. Features role-based access control, audit logs, Redis caching for sub-10ms reads, and a geolocation layer for live asset mapping.",
    longDescription:
      "Designed from the ground up with Clean Architecture (Handler → Use Case → Repository). The system supports multi-tenant organizations, real-time WebSocket updates for asset status changes, and a full audit trail with PostgreSQL. Redis is used for session management and hot-path data caching.",
    tech: ["Go", "Gin", "PostgreSQL", "Redis", "JWT", "Argon2", "Docker", "WebSocket"],
    category: "Backend",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    status: "Production",
    highlights: ["<10ms p95 latency", "Multi-tenant", "Real-time WebSocket"],
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    description:
      "A high-performance URL shortening service with analytics dashboard. Handles 10k+ redirects/second using Redis as primary store. React frontend with real-time click analytics and custom slug support.",
    longDescription:
      "The backend is a stateless Go service behind a Redis layer for O(1) lookup performance. PostgreSQL stores persistent data and analytics events. The React frontend provides a clean UI for managing links, viewing click stats, and generating QR codes.",
    tech: ["Go", "Gin", "React", "PostgreSQL", "Docker", "Tailwind CSS"],
    category: "Fullstack",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    status: "Open Source",
    highlights: ["10k+ req/sec", "Real-time analytics", "QR generation"],
  },
  {
    id: "coffeeshop",
    title: "Coffeeshop Ecommerce",
    description:
      "A modern coffee shop e-commerce platform with seamless ordering and product management. Supports real-time cart updates, secure checkout, and order tracking. Built with React and Tailwind CSS, powered by Golang (Gin) APIs and PostgreSQL for fast, scalable transactions.",
    longDescription:
      "The system is built as a full-stack application with a React and Tailwind CSS frontend for a fast, responsive user experience. The backend is powered by a Golang (Gin) REST API following Clean Architecture principles, ensuring scalability and maintainability. PostgreSQL is used for reliable data storage, handling products, users, and transactions efficiently, with optimized queries to support smooth and scalable order processing.",
    tech: ["Go", "Gin", "React", "JWT", "Argon2", "Redis", "PostgreSQL", "Tailwind CSS"],
    category: "Backend",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    status: "Open Source",
    highlights: ["Real-time cart", "Secure checkout", "Responsive UI"],
  },
];

export const skillCategories = [
  {
    id: "backend",
    label: "Backend",
    icon: "server",
    color: "#00ff87",
    skills: [
      { name: "Go (Golang)", level: 79 },
      { name: "Gin Framework", level: 70 },
      { name: "Clean Architecture", level: 72 },
      { name: "REST API Design", level: 79 },
      { name: "gRPC", level: 50 },
      { name: "WebSockets", level: 55 },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: "database",
    color: "#00aaff",
    skills: [
      { name: "PostgreSQL", level: 75 },
      { name: "Redis", level: 60 },
      { name: "Query Optimization", level: 70 },
      { name: "Database Design", level: 75 },
      { name: "Migrations", level: 72 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "monitor",
    color: "#ff6b6b",
    skills: [
      { name: "React", level: 75 },
      { name: "Next.js", level: 55 },
      { name: "TypeScript", level: 60 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 55 },
    ],
  },
  {
    id: "devops",
    label: "Tools & DevOps",
    icon: "settings",
    color: "#f59e0b",
    skills: [
      { name: "Docker", level: 70 },
      { name: "Git / GitHub", level: 92 },
      { name: "Linux / Bash", level: 78 },
      { name: "CI/CD", level: 72 },
      { name: "Nginx", level: 70 },
    ],
  },
];

export const stats = [
  { value: "0-1", label: "Years Experience" },
  { value: "4+", label: "Projects Built" },
  { value: "5k+", label: "GitHub Commits" },
  { value: "∞", label: "Coffee Consumed" },
];
