<template>
    <div v-if='Object.keys(manga).length' class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
            <img v-if='coverUrl' class='activator' :src="coverUrl">
            <div v-else style='padding-top: 15%'>
                <loader/>
            </div>
            <span class="card-title text-darken-4">{{ manga.title }}</span>
        </div>
        <div class="card-content activator">
            <p>{{ manga.description.substr(0, 105) }}</p>
        </div>
        <div class="card-reveal activator">
            <span class="card-title grey-text text-darken-4">{{ manga.title }}<i class="material-icons right">close</i></span>
            <hr>
            <span v-for='(n, i) in comicGenres' :key='i'>
                {{n.name}},
            </span>
            <hr>
            <p>{{ manga.description }}</p>
        </div>
        <div class="card-action">
            <router-link :to="{path: '/mangas/show', query: {comic_id: manga._id.$oid}}">
                <button class='waves-effect waves-light btn pink'>
                Ver mais
                </button>
            </router-link>
            <span>
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star_half</i>
            </span>
        </div>
    </div>
    <div v-else class="card medium">
        <Loader/>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl} from '@/global'
import firebase from 'firebase'
import Loader from '../Loader'

export default {
    name: 'MangaCard',
    props: ['manga'],
    components:{Loader},
    mounted(){
        this.getComicGenres();
        this.imageUrl();
    },
    data(){
        return{
            comicGenres: {},
            coverUrl: ''
        }
    },
    methods:{
        getComicGenres(){
            axios.get(`${baseApiUrl}/comics/${this.$props.manga._id.$oid}/comic_genre`).then((res)=>{
                this.comicGenres = res.data
            })
        },
        imageUrl(){
            firebase.storage().ref().child(this.manga.cover.substr(30)).getDownloadURL().then((url)=>{
                this.coverUrl = url
            })
        }
    }
}
</script>

<style scoped>
.card-action{
    display: flex;
    justify-content: space-between;
}
.card{
    border-radius: 25px;
}
.card .card-action:last-child{
    border-radius: 25px;
}
.card-title{
    font-size: 25px !important;
    font-weight: bold !important;
}
</style>