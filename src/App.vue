<template>
  <div id="app">
    <Header/>
    <div class="container">
      <h4>Read your favorite mangas here with us!</h4>
      <div class="row center">
        <div class="col s4"></div>
        <div class="col s4">
          <SignIn/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import SignIn from './components/SignIn'
import Footer from './components/Footer'
import M from 'materialize-css/dist/js/materialize.js'

export default {
  name: 'App',
  components: {
    Header,
    SignIn,
    Footer
  },
  mounted(){
    M.AutoInit();
    document.addEventListener('DOMContentLoaded', function() {
      M.Slider.init(document.querySelectorAll('.slider'), {indicators: false, height: 500, duration: 200});
    });
    document.addEventListener('DOMContentLoaded', function() {
      M.Carousel.init(document.querySelectorAll('.carousel'));
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
