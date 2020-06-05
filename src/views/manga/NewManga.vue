<template>
    <div class="container">    
        <div class="row">
            <div class="col s12">
                <div class="card-panel">
                    <h3>Publique um novo manga!</h3>
                    <h5>Crie seu título para poder publicar novos capítulos</h5>
                    <br>
                    <div v-show='Object.keys(categories).length' class="row">
                        <MangaForm :categories='categories' :genres='genres' :authors='authors'/>
                    </div>
                    <div v-show='!Object.keys(categories).length' style='padding: 4%;' class="row">
                        <Loader/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../../components/Loader'
import MangaForm from '../../components/manga/MangaForm'
import {baseApiUrl} from '@/global'
import axios from 'axios'

export default {
    name: 'NewManga',
    components: {Loader, MangaForm},
    data(){
        return{
            authors: {},
            genres: {},
            categories: {}
        }
    },
    created(){
        this.getCategories();
        this.getGenres();
        this.getAuthors();
    },
    methods:{
        getCategories(){
            axios.get(`${baseApiUrl}/categories`).then((res)=>{
                this.categories = res.data;
            })
        },
        getGenres(){
            axios.get(`${baseApiUrl}/genres`).then((res)=>{
                res.data.map((gen)=>{
                    this.genres[gen.name] = null
                })
            })
        },
        getAuthors(){
            axios.get(`${baseApiUrl}/authors`).then((res)=>{
                res.data.map((aut)=>{
                    this.authors[aut.name] = null
                })
            })
        }
    }
}
</script>

<style>
.card-panel{
    color: #000;
    text-align:initial;
    padding: 4% 6% !important;
}
</style>