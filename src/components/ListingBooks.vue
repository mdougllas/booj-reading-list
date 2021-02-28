<template>
<div class="d-flex flex-wrap justify-content-around">
    <div v-for="book in books" :key="book.id" class="mx-2 my-4">
        <BookCard :title="book.volumeInfo.title" :image="book.volumeInfo.imageLinks" :info="`${book.searchInfo ? book.searchInfo.textSnippet : 'No info for this title'}`" :pages="book.volumeInfo.pageCount" />
    </div>
</div>
</template>

<script>
import BookCard from '@/components/BookCard.vue'
import { mapState } from 'vuex'

export default {
    name: 'ListingBooks',
    props: ['books'],

    components: {
        BookCard
    },

    data() {
        return {
            searchField: null,
        }
    }
}
</script>