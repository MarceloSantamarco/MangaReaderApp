<template>
    <div class="container">
        <div class="row">
            <div class="col s2"></div>
            <div class="col s8">
                <div class="card-panel">
                    <h4>Forgot your password?</h4>
                    <h6>Give us your email to receive your password</h6>
                    <div class="row">
                        <form class='col s12' @submit="sendEmail">
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
            <div class="col s2"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'UserPassword',
    data(){
        return {
            email: '',
            error: 0,
            message: ''
        }
    },
    methods: {
        sendEmail(e){
            e.preventDefault();

            axios.post('http://localhost:3000/users/password', this.email).then((res)=>{
                console.log(res);
                this.message = 'Sucess! Please check your email inbox';
            }).catch((error)=>{
                console.log(error);
                this.error = 1;
                this.message = "E-mail doesn't exist";
            });
        }
    }
}
</script>

<style scoped>
</style>