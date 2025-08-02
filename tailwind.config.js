

// // ...existing code...
// module.exports = {
//   // ...existing config...
//   theme: {
//     extend: {
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-30px)' },
//         },
//       },
//       animation: {
//         float: 'float 6s ease-in-out infinite',
//       },
//     },
//   },
 
//   // ...existing config...
// };
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
 theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'scale(95%)' },
          to: { opacity: 1, transform: 'scale(100%)' },
        },
      },
    },
  },
  plugins: [],
};