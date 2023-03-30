/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#13c2f7",
        
"secondary": "#d6e87d",
        
"accent": "#2db223",
        
"neutral": "#1D242F",
        
"base-100": "#F5F6F9",
        
"info": "#5EAFD4",
        
"success": "#196B57",
        
"warning": "#E39116",
        
"error": "#EF5048",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

