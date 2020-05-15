<template>
    <div>
        <a class='modal-trigger' href="#modal1"><img src="../../assets/user-icon.png" alt="user" width='230'></a>
        <div id="modal1" class="modal">
            <div class="modal-content">
                <h4>Importe sua foto de perfil!</h4>
                <div class="file-field input-field">
                    <div class="btn">
                        <span>Arquivo</span>
                        <input type="file">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Enviar</a>
            </div>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
// import axios from 'axios'
// import {baseApiUrl} from '@/global'

export default {
    name: 'UserPhoto',
    mounted(){
        M.Modal.init(document.querySelectorAll('.modal'));
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