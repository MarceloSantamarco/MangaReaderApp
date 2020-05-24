<template>
    <div>
        <a class='dropdown-trigger' data-target='user-dropdown'>
            <img v-if='this.photo' :src='this.photo' height='30' width="40"/>
            <img v-else src='../../assets/user-icon.png' height='30' width="40"/>
        </a>

        <ul id='user-dropdown' class='dropdown-content'>
            <li><router-link to="/mangas/new">Contribuir</router-link></li>
            <li><router-link to='/authors/new'>Autores</router-link></li>
            <li><router-link to='/mangas/admin'>Mangas</router-link></li>
            <li @click.prevent='logout'><a href='#'>Sair</a></li>
        </ul>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import firebase from 'firebase'
import axios from 'axios'
import {userKey, baseApiUrl} from '@/global'

export default {
    name: 'UserDropdown',
    data(){
        return {
            photo: ''
        }
    },
    props: ['user'],
    mounted(){
        this.getPhotoUrl()
    },
    methods:{
        logout(){
            this.$store.commit('setUser', null)
            localStorage.removeItem(userKey)
            M.toast({html: 'Signed out sucessfully!', classes:'rounded green'})
            this.$router.push('/')
        },
        getPhotoUrl(){
            axios.get(`${baseApiUrl}/users/${this.user.id.$oid}`).then((res)=>{
                if(!res.data.photo){
                    return
                }
                let url = res.data.photo.split('/')
                firebase.storage().ref().child(`${url[3]}/${url[4]}`).getDownloadURL().then((url)=>{
                    this.photo = url
                })
            })
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