import tailwindcssBrandColors from "tailwindcss-brand-colors";
import tailwindcssDebugScreens from "tailwindcss-debug-screens";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      current: "currentColor",
      yellow: { 400: "#facc15" },
      gray: { 300: "#d1d5db" },
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
      bluCesena: {
        200: "#dcf0f5",
        500: "#50B3CD",
        600: "#194b59",
        700: "#133942",
      },
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        main: ["Oswald", "sans-serif"],
      },
      backgroundImage: {
        "elevator-small": "url('/img/elevator-bandiera-cut-3.webp')", //usata -smallImages  HeroSection *
        "montagna-small": "url('/img/montagna-cut.webp')", // usata smallImages HeroSection //riga1 *
        "elevator-large": "url('/img/comune-large.webp')", // largeImages HeroSection riga2 *
        "scala-small": "url('/img/scala2b.webp')", //usata smallImages HeroSection *
        "vetro-img": "url('/img/vetro.webp')", // riga3 *
        "flotta-large": "url('/img/flotta-large.webp')", // riga1 *
        "prato-large": "url('/img/prato-large.webp')", // largeImages HeroSection *
        "scala-giu-large": "url('/img/scala-giu-large.webp')", // largeImages HeroSection *
        "terrazzo-cut": "url('/img/terrazzo-cut.webp')", //riga1 *
        "gh-image": "url('/img/gh-large.webp')", //riga1 *
        "imballa-1": "url('/img/interno_camioncino.webp')", //riga3 *
        "imballa-2": "url('/img/interno_camioncino_2.webp')", //riga3 *
        "imballa-giu": "url('/img/imballa.webp')", //riga3 *
        "quarto-piano": "url('/img/4piano-cut.webp')", //riga1 *
        "apertura-flotta": "url('/img/apertura.webp')", //riga2 *
        "mare-flotta": "url('/img/mare.webp')", //riga2 *
      },
    },
  },
  plugins: [tailwindcssBrandColors, tailwindcssDebugScreens],
};

// // Images for different screen sizes
// export const smallImages = [
//   "bg-elevator-small",
//   "bg-elevator-small",
//   "bg-montagna-small",
//   "bg-montagna-small",
//   "bg-elevator-small",
//   "bg-elevator-small",
//   "bg-scala-small",
//   "bg-scala-small",
// ];
// export const mediumImages = [
//   "bg-elevator-small",
//   "bg-elevator-small",
//   "bg-montagna-small",
//   "bg-montagna-small",
//   "bg-elevator-small",
//   "bg-elevator-small",
//   "bg-scala-small",
//   "bg-scala-small",
// ];
// export const largeImages = [
//   "bg-elevator-large",
//   "bg-elevator-large",
//   "bg-scala-giu-large",
//   "bg-scala-giu-large",
//   "bg-elevator-large",
//   "bg-elevator-large",
//   "bg-prato-large",
//   "bg-prato-large",
// ];
// export const riga1Images = [
//   "bg-gh-image",
//   "bg-montagna-small",
//   "bg-quarto-piano",
//   "bg-flotta-large",
//   "bg-terrazzo-cut",
//   "bg-gh-image",
//   "bg-montagna-small",
//   "bg-flotta-large",
// ];
// export const riga3Images = [
//   "bg-vetro-img",
//   "bg-imballa-giu",
//   "bg-imballa-1",
//   "bg-vetro-img",
//   "bg-imballa-giu",
//   "bg-imballa-2",
//   "bg-vetro-img",
//   "bg-imballa-giu",
// ];
// export const riga2Images = [
//   "bg-apertura-flotta",
//   "bg-elevator-large",
//   "bg-mare-flotta",
//   "bg-apertura-flotta",
//   "bg-elevator-large",
//   "bg-mare-flotta",
//   "bg-apertura-flotta",
//   "bg-elevator-large",
// ];
