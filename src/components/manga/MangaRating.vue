<template>
    <div class='rate' v-show='!rate'>
        <a class='modal-trigger btn green' :href='rate ? "" : "#modal1"' @click="rate ? '' : rateManga"><i class='material-icons right'>star</i> Avaliar</a>
        <div id="modal1" class="modal">
            <div class="modal-content">
                <h4>Dê uma nota a esse mangá ;)</h4>
                <div class="container">
                    <i v-for='i in 5' :key='i' :id='i' class="material-icons large star" @mouseover="changeStars" @mouseleave="changeStars" @click='rateManga(i)'>star_border</i>
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
    name: 'MangaRating',
    props: ['comic'],
    data(){
        return {
            rate: false
        }
    },
    mounted(){
        M.Modal.init(document.querySelectorAll('.modal'));
        this.checkRate();
    },
    methods: {
        changeStars(e){
            for(let i = e.target.id; i>0; i--){
                let a = document.getElementById(i)
                if(a){
                    a.innerHTML = e.type == 'mouseover' ? 'star' : 'star_border'
                }
            }
        },
        rateManga(i){
            axios.post(`${baseApiUrl}/ratings`, {comic_id: this.comic._id.$oid, rate: i}).then(()=>{
                M.toast({html: `${this.comic.title} avaliado. Obrigado!`, classess: 'roundded green'})
                M.Modal.getInstance(document.querySelector('.modal')).close()
            })
        },
        checkRate(){
            const comic_id = this.$route.query.comic_id
            axios.get(`${baseApiUrl}/ratings`).then((res)=>{
                res.data.map((rate)=>{
                    if(rate.comic_id.$oid == comic_id){
                        this.rate = true
                    }
                })
            })
        }
    }
}
</script>

<style scoped>
.rate{
    padding-left: 55%;
}
.modal-content{
    text-align: center;
}
.container{
    padding-top: 5%;
}
</style>