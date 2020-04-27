<template>
    <div v-if='Object.keys(manga).length' class="card medium">
        <div v-if='coverUrl'  class="card-image waves-effect waves-block waves-light">
            <img class='activator' :src="coverUrl">
            <span class="card-title text-darken-4">{{ manga.title }}</span>
        </div>
        <div v-else style='padding-top: 15%'>
            <loader/>
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
            <span v-if='stars.length'>
                <i v-for='(n,i) in stars' :key='i' class="material-icons rate">{{n}}</i>
            </span>
            <span v-else>
                <i v-for='i in 5' :key='i' class='material-icons rate'>star_border</i>
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
    },
    computed:{
        stars(){
            let stars = []
            let num = this.manga.rate

            for(let i=0; i<Math.floor(num); i++){
                stars[i] = 'star'
            }

            if(!Number.isInteger(num)){
                stars.push('star_half')
            }

            if(stars.length < 5){
                for(let i=stars.length; i<5; i++){
                    stars.push('star_border')
                }
            }

            return stars
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
.rate{
    color: gold;
}
</style>