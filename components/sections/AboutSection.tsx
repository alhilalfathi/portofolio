"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Code2,
  Database,
  Globe,
  Wrench,
  MapPin,
  Coffee,
  Zap,
} from "lucide-react";

const quickSkills = [
  { icon: Code2, label: "Backend", tags: ["Go", "Gin", "Clean Arch", "JWT"] },
  { icon: Database, label: "Database", tags: ["PostgreSQL", "Redis", "SQL"] },
  { icon: Globe, label: "Frontend", tags: ["React", "Next.js", "Tailwind"] },
  { icon: Wrench, label: "DevOps", tags: ["Docker", "Git", "Linux"] },
];

const codeSnippet = `// main.go — HTTP Server Bootstrap
package main

import (
  "github.com/gin-gonic/gin"
  "your-app/internal/handler"
  "your-app/internal/middleware"
)

func main() {
  r := gin.Default()
  r.Use(middleware.CORS())
  r.Use(middleware.RateLimit())

  api := r.Group("/api/v1")
  {
    handler.RegisterRoutes(api)
  }

  r.Run(":8080")
}`;

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff87]/[0.015] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="About Me"
          title={`The dev behind\nthe code.`}
          subtitle="Focused on backend systems, API design, and clean architecture — with a knack for making frontends feel right."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text + Quick info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-4 text-[#888] leading-relaxed text-[15px]">
              <p>
                I&apos;m a{" "}
                <span className="text-white font-medium">
                  Fullstack Developer
                </span>{" "}
                who fell in love with backend systems. My main weapon is{" "}
                <span className="text-[#00ff87] font-mono">Go</span> — I use it
                to build APIs, microservices, and data-heavy systems that are
                fast, maintainable, and scalable.
              </p>
              <p>
                I care deeply about{" "}
                <span className="text-white font-medium">Clean Architecture</span>{" "}
                — separating concerns, making systems testable, and ensuring that
                code can evolve without pain. On the database side,{" "}
                <span className="text-[#00ff87] font-mono">PostgreSQL</span> is
                my primary store and{" "}
                <span className="text-[#00ff87] font-mono">Redis</span> handles
                caching and real-time data.
              </p>
              <p>
                When the backend is solid, I turn to{" "}
                <span className="text-white font-medium">React & Next.js</span>{" "}
                to build frontends that match the backend&apos;s quality — fast,
                accessible, and polished.
              </p>
            </div>

            {/* Meta info */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: MapPin, label: personalInfo.location },
                { icon: Coffee, label: "Backend-first mindset" },
                { icon: Zap, label: "Open to opportunities" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-[#555] text-xs font-mono"
                >
                  <Icon className="w-3.5 h-3.5 text-[#00ff87]/60" />
                  {label}
                </div>
              ))}
            </div>

            {/* Skill grid */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {quickSkills.map((category, i) => (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="p-4 rounded-xl bg-[#111] border border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <category.icon className="w-3.5 h-3.5 text-[#00ff87]" />
                    <span className="text-xs font-mono text-[#555] uppercase tracking-wider">
                      {category.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.tags.map((tag) => (
                      <span key={tag} className="tag-pill text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Code card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Terminal window */}
            <div className="rounded-2xl overflow-hidden border border-[#1e1e1e] bg-[#0d0d0d]">
              {/* Terminal titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#111]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[#333] font-mono text-[11px] mx-auto">
                  main.go
                </span>
              </div>
              {/* Code content */}
              <pre className="p-5 text-[11px] sm:text-xs leading-6 font-mono overflow-x-auto">
                {codeSnippet.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-[#2a2a2a] select-none w-6 shrink-0 text-right mr-4">
                      {i + 1}
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(
                            /\/\/.*/g,
                            '<span style="color:#444">$&</span>'
                          )
                          .replace(
                            /\b(package|import|func|var|const|type|struct|interface|return)\b/g,
                            '<span style="color:#c792ea">$&</span>'
                          )
                          .replace(
                            /\b(main|gin|middleware|handler|api)\b/g,
                            '<span style="color:#82aaff">$&</span>'
                          )
                          .replace(
                            /"[^"]*"/g,
                            '<span style="color:#c3e88d">$&</span>'
                          )
                          .replace(
                            /\b(Run|Default|Group|Use)\b/g,
                            '<span style="color:#00ff87">$&</span>'
                          ),
                      }}
                    />
                  </div>
                ))}
              </pre>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-[#00ff87]/5 rounded-2xl blur-xl -z-10" />

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-3 py-1.5 bg-[#0d0d0d] border border-[#00ff87]/30 rounded-lg font-mono text-[10px] text-[#00ff87] shadow-lg"
            >
              ⚡ Go 1.22
            </motion.div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-4 -left-4 px-3 py-1.5 bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg font-mono text-[10px] text-[#555] shadow-lg"
            >
              Clean Architecture ✓
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
