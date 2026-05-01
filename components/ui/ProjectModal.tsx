"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  featured: boolean;
  liveUrl: string;
  githubUrl: string;
  status: string;
  highlights: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    if (project) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-2xl mx-auto bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-[#1a1a1a]">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="tag-pill text-[10px]">{project.category}</span>
                  <span className="font-mono text-[10px] text-[#555]">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mt-2">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1a1a1a] hover:bg-[#222] text-[#555] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <p className="text-[#888] text-sm leading-relaxed mb-6">
                {project.longDescription}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-mono text-[11px] text-[#555] uppercase tracking-wider mb-3">
                  Key Highlights
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 text-sm text-[#888]"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#00ff87] shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div>
                <h4 className="font-mono text-[11px] text-[#555] uppercase tracking-wider mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-3 p-6 border-t border-[#1a1a1a]">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#00ff87] text-[#0a0a0a] rounded-xl text-sm font-semibold hover:bg-[#00cc6a] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#111] border border-[#1e1e1e] text-[#888] hover:text-white hover:border-[#333] rounded-xl text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
