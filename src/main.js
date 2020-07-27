import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './style/style.styl'
import './style/timer.styl'
import animated from 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParticles from '../src/components/particle.vue'
// 環形倒數套件
import VueEllipseProgress from 'vue-ellipse-progress'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlay, faCoffee, faHome, faDumbbell, faInfoCircle, faStopwatch, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faFacebookSquare, faPinterestP, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faPlay, faCoffee, faHome, faDumbbell, faInfoCircle, faStopwatch, faEnvelope, faPhone, faMapMarkerAlt, faFacebookF, faFacebookSquare, faPinterestP, faInstagram, faTwitter, faYoutube)

// 註冊元件
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('VueParticles', VueParticles)
Vue.use(animated)
Vue.use(VueEllipseProgress, 'vep')
Vue.config.productionTip = false
AOS.init()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
