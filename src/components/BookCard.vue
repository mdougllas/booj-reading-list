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

        <b-button href="#" variant="primary" @click="addToList">Add to my list</b-button>
    </b-card>
</div>
</template>

<script>
export default {
    name: 'BookCard',
    props: ['title', 'image', 'info', 'pages'],

    methods: {
        addToList() {
            const data = {
                title: this.title,
                info: this.info,
                image: this.image ? this.image.thumbnail : 'https://picsum.photos/600/300/?image=25',
                pages: this.pages ? this.pages : 0
            }
        }
    }
}
</script>