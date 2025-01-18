import { reactRouter } from '@react-router/dev/vite'
import autoprefixer from 'autoprefixer'
import { reactRouterDevTools } from 'react-router-devtools'
import { reactRouterHonoServer } from 'react-router-hono-server/dev'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    },
    devSourcemap: true
  },
  plugins: [
    reactRouterDevTools(),
    reactRouter(),
    reactRouterHonoServer({
      dev: {
        exclude: [/^\/(resources)\/.+/]
      }
    }),
    tsconfigPaths()
  ],
  server: {
    port: 3000,
    open: true
  }
})
