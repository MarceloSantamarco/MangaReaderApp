<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import M from 'materialize-css/dist/js/materialize.js'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    document.addEventListener('DOMContentLoaded', function() {
      M.AutoInit();
      M.Slider.init(document.querySelectorAll('.slider'), {indicators: false, height: 500, duration: 200});
      M.Carousel.init(document.querySelectorAll('.carousel'));
      M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
    });
  }
}
</script>

<style>
#app {
  background-color: #063e58;
}
.container {
  text-align: center;
  color: white;
}
</style>
