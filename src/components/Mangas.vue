<template>
    <div class="container">
        <div class="row">
            <div class="input-field col s10">
                <i class='material-icons prefix search'>search</i>
                <input placeholder="Search" class="validate">
            </div>
            <div class="input-field col s2">
                <button class='dropdown-trigger btn' data-target='filter1'> 
                    <i class='material-icons left'>filter_list</i>
                    Filter
                </button>
                <ul id='filter1' class='dropdown-content'>
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li class="divider" tabindex="-1"></li>
                    <li><a href="#!">three</a></li>
                    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                </ul>
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
import MangaCard from './MangaCard'
export default {
    name: 'Mangas',
    components: {MangaCard}
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
.validate{
    border-radius: 5px;
    color: #FFF;
}
.search{
    color: #FFF
}

</style>