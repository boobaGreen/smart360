import tailwindcssBrandColors from "tailwindcss-brand-colors";
import tailwindcssDebugScreens from "tailwindcss-debug-screens";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      current: "currentColor",
      redCesena: {
        100: "#FBF3F1",
        200: "#E9BDB1",
        300: "#DA907C",
        400: "#cd6a50", // original
        500: "#B14D33",
        600: "#8E3E29",
        700: "#723221",
        800: "#5B281A",
        900: "#492015",
        910: "#3A1A11",
        920: "#2E150E",
        930: "#25110B",
        940: "#1E0E09",
        950: "#180B07",
        960: "#130906",
        970: "#0F0705",
        980: "#0C0604",
        990: "#0A0503",
      },
      bluCesena: { 500: "#50B3CD", 600: "#194b59", 700: "#133942" },
    },
    extend: {
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        main: ["Oswald", "sans-serif"],
      },
      backgroundImage: {
        "elevator-small": "url('/img/elevator-bandiera-cut-3.webp')",
        "stretto-small": "url('/img/stretto.webp')",
        "montagna-small": "url('/img/montagna-cut.webp')",
        "montagna-large": "url('/img/montagna-large.webp')",
        "elevator-large": "url('/img/comune-large.webp')",
        "scala-small": "url('/img/scala2b.webp')",
        "vetro-img": "url('/img/vetro.webp')",
        "artigianale-large": "url('/img/artigianale-large.webp')",
        "flotta-large": "url('/img/flotta-large.webp')",
        "prato-large": "url('/img/prato-large.webp')",
        "scala-giu-large": "url('/img/scala-giu-large.webp')",
      },
    },
  },
  plugins: [tailwindcssBrandColors, tailwindcssDebugScreens],
};
