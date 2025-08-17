import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: "#122243", // Dark Blue
        secondary: "#FFBB08", // Yellow
        accent: "#38BDF8", // Light Blue
        background: "#F7F5F2", // Light Gray 
        success: "#2A8703", // Green
        warning: "#F59E0B", // Orange
        error: "#DC2626", // Red
        info: "#3B82F6", // Blue
      },
    },
  },
  // darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;