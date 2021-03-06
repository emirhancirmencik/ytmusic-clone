/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    screens: {
      tabletmax: { max: "936px" },
      tabletmin: "937px",
      smlmax: { max: "615px" },
      smlmin: "616px",
      ytmedmax: { max: "1577px" },
      ytmedmin: "1578px",
    },
    extend: {
      backgroundImage: {
        mybg: "url('/src/image/background.jpg')",
      },
      width: {
        fullnotscroll: "calc(100% - 12px)",
      },

      colors: {
        white1: "#fff",
        whitealpha1: "rgb(255,255,255,0.5)",
        whitealpha2: "rgb(255,255,255,0.3)",
        whitealpha3: "rgb(255,255,255,0.12)",
        whitealpha4: "rgb(255,255,255,0.05)",
        whitealpha5: "rgb(255,255,255,0.15)",
        blackalpha1: "rgb(0,0,0,0.4)",
        grey2: `#aaa`,
        grey3: `#909090`,
        grey4: `#717171`,
        grey5: `#606060`,
        black1: `#212121`,
        black2: `#181818`,
        black4: `#030303`,
        blackpure: `#000`,
        lightred: `#ff4e45`,
        youtubered: `#f00 `,
        mediumred: `#c00`,
        lightblue: `#3ea6ff`,
        yellow: `#fbc02d`,
        lightgreen: `#2ba640`,
        lightteal: `#00aaa7`,
        error: "#dd2c00",
        primary: "#3f51b5",
        lightprimary: "#c5cae9",
        darkprimary: "#303f9f",
        accent: "#ff4081",
        lightaccent: "#ff80ab",
        darkaccent: "#f50057",
        lightthemebackground: "#fff",
        lightthemebase: "#000",
        lightthemetext: "#212121",
        lightthemesecondary: "#737373",
        lightthemedisabled: "#9b9b9b",
        lightthemedivider: "#dbdbdb",
        darkthemebackground: "#212121;",
        darkthemetext: "#fff",
        darkthemesecondary: "#bcbcbc",
        darkthemedisabled: "#646464",
        darkthemedivider: "#3c3c3c",
        barred: "#3367d6",
      },
    },
  },
  plugins: [require("tailwindcss-labeled-groups")(["volume", "1"])],
  variants: {
    width: ["responsive", "group-hover", "focus"],
  },
};
