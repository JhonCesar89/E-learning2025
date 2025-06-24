/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin"

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx, mdx}", // include .mdx if using App Router features
  ],
  theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.8s ease-in forwards',
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
  },
},
  plugins: [
    flowbite,
  ],
}