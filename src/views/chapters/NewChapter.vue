<template>
    <div class='card-panel'>
        <h4>Adicione mais um capítulo a este mangá!</h4>
        <p>Arquive todas as páginas do capítulo nomeadas em ordem crescente</p>
        <form class='col s12' @submit.prevent='sendChapter'>
            <div class="row">
                <div class="input-field col s6">
                    <input type="number" name='title' v-model='chapter.title'>
                    <label for="title">Número</label>
                </div>
                <div class="file-field input-field col s6">
                    <input type="file" multiple @change="setFile">
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="Clique para selecionar os arquivos">
                    </div>
                </div>
            </div>
            <div class="row send">
                <button class='btn red' type='submit'>Enviar<i class="material-icons left">send</i></button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl} from '@/global'
import M from 'materialize-css/dist/js/materialize.js'
import firebase from 'firebase'

export default {
    name: 'NewChapter',
    data(){
        return {
            chapter: {
                title: null,
                folder: ''
            },
            fileList: []
        }
    },
    methods: {
        sendChapter(){
            axios.post(`${baseApiUrl}/chapters?comic_id=${this.$route.query.comic_id}`, this.chapter).then(()=>{
                M.toast({html: 'Estamos criando seu capítulo, espere por favor :)', classes: 'roundded'})
                this.fileList.forEach((file)=>{
                    firebase.storage().ref(`chapters/${this.$route.query.comic_id}/${this.chapter.title}/` + `${file.name}`).put(file).then(()=>{
                        console.log('File successfully added to storage')
                    })
                }) 
                this.$router.push('/')
                M.toast({html: 'Sucesso!', classes: 'roundded green'})
            }).catch((error)=>{ 
                M.toast({html: error, classes: 'roundded red'})
            })
        },
        setFile(e){
            this.chapter.folder = `${firebase.storage().ref()}chapters/${this.$route.query.comic_id}/${this.chapter.title}`
            this.fileList = e.target.files
        }
    }
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