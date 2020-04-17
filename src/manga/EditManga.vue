<template>
    <div class="container">    
        <div class="row">
            <div class="col s12">
                <div class="card-panel">
                    <h3>Editing manga!</h3>
                    <div v-if='Object.keys(categories).length && Object.keys(comic).length' class="row">
                        <MangaForm :categories='categories' :genres='genres' :authors='authors' :manga='comic'/>
                    </div>
                    <div v-else style='padding: 4%;' class="row">
                        <Loader/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../components/Loader'
import MangaForm from '../components/manga/MangaForm'
import {baseApiUrl} from '@/global'
import axios from 'axios'

export default {
    name: 'NewManga',
    components: {Loader, MangaForm},
    data(){
        return{
            authors: {},
            genres: [],
            categories: {},
            comic: {},
            category: ''
        }
    },
    created(){
        this.getCategories();
        this.getGenres();
        this.getAuthors();
        this.getComic();
    },
    methods:{
        getComic(){
            axios.get(`${baseApiUrl}/comics/${this.$route.query.comic_id}`).then((res)=>{
                this.comic = res.data
                this.category = res.data.category_id
            }).catch((error)=>{
                console.log(error)
            })
        },
        getCategories(){
            axios.get(`${baseApiUrl}/categories`).then((res)=>{
                this.categories = res.data.filter((cat)=>{
                    cat._id.$oid != this.category.$oid
                })
            })
        },
        getGenres(){
            axios.get(`${baseApiUrl}/genres`).then((res)=>{
                res.data.map((gen)=>{
                    this.genres.push({tag: gen.name})
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
    color: #000
}
.row{
    margin-bottom: 1% !important;
}
</style>