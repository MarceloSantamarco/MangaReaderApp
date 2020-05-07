<template>
    <div class="carousel">
        <a class="carousel-item" href="#"><img src="../../assets/user-icon.png"></a>
        <a class="carousel-item" href="#"><img src="../../assets/user-icon.png"></a>
        <a class="carousel-item" href="#"><img src="../../assets/user-icon.png"></a>
        <a class="carousel-item" href="#"><img src="../../assets/user-icon.png"></a>
        <a class="carousel-item" href="#"><img src="../../assets/user-icon.png"></a>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
    name: 'Contributors',
    mounted(){
        M.AutoInit();
    }
}
</script>

<style scoped>
img{
    border-radius: 5%;
}
</style>