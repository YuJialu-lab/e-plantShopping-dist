import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping-dist", // hier muss der Pfad des Repositories rein
  plugins: [react()],
})
 