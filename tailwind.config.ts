import type { Config } from "tailwindcss"
import  colors  from 'tailwindcss/colors'

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {

    colors:{

      // default colors 
      emerald: colors.gray,
      green: colors.gray,
      orange: colors.gray,
      sky: colors.gray,
      gray: colors.gray,
      black: colors.black,
      white: colors.white,

    // curious-blue
    primary:{
      50: '#f0faff',
      100: '#e0f3fe',
      200: '#b9e8fe',
      300: '#7cd8fd',
      400: '#36c5fa',
      500: '#0caeeb',
      600: '#008ecc',
      700: '#016fa3',
      800: '#065e86',
      900: '#0b4e6f',
      950: '#07314a',
    }

  },


    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config