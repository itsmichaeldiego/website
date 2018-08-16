<template>
  <span
    v-bind:class="`icon-${type}`"
    v-bind:style="{ fontSize: width }"
  ></span>
</template>

<script>
  export default {
    props: ['type', 'width'],
  }
</script>
