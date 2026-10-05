import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#090B0F",
          raised: "#0F131A",
          surface: "#131822",
          overlay: "#181E2A",
        },
        border: {
          DEFAULT: "#212836",
          soft: "#191F2B",
          hover: "#313B4E",
        },
        ink: {
          DEFAULT: "#F2F4F8",
          muted: "#B4BDCC",
          faint: "#8A94A6",
        },
        accent: {
          DEFAULT: "#5E7CFF",
          strong: "#4A63E8",
          soft: "#8B9CFF",
          violet: "#8B7CF6",
          dim: "#2B3363",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(94,124,255,0.25), 0 0 32px rgba(94,124,255,0.12)",
        card: "0 1px 0 rgba(255,255,255,0.03) inset",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
