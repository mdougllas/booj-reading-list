import { googleBooksApi } from '@/apis/googleBooksApi.js'

export default {
    state: {
        search: 'neuromancer',
        result: null,
        bookDetails: null
    },

    mutations: {
        setSearch(state, payload){
            state.search = payload.search
            state.result = payload.result
        },

        resetSearch(state) {
            state.search = null
        },

        setBookDetails(state, payload) {
            state.bookDetails = payload
        },

        resetBookDetails(state) {
            state.bookDetails = null
        }
    },

    actions: {
        fetchBooks({ commit }, payload){
            googleBooksApi.get(`/volumes?q=${ payload }`)
            .then(res => {
                const searchBooks = {
                    search: payload,
                    result: res.data
                }
                commit('setSearch', searchBooks)
            })
        },

        fetchBookDetails({ commit }, payload){
            googleBooksApi.get(`/volumes/${ payload }`)
            .then(res => {
                commit('setBookDetails', res.data.volumeInfo)
            })
        }
    },
}
