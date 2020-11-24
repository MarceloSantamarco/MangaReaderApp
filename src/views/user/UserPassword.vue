<template>
    <div class="container">
        <div class="card-panel">
            <h4>Esqueceu sue senha?</h4>
            <h6>Nos diga seu email para receber uma nova senha!</h6>
            <div class="row">
                <form class='col s12' @submit.prevent="sendEmail">
                    <div class="row">
                        <br>
                        <div class="col s2"></div>
                        <div class="col s8 input-field">
                            <input type="text" name='email' v-model="email">
                            <label for="email">Email</label>
                        </div>
                        <div class="col s2">
                        </div>
                    </div>
                    <div class="row">
                    <div class="col s12">
                        <button type='submit' class='btn pink'>Send</button>
                        <br>
                        <p v-if='message && error' style="color: red;">{{message}}</p>
                        <p v-else-if='message' style="color: green;">{{message}}</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'UserPassword',
    data(){
        return {
            email: '',
            error: 1,
            message: ''
        }
    },
    methods: {
        sendEmail(){
            axios.post(`${baseApiUrl}/forgot_password`, {email: this.email}).then(()=>{
                this.error = 0
                this.message = 'Sucesso! Por favor, cheque a sua caixa de entrada :)';
            }).catch((error)=>{
                console.log(error);
                this.error = 1;
                this.message = error;
            });
        }
    }
}
</script>

<style scoped>
</style>