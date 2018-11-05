import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import VueJwtDecode from 'vue-jwt-decode'

Vue.use(VueRouter)

const Router = new VueRouter({
  mode: 'history',
  fallback: false,
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage,
      meta: {
        isAuthenticated: true,
        rolePermissions: ['users']
      }
    }
  ]
})
Router.beforeEach((to, from, next) => {
  if (to.meta.isAuthenticated) {
    let userPermissions = decodeJwtToken()
    if (userPermissions) {
      let accepted = to.meta.rolePermissions.every((a) => {
        if (userPermissions.indexOf(a) > -1) {
          return true
        }
      })
      if (accepted) {
        next()
      } else {
        next('/')
      }
    } else {
      next('/')
    }
  } else {
    next()
  }
})
function decodeJwtToken () {
  let token = sessionStorage.getItem('token')
  if (token) {
    return VueJwtDecode.decode(token).permissions
  }
}
export default Router
