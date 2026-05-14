cd my-project
npm install tailwindcss @tailwindcss/vite

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

import
@import "tailwindcss";

npm run dev