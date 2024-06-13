import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme_BK: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  theme: {
    extend: {
      colors: {
        softPastel: {
          lightPink: '#FFB6C1',
          lightBlue: '#ADD8E6',
          mintGreen: '#98FF98',
          lavender: '#E6E6FA',
        },
      },
    },
  },
  plugins: [],
};
export default config;
