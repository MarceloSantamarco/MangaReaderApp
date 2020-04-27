<template>
    <ul class="collapsible">
        <li>
            <div class="collapsible-header">
                {{comic.rate}}
                <i v-for='(n, i) in stars' :key='i' class="material-icons star">{{n}}</i>
            </div>
            <div class="collapsible-body">
                <ul class="collection">
                    <li v-for='n in 5' :key='n' class="collection-item">
                        <div>{{ratings[n]}} votos
                            <span class="secondary-content">
                                <i v-for='i in n' :key='i' class="material-icons">star</i>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>  
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'MangaRate',
    props: ['comic'],
    data(){
        return {
            ratings: []
        }
    },
    mounted(){
        M.Collapsible.init(document.querySelectorAll('.collapsible'))
        this.getRatings()
    },
    methods:{
        getRatings(){
            const comic_id = this.$route.query.comic_id
            axios.get(`${baseApiUrl}/ratings_count?comic_id=${comic_id}`).then((res)=>{
                this.ratings = res.data
            })
        }
    },
    computed:{
        stars(){
            let stars = []
            let num = this.comic.rate

            for(let i=0; i<Math.floor(num); i++){
                stars[i] = 'star'
            }

            if(!Number.isInteger(num)){
                stars.push('star_half')
            }

            if(stars.length < 5){
                for(let i=stars.length; i<5; i++){
                    stars.push('star_border')
                }
            }

            return stars
        }
    }
}
</script>

<style>
.collapsible-header{
    display: flex;
    align-items: center;
    font-size: 35px;
    padding-left: 10% !important;
}
.collapsible-header > i{
    padding-left: 12%;
}
.star{
    padding-left: 2%;
    color: gold;
}
</style>