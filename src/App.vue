<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <page />
  </div>
</template>

<script>
import page from './components/Page.vue'

export default {
  name: 'App',
  components: {
    page
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
</style>
