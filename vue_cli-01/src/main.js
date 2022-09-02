// main.js 文件是整個項目的入口文件。

// 引入 Vue。
import Vue from 'vue'

// 引入 App 組件，他是所有組件的父組件。
import App from './App.vue'

// 關閉 Vue 的生產提示。
Vue.config.productionTip = false

// 關於不同版本的 Vue:
//   1. Vue.js 與 vue.runtime.xxx.js 的區別:
//     (1). vus.js 是完整的 Vue，包含: 核心功能 + 模板解析器。
//     (2). vue.runtime.xxx.js 是運行版的 Vue, 只包含: 核心功能，沒有模板解析器。

//   2. 因為 vue.runtime.xxx.js 沒有模板解析器，所以不能使用 template 配置項，需要使用
//     render() 函數接收到的 createElement 函數去指定具體的內容。

// 創建 Vue 的實例對象。
new Vue({
  el: '#app', // 等於 .$mount('#app')
  // 下面這一行代碼一會解釋，完成了這個功能: 將 App 組件放入到容器中。
  render: h => h(App),
})// .$mount('#app')

