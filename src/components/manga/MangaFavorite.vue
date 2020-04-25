<template>
    <div>
        <a class="modal-trigger" :href="favorite ? '#' : '#modal1'" @click="favorite ? deleteFavorite : createFavorite"><i class='material-icons heart'>{{favorite ? 'favorite' : 'favorite_border'}}</i></a>
        <div id="modal1" class="modal">
            <div class="modal-content">
                <h4>{{comic.title}} adicionado aos favoritos!</h4>
                <h6>Dê uma nota a esse mangá ;)</h6>
                <div class="container">
                    <i v-for='i in 5' :key='i' :id='i' class="material-icons large star" @mouseover="changeStars" @mouseleave="changeStars">star_border</i>
                </div>
            </div>
            <div class="modal-footer">
                <a class="modal-close waves-effect btn-flat">Pular</a>
            </div>
        </div>
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
            favorite: false
        }
    },
    mounted(){
        M.Modal.init(document.querySelectorAll('.modal'));
        this.checkFavorite();
    },
    methods:{
        changeStars(e){
            for(let i = e.target.id; i>0; i--){
                let a = document.getElementById(i)
                if(a){
                    a.innerHTML = e.type == 'mouseover' ? 'star' : 'star_border'
                }
            }
        },
        checkFavorite(){
            axios.get(`${baseApiUrl}/favorites?comic_id=${this.comic._id.$oid}`).then((res)=>{
                if(res.data.includes(this.comic)){
                    this.favorite = true
                }
            })
        },
        createFavorite(){
            axios.post(`${baseApiUrl}/favorites?comic_id=${this.comic._id.$oid}`).then((res)=>{
                this.favorite = true
                console.log(res.data)
            })
        },
        deleteFavorite(){
            axios.delete(`${baseApiUrl}/favorites`, this.comic).then(()=>{
                this.favorite = false
                M.toast({html: `${this.comic.title} deletado dos favoritos!`, classes: 'roundded'})
            })
        }
    }
}
</script>

<style scoped>
.container{
    color: #000;
    padding-top: 5%;
}
.modal-content{
    text-align: center
}
.heart{
    padding-top: 40% !important;
    font-size: 3rem;
}

.modal-trigger{
    color: red;
}
</style>