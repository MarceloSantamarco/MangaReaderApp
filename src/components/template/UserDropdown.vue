<template>
    <div>
        <a class='dropdown-trigger' data-target='user-dropdown'>
            <img src='../../assets/user-icon.png' height='30' width="40"/>
        </a>

        <ul id='user-dropdown' class='dropdown-content'>
            <li><router-link to="/mangas/new">Contribute</router-link></li>
            <li><a href="#!">Profile</a></li>
            <li><router-link to='/authors/new'>Authors</router-link></li>
            <li><router-link to='/mangas/admin'>Mangas</router-link></li>
            <li @click.prevent='logout'><a href='#'>Logout</a></li>
        </ul>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
    name: 'UserDropdown',
    props: ['user'],
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
.dropdown-trigger{
    margin-top: 12%;
}
img{
    border-radius: 10%;
}
nav ul a:hover{
    background-color: transparent;
}
</style>