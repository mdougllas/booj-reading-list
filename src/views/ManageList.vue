<template>
    <div class="home">
        <div>
            <b-jumbotron header="Book Library" :lead="`${ user.name }, this is your book list.`">
                <div>
                    <b-button variant="primary" @click="goBack">Go back to search</b-button>
                </div>
                <RadioFields class="mt-5" />
                <div class="mt-4">
                    <ListingBooks :books="books" :buttonType="2" />
                </div>
            </b-jumbotron>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ListingBooks from '@/components/ListingBooks.vue'
import RadioFields from '@/components/forms/RadioFields.vue'

export default {
    name: 'ManageList',

    components: {
        ListingBooks,
        RadioFields
    },

    methods: {
        goBack() {
            this.$router.push('book-list')
        }
    },

    computed: {
        ...mapState(['user']),
        ...mapState({ books: state => state.userBooks.books }),
    },

    beforeMount() {
        if(!this.user.token){
            this.$router.push('/')
        }
    },

    created() {
        if(this.user.token){
            this.$store.dispatch('fetchUserBooks', this.user.token)
        }
    }
}
</script>