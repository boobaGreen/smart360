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
      redVan: { 400: "#c4253f" },
      redCesena: {
        // 400: "#611515", // colore piu chiaro di filippo
        // 100: "#FBF3F1", //* original
        // 200: "#E9BDB1", //* original
        // 300: "#DA907C", //* original
        // 400: "#cd6a50", //* original
        // 500: "#B14D33", //* original
        // 600: "#8E3E29", //* original
        // 800: "#5B281A", //* original
        // 900: "#492015", //* original
        // 990: "#0A0503", //* original
        100: "#fff",
        200: "#f3c2ca",
        300: "#e36c7f",
        400: "#c4253f", // *
        500: "#991d31",
        600: "#6e1523",
        700: "#430d16",
        800: "#180508",
        900: "#180510",
        990: "#000000",
      },
      bluCesena: {
        // 500: "#002e48", // colore piu chiaro di filippo
        200: "#dcf0f5", //* original
        500: "#50B3CD", //* original
        600: "#194b59", //* original
        700: "#133942", //* original
      },
    },
    extend: {
      keyframes: {
        jolt: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" }, // Piccolo movimento verso l'alto
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },

        drive: {
          "0%": { left: "-320px" },
          "100%": { left: "100vw" },
        },
        smoke: {
          "0%": { transform: "scale(0.5) translate(0, 0)", opacity: 0.7 },
          "50%": {
            transform: "scale(1.5) translate(-15px, -15px)",
            opacity: 0.4,
          },
          "100%": { transform: "scale(2) translate(-30px, -30px)", opacity: 0 },
        },
      },
      animation: {
        jolt: "jolt 0.5s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        drive: "drive 10s linear infinite", // Slower movement
        driveMobile: "drive 5s linear infinite",
        smoke1: "smoke 3s linear infinite",
        smoke2: "smoke 3s linear 1s infinite",
        smoke3: "smoke 3s linear 2s infinite",
        smoke4: "smoke 3s linear 3s infinite",
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
