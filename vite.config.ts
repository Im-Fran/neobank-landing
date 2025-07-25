import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import {resolve as pathResolve} from "node:path";

// Configuración de Vite para el proyecto NeoBank
// Documentación oficial: https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': pathResolve(__dirname, "./src"),
    },
  },
})
