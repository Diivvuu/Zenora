import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        text: {
          primary: "#333333", // Dark gray for main text
          secondary: "#666666", // Medium gray for secondary text
          muted: "#999999", // Lighter gray for muted or subtle text
          accent: "#66ccff", // Accent color for links or highlights
          navy: "#003366", // Navy blue for hero sections or headings
          royal: "#4169e1", // Royal blue for headings or highlights
          danger: "#ff4d4d", // Red for errors or warnings
          success: "#28a745", // Green for success messages
          white: "#ffffff", // White for text on dark backgrounds
        },
      },

      fontSize: {
        // Small Devices (e.g., Phones)
        xs: ["0.75rem", "1rem"], // Extra small text
        sm: ["0.875rem", "1.25rem"], // Small text
        base: ["1rem", "1.5rem"], // Default body text
        lg: ["1.125rem", "1.75rem"], // Large text
        xl: ["1.25rem", "1.75rem"], // Extra large text

        // Medium Devices (e.g., Tablets)
        "2xl": ["2rem", "2.5rem"],
        "3xl": ["3rem", "3.5rem"],
        "4xl": ["4rem", "4.5rem"],
        "5xl": ["5rem", "5rem"], // Heading for hero sections
        "6xl": ["6rem", "6.5rem"],

        // Large Devices (e.g., Laptops & Desktops)
        "7xl": ["7rem", "7.5rem"],
        "8xl": ["8rem", "8.5rem"],
        "10xl": ["10rem", "10.5rem"], // Hero headings or banner text
      },

      borderRadius: {
        "custom-20": "20px",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"], // Nunito as primary with sans-serif fallbackplayfair
        playfair: ["var(--font-playfair)", "serif"], // Nunito as primary with sans-serif fallback
      },
    },
  },
  plugins: [],
} satisfies Config;
