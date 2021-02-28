<template>
    <b-modal id="modal-scrollable" size="xl" scrollable title="Book Title">
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                {{ googleId }}
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
        ...mapState(['bookDetails'])
    }
}
</script>