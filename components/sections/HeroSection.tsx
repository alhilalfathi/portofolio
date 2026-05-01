"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";

const ROLES = [
  "Fullstack Developer",
  "Go Engineer",
  "Backend Architect",
  "API Designer",
  "Open Source Builder",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const current = texts[index];
    if (!deleting) {
      if (displayed.length < current.length) {
        timeout.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60
        );
      } else {
        timeout.current = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout.current = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          35
        );
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, index, texts]);

  return (
    <span className="text-[#00ff87] cursor-blink font-mono">{displayed}</span>
  );
}

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00ff87]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#0055ff]/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="relative z-10 mb-8 flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff87]/25 bg-[#00ff87]/6 text-[#00ff87] text-xs font-mono"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff87] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff87]" />
        </span>
        Available for freelance &amp; full-time
        <Sparkles className="w-3 h-3 opacity-60" />
      </motion.div>

      {/* Main heading */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
            <span className="text-white block">Hi, I&apos;m</span>
            <span className="gradient-text block">{personalInfo.name}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#555] mb-4 h-9 flex items-center justify-center gap-0"
        >
          <span className="text-[#444] mr-3">{"// "}</span>
          <TypewriterText texts={ROLES} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="text-[#555] text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-light"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group px-7 py-3.5 bg-[#00ff87] text-[#0a0a0a] rounded-xl font-semibold text-sm tracking-wide hover:bg-[#00cc6a] transition-colors flex items-center gap-2 accent-glow"
          >
            View Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-7 py-3.5 bg-transparent border border-[#2a2a2a] text-[#888] hover:text-white hover:border-[#444] rounded-xl font-semibold text-sm tracking-wide transition-all"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          {[
            { href: personalInfo.github, icon: Github, label: "GitHub" },
            { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.1 }}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#1e1e1e] bg-[#111] text-[#555] hover:text-[#00ff87] hover:border-[#00ff87]/30 transition-all"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
          <div className="w-px h-6 bg-[#1e1e1e]" />
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#555] hover:text-[#888] font-mono text-xs transition-colors"
          >
            {personalInfo.email}
          </a>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="relative z-10 mt-20 flex flex-wrap items-center justify-center gap-px"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-8 py-5 flex flex-col items-center gap-1 ${
              i < stats.length - 1
                ? "border-r border-[#1a1a1a]"
                : ""
            }`}
          >
            <span className="font-display text-2xl font-bold text-white">
              {stat.value}
            </span>
            <span className="text-[#555] text-xs font-mono">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#333]"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#333] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
