import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home'
import Mangas from '../manga/Mangas'
import NewManga from '../manga/NewManga'
import EditManga from '../manga/EditManga'
import ShowManga from '../manga/ShowManga'
import MangaAdmin from '../manga/MangaAdmin'
import NewUser from '../user/NewUser'
import UserPassword from '../user/UserPassword'
import NewAuthor from '../authors/NewAuthor'
import NewChapter from '../chapters/NewChapter'

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
      path: '/mangas/edit',
      name: 'EditManga',
      component: EditManga
    },
    {
      path: '/mangas/show',
      name: 'ShowManga',
      component: ShowManga
    },
    {
      path: '/mangas/admin',
      name: 'MangaAdmin',
      component: MangaAdmin
    },
    {
      path: '/users/new',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/users/password',
      name: 'UserPassword',
      component: UserPassword
    },
    {
      path: '/authors/new',
      name: 'NewAuthor',
      component: NewAuthor
    },
    {
      path: '/chapters/new',
      name: 'NewChapter',
      component: NewChapter
    }
  ]
})