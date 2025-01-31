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
        keyframes:{
            xbounce: {
                '0%, 100%': { transform: 'translateX(-0.5rem)' },
                '50%': { transform: 'translateX(1rem)' },
            },
            ybounce: {
                '0%, 100%': { transform: 'translateY(-0.5rem)' },
                '50%': { transform: 'translateY(0.6rem)' },
            }
        },
        animation:{
            xbounce: 'xbounce 9s ease-in-out infinite',
        }
    },
  },
  plugins: [],
};
