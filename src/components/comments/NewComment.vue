<template>
    <div class='comment-container'>
        <textarea v-model='commentBody' class="materialize-textarea" placeholder='Escreva um novo comentário'></textarea>
        <button @click='sendComment' class='btn green'>Comentar <i class='material-icons right'>send</i></button>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'NewComment',
    data(){
        return {
            commentBody: ''
        }
    },
    methods: {
        sendComment(){
            axios.post(`${baseApiUrl}/comments`, {comic_id: this.$route.query.comic_id, text: this.commentBody}).then(()=>{
                M.toast({html: 'Comentário adicionado!', classes: 'roundded green'})
                this.commentBody = ''
                this.$emit('commented')
            })
        }
    }
}
</script>

<style scoped>
    textarea{
        background-color: #FFF !important;
        border-radius: 10px !important;
        width: 80% !important;
        padding-left: 10px !important;
    }
    .btn{
        width: 15%;
        margin-top: 0.5rem;
    }
    .comment-container{
        display: flex;
        flex-direction: column;
        padding-top: 2%;
        padding-bottom: 2%;
    }
</style>