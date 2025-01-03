const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    proxy:{
      '/api':{
        target: 'http://v.juhe.cn',
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
})
