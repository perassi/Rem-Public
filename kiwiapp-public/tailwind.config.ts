import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "0px"
        },
        screens: {
          sm: "1300px"
        }
      },
      backgroundImage: {
        "footer-bg": "url('../../public/assets/images/footer-bg.png')",
        "green-dots-bg": "url('../../public/assets/images/green-dots-mobile.png')",
        "green-dots-bottom-mobile": "url('../../public/assets/images/green-dots-bottom-mobile.png')"
      },
      colors: {
        remGreen: {
          "400": "#18F1A1",
          "500": "#0ee898",
          "700": "#172A25"
        },
        textDark: "#172A25",
        green: {
          "100": "#E9FBF5",
          "200": "#93ECCB",
          "300": "#68E4B6",
          "400": "#30DA9B",
          "500": "#1FAD78",
          "600": "#17825A",
          "700": "#136C4B",
          "800": "#0C412D",
        },
        evergreen: {
          "100": "#EFF6F4",
          "200": "#ADD2C8",
          "300": "#8CC0B2",
          "400": "#5AA591",
          "500": "#488474",
          "600": "#366357",
          "700": "#24423A",
          "800": "#172A25",
        },
        neutral: {
          "50": "#F8F7F7",
          "100": "#F1F0EF",
          "200": "#C2BFBD",
          "300": "#A9A6A2",
          "400": "#666666",
          "500": "#504D49",
          "600": "#353331",
          "700": "#1B1A18",
        },
        yellow: {
          "100": "#FDFAF0",
          "200": "#F9EECE",
          "300": "#F7DB8C",
          "400": "#F6CE5B",
          "500": "#F2C74C",
          "600": "#C3940D",
          "700": "#5C4504",
          "800": "#312502",
        },
        red: {
          "100": "#FDEEEE",
          "200": "#FCD9D9",
          "300": "#F9B5B5",
          "400": "#F47373",
          "500": "#F24C4C",
          "600": "#B00B0B",
          "700": "#7E0808",
          "800": "#530404",
        },
        primary: {
          "500": "#2e9b80",
          "600": "#1e7d67",
          "800": "#164f44",
          "900": "#134139",
        },
        mandarin: {
          "50": "#fdf5ef",
          "100": "#fae8da",
          "200": "#f4cdb4",
          "300": "#ea9d6f",
          "400": "#e58052",
          "500": "#df6030",
          "600": "#d04926",
          "700": "#ad3721",
          "800": "#8a2e22",
          "900": "#70281e",
          "950": "#3c120e",
        },
        mintly: "#BBE8D7",
        plum: "#872B58",
        beige: {
          "400": "#F0EEEA",
          "500": "#E3E0D8",
          "600": "#CEC6B1"
        },
        sunset: "#EA8F58",
      },
      fontFamily: {
        sans: ["General Sans", "sans-serif"],
        header: ["Sentient", "serif"],
      },
    },
  },
};

export default config;
