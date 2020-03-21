<template>
    <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
            <img class='activator' src="../../assets/oi.png">
            <h6 class="card-title grey-text text-darken-4">{{ title }}</h6>
        </div>
        <div class="card-content activator">
            <p>{{ description.substr(0, 105) }}</p>
        </div>
        <div class="card-reveal activator">
            <span class="card-title grey-text text-darken-4">{{ title }}<i class="material-icons right">close</i></span>
            <hr>
            <p> {{ genres }} </p>
            <hr>
            <p>{{ description }}</p>
        </div>
        <div class="card-action">
            <button class='waves-effect waves-light btn pink'>
                <router-link to="/mangas/show">Ver mais</router-link>
            </button>
            <span>
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star_half</i>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MangaCard',
    data(){
        return {
            title: 'Tokyo Ghoul',
            description: `Imagine uma história em que você é o protagonista. Provavelmente seria uma tragédia, não? Pois essa é a 
                história de Kaneki... Estranhos assassinatos estão acontecendo em Tokyo. Devido a evidência líquida na cena,
                a polícia concluiu que os ataques são resultados de um "comedor" de um tipo vampiro. Kaneki é um jovem de 
                18 anos cursando a faculdade, apaixonado por romances japoneses, ele e seu amigo Hide, criam a teoria de 
                que os vampiros estão imitando os humanos, por isso nunca foram vistos. Mau eles sabem que essa 
                teoria pode ser verdade...`,
            genres: 'Seinen, Sobrenatural, Terror, Psicológico',
            rate: 4
        }
    }
}
</script>

<style scoped>
.card-action{
    display: flex;
    justify-content: space-between;
}
.card{
    border-radius: 25px;
}
.card .card-action:last-child{
    border-radius: 25px;
}
</style>