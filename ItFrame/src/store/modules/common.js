import app from '../../main'
import i18n from '../../lang/lang'
import axiosApi from '../../axiosApi'

// initial state
const state = {
  languages: [
    { code: 'en', name: 'English' },
    { code: 'hy', name: 'Հայերեն' }
  ],
  roles: []
}

// getters
const getters = {
  getRoles: (state) => {
    return state.roles
  },
  getLanguages: (state) => {
    return state.languages
  }
}

// actions
const actions = {
  async setLang ({commit}, payload) {
    if (!payload) {
      payload = 'en'
    }
    let _i18n = i18n
    if (app) {
      _i18n = app.$i18n
    }
    const lang = localStorage.getItem('lang')
    if (payload !== lang) {
      localStorage.setItem('lang', payload)
    }
    if (payload in _i18n.messages) {
      commit('SET_LANG', payload)
    } else {
      try {
        // you can use fetch or import which ever you want.
        // Just make sure your webpack support import syntax
        // const res = await axios.get(`./src/lang/${payload}.json`)
        const res = await import(`../../lang/locale/${payload}.json`)

        _i18n.setLocaleMessage(payload, res)
        commit('SET_LANG', payload)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getRoles ({commit}, payload) {
    return axiosApi.get('/roles')
      .then(response => {
        commit('SET_ROLES', response.data)
        return {roles: response.data}
      })
      .catch(err => console.log(err))
  }
}

// mutations
const mutations = {
  SET_LANG (state, payload) {
    let _i18n = i18n
    if (app) {
      _i18n = app.$i18n
    }
    _i18n.locale = payload
  },
  SET_ROLES (state, payload) {
    state.roles = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
