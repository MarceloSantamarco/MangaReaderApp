<template>
    <div class="container">
        <DataFilters/>
        <div class='row center-cols center-align'>
            <div class="col s3">
                <MangaCard/> 
            </div>
            <div class="col s3">
                <MangaCard/> 
            </div>
            <div class="col s3">
                <MangaCard/> 
            </div>
            <div class="col s3">
                <MangaCard/> 
            </div>
        </div>
        <div class='row center-cols center-align'>
            <div class="col s3">
                <MangaCard/> 
            </div>
            <div class="col s3">
                <MangaCard/> 
            </div>
            <div class="col s3">
                <MangaCard/> 
            </div>
            <div class="col s3">
                <MangaCard/> 
            </div>
        </div>
    </div>
</template>

<script>
import MangaCard from './components/MangaCard'
import DataFilters from './components/DataFilters'
export default {
    name: 'Mangas',
    components: {MangaCard, DataFilters}
}
</script>

<style scoped>
.center-cols > .col{
    float:none;
    display: inline-block;
    text-align: initial;
}
.container{
    color: #000;
    width: 90%;
}
</style>