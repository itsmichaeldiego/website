<template>
  <div class="c-social">
    <a target="_blank"
      class="c-social__link"
      href="https://github.com/itsmichaeldiego/"
    >
      <icon width="35px" type="github" />
    </a>
    <a target="_blank"
      class="c-social__link"
      href="https://www.linkedin.com/in/itsmichaeldiego/"
    >
      <icon width="35px" type="linkedin" />
    </a>
    <a target="_blank"
      class="c-social__link"
      href="https://twitter.com/itsmichaeldiego"
    >
      <icon width="35px" type="twitter" />
    </a>
    <a
      class="c-social__link"
      href="mailto:itsmichaeldiego@gmail.com"
    >
      <icon width="35px" type="envelop" />
    </a>
  </div>
</template>

<script>
  import Icon from '~/components/Icon.vue'
  export default {
    components: {
      Icon,
    }
  }
</script>

<style lang="scss">
  .c-social {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
    // .c-social__link
    &__link {
      margin: 0 30px;
      text-decoration: none;
      color: $color-cta-secondary;
    }
  }
</style>
