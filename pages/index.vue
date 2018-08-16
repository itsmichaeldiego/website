<template>
  <section>
    <fixed-header />
    <banner />
    <icon type="github" />
  </section>
</template>

<script>
  import Icon from '~/components/Icon.vue'
  import Banner from '~/components/Banner.vue'
  import FixedHeader from '~/components/FixedHeader.vue'

  export default {
    components: {
      Icon,
      Banner,
      FixedHeader,
    }
  }
</script>
