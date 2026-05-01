import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#0a0a0a",
          secondary: "#111111",
          tertiary: "#1a1a1a",
        },
        surface: {
          DEFAULT: "#161616",
          hover: "#1e1e1e",
          border: "#2a2a2a",
        },
        accent: {
          DEFAULT: "#00ff87",
          dim: "#00cc6a",
          glow: "rgba(0, 255, 135, 0.15)",
        },
        text: {
          primary: "#f0f0f0",
          secondary: "#888888",
          muted: "#555555",
        },
      },
      backgroundImage: {
        "noise": "url('/noise.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "scan": "scan 4s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,255,135,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(0,255,135,0.3)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
