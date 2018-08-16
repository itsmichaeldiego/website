<template>
  <span
    v-bind:class="`icon-${type}`"
  ></span>
</template>

<script>
  export default {
    props: ['type'],
  }
</script>
