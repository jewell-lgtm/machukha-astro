/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["system-ui", "sans-serif"],
      serif: [
        "Didot",
        "Bodoni MT",
        "Noto Serif Display",
        "URW Palladio L",
        "P052",
        "Sylfaen",
        "serif",
      ],
    },
    extend: {},
  },
  plugins: [],
};
