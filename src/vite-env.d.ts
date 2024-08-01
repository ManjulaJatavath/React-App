/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createTailwindCSS } from 'vite-plugin-tailwindcss';

export default defineConfig({
  plugins: [react(), createTailwindCSS()],
});