import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: '../auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: '../.eslintrc-auto-import.json',
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: '../components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@k8s-ui/components': path.resolve(__dirname, '../packages/components'),
    },
  },
})
