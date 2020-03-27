<template>
    <div class="container">
        <ul class="tabs">
            <li class="tab col s4"><a class="active" href="#news">Novidades</a></li>
            <li class="tab col s4"><a href="#categories">Categorias</a></li>
            <li class="tab col s4"><a href="#genres">Gêneros</a></li>
            <li class="tab col s4"><a href="#authors">Autores</a></li>
        </ul>
        <DataFilters/>
        <div id="news">
            <div v-for='n in 4' :key='n' class='row center-cols center-align'>
                <div v-for='i in 4' :key='i' class="col s3">
                    <MangaCard/> 
                </div>
            </div>
        </div>

        <div id="categories">
            <div class="container">
                <div v-if='Object.keys(this.categories).length' class="collection">
                    <a v-for='n in this.categories' :key='n.id' href="#!" class="collection-item">{{n.name}}<i class="material-icons secondary-content">remove_red_eye</i></a>
                </div>
                <div v-else class='empty'>
                    No records yet.
                </div>
            </div>
        </div>

        <div id="genres">
            <div class="container">
                <div v-if='Object.keys(this.genres).length' class="collection">
                    <a v-for='n in this.genres' :key='n.id' href="#!" class="collection-item">{{n.name}}<i class="material-icons secondary-content">remove_red_eye</i></a>
                </div>
                <div v-else class='empty'>
                    No records yet.
                </div>
            </div>
        </div>

        <div id="authors">
            <div class="container">
                <div v-if='Object.keys(this.authors).length' class="collection">
                    <a v-for='n in this.authors' :key='n.id' href="#!" class="collection-item">{{n.name}}<i class="material-icons secondary-content">remove_red_eye</i></a>
                </div>
                <div v-else class='empty'>
                    No records yet.
                </div>
                <router-link to='/authors/new'><button class='btn pink' style='margin: 10px 0px 0px 10px;'>Manage</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import MangaCard from '../components/manga/MangaCard'
import DataFilters from '../components/DataFilters'
import axios from 'axios'

export default {
    name: 'Mangas',
    components: {MangaCard, DataFilters},
    mounted(){
        this.getCategories();
        this.getGenres();
        this.getAuthors();
    },
    data(){
        return {
            categories: {},
            genres: {},
            authors: {}
        }
    },
    methods:{
        getCategories(){
            axios.get('http://localhost:3000/categories').then((res)=>{
                this.categories = res.data
            }).catch((error)=>{
                console.log(error)
            });
        },
        getGenres(){
            axios.get('http://localhost:3000/genres').then((res)=>{
                this.genres = res.data
            }).catch((error)=>{
                console.log(error)
            });
        },
        getAuthors(){
            axios.get('http://localhost:3000/authors').then((res)=>{
                this.authors = res.data
            }).catch((error)=>{
                console.log(error)
            });
        }
    }
}
</script>

<style scoped>
.center-cols > .col{
    float:none;
    display: inline-block;
    text-align: initial;
}
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
.container .collection{
    text-align: justify;
    width: 60%;
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
#genres .container{
    display: flex;
    justify-content: center;
}
#categories .container{
    display: flex;
    justify-content: center;
}

#authors .container{
    display: flex;
    justify-content: center;
}
</style>