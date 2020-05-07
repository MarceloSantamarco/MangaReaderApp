<template>
    <div class='sidebar'>
        <div class="row">
            <img src="../../assets/user-icon.png" alt="user" width='230'>
        </div>
        <br>
        <hr>
        <div class="row favorites">
            <i class='material-icons left'>book</i>
            <h5>Mais lidos</h5>
            <ul v-if='mostRead'>
                <li v-for='i in 5' :key='i'>favorito {{i}}</li>
            </ul>
            <p v-else style='padding-top: 5%;'>Read something to view this section ;)</p>
        </div>
    </div>
</template>

<script>
// import M from 'materialize-css/dist/js/materialize.js'

export default {
    name: 'UserNavbar'
}
</script>

<style scoped>
.sidebar{
    background-color: #192841 !important;
    position: absolute;
    left: 0;
    top: 8.5%;
    z-index: 1;
    width: 20%;
    height: 100%;  
    overflow-x:hidden; 
    overflow-y:hidden; 
}
img{
    margin-top: 15%;
    border-radius: 10%;
}
img:hover{
    filter: brightness(50%);
}
.favorites{
    text-align: initial !important;
    margin-left: 12%;
    margin-top: 12%;
}
.favorites > ul > li:hover{
    background-color: #244988;
}
</style>