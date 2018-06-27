<template>
  <a
    class="c-button"
    v-bind:class="type ? `c-button--${type}` : ''"
    v-bind:href="link"
    v-bind:alt="text"
    target="_blank"
  >
    {{text}}
  </a>
</template>

<script>
  export default {
    props: ['link', 'text', 'type'],
  }
</script>

<style lang="scss">
  .c-button {
    display: inline-flex;
    border-radius: $border-radius;
    border: 1px solid transparent;
    text-decoration: none;
    padding: 10px $base-spacing-unit;
    margin: $half-spacing-unit;
    // .c-button--main {
    &--main {
      color: $color-font-secondary;
      border-color: $color-bg-secondary;

      &:hover {
        color: $color-font-main;
        background-color: $color-bg-secondary;
      }
    }
    // .c-button--secondary {
    &--secondary {
      color: $color-cta-main;
      border-color: $color-cta-main;

      &:hover {
        color: $color-font-main;
        background-color: $color-cta-main;
      }
    }
  }
</style>
