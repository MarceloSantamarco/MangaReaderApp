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
                        <div>{{n+2}} votos
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

export default {
    name: 'MangaRating',
    props: ['comic'],
    data(){
        return {
            stars: ['star_border', 'star_border', 'star_border', 'star_border', 'star_border']
        }
    },
    created(){
        this.fillStars(this.comic.rate);
    },
    mounted(){
        M.Collapsible.init(document.querySelectorAll('.collapsible'))
    },
    methods:{
        fillStars(rate){
            let num = Math.floor(rate)
            for(let i = num; i > 0; i--){
               this.stars[i-1] = 'star'
            }
            if(!Number.isInteger(rate)){
                this.stars[num] = 'star_half'
            }
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