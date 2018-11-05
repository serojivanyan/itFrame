// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import i18n from './lang/lang'
import Vuetify from 'vuetify'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import App from './App.vue'
import router from './router'
import 'babel-polyfill'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'swiper/dist/css/swiper.css'

import colors from 'vuetify/es5/util/colors'
import VueToastr from '@deveodk/vue-toastr'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// If you would like custom styling of the toastr the css file can be replaced
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
Vue.use(VueToastr, {
  defaultPosition: 'toast-bottom-left',
  defaultType: 'info',
  defaultTimeout: 3000
})
Vue.use(Vuetify, {
  theme: {
    primary: colors.purple.base,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
})
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  store,
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
export default app
