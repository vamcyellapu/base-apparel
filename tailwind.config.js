/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url(/images/hero-mobile.jpg)",
        desktop: "url(/images/hero-desktop.jpg)",
      },
      colors: {
        primary: "hsl(0, 36%, 70%)",
        secondary: "hsl(0, 93%, 68%)",
        heading: "hsl(0, 6%, 24%)",
        gradient1: "hsl(0, 0%, 100%)",
        gradient2: "hsl(0, 100%, 98%)",
        gradient3: "hsl(0, 80%, 86%)",
        gradient4: "hsl(0, 74%, 74%)",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
