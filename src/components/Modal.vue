<template>
    <b-modal id="modal-scrollable" size="xl" scrollable :title="bookDetails ? bookDetails.title : 'Title not found'">
        <b-card :img-src="`${bookDetails ? bookDetails.imageLinks.thumbnail : 'https://placekitten.com/300/300'}`" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                <b-row>
                    <b-col v-if="bookDetails">
                        <div>
                            <h3>Authors:</h3>
                            <ul v-for="(author, index) in bookDetails.authors" :key="index">
                                <li>{{ author }}</li>
                            </ul>
                        </div>
                    </b-col>
                    <b-col v-if="bookDetails">
                        <h3>Average Rating:</h3>
                        {{ bookDetails.averageRating }}
                    </b-col>
                    <b-col v-if="bookDetails">
                        <h3>Preview Book</h3>
                            <b-button :href="bookDetails.previewLink" target="_blank" size="lg">
                                See book preview
                            </b-button>
                    </b-col>
                </b-row>
            </b-card-text>
        </b-card>
    </b-modal>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Modal',
    props: ['googleId'],

    watch: {
        googleId(val){
            this.$store.dispatch('fetchBookDetails', val)
        }
    },

    computed: {
        ...mapState({ bookDetails: state => state.bookSearch.bookDetails })
    }
}
</script>