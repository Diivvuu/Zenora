const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
import type { Config } from "tailwindcss";

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
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
      },
      screens: {
        xs: "480px", // Extra small screens
        sm: "640px", // Small screens (default Tailwind breakpoint)
        md: "768px", // Medium screens (default Tailwind breakpoint)
        lg: "1024px", // Large screens (default Tailwind breakpoint)
        xl: "1280px", // Extra-large screens (default Tailwind breakpoint)
        "2xl": "1536px", // 2XL screens (default Tailwind breakpoint)
        "3xl": "1920px", // Custom large screen for 4K displays
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: {
          primary: "#333333", // Dark gray for main text
          secondary: "#666666", // Medium gray for secondary text
          muted: "#999999", // Lighter gray for muted or subtle text
          accent: "#66ccff", // Accent color for links or highlights
          navy: "#003366", // Navy blue for hero sections or headings
          teal: "#a6f6f1",
          danger: "#ff4d4d", // Red for errors or warnings
          success: "#28a745", // Green for success messages
          white: "#ffffff", // White for text on dark backgrounds
        },
      },
      fontSize: {
        // Medium Devices (e.g., Tablets)
        "2xl": ["2rem", "2.5rem"],
        "3xl": ["3rem", "3.5rem"],
        "4xl": ["4rem", "4.5rem"],
        "5xl": ["5rem", "5rem"], // Heading for hero sections
        "6xl": ["6rem", "6.5rem"],

        // Large Devices (e.g., Laptops & Desktops)
        "7xl": ["7rem", "7.5rem"],
        "8xl": ["8rem", "8.5rem"],
        "9xl": ["9rem", "9.5rem"],
        "10xl": ["10rem", "10.5rem"], // Hero headings or banner text
        "12xl": ["12rem", "12.5rem"],
        "16xl": ["16rem", "14.5rem"],
      },
      borderRadius: {
        "custom-20": "20px",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"], // Nunito as primary with sans-serif fallback
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;
