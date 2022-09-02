const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Vue 會將語法檢查的時候把不規範的代碼，當成了錯誤。
  // 解決辦法: 就是在 vue.config.js 中加上 lintOnSave: false
  // 原文網址: https://www.cnblogs.com/lqy-blogs/p/15912815.html
  lintOnSave: false
})
