/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "profile-picture": "url('../public/profile-picture.jpg')",
        "profile-pic": "url('../public/profile picture.png')",
      },
      screens: {
        smartphone: "0px",

        tablet: "576px",
        // => @media (min-width: 576px) { ... }

        laptop: "960px",
        // => @media (min-width: 960px) { ... }

        desktop: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        primaryColor: "#339fff",
      },
    },
  },
  plugins: [],
};
