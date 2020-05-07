<template>
    <div>
        <a class='dropdown-trigger' data-target='user-dropdown'>
            <img src='../../assets/user-icon.png' height='30' width="40"/>
        </a>

        <ul id='user-dropdown' class='dropdown-content'>
            <li><router-link to="/mangas/new">Contribuir</router-link></li>
            <!-- <li><UserPhoto/></li> -->
            <li><router-link to='/authors/new'>Autores</router-link></li>
            <li><router-link to='/mangas/admin'>Mangas</router-link></li>
            <li @click.prevent='logout'><a href='#'>Sair</a></li>
        </ul>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
// import UserPhoto from '../user/UserPhoto'
import {userKey} from '@/global'

export default {
    name: 'UserDropdown',
    // components: {UserPhoto},
    props: ['user'],
    methods:{
        logout(){
            this.$store.commit('setUser', null)
            localStorage.removeItem(userKey)
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