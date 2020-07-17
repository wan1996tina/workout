import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    viewWidth: 96
  },
  mutations: {
    changeWidth (state, data) {
      state.viewWidth = data
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getWidth (state) {
      return state.viewWidth
    }
  }
})
