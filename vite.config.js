import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If your site is served at https://<username>.github.io/<repo>/
  // uncomment the next line and set the repo name correctly:
  // base: '/learning-situated-interaction.github.io/',
})
