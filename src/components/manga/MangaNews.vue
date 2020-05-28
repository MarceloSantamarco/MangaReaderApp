<template>
    <div>
        <div v-for='day in Object.keys(comics)' :key='day' class='day'>
            <div class="badge">
                {{new Date(day).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}}
            </div>
            <div v-for='(manga, idx) in comics[day]' :key='idx' class="column">
                <MangaCard :manga='manga'/> 
            </div>
        </div>
    </div>
</template>

<script>
import MangaCard from './MangaCard'

export default {
    name: 'MangaAll',
    components: {MangaCard},
    props: ['comics']
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.badge{
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
    background-color: #e91e63;
    margin: 2% 1%;
    border-radius: 5%;
}
.column{
  float: left;
  width: 25%;
  padding: 0 10px;
}
.day{
    margin: 0 -5px;
}
.day:after{
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 1000px) {
  .column {
    width: 50%;
    display: block;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>