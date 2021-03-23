import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faMedium, faCodepen, faCss3Alt, faVuejs, faNodeJs, faGit, faBootstrap, faJs, faHtml5, } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faGithub, faMedium, faCodepen, faCss3Alt, faVuejs, faNodeJs, faGit, faBootstrap, faJs, faHtml5,)



Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
