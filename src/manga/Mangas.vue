<template>
    <div class="container">
        <div v-if='Object.keys(comics).length'>
            <ul class="tabs">
                <li class="tab col s4"><a class="active" href="#news">Novidades</a></li>
                <li class="tab col s4"><a href="#categories">Categorias</a></li>
                <li class="tab col s4"><a href="#genres">Gêneros</a></li>
                <li class="tab col s4"><a href="#authors">Autores</a></li>
            </ul>

            <div id="news">
                <MangaNews :comics='comics'/>
            </div>

            <div id="categories">
                <LinkRows type='category' :object='categories'/>
            </div>

            <div id="genres">
                <LinkRows type='genre' :object='genres'/>
            </div>

            <div id="authors">
                <LinkRows type='author' :object='authors'/>
            </div>
        </div>
        <div v-else class="loader">
            <Loader/>
        </div>
    </div>
</template>

<script>
import MangaNews from '../components/manga/MangaNews'
import Loader from '../components/Loader'
import LinkRows from '../components/LinkRows'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'Mangas',
    components: {Loader, MangaNews, LinkRows},
    mounted(){
        this.getCategories();
        this.getGenres();
        this.getAuthors();
        this.getComics();
    },
    data(){
        return {
            categories: {},
            genres: {},
            authors: {},
            comics: {}
        }
    },
    methods:{
        getCategories(){
            axios.get(`${baseApiUrl}/categories`).then((res)=>{
                this.categories = res.data
            }).catch((error)=>{
                console.log(error)
            });
        },
        getGenres(){
            axios.get(`${baseApiUrl}/genres`).then((res)=>{
                this.genres = res.data
            }).catch((error)=>{
                console.log(error)
            });
        },
        getAuthors(){
            axios.get(`${baseApiUrl}/authors`).then((res)=>{
                this.authors = res.data
            }).catch((error)=>{
                console.log(error)
            });
        },
        getComics(){
            axios.get(`${baseApiUrl}/comics`).then((res)=>{
                this.comics = res.data
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
.container{
    color: #000;
    width: 90%;
}
.tabs{
    background-color: #063e58;
}
.tabs .tab > a{
    color: #FFF !important;
}
.loader{
    padding: 10%;
}
</style>