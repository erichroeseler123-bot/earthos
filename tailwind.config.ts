import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#3b82f6',
        'neon-yellow': '#eab308',
        'neon-purple': '#8b5cf6',
        'dark-bg': '#111827',
        'dark-gray': '#374151',
        'matrix-green': '#22c55e',
        'matrix-light': '#4ade80',
        'matrix-dark': '#166534',
      },
      boxShadow: {
        'neon-glow': '0 0 12px rgba(34, 197, 94, 0.6)',
      },
      fontFamily: {
        mono: ['monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
