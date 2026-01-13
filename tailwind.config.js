module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
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
    },
  },
  plugins: [],
};
