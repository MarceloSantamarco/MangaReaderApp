<template>
  <div id="app">
    <Header/>
    <div class="container">
      <h4>Read your favorite mangas here with us!</h4>
      <SignIn/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import SignIn from './components/SignIn'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    SignIn,
    Footer
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
