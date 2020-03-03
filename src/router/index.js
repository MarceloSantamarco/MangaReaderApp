import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home'
import Mangas from '../Mangas'
import NewManga from '../NewManga'
import ShowManga from '../ShowManga'

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
    },
    {
      path: '/mangas/show',
      name: 'ShowManga',
      component: ShowManga
    }
  ]
})