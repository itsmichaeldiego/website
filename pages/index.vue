<template>
  <section>
    <fixed-header />
    <banner />
    <social />
  </section>
</template>

<script>
  import Social from '~/components/Social.vue'
  import Banner from '~/components/Banner.vue'
  import FixedHeader from '~/components/FixedHeader.vue'

  export default {
    components: {
      Social,
      Banner,
      FixedHeader,
    }
  }
</script>
