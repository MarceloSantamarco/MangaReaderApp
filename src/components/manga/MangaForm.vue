<template>
    <form class="col s12" @submit.prevent='sendManga'>
        <div class="row">
            <div class="input-field col s6">
                <i class="material-icons prefix">star</i>
                <input id="icon_prefix" type="text" class="validate" v-model='title'>
                <label class='active' for="icon_prefix">Title</label>
            </div>
            <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input type="text" id="autocomplete-input" class="autocomplete no-autoinit" v-model='author'>
                <label class='active' for="autocomplete-input">Author</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <i class="material-icons prefix">textsms</i>
                <textarea id="textarea2" class="materialize-textarea" data-length="500" v-model='description'></textarea>
                <label class='active' for="textarea2">Description</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <select :class="manga ? '' : 'browser-default'" v-model='category'>
                    <option v-if='manga' :value="manga.category_id.$oid" selected>
                    </option>
                    <option v-else value="">Category</option>
                    <option v-for='(n, i) in categories' :key='i' :value='n._id.$oid'>
                        {{n.name}}
                    </option>
                </select>
            </div>
            <div class="col s4">
                <div class="chips chips-autocomplete chips-placeholder chips-initial">
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
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'MangaForm',
    props: ['categories', 'genres', 'authors', 'manga'],
    mounted(){
        this.checkType();
        this.initChips();
        M.Autocomplete.init(document.querySelectorAll('.autocomplete'), { 
            data: this.authors,
            onAutocomplete: (event) => {
                this.author = event
            }
        });
        M.CharacterCounter.init(document.querySelectorAll('#textarea2'));
        M.FormSelect.init(document.querySelectorAll('select'));
        M.Datepicker.init(document.querySelectorAll('.datepicker'),{
            defaultDate: this.published_at
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
            cover: ''
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
                author: this.author, category: this.category}).then(() =>{
                M.toast({html: 'Sucess!', classes: 'rounded green'})
                this.$router.push('/mangas')
            }).catch((error)=>{
                M.toast({html: error, classes: 'rounded red'})
            });
        },
        dateChanged(){
            this.published_at = M.Datepicker.getInstance(document.querySelector('.datepicker')).toString();
        },
        getCover(e){
            this.cover = e.target.files[0];
            console.log(this.cover);
        },
        checkType(){
            if(this.manga){

                this.title = this.manga.title
                this.description = this.manga.description
                this.published_at = this.manga.published_at
                this.adult = this.manga.adult
            }
        },
        initChips(){
            if(this.manga){
                M.Chips.init(document.querySelectorAll('.chips-initial'), {
                    data: this.genres
                })
            }
            else{
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
            }
        }
    }
}
</script>

<style scoped>
.col.s12 > .btn {
   width: 100%;
   margin-top: 2%;
}
</style>