import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './config/store'
import firebase from 'firebase'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false

const fbConfig = {
  //configs
}

firebase.initializeApp(fbConfig)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
