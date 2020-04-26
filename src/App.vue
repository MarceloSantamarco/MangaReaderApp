<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <Header/>
    <div class="body">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/template/Header'
import Footer from './components/template/Footer'
import {userKey} from '@/global'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    this.validateToken();
  },
  methods: {
    validateToken(){
      const userData = JSON.parse(localStorage.getItem(userKey))
      
      if(userData){
        this.$store.commit('setUser', userData['user'])
      }
    }
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
.body{
  width:100%;
}
</style>
