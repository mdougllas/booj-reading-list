import Vue from 'vue'
import Vuex from 'vuex'
import bookSearch from '@/store/modules/bookSearch.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      bookSearch
  }
})
