import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
   server: {
=======
  server: {
>>>>>>> bce51d06c9fbbaba7fcebf49712361cf0594de68
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
})