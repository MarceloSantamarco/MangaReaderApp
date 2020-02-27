<template>
    <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
            <img class='activator' src="../assets/oi.png">
        </div>
        <div class="card-content activator">
            <span class="card-title grey-text text-darken-4">Tokyo Ghoul</span>
            <p>Imagine uma história em que você é o protagonista. Provavelmente seria uma tragédia, não? 
                Pois essa é a história de Kaneki... 
            </p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Tokyo Ghoul<i class="material-icons right">close</i></span>
            <p>Imagine uma história em que você é o protagonista. Provavelmente seria uma tragédia, não? Pois essa é a 
                história de Kaneki... Estranhos assassinatos estão acontecendo em Tokyo. Devido a evidência líquida na cena,
                a polícia concluiu que os ataques são resultados de um "comedor" de um tipo vampiro. Kaneki é um jovem de 
                18 anos cursando a faculdade, apaixonado por romances japoneses, ele e seu amigo Hide, criam a teoria de 
                que os vampiros estão imitando os humanos, por isso nunca foram vistos. Mau eles sabem que essa 
                teoria pode ser verdade...
            </p>
        </div>
        <div class="card-action">
            <button class='waves-effect waves-light btn pink'>Ver mais</button>
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
    name: 'MangaCard'
}
</script>

<style scoped>
.card-action{
    display: flex;
    justify-content: space-between;
}
</style>