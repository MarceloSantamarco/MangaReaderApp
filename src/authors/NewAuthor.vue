<template>
    <div class="container">
        <div class="row">
            <div class="col s2"></div>
            <div class="col s8">
                <div class="card-panel">
                    <h4>New Author</h4>
                    <form @submit="createAuthor">
                        <div class="row">
                            <div class="col s12 input-field">
                                <i class='material-icons prefix'>account_circle</i>
                                <input type="text" name='name' v-model="name">
                                <label for="name">Name</label>
                            </div>
                            <div class="col s12">
                                <button type='submit' class='btn pink'>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col s2"></div>
        </div>
        <div class="row">
            <AuthorsTable/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import AuthorsTable from '../components/authors/AuthorsTable'

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
            axios.post('http://localhost:3000/authors', {name: this.name}).then((res)=>{
                console.log(res)
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
.row{
    margin: 3% !important;
}
</style>