const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    // host: '192.168.14.107'
    disableHostCheck: true
  }
})
