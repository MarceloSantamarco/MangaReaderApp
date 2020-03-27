<template>
    <div class="container">    
        <div class="row">
            <div class="col s12">
                <div class="card-panel">
                    <h3>Publish a new manga!</h3>
                    <div class="row">
                        <form class="col s12" @submit='sendManga'>
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">star</i>
                                    <input id="icon_prefix" type="text" class="validate" v-model='title'>
                                    <label for="icon_prefix">Title</label>
                                </div>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input type="text" id="autocomplete-input" class="autocomplete no-autoinit" v-model='author'>
                                    <label for="autocomplete-input">Author</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">textsms</i>
                                    <textarea id="textarea2" class="materialize-textarea" data-length="100" v-model='description'></textarea>
                                    <label for="textarea2">Description</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s4">
                                    <select multiple v-model='sel_genres'>
                                        <option value="" disabled selected>Genres</option>
                                        <option v-for='n in genres' :key='n.id' :value='n'>{{n.name}}</option>
                                    </select>
                                </div>
                                <div class="input-field col s4">
                                    <select v-model='category'>
                                        <option value="" disabled selected>Category</option>
                                        <option v-for='n in categories' :key='n.id' :value='n'>{{n.name}}</option>
                                    </select>
                                </div>
                                <div class="input-field col s2">
                                    <input type="text" class="datepicker" placeholder='Published at...' @change="dateChanged">
                                </div>
                                <div class="input-field col s2">
                                    <div class="switch">
                                        <label>
                                        <input type="checkbox" v-model='adult'>
                                        <span class="lever"></span>
                                        Adult
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="file-field input-field col s12">
                                    <div class="btn-small pink">
                                        <span>Manga cover</span>
                                        <input type="file" @change="getCover">
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12">
                                    <button class='btn green' type='submit'>Publish</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import axios from 'axios'

export default {
    name: 'NewManga',
    mounted(){
        this.getCategories();
        this.getGenres();
        this.getAuthors();
        M.Autocomplete.init(document.querySelectorAll('.autocomplete'), {
            data: this.authors
        });
        M.CharacterCounter.init(document.querySelectorAll('#textarea2'));
        M.AutoInit();
    },
    data(){
        return {
            title: '',
            author: '',
            description: '',
            sel_genres: [],
            category: '',
            published_at: '',
            adult: 0,
            cover: '',
            genres: {},
            categories: {},
            authors: {}
        }
    },
    methods:{
        sendManga(e){
            e.preventDefault();

            const comic = { title: this.title, description: this.description, published_at: this.published_at, 
                adult: this.adult, cover: this.cover, keys: {genres: this.sel_genres, category_id: 1, author_id: this.author}
            }

            axios.post('http://localhost:3000/comics', comic).then((resp) =>{
                console.log(resp.data);
            }).catch(function (error) {
                console.log(error);
            });

        },
        getCover(){
            this.cover = event.target.files[0];
            console.log(this.cover);
        },
        dateChanged(){
            this.published_at = M.Datepicker.getInstance(document.querySelector('.datepicker')).toString();
            console.log(this.published_at)
        },
        getCategories(){
            axios.get('http://localhost:3000/categories').then((res)=>{
                this.categories = res.data;
            })
        },
        getGenres(){
            axios.get('http://localhost:3000/genres').then((res)=>{
                this.genres = res.data;
            })
        },
        getAuthors(){
            axios.get('http://localhost:3000/authors').then((res)=>{
                res.data.map((author)=>{
                    this.authors[author.name] = null
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
.col.s12 > .btn {
   width: 100%;
   margin-top: 2%;
}
</style>