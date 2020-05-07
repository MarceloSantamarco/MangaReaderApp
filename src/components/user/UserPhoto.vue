<template>
    <div>      
        <a class="modal-trigger" href="#modal1">Modal</a>

        <div id="modal1" class="modal">
            <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
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

</style>