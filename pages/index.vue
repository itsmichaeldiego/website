<template>
  <section>
    <fixed-header />
    <banner />
  </section>
</template>

<script>
  import Banner from '~/components/Banner.vue'
  import FixedHeader from '~/components/FixedHeader.vue'

  export default {
    components: {
      Banner,
      FixedHeader,
    }
  }
</script>
