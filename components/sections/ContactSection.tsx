"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ArrowRight, Send, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@alhilalfathi",
    href: personalInfo.github,
    color: "#f0f0f0",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/alhilalfathi",
    href: personalInfo.linkedin,
    color: "#0a66c2",
  },
  {
    icon: Mail,
    label: "Email",
    handle: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#00ff87",
  },
  {
    icon: Twitter,
    label: "Twitter",
    handle: "@alhilalfth",
    href: personalInfo.twitter,
    color: "#1d9bf0",
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputClass =
    "w-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl px-4 py-3 text-[#f0f0f0] placeholder-[#333] text-sm font-mono transition-all focus:outline-none focus:border-[#00ff87]/50 focus:bg-[#111] hover:border-[#222]";

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff87]/[0.012] to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00ff87]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something."
          subtitle="Have a project in mind or want to talk? I'm open to freelance work, full-time roles, and interesting collaborations."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Social links */}
            <div className="space-y-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#222] group transition-all"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${link.color}12`,
                      border: `1px solid ${link.color}25`,
                    }}
                  >
                    <link.icon
                      className="w-4 h-4"
                      style={{ color: link.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#555] text-[11px] font-mono uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-[#888] group-hover:text-white text-sm font-mono truncate transition-colors">
                      {link.handle}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#333] group-hover:text-[#00ff87] group-hover:translate-x-0.5 transition-all" />
                </motion.a>
              ))}
            </div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-5 rounded-xl bg-[#00ff87]/5 border border-[#00ff87]/15"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff87] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff87]" />
                </span>
                <span className="text-[#00ff87] text-xs font-mono">
                  Available for work
                </span>
              </div>
              <p className="text-[#555] text-xs leading-relaxed font-mono">
                Open to freelance, contract, and full-time opportunities. Response
                time: usually within 24hrs.
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="p-7 rounded-2xl bg-[#0f0f0f] border border-[#1a1a1a]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#00ff87]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Message sent!
                  </h3>
                  <p className="text-[#555] text-sm font-mono max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-2 text-[#00ff87] text-xs font-mono hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-[#444] uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#444] uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#444] uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Project inquiry / Job opportunity / ..."
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#444] uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, timeline, and budget..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.01 }}
                    whileTap={{ scale: loading ? 1 : 0.99 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#00ff87] text-[#0a0a0a] rounded-xl font-semibold text-sm tracking-wide hover:bg-[#00cc6a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
