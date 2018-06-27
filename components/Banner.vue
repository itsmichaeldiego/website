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
      <custom-button
        link="https://itsmichaeldiego.github.io/csscv/"
        text="Curriculum Vitae"
        type="green"
      />
      <custom-button
        link="https://github.com/itsmichaeldiego/"
        text="Github"
        type="grey"
      />
    </div>
  </div>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import CustomButton from '~/components/CustomButton.vue'

  export default {
    components: {
      AppLogo,
      CustomButton,
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
      font-weight: 600;
      letter-spacing: 1px;
      padding-bottom: $half-spacing-unit;
    }
    // c-banner__subtitle {
    &__subtitle {
      font-size: 1.25rem;
      font-weight: 400;
      padding-bottom: $half-spacing-unit;
    }
    // c-banner__links {
    &__links {
      padding-top: $half-spacing-unit;
    }
  }
</style>
