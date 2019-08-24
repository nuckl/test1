import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
Vue.prototype.$axios = axios;

// 封装全局自定义指令
Vue.directive("clj", {
  // bind(el,参数1，参数2)
  bind(el, binding, vnode) {
    if (binding.value == 'kl') {
      el.style.maxWidth = '1000px';
    }
  }
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')