import { createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import { mount } from '@vue/test-utils'
import LoginForm from '@/components/forms/LoginForm.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('Home.vue', () => {
    let store
    let actions

    beforeEach(() => {
        actions = { userLogin: jest.fn() }

        let user = {
            state: {},
            actions: actions
        }

        store = new Vuex.Store({
            modules: { user }
        })
    })

    it('dispatches userLogin action when click on submit', () => {
        const wrapper = mount(LoginForm, { store, localVue })

        wrapper.find('button').trigger('click')
        expect(actions.userLogin).toHaveBeenCalled()
    })
})
