<template>
    <div class="container">
        <ul class="tabs">
            <li class="tab col s4"><a class="active" href="#news">Novidades</a></li>
            <li class="tab col s4"><a href="#categories">Categorias</a></li>
            <li class="tab col s4"><a href="#genres">Gêneros</a></li>
        </ul>
        <DataFilters/>
        <div id="news">
            <div v-for='n in 4' :key='n' class='row center-cols center-align'>
                <div v-for='i in 4' :key='i' class="col s3">
                    <MangaCard/> 
                </div>
            </div>
        </div>

        <div id="categories">
            <div class="container">
                <div class="collection">
                    <a v-for='n in 4' :key='n' href="#!" class="collection-item">Web comic<i class="material-icons secondary-content">remove_red_eye</i></a>
                </div>
            </div>
        </div>

        <div id="genres">
            <div class="container">
                <div class="collection">
                    <a v-for='n in 10' :key='n' href="#!" class="collection-item">Terror<i class="material-icons secondary-content">remove_red_eye</i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MangaCard from '../components/manga/MangaCard'
import DataFilters from '../components/DataFilters'

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
.tabs{
    background-color: #063e58;
}
.tabs .tab > a{
    color: #FFF !important;
}
.container .collection{
    text-align: justify;
    width: 60%;
}
#genres .container{
    display: flex;
    justify-content: center;
}
#categories .container{
    display: flex;
    justify-content: center;
}
</style>