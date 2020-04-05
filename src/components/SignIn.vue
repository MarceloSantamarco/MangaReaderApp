<template>
    <div class="card-panel">
        <h4>Welcome Back!</h4>
        <form @submit="signin">
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="text" class="validate" v-model="user.email">
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" type="text" class="validate" v-model="user.password">
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <button class='waves-effect waves-light btn btn-large pink' type='submit'>Sign In</button>
                </div>
            </div>
        </form>
        <div class="row">
            <div class="input-field col s12">
                <a href='#'><router-link to="/users/password">Forgot your password?</router-link></a><br/>
                <a href='#'><router-link to="/users/new">Create an account</router-link></a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl, userKey} from '@/global'

export default {
    name: 'SignIn',
    data(){
        return{
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signin(e){
            axios.post(`${baseApiUrl}/sessions/create`, this.user).then((res)=>{
                e.preventDefault()
                this.$store.commit('setUser', res.data)
                localStorage.setItem(userKey, JSON.stringify(res.data))
                console.log(res)
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
.card-panel {
    color: black;
}
</style>