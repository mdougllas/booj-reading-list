import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user.js'
import bookSearch from '@/store/modules/bookSearch.js'
import userBooks from '@/store/modules/userBooks.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        bookSearch,
        userBooks
    }
})
