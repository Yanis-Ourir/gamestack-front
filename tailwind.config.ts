import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "black-gray": "#191C1F",
        "red-input": "#B54548",
        "red-input-hover": "#A43D40",
        "red-input-pressure": "#8F3538",
        "footer-bg": "#171923"
      },
      textColor: {
        "hover-red": "#B54548"
      }
    },
  },
  plugins: [],
};
export default config;
