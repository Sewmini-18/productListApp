<template>
  <div id="app">
     <navbar></navbar>
    <h1 id="title1">Add Product List</h1>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components:{
       'navbar':NavBar
   }
};
</script>

<style>
#title1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
