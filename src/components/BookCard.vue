<template>
<div>
    <b-card
        :title="title"
        :img-src="`${ image ? image.thumbnail : 'https://picsum.photos/600/300/?image=25'}`"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
        <b-card-text>
            {{ info }}
        </b-card-text>

        <b-card-text class="font-weight-bold">
            Number of pages: {{ pages }}
        </b-card-text>

        <b-button :variant="variant" @click="buttonClicked">{{ buttonText }}</b-button>
        <b-button v-b-modal.modal-scrollable class="mt-3" v-if="buttonType === 2" variant="outline-primary" @click="showDetails">Show Details</b-button>
    </b-card>

</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'BookCard',
    props: ['title', 'image', 'info', 'pages', 'bookId', 'userId', 'googleId', 'buttonType'],

    data() {
        return {
            buttonText: this.buttonType === 1 ? "Add to my list" : "Remove from my list",
            variant: this.buttonType === 1 ? 'primary' : 'danger',
            inserted: false
        }
    },

    methods: {
        buttonClicked() {
            if(this.inserted) return

            if(this.buttonType === 1){
                const data = {
                    title: this.title,
                    info: this.info,
                    image: this.image ? this.image.thumbnail : 'https://picsum.photos/600/300/?image=25',
                    pages: this.pages ? this.pages : 0,
                    google_id: this.bookId,
                    user_id: this.userId
                }

                const payload = {
                    data: data,
                    token: this.user.token
                }

                this.$store.dispatch('insertBook', payload)

                this.inserted = true
                this.buttonText = "Book added to your list"
                this.variant = 'success'
            } else {
                const payload = {
                    id: this.bookId,
                    token: this.user.token
                }

                this.$store.dispatch('removeBook', payload)
            }
        },

        showDetails() {
            this.$emit('emitGoogleId', this.googleId)
        }
    },

    computed: {
        ...mapState(['user']),
    }
}
</script>