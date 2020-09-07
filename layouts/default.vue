<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}

</script>

<template>
  <div class="container mx-auto p-6">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
