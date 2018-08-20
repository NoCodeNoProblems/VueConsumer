<template>
  <div id="app">

    <Nav msg="Welcome to Your Vue.js App"/>
    <NavVertical></NavVertical>

  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import NavVertical from './components/NavVertical.vue'
export default {
  name: 'app',
  components: {
    Nav,
    NavVertical
  }
}
</script>

<style>
/* import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
