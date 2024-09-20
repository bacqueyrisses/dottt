import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["var(--font-ibm)"],
      },
      colors: {
        "dottt-grey": "#B6BBBE",
        "dottt-light-grey": "#D8DDE0",
        "dottt-light-grey-secondary": "#A2A7AA",
        "dottt-black": "#1D1D1D",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
