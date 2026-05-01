"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}
      >
        <div className="w-6 h-px bg-[#00ff87]" />
        <span className="font-mono text-[11px] text-[#00ff87] uppercase tracking-[0.15em]">
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#555] mt-4 max-w-xl text-base leading-relaxed"
          style={{ marginLeft: center ? "auto" : undefined, marginRight: center ? "auto" : undefined }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
