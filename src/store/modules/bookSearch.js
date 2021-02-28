import { googleBooksApi } from '@/apis/googleBooksApi.js'

export default {
    state: {
        search: 'neuromancer',
        result: null
    },

    mutations: {
        setSearch(state, payload){
            state.search = payload.search
            state.result = payload.result
        },

        resetSearch(state, payload) {
            state.search = payload
        }
    },

    actions: {
        fetchBooks({ commit }, payload){
            googleBooksApi.get(`/volumes?q=${payload}`)
            .then(res => {
                console.log(res)
                const searchBooks = {
                    search: payload,
                    result: res.data
                }
                commit('setSearch', searchBooks)
            })
        }
    },
}
