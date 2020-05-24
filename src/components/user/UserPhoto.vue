<template>
    <div>
        <a class='modal-trigger tooltipped' data-position="bottom" data-tooltip="Mudar avatar" href="#modal1">
            <img v-if='this.user.photo.length' :src="this.user.photo" alt="user" width='250' height='250'>
            <img v-else src="../../assets/user-icon.png" alt="user" width='230'>
        </a>
        <div id="modal1" class="modal">
            <div class="modal-content">
                <h4>Importe sua foto de perfil!</h4>
                <div class="file-field input-field">
                    <div class="btn red">
                        <span>Arquivo</span>
                        <input type="file" @change='getFile'>
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="modal-close waves-effect waves-green btn-flat" @click='importPhoto'>Enviar</button>
            </div>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import axios from 'axios'
import firebase from 'firebase'
import {baseApiUrl} from '@/global'

export default {
    name: 'UserPhoto',
    data(){
        return {
            user: {
                file: '',
                photo: ''
            }
        }
    },
    mounted(){
        M.Modal.init(document.querySelectorAll('.modal'));
        M.Tooltip.init(document.querySelectorAll('.tooltipped'));
        this.getUserPhoto();
    },
    methods:{
        getFile(e){
            this.user.file = e.target.files[0]
        },
        importPhoto(){
            const user = {photo: `${firebase.storage().ref()}users/${this.$store.state.user.id.$oid}_photo`}
            axios.put(`${baseApiUrl}/users/${this.$store.state.user.id.$oid}`, user).then(()=>{
                firebase.storage().ref('users/' + `${this.$store.state.user.id.$oid}_photo`).put(this.user.file).then(()=>{
                    M.toast({html: 'Sucesso!', classes: 'rounded green'})
                    this.getUserPhoto()
                })
            })
        },
        getUserPhoto(){
            axios.get(`${baseApiUrl}/users/${this.$store.state.user.id.$oid}`).then((res)=>{
                if(!res.data.photo){
                    return
                }
                let photo = res.data.photo.split('/')
                firebase.storage().ref().child(`${photo[3]}/${photo[4]}`).getDownloadURL().then((url)=>{
                    this.user.photo = url
                })
            })
        }
    }
}
</script>

<style scoped>
img{
    margin-top: 15%;
    border-radius: 10%;
}
img:hover{
    filter: brightness(50%);
}
.modal{
    color: #000;
}
.input-field{
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 8%;
}
</style>