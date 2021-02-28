<template>
    <div class="home">
        <div>
            <b-jumbotron header="Book List Management" :lead="`${ user.name }, this is your book list.`">
                <div>
                    <b-button href="#" variant="primary" @click="goBack">Go back to search</b-button>
                </div>
                <div class="mt-4">
                    <ListingBooks :books="books" />
                </div>
            </b-jumbotron>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ListingBooks from '@/components/ListingBooks.vue'

export default {
    name: 'ManageList',

    components: {
        ListingBooks
    },

    methods: {
        goBack() {
            this.$router.push('book-list')
        }
    },

    computed: {
        ...mapState(['user']),
        ...mapState({ books: state => state.bookSearch.result ? state.bookSearch.result.items : [] })
    },

    beforeMount() {
        if(!this.user.token){
            this.$router.push('/')
        }
    }
}
</script>