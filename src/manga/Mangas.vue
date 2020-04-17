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
                <DataFilters :type='"comic"' @search='changeComic'/>
                <div v-for='(n, i) in order.length' :key='i' class='row center-cols center-align'>
                    <div v-for='(manga, idx) in order[i]' :key='idx' class="col s3">
                        <MangaCard :manga='manga'/> 
                    </div>
                </div>
            </div>

            <div id="categories">
                <DataFilters type='category' @search='changeCategory'/>
                <div class="container link-rows">
                    <div v-if='Object.keys(this.categories).length' class="collection">
                        <a v-for='n in this.categories' :key='n.id' href="#!" class="collection-item">{{n.name}}</a>
                    </div>
                    <div v-else class='empty'>
                        No records yet or user not authorized.
                    </div>
                </div>
            </div>

            <div id="genres">
                <DataFilters type='genre' @search='changeGenre'/>
                <div class="container link-rows">
                    <div v-if='Object.keys(this.genres).length' class="collection">
                        <a v-for='n in this.genres' :key='n.id' href="#!" class="collection-item">{{n.name}}</a>
                    </div>
                    <div v-else class='empty'>
                        No records yet or user not authorized.
                    </div>
                </div>
            </div>

            <div id="authors">
                <DataFilters type='author' @search='changeAuthor'/>
                <div class="container link-rows">
                    <div v-if='Object.keys(this.authors).length' class="collection">
                        <a v-for='n in this.authors' :key='n.id' href="#!" class="collection-item">{{n.name}}</a>
                    </div>
                    <div v-else class='empty'>
                        No records yet or user not authorized.
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="loader">
            <Loader/>
        </div>
    </div>
</template>

<script>
import MangaCard from '../components/manga/MangaCard'
import DataFilters from '../components/DataFilters'
import Loader from '../components/Loader'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'Mangas',
    components: {MangaCard, DataFilters, Loader},
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
            comics: {},
            order: []
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
                this.sortComics(res.data);
            }).catch((error)=>{
                console.log(error)
            })
        },
        sortComics(comics){
            let aux = [];
            while(comics.length){
                if(comics.length > 4){
                    aux.push(comics.slice(0, 4))
                    comics.splice(0,4)
                }
                else{
                    aux.push(comics)
                    break;
                }
            }
            this.order = aux
        },
        changeComic(e){
            if(e[0]){
                this.sortComics(e)
            }
            else{
                this.sortComics(this.comics)
            }
        },
        changeAuthor(e){
            if(e[0]){
                this.authors = e
            }
        },
        changeGenre(e){
            if(e[0]){
                this.genres = e
            }
        },
        changeCategory(e){
            if(e[0]){
                this.categories = e
            }
        }
    }
}
</script>

<style scoped>
.container{
    color: #000;
    width: 90%;
}
.collection{
    margin-bottom: 8%;
    margin-top: 5%;
}
.tabs{
    background-color: #063e58;
}
.tabs .tab > a{
    color: #FFF !important;
}
.container .collection{
    text-align: center;
    width: 45%;
}
.empty {
    background-color: #D3D3D3;
    text-align: center;
    width: 60%;
    margin: 2%;
    padding: 5%;
    font-size: 18px;
    border-radius: 5px;
}
.loader{
    padding: 10%;
}
.link-rows{
    display: flex;
    justify-content: center;
}
</style>