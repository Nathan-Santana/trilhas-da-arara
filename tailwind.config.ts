import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ff7f50', // Coral, para os botões e destaques
        secondary: '#4b5563', // Cinza escuro para os textos
        background: '#f9fafb', // Fundo claro
        accent: '#3b82f6', // Azul para ícones e pequenos detalhes
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
