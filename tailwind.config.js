export default {
  theme: {
    extend: {
      keyframes: {
        pulseCircle: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
      },
      animation: {
        pulseCircle: "pulseCircle 6s ease-in-out infinite",
      },
    },
  },
};
