import { bookListApi } from '@/apis/bookListApi.js'

export default {
    state: {
        books: []
    },

    mutations: {
        setUserBooks(state, payload){
            state.books = payload
        },

        addUserBook(state, payload){
            state.books = [...state.books, payload]
        },

        removeUserBook(state, payload){
            state.books = state.books.filter(e => e.id !== payload)
        },

        resetUserBooks(state) {
            state.books = null
        }
    },

    actions: {
        insertBook({ commit }, payload){
            bookListApi.post('/books', payload.data, {
                headers: { 'Authorization': `Bearer ${ payload.token }` }
            })
            .then(res => {
                const { title, info, image, pages, id, google_id } = res.data
                const payload = { title, info, pages, id, googleId: google_id, image: {thumbnail: image} }

                commit('addUserBook', payload)
            })
        },

        removeBook({ commit }, payload){
            bookListApi.delete(`/books/${payload.id}`, {
                headers: { 'Authorization': `Bearer ${ payload.token }` }
            })
            .then(() => {
                commit('removeUserBook', payload.id)
            })
        },

        fetchUserBooks({ commit }, payload){
            bookListApi.get('/books', {
                headers: { 'Authorization': `Bearer ${ payload }` }
            })
            .then(res => {
                const payload = res.data.map(e => {
                    const { title, info, image, pages, id, google_id } = e
                    return { title, info, pages, id, googleId: google_id, image: {thumbnail: image}}
                })
                commit('setUserBooks', payload)
            })
        }
    },
}
