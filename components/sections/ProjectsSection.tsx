"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Star } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectModal from "@/components/ui/ProjectModal";

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative h-full p-6 rounded-2xl bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#00ff87]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00ff87]/5 flex flex-col overflow-hidden cursor-pointer"
        onClick={() => onOpen(project)}
      >
        {/* Top glow on hover */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff87]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="tag-pill text-[10px]">{project.category}</span>
            {project.featured && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-mono">
                <Star className="w-2.5 h-2.5" />
                Featured
              </span>
            )}
          </div>
          <span className="text-[#333] font-mono text-[10px]">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-white group-hover:text-[#00ff87] transition-colors duration-300 mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#555] text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.highlights.map((h) => (
            <span
              key={h}
              className="text-[10px] font-mono text-[#444] bg-[#111] border border-[#1e1e1e] px-2 py-0.5 rounded-md"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.slice(0, 5).map((tech) => (
            <span key={tech} className="tag-pill text-[10px]">
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-[10px] font-mono text-[#444] px-2 py-0.5">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#00ff87]/10 border border-[#00ff87]/20 text-[#00ff87] rounded-xl text-xs font-semibold hover:bg-[#00ff87]/20 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#111] border border-[#1e1e1e] text-[#555] hover:text-white hover:border-[#333] rounded-xl text-xs font-medium transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            Source
          </a>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#111] border border-[#1e1e1e] text-[#555] hover:text-white hover:border-[#333] transition-colors"
            aria-label="View details"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built."
          subtitle="A selection of real-world projects — each one solving a specific problem with the right tools."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href={`https://github.com/hilal`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-[#1e1e1e] text-[#555] hover:text-white hover:border-[#333] rounded-xl text-sm font-mono transition-colors group"
          >
            <Github className="w-4 h-4" />
            View all on GitHub
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
