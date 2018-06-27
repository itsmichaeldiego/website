<template>
  <div class="c-banner">
    <h1 class="c-banner__title">
      Michael Diego is an enthutiastic Frontend Developer,
      <br/>
      working in digital projects for all over the world.
    </h1>
    <div class="c-banner__links">
      <custom-button
        link="https://itsmichaeldiego.github.io/csscv/"
        text="Curriculum Vitae"
        type="secondary"
      />
      <custom-button
        link="https://github.com/itsmichaeldiego/"
        text="Github"
        type="main"
      />
    </div>
  </div>
</template>

<script>
  import CustomButton from '~/components/CustomButton.vue'
  export default {
    components: {
      CustomButton,
    }
  }
</script>

<style lang="scss">
  .c-banner {
    min-height: 100vh;
    padding: $base-spacing-unit;
    padding-top: $header-height;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: $color-font-secondary;
    background-color: $color-bg-main;
    // c-banner__title {
    &__title {
      font-size: 2.5rem;
      font-weight: 600;
      letter-spacing: 1px;
      padding-bottom: $half-spacing-unit;
    }
    // c-banner__links {
    &__links {
      padding-top: $half-spacing-unit;
    }
  }
</style>
