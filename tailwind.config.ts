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
          maxWidth: {
            'screen-sm': '640px',  // Apply for small screens
            'screen-md': '768px',  // Apply for medium screens
            'screen-lg': '1024px', // Apply for large screens
            'screen-xl': '1280px', // Apply for extra-large screens
          },
        },

      },
    ],
  },
} satisfies Config;
