<template>
    <div class="container">
        <table class="highlight centered">
            <thead>
            <tr>
                <th>Name</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for='n in authors' :key='n.id'>
                <td>{{n.name}}</td>
                <td><button class='btn red' @click="deleteAuthor(n)"><i class='material-icons'>delete</i></button></td>
            </tr>
            </tbody>
      </table>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'AuthorsTable',
    data(){
        return {
            authors: {}
        }
    },
    mounted(){
        this.getAuthors();
    },
    methods:{
        getAuthors(){
            axios.get(`${baseApiUrl}/authors`).then((res)=>{
                this.authors = res.data
            }).catch((error)=>{
                console.log(error)
            });
        },
        deleteAuthor(n){
            axios.delete(`${baseApiUrl}/authors/${n._id.$oid}`).then((res)=>{
                console.log(res)
            }).catch((error)=>{
                console.log(error)
            });
        }
    },
    watch:{
        authors(){
            this.getAuthors();
        }
    }
}
</script>

<style scoped>
.container{
    background-color: white;
    color: #000;
}
</style>