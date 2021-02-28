<template>
    <b-row class="d-flex justify-content-center mt-4">
        <b-col sm="12" xl="6">
            <b-form-group
                class="text-center"
                label="Search books"
                label-for="input-1"
            >
                <b-form-input
                    v-model="searchTerm"
                    type="email"
                    placeholder="Title, Author, Categorie..."
                    required
                ></b-form-input>
            </b-form-group>

            <b-button
                type="submit"
                variant="primary"
                class="mt-4"
                @click="onSubmit"
            >Get Books</b-button>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'SearchField',
    data() {
        return {
            searchTerm: null
        }
    },

    methods: {
        onSubmit() {
            console.log(this.searchTerm)
        }
    }
}
</script>