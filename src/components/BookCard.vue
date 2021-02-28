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

        <b-button href="#" :variant="variant" @click="onClick">{{ buttonText }}</b-button>
    </b-card>
</div>
</template>

<script>
export default {
    name: 'BookCard',
    props: ['title', 'image', 'info', 'pages', 'buttonType'],

    data() {
        return {
            buttonText: this.buttonType === 1 ? "Add to my list" : "Remove from my list",
            variant: this.buttonType === 1 ? 'primary' : 'danger'
        }
    },

    methods: {
        onClick() {
            if(this.buttonType === 1){
                const data = {
                    title: this.title,
                    info: this.info,
                    image: this.image ? this.image.thumbnail : 'https://picsum.photos/600/300/?image=25',
                    pages: this.pages ? this.pages : 0
                }
            }
        }
    }
}
</script>