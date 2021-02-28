<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['user'])
    },

    beforeMount() {
        if(!this.user.token){
            this.$router.push('/')
        }
    }
}
</script>