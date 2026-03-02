import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        charade: "#1D2029",
        mirage: "#171E29",
        "storm-gray": "#72727D",
        scorpion: "#5E5E5E",
        "wild-sand": "#F7F7F7",
        gallery: "#EBEBEB",
        jade: "#00BE3F",
        lima: "#47BF22",
        designme: {
          red: "#FD013A",
        },
      },
      letterSpacing: {
        tight14: "-0.0875rem",
      },
    },
  },
  plugins: [],
};

export default config;
