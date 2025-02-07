export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Cambo: ['Cambo', 'serif'],
      },
      keyframes: {
        xbounce: {
          '0%, 100%': { transform: 'translateX(-3.5rem)' },
          '50%': { transform: 'translateX(1rem)' },
        },
        ybounce: {
          '0%, 100%': { transform: 'translateY(-0.5rem)' },
          '50%': { transform: 'translateY(0.6rem)' },
        },
        gradientLoop: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        xbounce: 'xbounce 9s ease-in-out infinite',
        gradient: "gradientLoop 20s infinite linear",
      },
      backgroundSize: {
        "400%": "400% 100%",
      },
    },
  },
  plugins: [],
};
