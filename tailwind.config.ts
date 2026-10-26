import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: "#241815",
          50: "#f6f3f2",
          100: "#e9e4e2",
          200: "#d3c8c4",
          300: "#b5a39d",
          400: "#917b73",
          500: "#735c54",
          600: "#5d4740",
          700: "#493732",
          800: "#362723",
          900: "#241815",
          950: "#140c0a",
        },
        cream: {
          DEFAULT: "#F6EFE3",
          50: "#FDFBF7",
          100: "#FBF7F0",
          200: "#F6EFE3",
          300: "#ECE1CE",
          400: "#DECDB5",
          500: "#CAB396",
        },
        saffron: {
          DEFAULT: "#C87932",
          light: "#E59545",
          dark: "#9E561A",
          glow: "rgba(200, 121, 50, 0.3)",
        },
        charcoal: {
          DEFAULT: "#191716",
          darker: "#12100F",
        },
        olive: {
          DEFAULT: "#69705A",
          light: "#828B70",
          dark: "#4F5543",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Italiana", "Playfair Display", "serif"],
        retro: ["Bodoni Moda", "Cinzel Decorative", "serif"],
      },
      animation: {
        "steam": "steam 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marqueeReverse 35s linear infinite",
      },
      keyframes: {
        steam: {
          "0%, 100%": { transform: "translateY(0) scaleX(1)", opacity: "0.2" },
          "50%": { transform: "translateY(-14px) scaleX(1.15)", opacity: "0.55" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "vintage-grain": "url('/images/grain.png')",
      },
    },
  },
  plugins: [],
};

export default config;
