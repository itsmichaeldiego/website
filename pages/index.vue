<template>
  <section>
    <fixed-header />
    <div class="container">
      <app-logo />
      <h1 class="title">
        itsmichaeldiego
      </h1>
      <h2 class="subtitle">
        Michael Diego's website
      </h2>
      <div class="links">
        <a
          href="https://itsmichaeldiego.github.io/csscv/"
          target="_blank"
          class="button--green">Curriculum Vitae</a>
        <a
          href="https://github.com/itsmichaeldiego/"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import FixedHeader from '~/components/FixedHeader.vue'

export default {
  components: {
    AppLogo,
    FixedHeader,
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
