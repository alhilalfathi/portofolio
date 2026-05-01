"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Server,
  Database,
  Monitor,
  Settings,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  server: Server,
  database: Database,
  monitor: Monitor,
  settings: Settings,
};

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-[#888] font-mono group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-[11px] font-mono text-[#333] group-hover:text-[#555] transition-colors">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-[#111] rounded-full overflow-hidden border border-[#1a1a1a]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: color }}
        >
          <div
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}80)`,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[number];
  index: number;
}) {
  const Icon = iconMap[category.icon] || Server;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="p-6 rounded-2xl bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#222] transition-all group"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${category.color}14`, border: `1px solid ${category.color}30` }}
        >
          <Icon className="w-4 h-4" style={{ color: category.color }} />
        </div>
        <div>
          <h3 className="font-display font-semibold text-white text-sm">
            {category.label}
          </h3>
          <p className="text-[#333] text-[11px] font-mono">
            {category.skills.length} skills
          </p>
        </div>
      </div>

      {/* Skill bars */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={category.color}
            delay={index * 0.1 + i * 0.06}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Floating tech badges
const techBadges = [
  "Go", "PostgreSQL", "Redis", "React", "Next.js",
  "TypeScript", "Docker", "Gin", "JWT", "REST",
  "gRPC", "Git", "Linux", "Tailwind", "Clean Architecture",
  "SQL", "WebSocket", "CI/CD", "Nginx", "OAuth2",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0055ff]/[0.012] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Tools of the trade."
          subtitle="Technologies I use daily, and a few more I've picked up along the way."
        />

        {/* Category cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

        {/* Scrolling badge strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 w-max"
          >
            {[...techBadges, ...techBadges].map((badge, i) => (
              <span
                key={`${badge}-${i}`}
                className="px-4 py-2 rounded-full border border-[#1e1e1e] bg-[#111] text-[#444] font-mono text-[11px] whitespace-nowrap hover:text-[#00ff87] hover:border-[#00ff87]/30 transition-colors cursor-default"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
