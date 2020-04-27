<template>
    <div>
        <a @click="createFavorite"><i class='material-icons heart'>{{favorite ? 'favorite' : 'favorite_border'}}</i></a>
    </div>
           
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'MangaFavorite',
    props:['comic'],
    data(){
        return {
            favorite: false,
        }
    },
    mounted(){
        this.checkFavorite();
    },
    methods:{
        checkFavorite(){
            const comic_id = this.$route.query.comic_id
            axios.get(`${baseApiUrl}/favorites?comic_id=${comic_id}`).then((res)=>{
                res.data.map((fav)=>{
                    if(fav.comic_id.$oid == comic_id){
                        this.favorite = true
                    }
                })
            })
        },
        createFavorite(){
            if(this.favorite){
                this.deleteFavorite()
                return
            }
            axios.post(`${baseApiUrl}/favorites?comic_id=${this.comic._id.$oid}`).then(()=>{
                this.favorite = true
                M.toast({html: `${this.comic.title} adicionado dos favoritos!`, classes: 'roundded'})
            })
        },
        deleteFavorite(){
            axios.delete(`${baseApiUrl}/favorites/${this.comic._id.$oid}`).then(()=>{
                this.favorite = false
                M.toast({html: `${this.comic.title} deletado dos favoritos!`, classes: 'roundded'})
            })
        }
    }
}
</script>

<style scoped>
.heart{
    padding-top: 40% !important;
    font-size: 3rem;
    color: red;
}
</style>