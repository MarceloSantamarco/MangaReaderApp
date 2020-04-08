<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo left"><router-link to='/'><img src='#' alt='Logo'></router-link></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/mangas">Mangas</router-link></li>
                <li><router-link to="/mangas/new">Contribute</router-link></li>
                <li v-if='this.$store.state.user' @click='logout'><a href='#'>Logout</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
    name: 'Header',
    methods:{
        logout(){
            this.$store.commit('setUser', null)
            M.toast({html: 'Signed out sucessfully!', classes:'rounded green'})
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.nav-wrapper{
    background-color: #084d6e;
    color: white;
}
nav {
    margin-bottom: 3%
}
</style>
