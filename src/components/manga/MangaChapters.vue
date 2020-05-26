<template>
    <ul class="collection with-header">
        <li class="collection-header">
            <h4><i class="material-icons inline-icon">library_books</i>Capítulos</h4>
        </li>
        <router-link v-for="(ch, i) in chapters" :key='i' class="collection-item" :to="{path: '/chapters/show', query: {chapter_id: ch._id.$oid}} ">
            {{ch.title}}
            <span class='secondary-content'>{{new Date(ch.created_at).toLocaleDateString()}}</span>
        </router-link>
    </ul>
</template>

<script>
// import M from 'materialize-css/dist/js/materialize.js'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'MangaChapters',
    data(){
        return {
            chapters: []
        }
    },
    mounted(){
        this.getChapter();
    },
    methods: {
        getChapter(){
            axios.get(`${baseApiUrl}/chapters?comic_id=${this.$route.query.comic_id}`).then((res)=>{
                this.chapters = res.data
            })
        }
    }
}
</script>

<style scoped>

</style>