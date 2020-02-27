<template>
    <div class="container">
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
.center-cols > .col {
  float:none;
  display: inline-block;
  text-align: initial;
}
.container{
    color: #000;
    width: 90%;
}
</style>