import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './style/style.styl'
import animated from 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCoffee, faHome, faDumbbell, faInfoCircle, faStopwatch } from '@fortawesome/free-solid-svg-icons'
library.add(faCoffee, faHome, faDumbbell, faInfoCircle, faStopwatch)

// 註冊元件
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(animated)
Vue.config.productionTip = false
AOS.init()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
