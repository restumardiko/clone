/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {theme: {
      extend: {
        fontSize: {
          base: "16px",
          lg: "18px",
          xl: "20px",
        },
      },
    },
    
      spacing: {
        // Small Spacing (multiples of 4px)
        '1': '0.25rem',  // 4px
        '2': '0.5rem',   // 8px
        '3': '0.75rem',  // 12px
        '4': '1rem',     // 16px

        // Medium Spacing (multiples of 8px)
        '5': '1.25rem',  // 20px
        '6': '1.5rem',   // 24px
        '8': '2rem',     // 32px

        // Large Spacing
        '10': '2.5rem',  // 40px
        '12': '3rem',    // 48px
        '14': '3.5rem',  // 56px
        '16': '4rem',    // 64px

        // Extra-Large Spacing
        '20': '5rem',    // 80px
        '24': '6rem',    // 96px
        '28': '7rem',    // 112px
        '32': '8rem',    // 128px

        // Massive Spacing
        '36': '9rem',    // 144px
        '40': '10rem',   // 160px
        '48': '12rem',   // 192px
        '56': '14rem',   // 224px
        '64': '16rem',   // 256px

        // Custom for Ultra-Large Designs
        '72': '18rem',   // 288px
        '80': '20rem',   // 320px
        '96': '24rem',   // 384px
      },
    },
  },
  plugins: [],
}