import Vue from 'vue'
import App from './App.vue'
// 引入混和
import {mixin, mixin2} from './mixin'

Vue.config.productionTip = false

// 全局混和
// Vue.mixin(mixin)
// Vue.mixin(mixin2)


new Vue({
    el: '#app',
    render: h => h(App)
})
