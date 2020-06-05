import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Mangas from '../views/manga/Mangas'
import NewManga from '../views/manga/NewManga'
import EditManga from '../views/manga/EditManga'
import ShowManga from '../views/manga/ShowManga'
import MangaAdmin from '../views/manga/MangaAdmin'
import NewUser from '../views/user/NewUser'
import UserPassword from '../views/user/UserPassword'
import NewAuthor from '../views/authors/NewAuthor'
import NewChapter from '../views/chapters/NewChapter'
import ShowChapter from '../views/chapters/ShowChapter'

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
    },
    {
      path: '/chapters/show',
      name: 'ShowChapter',
      component: ShowChapter
    }
  ]
})