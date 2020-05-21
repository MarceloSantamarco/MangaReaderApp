<template>
    <div class="container">
        <div class="row">
            <div class="card-panel">
                <h4>Novo Autor</h4>
                <h6>Crie um autor para ser referenciado em futuros mangas</h6>
                <br>
                <form @submit="createAuthor">
                    <div class="row">
                        <div class="col s12 input-field">
                            <i class='material-icons prefix'>account_circle</i>
                            <input type="text" name='name' v-model="name">
                            <label for="name">Nome</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field send">
                            <button type='submit' class='btn red'>Criar <i class='material-icons right'>send</i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <AuthorsTable/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import AuthorsTable from '../components/authors/AuthorsTable'
import {baseApiUrl} from '@/global'

export default {
    name: 'NewAuthor',
    components: {AuthorsTable},
    data(){
        return{
            name: ''
        }
    },
    methods:{
        createAuthor(){
            axios.post(`${baseApiUrl}/authors`, {name: this.name}).then((res)=>{
                console.log(res)
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
.send{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.card-panel{
    margin: 3% 10%;
}
</style>