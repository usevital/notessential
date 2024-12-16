/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        "brand-background": "rgb(15, 15, 15)",
        "brand-background-2": "rgb(22, 27, 29)",
        "brand-background-3": "rgb(68, 68, 68)",
        "brand-colour": "rgb(0, 86, 234)",
        "brand-colour-light": "rgb(227, 245, 255)",
        "brand-text-strong": "rgb(255, 255, 255)",
        "brand-text": "rgb(227, 245, 255)",
        "brand-generic-red": "rgb(250, 111, 90)",
        "brand-generic-orange": "rgb(250, 165, 90)",
        "brand-generic-yellow": "rgb(250, 221, 90)",
        "brand-generic-green": "rgb(157, 250, 90)",
        "brand-generic-blue": "rgb(90, 149, 250)",
        "brand-generic-purple": "rgb(186, 90, 250)",
        "brand-generic-rose": "rgb(250, 90, 135)",
      },
    },
  },
  plugins: [],
}
