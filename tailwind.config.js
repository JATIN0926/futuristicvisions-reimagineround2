/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "PlayfairDisplay-Bold": ['"PlayfairDisplay Bold"', "sans-serif"],
        "PlayfairDisplay-Medium": ['"PlayfairDisplay Medium"', "sans-serif"],
        "PlayfairDisplay-Regular": ['"PlayfairDisplay Regular"', "sans-serif"],
        "Raleway-Bold": ['"Raleway Bold"', "sans-serif"],
        "Raleway-Light": ['"Raleway-Light"', "sans-serif"],
        "Raleway-Medium": ['"Raleway Medium"', "sans-serif"],
        "Raleway-Regular": ['"Raleway Regular"', "sans-serif"],
        "Raleway-SemiBold": ['"Raleway SemiBold"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        mbMini: "290px",
        mbXSmall: "400px",
        mbMedSmall: "500px",
        mbSmall: "600px",
        mbMedium: "800px",
        laptop: "1000px",
        tbPortrait: "1200px",
        tbMedium: "1400px",
        tbLandscape: "1600px",
        Desktop: "2000px",
        lgDesktop: "2400px",
      },
    },
  },
  plugins: [],
};
