<template>
    <div class='card-panel'>
        <h4>Adicione mais um capítulo a este mangá!</h4>
        <p>Arquive todas as páginas do capítulo nomeadas em ordem crescente</p>
        <form class='col s12'>
            <div class="row">
                <div class="input-field col s6">
                    <input type="text" name='title'>
                    <label for="title">Título</label>
                </div>
                <div class="file-field input-field col s6">
                    <input type="file" multiple>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="Clique para selecionar os arquivos">
                    </div>
                </div>
            </div>
            <div class="row send">
                <button class='btn red' type='submit'>Enviar <i class="material-icons left">send</i></button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewChapter'
}
</script>

<style scoped>
.card-panel{
    margin: 10%;
    padding: 2% 4%;
}
.send{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 1%;
}
</style>