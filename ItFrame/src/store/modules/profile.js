import axiosApi from '../../axiosApi'

// initial state
const state = {
  userData: {}
}

// getters
const getters = {
  getUserData: (state) => {
    return state.userData
  }
}

// actions
const actions = {
  updateUser ({commit, state}, payload) {
    return axiosApi.put(`/users/${payload.id}`, payload)
      .then(response => {
        commit('setUserData', response.data)
        return {user: response.data}
      })
      .catch(e => {
        console.log(e)
      })
  },
  uploadProfilePicture ({commit, state}, payload) {
    return axiosApi.post(`/profile/upload`, payload)
      .then(response => {
        commit('setUserData', response.data)
        return {user: response.data}
      })
      .catch(err => console.log(err))
  },
  storeProduct ({commit, state}, payload) {
    return axiosApi.post(`/product/store`, {
      data: JSON.stringify(payload)
    })
      .then(response => {
        commit('setProductData', response.data.product)
        if (payload.imageFile) {
          axiosApi.post(`/product/uploadImage/${response.data.product.id}`, payload.imageFile)
            .then(res => {
              if (res.data.image) {
                response.data.product.image = res.data.image
                commit('setProductImage', res.data.image)
              }
            })
        }
        return {product: response.data.product}
      })
      .catch(e => {
        console.log(e)
      })
  },
  sendInvitationToFriend ({commit, state}, payload) {
    return axiosApi.post('/email/sendInvitation', {
      data: JSON.stringify(payload)
    }).then(response => {
      console.log(true)
    }).catch(err => {
      console.log(err)
    })
  },
  getUserFriends ({commit, state}, payload) {
    return axiosApi.get('/user/friends').then(response => {
      commit('setUserFriends', response.data)
    }).catch(err => {
      console.log(err)
    })
  }
}

// mutations
const mutations = {
  setUserData (state, user) {
    state.userData = user
  },
  setProductData (state, product) {
    state.productData = product
  },
  setProductImage (state, image) {
    state.productData.image = image
  },
  setUserFriends (state, friends) {
    state.userData.friends = friends
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
