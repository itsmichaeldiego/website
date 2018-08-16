<template>
  <section>
    <fixed-header />
    <banner />
    <social />
  </section>
</template>

<script>
  import Banner from '~/components/Banner.vue'
  import Social from '~/components/Social.vue'
  import FixedHeader from '~/components/FixedHeader.vue'

  export default {
    components: {
      Banner,
      Social,
      FixedHeader,
    }
  }
</script>
