<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloVueDC title="Hello VueDC!"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloVueDC from './components/HelloVueDC.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    HelloVueDC
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
