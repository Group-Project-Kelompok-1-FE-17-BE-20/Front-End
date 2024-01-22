/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        colors: {
          white: "#fff",
          "netral-black-100": "#272d2f",
          "neutral-gray-717171": "#717171",
          darkslategray: "rgba(39, 45, 47, 0.5)",
        },
        spacing: {},
      },
    },
  },
  plugins: [],
};
