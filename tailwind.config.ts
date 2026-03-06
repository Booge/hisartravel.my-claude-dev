import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#002B66",
          50: "#E6F0FF", 100: "#B3D1FF", 200: "#80B2FF", 300: "#4D93FF",
          400: "#1A74FF", 500: "#003F99", 600: "#003580", 700: "#002B66",
          800: "#00204D", 900: "#001633",
        },
        teal: {
          DEFAULT: "#08D0C3",
          50: "#E6FCFA", 100: "#B3F7F1", 200: "#80F2E8", 300: "#4DEDDC",
          400: "#1AE8D2", 500: "#08D0C3", 600: "#07B5A9", 700: "#06998F",
          800: "#057E75", 900: "#04625B",
        },
        gold: { DEFAULT: "#C9A84C", light: "#E8D48B" },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        "ken-burns": "kenburns 8s ease forwards",
        "fade-up": "fadeUp 0.6s ease forwards",
        "slide-up": "slideUp 0.35s ease forwards",
        "marquee": "marquee 30s linear infinite",
        "pulse-dot": "pulseDot 2s infinite",
      },
      keyframes: {
        kenburns: { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(1.08) translate(-1%,-1%)" } },
        fadeUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        pulseDot: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
      },
    },
  },
  plugins: [],
};
export default config;
