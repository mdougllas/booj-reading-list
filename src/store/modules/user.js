import { bookListApi } from '../../apis/bookListApi'
import router from '@/router/index.js'

export default {
    state: {
        name: null,
        email: null,
    },

    getters: {
        currentToken: state => state.token
    },

    mutations: {
        setName(state, payload){
            state.name = payload
        },

        setEmail(state, payload){
            state.email = payload
        },

        setToken(state, payload){
            state.token = payload
        },

        resetUser(state) {
            state = {
                name: null,
                email: null,
                token: null
            }
        }
    },

    actions: {
        userLogin({ commit }, payload){
            const data = {
                email: payload.email,
                password: payload.password
            }

            bookListApi.post('/login', data)
            .then(res => {
                const { name, email } = res.data.user
                const token = res.data.access_token

                if(token){
                    commit('setName', name)
                    commit('setEmail', email)
                    commit('setToken', token)

                    router.push('book-list')
                }
            })
        },

        userRegister({ commit }, payload){
            const data = {
                name: payload.name,
                email: payload.email,
                password: payload.password,
                password_confirmation: payload.passwordConfirmation
            }

            bookListApi.post('/register', data)
            .then(res => {
                const { name, email } = res.data.user
                const token = res.data.access_token

                if(token){
                    commit('setName', name)
                    commit('setEmail', email)
                    commit('setToken', token)

                    router.push('book-list')
                }
            })
        }
    },
}
