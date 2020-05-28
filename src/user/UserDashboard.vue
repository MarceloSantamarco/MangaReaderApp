<template>
    <div class='container'>
        <div class="favorites">
            <ul class="collapsible">
                <li class='active'>
                    <div class="collapsible-header">
                        Favoritos
                    </div>
                    <div class="collapsible-body">
                        <div v-if='favorites.length' class="collection">
                            <router-link :to="{path: 'mangas/show', query: {comic_id: fav.comic._id.$oid}}" v-for='(fav, i) in favorites' :key='i' class="collection-item avatar">
                                <img :src="fav.comic.cover" alt="cover" class='circle'>
                                <span class="title">{{fav.comic.title}}</span>
                                <span class="secondary-content"><span class="badge green">Capítulo {{fav.chapter}}</span></span>                             
                            </router-link>
                        </div>
                        <div v-else class='empty'>
                            Aqui você pode ver as novidades dos seus mangás favoritos!
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="readig-progress">
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header">
                        Progresso
                        <span class="new badge">3</span>
                    </div>
                    <div class="collapsible-body">
                        <ul class="collection">
                            <li v-for='i in 3' :key='i' class="collection-item avatar">
                                <img src="../assets/user-icon.png" alt="cover" class='circle'>
                                <span class="title">Title</span>
                                <a href="#!" class="secondary-content"><span class="badge green">{{i*2}}%</span></a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="suggestions">
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header">
                        Sugestões
                        <span class="new badge">2</span>
                    </div>
                    <div class="collapsible-body">
                        <ul class="collection">
                            <li v-for='i in 2' :key='i' class="collection-item">
                                <span class="title">Title</span>
                                <a href="#!" class="secondary-content"></a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import {baseApiUrl} from '@/global'
import axios from 'axios'
import firebase from 'firebase'

export default {
    name: 'UserDashboard',
    data(){
        return {
            favorites: {}
        }
    },
    mounted(){
        M.Collapsible.init(document.querySelectorAll('.collapsible'))
        this.getFavorites();
    },
    methods:{
        getFavorites(){
            axios.get(`${baseApiUrl}/user_time_line`).then((res)=>{
                if(res.data.length){
                    res.data.map((fav)=>{
                        let cover = fav.comic.cover.split('/')
                        firebase.storage().ref().child(`${cover[3]}/${cover[4]}`).getDownloadURL().then((url)=>{
                            fav.comic.cover = url
                        })
                    })
                }
                this.favorites = res.data
            })
        }
    }
}
</script>

<style scoped>
.collapsible{
    color: #000;
    margin-top: 8%;
    margin-bottom: 8%;
}
.collapsible-body{
    background-color: #FFF;
    text-align: initial;
}
.badge.green{
    color: #FFF;
}
.container{
    margin-top: 10%;
    margin-bottom: 10%;
}
.empty{
    text-align: center;
}
</style>