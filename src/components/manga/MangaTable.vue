<template>
    <div class="container">
        <table v-if='Object.keys(comics).length' class='highlight centered responsive-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='(n ,i) in comics' :key='i'>
                    <td>{{n.title}}</td>
                    <td>
                        <router-link :to="{path: '/chapters/new', query: {comic_id: n._id.$oid}}"><button class='btn blue'><i class='material-icons'>add</i></button></router-link>
                        <router-link :to="{path: '/mangas/edit', query: {comic_id: n._id.$oid}}"><button class='btn green'><i class='material-icons'>edit</i></button></router-link>
                        <button class='btn red' @click='deleteComic(n)'><i class='material-icons'>delete</i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else class='loader'>
            <Loader/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl} from '@/global'
import firebase from 'firebase'
import Loader from '../Loader'

export default {
    name: 'MangaTable',
    components:{Loader},
    data(){
        return {
            comics: {}
        }
    },
    mounted(){
        this.getComics();
    },
    methods:{
        getComics(){
            axios.get(`${baseApiUrl}/comics`).then((res)=>{
                this.comics = res.data;
            }).catch((error)=>{
                console.log(error);
            })
        },
        deleteComic(n){
            this.deleteFromBucket(n.cover.split('/'));
            axios.delete(`${baseApiUrl}/comics/${n._id.$oid}`).then(()=>{
                this.getComics();
            })
        },
        deleteFromBucket(n){
            firebase.storage().ref().child(`${n[3]}/${n[4]}`).delete().then(()=>{
                console.log('File deleted from storage')
            })
        }
    }
}
</script>

<style scoped>
.container{
    background-color: #FFF;
    color: #000;
}
a{
    padding: 1%;
}
.loader{
    padding: 10%;
}
</style>