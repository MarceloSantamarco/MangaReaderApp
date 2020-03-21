<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <div class="card horizontal">
                    <div class="card-image">
                        <img src="../assets/oi.png">
                    </div>
                    <div class="card-stacked">
                        <h2 class="header">Tokyo Ghoul</h2>
                        <div class="card-content">
                            <p>
                                Imagine uma história em que você é o protagonista. Provavelmente seria uma tragédia, não? Pois essa é a 
                                história de Kaneki... Estranhos assassinatos estão acontecendo em Tokyo. Devido a evidência líquida na cena,
                                a polícia concluiu que os ataques são resultados de um "comedor" de um tipo vampiro. Kaneki é um jovem de 
                                18 anos cursando a faculdade, apaixonado por romances japoneses, ele e seu amigo Hide, criam a teoria de 
                                que os vampiros estão imitando os humanos, por isso nunca foram vistos. Mau eles sabem que essa 
                                teoria pode ser verdade...
                            </p>
                        </div>
                        <div class="card-content">
                            <p><strong>Author: </strong>
                                <span>Sui Ishida</span>
                            </p>
        
                            <p><strong>Status: </strong>
                                <span>Finalizado</span>
                            </p>
                            <br>
                            <ul class="collapsible">
                                <li>
                                    <div class="collapsible-header">
                                        5.0
                                        <i class="material-icons">star</i>
                                        <i class="material-icons">star</i>
                                        <i class="material-icons">star</i>
                                        <i class="material-icons">star</i>
                                        <i class="material-icons">star</i>
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
                        </div>
                        <div class="card-action">
                            <p>Seinen, Sobrenatural, Terror, Psicológico</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="collection with-header">
            <li class="collection-header">
                <h4><i class="material-icons inline-icon">library_books</i>Chapters</h4>
            </li>
            <a v-for="n in 14" :key='n' class="collection-item" href='#'>
                {{n}}
                <span class='secondary-content'>27/09/2019</span>
            </a>
        </ul>
        <ul class="collection with-header">
            <li class="collection-header">
                <h4><i class="material-icons inline-icon">comment</i>Comments</h4>
            </li>
            <li class="collection-item avatar">
                <img src="../assets/user-icon.png" alt="user" class="circle">
                <strong><span class="title">José Ramalho</span></strong>
                <p> Muito TOP !!!! </p>
                <span class="secondary-content">
                    23/09/2019
                </span>
            </li>
            <li class="collection-item avatar">
                <img src="../assets/user-icon.png" alt="user" class="circle">
                <strong><span class="title">Edson Ferreira</span></strong>
                <p> Achei meio bosta esse final </p>
                <span class="secondary-content">
                    20/09/2019
                </span>
            </li>
            <li class="collection-item avatar">
                <img src="../assets/user-icon.png" alt="user" class="circle">
                <strong><span class="title">Astolfo Antunes</span></strong>
                <p>Não esperava muito desse mangá mas a história me surpreendeu</p>
                <span class="secondary-content">
                    19/09/2019
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
    name: 'ShowManga',
    mounted(){
        M.Collapsible.init(document.querySelectorAll('.collapsible'));
    }
}
</script>

<style scoped>
.container{
    color: #000;
    text-align: initial;
}
img{
    width: 70%;
}
.col.s2 > h4{
    margin: auto;
    line-height: 70%;
}
.card-content > p{
    font-size: 18px;
}
.collapsible-header{
    display: flex;
    align-items: center;
    font-size: 35px;
    padding-right: 2%;
}
.collapsible-header > i{
    padding-left: 12%;
}
.inline-icon {
   vertical-align: top;
}
</style>