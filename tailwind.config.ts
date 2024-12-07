const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// Function to add CSS custom properties for colors
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class", "class"], // Enable dark mode based on a class
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: {
          primary: "#333333",
          secondary: "#666666",
          muted: "#999999",
          accent: "#66ccff",
          navy: "#003366",
          teal: "#a6f6f1",
          danger: "#ff4d4d",
          success: "#28a745",
          white: "#ffffff",
        },
      },
      fontSize: {
        xl: ["1.6rem", "2rem"],
        "2xl": ["2rem", "2.5rem"],
        "3xl": ["3rem", "3.5rem"],
        "4xl": ["4rem", "4.5rem"],
        "5xl": ["5rem", "5rem"],
        "6xl": ["6rem", "6.5rem"],
        "7xl": ["7rem", "7.5rem"],
        "8xl": ["8rem", "8.5rem"],
        "9xl": ["9rem", "9.5rem"],
        "10xl": ["10rem", "10.5rem"],
        "12xl": ["12rem", "12.5rem"],
        "16xl": ["16rem", "14.5rem"],
      },
      borderRadius: {
        "custom-20": "20px",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        input:
          "`0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`",
      },
    },
  },
  plugins: [addVariablesForColors], // Add plugin to apply CSS variables
};
