<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>Only a test</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { bookListApi } from '@/apis/bookListApi.js'
import { googleBooksApi } from '@/apis/googleBooksApi.js'

export default {
  name: 'Home',

  components: {
    HelloWorld
  },

  methods: {
      testApi() {
          bookListApi.get('/books')
          .then(res => console.log("My own api", res.data))

          googleBooksApi.get('/volumes?q=neuromancer')
          .then(res => console.log("Google API", res.data))
      }
  },

  mounted() {
      this.testApi()
  }
}
</script>
