<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <div v-if='Object.keys(comic) && Object.keys(genres) && author' class="card horizontal">
                    <div class="card-image">
                        <img :src="coverUrl">
                    </div>
                    <div class="card-stacked">
                        <h2 class="header">{{comic.title}}</h2>
                        <div class="card-content">
                            <p>
                                {{comic.description}}
                            </p>
                        </div>
                        <div class="card-content">
                            <p><strong>Author: </strong>
                                <span>{{author}}</span>
                            </p>
                            <p><strong>Status: </strong>
                                <span>Finalizado</span>
                            </p>
                            <br>
                            <ul class="collapsible">
                                <li>
                                    <div class="collapsible-header">
                                        5.0
                                        <i class="material-icons">star</i>
                                        <i class="material-icons">star</i>
                                        <i class="material-icons">star</i>
                                        <i class="material-icons">star</i>
                                        <i class="material-icons">star</i>
                                    </div>
                                    <div class="collapsible-body">
                                        <ul class="collection">
                                            <li v-for='n in 5' :key='n' class="collection-item">
                                                <div>{{n+2}} votos
                                                    <span class="secondary-content">
                                                        <i v-for='i in n' :key='i' class="material-icons">star</i>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="card-action">
                            <span v-for='(n,i) in genres' :key='i'>
                                {{n.name}},
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else class="card horizontal loader">
                    <Loader/>
                </div>
            </div>
        </div>
        <ul class="collection with-header">
            <li class="collection-header">
                <h4><i class="material-icons inline-icon">library_books</i>Chapters</h4>
            </li>
            <a v-for="n in 14" :key='n' class="collection-item" href='#'>
                {{n}}
                <span class='secondary-content'>27/09/2019</span>
            </a>
        </ul>
        <ul class="collection with-header">
            <li class="collection-header">
                <h4><i class="material-icons inline-icon">comment</i>Comments</h4>
            </li>
            <li class="collection-item avatar">
                <img src="../assets/user-icon.png" alt="user" class="circle">
                <strong><span class="title">José Ramalho</span></strong>
                <p> Muito TOP !!!! </p>
                <span class="secondary-content">
                    23/09/2019
                </span>
            </li>
            <li class="collection-item avatar">
                <img src="../assets/user-icon.png" alt="user" class="circle">
                <strong><span class="title">Edson Ferreira</span></strong>
                <p> Achei meio bosta esse final </p>
                <span class="secondary-content">
                    20/09/2019
                </span>
            </li>
            <li class="collection-item avatar">
                <img src="../assets/user-icon.png" alt="user" class="circle">
                <strong><span class="title">Astolfo Antunes</span></strong>
                <p>Não esperava muito desse mangá mas a história me surpreendeu</p>
                <span class="secondary-content">
                    19/09/2019
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import axios from 'axios'
import firebase from 'firebase'
import {baseApiUrl} from '@/global'
import Loader from '../components/Loader'

export default {
    name: 'ShowManga',
    components: {Loader},
    data(){
        return {
            comic: {},
            author: '',
            coverUrl: '',
            genres: {}
        }
    },
    created(){
        this.getComic();
        this.getComicGenres();
        this.getAuthor();
    },
    mounted(){
        M.Collapsible.init(document.querySelectorAll('.collapsible'));
    },
    methods:{
        getComic(){
            axios.get(`${baseApiUrl}/comics/${this.$route.query.comic_id}`).then((res)=>{
                this.comic = res.data
                firebase.storage().ref().child(res.data.cover.substr(30)).getDownloadURL().then((url)=>{
                    this.coverUrl = url
                })
            })
        },
        getAuthor(){
            axios.get(`${baseApiUrl}/comics/${this.$route.query.comic_id}/comic_author`).then((res)=>{
                this.author = res.data.name
            })
        },
        getComicGenres(){
            axios.get(`${baseApiUrl}/comics/${this.$route.query.comic_id}/comic_genre`).then((res)=>{
                this.genres = res.data
            })
        }
    }
}
</script>

<style scoped>
.container{
    color: #000;
    text-align: initial;
}
.col.s2 > h4{
    margin: auto;
    line-height: 70%;
}
.card-content > p{
    font-size: 18px;
}
.collapsible-header{
    display: flex;
    align-items: center;
    font-size: 35px;
    padding-right: 2%;
}
.collapsible-header > i{
    padding-left: 12%;
}
.inline-icon {
   vertical-align: top;
}
.loader{
    display: flex;
    justify-content: center;
    padding: 10%
}
.card-image{
    padding-top: 0.5%;
    padding-left: 0.5%;
    margin-right: 1%;
}
</style>