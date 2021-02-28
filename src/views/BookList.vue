<template>
    <div class="home">
        <div>
            <b-jumbotron :header="`Welcome ${ user.name }`" lead="Now you can manage your list.">
                <div>
                    <b-button variant="primary" @click="goManage">Manage my list</b-button>
                </div>
                <div>
                    <SearchField />
                </div>
                <div class="mt-4">
                    <listing-books :books="books" :buttonType="1" />
                </div>
            </b-jumbotron>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchField from '@/components/forms/SearchField.vue'
import ListingBooks from '@/components/ListingBooks.vue'

export default {
    components: {
        SearchField,
        ListingBooks
    },

    methods: {
        goManage() {
            this.$router.push('manage-list')
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