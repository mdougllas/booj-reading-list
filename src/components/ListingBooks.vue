<template>
<div class="d-flex flex-wrap justify-content-around">
    <div v-for="book in books" :key="book.id" class="mx-2 my-4">
        <BookCard
            v-if="buttonType === 1"
            :title="book.volumeInfo.title"
            :image="book.volumeInfo.imageLinks"
            :info="`${book.searchInfo ? book.searchInfo.textSnippet : 'No info for this title'}`"
            :pages="book.volumeInfo.pageCount"
            :userId="user.id"
            :bookId="book.id"
            :buttonType="buttonType"
        />
        <BookCard
            v-if="buttonType === 2"
            :title="book.title"
            :image="book.image"
            :info="book.info"
            :pages="book.pages"
            :userId="user.id"
            :bookId="book.id"
            :googleId="book.googleId"
            :buttonType="buttonType"
            @emitGoogleId="getGoogleId"
        />
    </div>
    <Modal :googleId="id" />
</div>
</template>

<script>
import BookCard from '@/components/BookCard.vue'
import Modal from '@/components/Modal.vue'
import { mapState } from 'vuex'

export default {
    name: 'ListingBooks',
    props: ['books', 'buttonType'],

    components: {
        BookCard,
        Modal
    },

    data() {
        return {
            searchField: null,
            id: null
        }
    },

    methods: {
        getGoogleId(id) {
            this.id = id
        }
    },

    computed: {
        ...mapState(['user'])
    }
}
</script>