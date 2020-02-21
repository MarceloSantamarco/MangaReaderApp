<template>
  <div id="app">
    <Header/>
    <SignIn/>
  </div>
</template>

<script>
import Header from './components/Header'
import SignIn from './components/SignIn'

export default {
  name: 'App',
  components: {
    Header,
    SignIn
  }
}
</script>

<style>
</style>
