<template>
    <div class="container">    
        <div class="row">
            <div class="col s12">
                <div class="card-panel">
                    <h3>Publish a new manga!</h3>
                    <div v-show='Object.keys(categories).length' class="row">
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
                                    <select name='cats' class='browser-default' v-model='category'>
                                        <option value="" disabled selected>Category</option>
                                        <option v-for='(n, i) in categories' :key='i' :value='n._id.$oid'>
                                            {{n.name}}
                                        </option>
                                    </select>
                                </div>
                                <div class="col s4">
                                    <div class="chips chips-autocomplete chips-placeholder">
                                        <input name='genres'>
                                    </div>
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
                    <div v-show='!Object.keys(categories).length' style='padding: 4%;' class="row">
                        <Loader/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import axios from 'axios'
import Loader from '../components/Loader'
import {baseApiUrl} from '@/global'

export default {
    name: 'NewManga',
    components: {Loader},
    created(){
        this.getCategories();
        this.getGenres();
        this.getAuthors();
    },
    mounted(){
        M.Autocomplete.init(document.querySelectorAll('.autocomplete'), { 
            data: this.authors,
            onAutocomplete: (event) => {
                this.author = event
            }
        });
        M.CharacterCounter.init(document.querySelectorAll('#textarea2'));
        M.FormSelect.init(document.querySelectorAll('select'));
        M.Datepicker.init(document.querySelectorAll('.datepicker'));
        M.Chips.init(document.querySelectorAll('.chips'), {
            autocompleteOptions: { 
                data: this.genres,
                limit: Infinity,
                minLength: 1
            },
            placeholder: 'Tap the genres',
            onChipAdd: (event) => {
                this.sel_genres = event[0].M_Chips.chipsData;
            }
        });
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
        sendManga(){

            const genres = []
            this.sel_genres.map((gen)=>{
                genres.push(gen['tag'])
            })

            const comic = {
                title: this.title, description: this.description, 
                published_at: this.published_at, adult: this.adult
            }

            axios.post(`${baseApiUrl}/comics`, {comic: comic, genres: genres,
                author: this.author, category: this.category}).then((resp) =>{
                console.log(resp.data);
            }).catch((error)=>{
                console.log(error);
            });
        },
        getCover(e){
            this.cover = e.target.files[0];
            console.log(this.cover);
        },
        dateChanged(){
            this.published_at = M.Datepicker.getInstance(document.querySelector('.datepicker')).toString();
        },
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