import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterViewVue from '../views/RegisterView.vue'
import LogoutViewVue from '../views/LogoutView.vue'
import TeamViewVue from '../views/TeamView.vue'
import { auth } from '../main'
import FactViewVue from '../views/FactView.vue'
import BirthdayViewVue from '../views/BirthdayView.vue'
import FavoriteViewVue from '../views/FavoriteView.vue'
import RandomViewVue from '../views/RandomView.vue'
import HoroscopeViewVue from '../views/HoroscopeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamViewVue
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterViewVue,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutViewVue,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/fact',
      name: 'fact',
      component: FactViewVue,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/birthday',
      name: 'birthday',
      component: BirthdayViewVue,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoriteViewVue,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/random',
      name: 'random',
      component: RandomViewVue,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/horoscope',
      name: 'horoscope',
      component: HoroscopeViewVue,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router
