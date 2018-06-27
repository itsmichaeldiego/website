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
    // c-button--green {
    &--green {
      color: $color-cta-primary;
      border-color: $color-cta-primary;
      &:hover {
        color: $color-font-secondary;
        background-color: $color-cta-primary;
      }
    }
    // c-button--grey {
    &--grey {
      color: $color-cta-secondary;
      border-color: $color-cta-secondary;
      margin-left: $half-spacing-unit;

      &:hover {
        color: $color-font-secondary;
        background-color: $color-cta-secondary;
      }
    }
  }
</style>
