"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Terminal, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#111] bg-[#0a0a0a]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#00ff87]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-[#00ff87]/10 border border-[#00ff87]/25 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-[#00ff87]" />
            </div>
            <span className="font-display font-bold text-sm text-[#555]">
              {personalInfo.name}
              <span className="text-[#00ff87]">.</span>
            </span>
          </motion.div>

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-[#333] hover:text-[#666] text-xs font-mono transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#333] hover:text-[#00ff87] hover:bg-[#00ff87]/5 transition-all"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-[#0f0f0f] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#2a2a2a] text-[11px] font-mono">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[#2a2a2a] text-[11px] font-mono flex items-center gap-1.5">
            Built with
            <Heart className="w-2.5 h-2.5 text-red-800" />
            Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
