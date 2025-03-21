/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('/pexels_image_reacct.jpg')",
        myOverlay:
          "linear-gradient(to right ,rgba(245, 204, 132,0.7) 0%, rgba(245, 204, 132,0.4) 100%)",
      },
      fontFamily: {
        indie: ["'Indie FLower'", "cursive"],
        poppins: ["Poppins", "cursive"],
        courgette: ["Courgette", "cursive"],
      },
      colors: { brown: " #992600" },
      boxShadow: {
        "custom-dark": "0 4px 10px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
