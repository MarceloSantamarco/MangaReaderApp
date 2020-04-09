<template>
    <div v-if='Object.keys(manga).length' class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
            <img class='activator' src="../../assets/oi.png">
            <h6 class="card-title grey-text text-darken-4">{{ manga.title }}</h6>
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
import Loader from '../Loader'

export default {
    name: 'MangaCard',
    props: ['manga'],
    components:{Loader},
    mounted(){
        this.getComicGenres()
    },
    data(){
        return{
            comicGenres: {}
        }
    },
    methods:{
        getComicGenres(){
            axios.get(`${baseApiUrl}/comics/${this.$props.manga._id.$oid}/comic_genre`).then((res)=>{
                this.comicGenres = res.data
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
</style>