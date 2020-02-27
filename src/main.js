import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
