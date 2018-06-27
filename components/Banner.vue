<template>
  <div class="c-banner">
    <h1 class="c-banner__title">
      Frontend Developer
    </h1>
    <h2 class="c-banner__subtitle">
      I code beautifully simple things, and I love what I do.
    </h2>
    <app-logo />
    <div class="c-banner__links">
      <a
        href="https://itsmichaeldiego.github.io/csscv/"
        target="_blank"
        class="c-button c-button--green">Curriculum Vitae</a>
      <a
        href="https://github.com/itsmichaeldiego/"
        target="_blank"
        class="c-button c-button--grey">GitHub</a>
    </div>
  </div>
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
  .c-banner {
    min-height: 100vh;
    padding-top: #{$header-height};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: $color-font-main;

    // c-banner__title {
    &__title {
      font-size: 2rem;
      letter-spacing: 1px;
      padding-bottom: $half-spacing-unit;
    }
    // c-banner__subtitle {
    &__subtitle {
      font-size: 1.25rem;
      font-weight: 300;
      padding-bottom: $half-spacing-unit;
    }
    // c-banner__links {
    &__links {
      padding-top: $half-spacing-unit;
    }
  }
</style>
