import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
   plugins: [react(), tailwindcss()],
   base: process.env.VITE_BASE_URL || '/',
   resolve: {
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
      }
   }
});
