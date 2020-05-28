<template>
    <div class="container">
        <div v-if='Object.keys(comics).length'>
            <ul class="tabs">
                <li class="tab col s4"><a class="active" href="#news">Novidades</a></li>
                <li class="tab col s4"><a href="#all">Todos</a></li>
                <li class="tab col s4"><a href="#categories">Categorias</a></li>
                <li class="tab col s4"><a href="#genres">Gêneros</a></li>
                <li class="tab col s4"><a href="#authors">Autores</a></li>
            </ul>

            <div id="news">
                <MangaNews :comics='comicNews' :key='componentKey'/>
            </div>

            <div id="all">
                <MangaAll :comics='comics' :key='componentKey'/>
            </div>

            <div id="categories">
                <LinkRows type='category' :object='categories' @filtered='filterComics'/>
            </div>

            <div id="genres">
                <LinkRows type='genre' :object='genres' @filtered='filterComics'/>
            </div>

            <div id="authors">
                <LinkRows type='author' :object='authors' @filtered='filterComics'/>
            </div>
        </div>
        <div v-else class="loader">
            <Loader/>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import MangaAll from '../components/manga/MangaAll'
import MangaNews from '../components/manga/MangaNews'
import Loader from '../components/Loader'
import LinkRows from '../components/LinkRows'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'Mangas',
    components: {Loader, MangaAll, MangaNews, LinkRows},
    mounted(){
        this.getCategories();
        this.getGenres();
        this.getAuthors();
        this.getComics();
        this.getComicNews();
    },
    data(){
        return {
            categories: {},
            genres: {},
            authors: {},
            comics: {},
            comicNews: {},
            componentKey: 0
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
        },
        getComicNews(){
            axios.get(`${baseApiUrl}/time_line`).then((res)=>{
                this.comicNews = res.data
            }).catch((error)=>{
                console.log(error)
            })
        },
        filterComics(e){
            axios.get(`${baseApiUrl}/related_comics?${e[1]}=${e[0]}`).then((res)=>{
                if(res.data.length){
                    this.comics = res.data;
                    this.componentKey++;
                    M.Tabs.getInstance(document.querySelector('.tabs')).select('news')
                }
                else{
                    M.toast({html: 'No comics in this section', classess: 'roundded'})
                }
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