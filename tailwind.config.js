module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  imporant: true,
  theme: {
    extend: {},
    colors: {
      gold: "#B19C61",
      cream: "#FFFCF5",
      darkcream: "#FBF7EE",
      brown: "#704E2E",
      whatsapp: "#58C971",
    },
    fontFamily: {
      sans: ["Inter", "system-ui"],
      serif: ["InikaBold", "Inter"],
      mono: ["InikaRegular", "Inter"],
      italic: ["InterMedium", "Inter"],
    },
    screens: {
      "2xl": { max: "1660px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1350px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      nav: { max: "870px" },
      // => @media (max-width: 767px) { ... }

      md: { max: "820px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "650px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "500px" },
      // => @media (max-width: 639px) { ... }

      ss: { max: "400px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
