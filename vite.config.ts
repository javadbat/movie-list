import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr({ include: '**/*.svg' })],
  envPrefix: ['APP_', 'TMDB_'],
  server: {
    host: true,
    port: 3001
  },
  resolve: {
    alias: {
      "@": "./src",
      '@config': '/src/configs',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
    },
  },
})
