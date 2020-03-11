import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './userInfo'
import global from './global'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInfo,
    global
  }
})
