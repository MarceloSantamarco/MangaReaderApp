<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <div v-if='Object.keys(comic) && Object.keys(genres) && author' class="card horizontal">
                    <div class="card-image">
                        <img v-if='coverUrl' :src="coverUrl" width='600' height="515">
                        <div v-else>
                            <Loader/>
                        </div>
                    </div>
                    <div class="card-stacked">
                        <div class="row">
                            <div class="col s10">
                                <h2 class="header">{{comic.title}}</h2>
                             </div>
                             <div v-if='comic' class="col s2">
                                 <MangaFavorite :comic='comic'/>
                             </div>
                             <div v-else class="col s2">
                                <Loader/>
                             </div>
                        </div>
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
                                <span>{{comic.status ? 'Finalizado' : 'Em andamento'}}</span>
                            </p>
                            <br>
                            <MangaRate v-if='comic' :comic='comic' :key='rateKey'/>
                            <Loader v-else/>
                        </div>
                        <div class="card-action">
                            <div class="row">
                                <div class="col s6">
                                    <span v-for='(n,i) in genres' :key='i'>
                                        {{n.name}},
                                    </span>
                                </div>
                                <div class="col s6">
                                    <MangaRating v-if='comic' :comic='comic' @rated='updateRate()'/>
                                    <Loader v-else/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="card horizontal loader">
                    <Loader/>
                </div>
            </div>
        </div>
        <MangaChapters/>
        <MangaComments :user='this.$store.state.user' :key='commentsKey' @deleted='()=>(this.commentsKey+=1)'/>
        <NewComment v-if='this.$store.state.user' @commented='()=>(this.commentsKey+=1)'/>
    </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'
import {baseApiUrl} from '@/global'
import MangaChapters from '../components/manga/MangaChapters'
import MangaComments from '../components/manga/MangaComments'
import MangaFavorite from '../components/manga/MangaFavorite'
import MangaRate from '../components/manga/MangaRate'
import MangaRating from '../components/manga/MangaRating'
import NewComment from '../components/comments/NewComment'
import Loader from '../components/Loader'

export default {
    name: 'ShowManga',
    components: {Loader, MangaChapters, MangaComments, MangaRate, MangaFavorite, MangaRating, NewComment},
    data(){
        return {
            comic: {},
            author: '',
            coverUrl: '',
            genres: {},
            commentsKey: 0,
            rateKey: 0
        }
    },
    mounted(){
        this.getComic();
        this.getComicGenres();
        this.getAuthor();
    },
    methods:{
        getComic(){
            axios.get(`${baseApiUrl}/comics/${this.$route.query.comic_id}`).then((res)=>{
                this.comic = res.data
                let url = res.data.cover.split('/')
                firebase.storage().ref().child(`${url[3]}/${url[4]}`).getDownloadURL().then((url)=>{
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
        },
        updateRate(){
            this.rateKey++;
            this.getComic();
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
img{
    border-radius: 4% !important;
}
</style>