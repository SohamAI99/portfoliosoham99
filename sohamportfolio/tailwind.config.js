/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#00f3ff",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#ff00ff",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#9d00ff",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-orbitron)"],
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
            filter:
              "drop-shadow(0 0 1px rgba(0, 243, 255, 0.7)) drop-shadow(0 0 5px rgba(0, 243, 255, 0.5)) drop-shadow(0 0 15px rgba(0, 243, 255, 0.3))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
            filter: "none",
          },
        },
        glow: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 2px rgba(0, 243, 255, 0.7)) drop-shadow(0 0 4px rgba(0, 243, 255, 0.5))",
          },
          "50%": {
            filter: "drop-shadow(0 0 5px rgba(0, 243, 255, 0.9)) drop-shadow(0 0 10px rgba(0, 243, 255, 0.7))",
          },
        },
      },
      animation: {
        flicker: "flicker 3s linear infinite",
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

