<template>
  <div id="app">
    <img src="./assets/logo.png">
    <NestRouter></NestRouter>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Hello from './components/Hello'
import Navigation from './components/navigation.vue'
import NestRouter from './components/nestRouter'
export default {
  name: 'app',
  components: {
    NestRouter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
