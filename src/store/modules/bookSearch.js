import { googleBooksApi } from '@/apis/googleBooksApi.js'

export default {
    state: {
        search: 'neuromancer',
        result: null
    },
    mutations: {
        setSearch({ search, result }, payload){
            search = payload.search
            result = payload.result
        },

        resetSearch({ search }, payload) {
            search = payload
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
