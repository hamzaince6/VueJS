<template>
  <div id="app">
    <Title :titleText="text" />
    <h1>Başlıkk Test</h1>
  </div>
</template>

<script>
import Title from './components/title.vue';

export default {
  name: 'App',
  components: {
    Title
  },
  data() {
    return {
      text:"Vue JS Components Title"
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
