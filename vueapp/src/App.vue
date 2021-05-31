<template>
  <div id="app">
    <div id="id1">
      <navbar></navbar>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components:{
    'navbar': Navbar
  }
}
</script>

<style>



a {
  color: #42b983;
}
</style>
