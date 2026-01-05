import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@k8s-ui/components': path.resolve(__dirname, '../packages/components'),
        },
    },
})
