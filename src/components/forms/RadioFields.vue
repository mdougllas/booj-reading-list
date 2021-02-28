<template>
  <div>
    <b-form-radio-group
        v-model="value"
        :options="options"
        name="radio-validation"
    />
  </div>
</template>

<script>
    export default {
        name: 'RadioFields',

        data() {
            return {
                value: null,
                options: [
                    { text: 'Reverse List', value: 'reverse' },
                    { text: 'Order by title', value: 'title' },
                    { text: 'Order by number of pages', value: 'pages' }
                ]
            }
        },

        updated() {
            switch(this.value){
                case 'reverse':
                    this.$store.commit('reverseUserBooks')
                break

                case 'title':
                    this.$store.commit('orderUserBooksByTitle')
                break

                case 'pages':
                    this.$store.commit('orderUserBooksByNumberOfPages')
                break

                default: return
            }
        }
    }
</script>