import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mangas from '@/components/Mangas'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mangas',
      name: 'Mangas',
      component: Mangas
    }
  ]
})