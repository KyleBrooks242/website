import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/posts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#28536B', // Set your custom primary color here
          secondary: '#7EA8BE', // Optional: set other theme colors
          accent: '82B26C',
          neutral: '#C2948A',
          'base-100': '11232C',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },

      },
      'retro'
    ],
  },
} satisfies Config;
