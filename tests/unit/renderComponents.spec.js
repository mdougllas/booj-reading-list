import { createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Home.vue', () => {
    it('renders login and register components', () => {
        const wrapper = shallowMount(Home, {localVue, computed: { user: () => false } })

        const login = wrapper.findComponent({ name: 'LoginForm' })
        expect(login.exists()).toBe(true)

        const register = wrapper.findComponent({ name: 'RegisterForm'})
        expect(register.exists()).toBe(true)
    })
})
