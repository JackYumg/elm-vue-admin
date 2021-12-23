import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  mode: 'dev',
  base: '/',
  plugins: [
    vue(),
    vuejsx({
      transformOn: true,
    }),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    }),
  ],
  json: {
    namedExports: true
  },
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      '@pages': resolve(__dirname, './src/pages'),
      '@components': resolve(__dirname, './src/components'),
      '@core': resolve(__dirname , './src/core'),
      '@types': resolve(__dirname , './src/@core'),
      '@apis': resolve(__dirname , './src/apis'),
      '@router': resolve(__dirname , './src/router'),
      '@store': resolve(__dirname , './src/store'),
      '@utils': resolve(__dirname , './src/@utils'),
      '@assets': resolve(__dirname , './src/assets'),
      '@gql': resolve(__dirname , './src/gql')
    }
  },
  assetsInclude:'./src/assets/*', 
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  server: {
    hmr: true,
    watch: {

    },
  },
  build: {
    assetsDir: 'assets',
    assetsInlineLimit: 10 * 1024, // 静态文件，小于该值打包成base64单位kb
    sourcemap: false
  },
})
