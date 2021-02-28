<template>
    <div class="home">
        <div>
            <b-jumbotron header="My Book List" lead="A book library that fits in your pocket.">
                <div>
                    <b-tabs content-class="mt-3" align="center">
                        <b-tab title="Register">
                            <RegisterForm />
                        </b-tab>
                        <b-tab title="Login" active>
                            <LoginForm />
                        </b-tab>
                    </b-tabs>
                </div>
            </b-jumbotron>
        </div>
    </div>
</template>

<script>
import RegisterForm from '@/components/forms/RegisterForm.vue'
import LoginForm from '@/components/forms/LoginForm.vue'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Home',

    components: {
        LoginForm,
        RegisterForm
    },

    computed: {
        ...mapState(['user'])
    },

    beforeMount() {
        if(this.user.token){
            this.$router.push('book-list')
        }
    },

    methods: {
        testApi() {
            // bookListApi.get('/books')
            // .then(res => console.log("My own api", res.data))

            this.$store.dispatch('fetchBooks', 'Harry Potter')
        }
    },

    mounted() {
        this.testApi()
    }
}
</script>
