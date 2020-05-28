<template>
    <div v-if='pages.length' class='container'>
        <div class="chapter-number">
            <select class='browser-default' name='chapter' v-model='currentChapter'>
                <option v-for='i in chapters.length' :key='i' :value="i">
                    {{i}}
                </option>
            </select>
            <label for="chapter">Capítulo</label>
        </div>
        <div class="chapter-pages">
            <div class="row">
                <div class="col s4">
                    <button class='btn red waves waves-effect' @click='currentPageNumber <= 0 ? false : currentPageNumber--'><i class='material-icons'>chevron_left</i></button>
                </div>
                <div class="col s4">
                    <select class='browser-default' name='page' v-model='currentPageNumber'>
                        <option selected value="0">0</option>
                        <option v-for='i in pages.length-1' :key='i' :value="i">
                            {{i}}
                        </option>
                    </select>
                    <label for="page">Página</label>
                </div>
                <div class="col s4">
                    <button class='btn red waves waves-effect' @click='currentPageNumber >= pages.length-1 ? false : currentPageNumber++'><i class='material-icons'>chevron_right</i></button>
                </div>
            </div>
        </div>
        <div class="page">
            <a @click='pageClick'>
                <img :src="pages[currentPageNumber]" alt="page" width='800' height='1100'>
            </a>
        </div>
    </div>
    <div v-else class="container empty">
        <Loader/>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl} from '@/global'
import M from 'materialize-css/dist/js/materialize.js'
import firebase from 'firebase'
import Loader from '../components/Loader'

export default {
    name: 'ShowChapter',
    components: {Loader},
    data(){
        return {
            chapter: {},
            chapters: [],
            pages: [],
            currentPageNumber: 0,
            currentChapter: null
        }
    },
    created(){
        this.getChapter(this.$route.query.chapter_id);
        this.getChapters();
    },
    mounted(){
        M.FormSelect.init(document.querySelectorAll('select'));
    },
    methods:{
        getChapter(chapter_id){
            axios.get(`${baseApiUrl}/chapters/${chapter_id}`).then((res)=>{
                this.chapter = res.data
                this.getPages();
            })
        },
        getChapters(){
            axios.get(`${baseApiUrl}/chapters?comic_id=${this.$route.query.comic_id}`).then((res)=>{
                this.chapters = res.data
            })
        },
        getPages(){
            let url = this.chapter.folder.split('/')
            const ref = firebase.storage().ref()
            ref.child(`/${url[3]}/${url[4]}/${url[5]}`).listAll().then((reference)=>{
                this.getUrl(reference);
            })
        },
        getUrl(reference){
            const ref = firebase.storage().ref()
            reference.items.map((item)=>{
                ref.child(item.fullPath).getDownloadURL().then((url)=>{
                    this.pages.push(url)
                    this.pages.sort()
                })
            })
        },
        pageClick(){
            if(this.currentPageNumber >= this.pages.length-1){
                this.callToast()
                return
            }
            this.currentPageNumber++
            setTimeout(()=>{window.scrollTo(0, 200)}, 300)
        },
        callToast(){
            let toastHTML = "<span>Este capítulo chegou ao fim!</span><button class='btn-flat toast-action'>Indo para o próximo...</button>";
            M.toast({html: toastHTML, completeCallback: ()=>{this.currentChapter++}});
        }
    },
    watch:{
        currentChapter(){
            this.chapters.map((ch)=>{
                if(ch.title == this.currentChapter){
                    this.pages = []
                    this.currentPageNumber = 0
                    this.getChapter(ch._id.$oid)
                }
            })
        }
    }
}
</script>

<style scoped>
.chapter-pages{
    margin: 6% 3%;
}
.page{
    background-color: rgba(18, 46, 71, 0.2);
    padding: 2% 0%;
}
.chapter-number{
    margin: 0 45%;
}
.empty{
    padding: 10%;
}
</style>