import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutrals: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#374151'
        },
        status: {
          success: '#10b981',
          successForeground: '#ffffff',
          warning: '#f59e0b',
          warningForeground: '#111827',
          info: '#3b82f6',
          infoForeground: '#ffffff',
          danger: '#ef4444',
          dangerForeground: '#ffffff'
        }
      }
    },
  },
  plugins: [],
};

export default config;
