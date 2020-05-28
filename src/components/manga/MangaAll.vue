<template>
    <div>
        <DataFilters :type='"comic"' @search='changeComic'/>
        <div v-for='(n, i) in order.length' :key='i' class='row center-cols center-align'>
            <div v-for='(manga, idx) in order[i]' :key='idx' class="col s3">
                <MangaCard :manga='manga'/> 
            </div>
        </div>
    </div>
</template>

<script>
import DataFilters from '../DataFilters'
import MangaCard from './MangaCard'

export default {
    name: 'MangaAll',
    components: {DataFilters, MangaCard},
    props: ['comics'],
    mounted(){
        this.sortComics(this.comics);
    },
    data(){
        return {
            order: []
        }
    },
    methods: {
        changeComic(e){
            if(e[0]){
                this.sortComics(e)
            }
            else{
                this.sortComics(this.comics)
            }
        },
        sortComics(comics){
            let aux = [];
            while(comics.length){
                if(comics.length > 4){
                    aux.push(comics.slice(0, 4))
                    comics.splice(0,4)
                }
                else{
                    aux.push(comics)
                    break;
                }
            }
            this.order = aux
        }
    }
}
</script>

<style scoped>

</style>