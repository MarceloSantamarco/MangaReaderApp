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
                                    <select multiple v-model='genres'>
                                        <option value="" disabled selected>Genres</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                                <div class="input-field col s4">
                                    <select v-model='category'>
                                        <option value="" disabled selected>Category</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
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
                                <div class="file-field input-field col s6">
                                    <div class="btn-small pink">
                                        <span>Manga path</span>
                                        <input type="file" multiple @change='getMangaPath'>
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text">
                                    </div>
                                </div>
                                <div class="file-field input-field col s6">
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
export default {
    name: 'NewManga',
    mounted(){
        M.Autocomplete.init(document.querySelectorAll('.autocomplete'), {data: {'Sui Ishida': null, 'Akira Toryama': null}});
        M.CharacterCounter.init(document.querySelectorAll('#textarea2'));
        M.AutoInit();
    },
    data(){
        return {
            title: '',
            author: '',
            description: '',
            genres: [],
            category: '',
            publishedAt: '',
            adult: 0,
            mangaPath: '',
            cover: ''
        }
    },
    methods:{
        sendManga(){
            console.log(this.title, this.author, this.description, this.genres, this.category, this.published_at, 
            this.adult, this.mangaPath, this.cover);
        },
        getMangaPath(){
            this.mangaPath = event.target.files;
        },
        getCover(){
            this.cover = event.target.files[0];
        },
        dateChanged(){
            this.publishedAt = M.Datepicker.getInstance(document.querySelector('.datepicker')).toString();
            console.log(this.publishedAt)
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