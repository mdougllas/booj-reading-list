import { bookListApi } from '@/apis/bookListApi.js'

export default {
    state: {
        userBooks: []
    },

    mutations: {
        setUserBooks(state, payload){
            state.userBooks = payload.userBooks
        },

        resetUserBooks(state) {
            state.userBooks = null
        }
    },

    actions: {
        insertBook({ commit }, payload){
            data = {

            }

            bookListApi.post('/books', {
                headers: { 'Authorization': `Bearer ${ payload }` },
                data: data
            })
        },

        fetchUserBooks({ commit }, payload){
            bookListApi.get('/books', {
                headers: { 'Authorization': `Bearer ${ payload }` }
            })
            .then(res => {
                console.log(res.data)
            })

            // googleBooksApi.get(`/volumes?q=${payload}`)
            // .then(res => {
            //     console.log(res)
            //     const searchBooks = {
            //         search: payload,
            //         result: res.data
            //     }
            //     commit('setSearch', searchBooks)
            // })
        }
    },
}
