import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        // --- chassis ---
        night: "rgb(var(--color-night) / <alpha-value>)",
        abyss: "rgb(var(--color-abyss) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        elevated: "rgb(var(--color-elevated) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",

        // --- signal: cyan ---
        cyanGlow: {
          DEFAULT: "rgb(var(--color-cyan) / <alpha-value>)",
          soft: "rgb(var(--color-cyan-soft) / <alpha-value>)",
          deep: "rgb(var(--color-cyan-deep) / <alpha-value>)",
        },

        // --- signal: holographic blue ---
        holo: {
          DEFAULT: "rgb(var(--color-holo) / <alpha-value>)",
          soft: "rgb(var(--color-holo-soft) / <alpha-value>)",
        },

        // --- signal: violet (existing accent, kept) ---
        violetGlow: "rgb(var(--color-violet) / <alpha-value>)",

        // --- signal: emerald ---
        emeraldAccent: "rgb(var(--color-emerald) / <alpha-value>)",

        // --- text ---
        "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
        "text-muted": "rgb(var(--color-text-muted) / <alpha-value>)",
        "text-dim": "rgb(var(--color-text-dim) / <alpha-value>)",

        // --- status ---
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        glow: "var(--glow-cyan-md)",
        "glow-sm": "var(--glow-cyan-sm)",
        "glow-emerald": "var(--glow-emerald-sm)",
      },
      transitionDuration: {
        fast: "var(--dur-fast)",
        base: "var(--dur-base)",
        slow: "var(--dur-slow)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
        "in-out": "var(--ease-in-out)",
      },
      zIndex: {
        hud: "var(--z-hud)",
        sticky: "var(--z-sticky)",
        overlay: "var(--z-overlay)",
        modal: "var(--z-modal)",
        toast: "var(--z-toast)",
      },
    },
  },
  plugins: [],
};

export default config;
