import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home'
import Mangas from '../Mangas'
import NewManga from '../NewManga'

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
    },
    {
      path: '/mangas/new',
      name: 'NewManga',
      component: NewManga
    }
  ]
})