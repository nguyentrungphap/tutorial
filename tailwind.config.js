/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#1c1b1b",
        "custom-darker": "#1a1717",
      },
      // Định nghĩa gradient tùy chỉnh của bạn
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)",
      },
      screens: {
        "max-md": { max: "960px" },
      },
      translate: {
        "-full": "-100%",
        "60p": "60%",
      },
    },
  },
  plugins: [],
};
