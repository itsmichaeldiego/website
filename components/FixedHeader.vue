<template>
  <header class="c-header">
    <app-logo />
    <span class="c-header__title">Michael Diego</span>
  </header>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  export default {
    components: {
      AppLogo,
    }
  }
</script>

<style lang="scss">
  .c-header {
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: $half-spacing-unit;
    height: $header-height;
    background-color: $color-bg-main;
    color: $color-font-secondary;

    &__title {
      margin-left: $half-spacing-unit;
    }
  }
</style>
