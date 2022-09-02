// 引入 Vue
import Vue from 'vue'

// 引入 App
import App from './App.vue'

// 關掉 Vue 的生產提示
Vue.config.productionTip = false


// 創建 Vue
new Vue({
    el: '#app',
    render: h => h(App)
})