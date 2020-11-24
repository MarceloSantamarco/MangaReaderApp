<template>
    <div class='sidebar'>
        <div class="row">
            <UserPhoto/>
        </div>
        <br>
        <hr>
        <div class="row favorites">
            <i class='material-icons left'>book</i>
            <h5>Mais lidos</h5>
            <ul v-if='Object.keys(mostRead).length'>
                <li v-for='(n, i) in comics' :key='i'>
                    <a href="">
                        <img :src='n.cover' alt='cover' height='70' width='70'/>
                        <span>{{n.title}}</span>
                    </a>
                </li>
            </ul>
            <p v-else style='padding-top: 5%;'>Read something to seer this section ;)</p>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import UserPhoto from './UserPhoto'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'UserNavbar',
    components:{UserPhoto},
    data(){
        return {
            mostRead: {},
            comics: []
        }
    },
    mounted(){
        this.getMostRead();
    },
    methods: {
        getMostRead(){
            axios.get(`${baseApiUrl}/most_read`).then((res)=>{
                this.mostRead = res.data
                this.getComics(res.data)
            })
        },
        getComics(data){
            data.map((obj)=>{
                axios.get(`${baseApiUrl}/comics/${obj[0].$oid}`).then((res)=>{
                    let photo = res.data.cover.split('/')
                    firebase.storage().ref().child(`${photo[3]}/${photo[4]}`).getDownloadURL().then((url)=>{
                        res.data.cover = url
                    })
                    this.comics.push(res.data)
                })
            })
        }
    }
}
</script>

<style scoped>
.sidebar{
    background-color: #192841 !important;
    position: absolute;
    left: 0;
    top: 8.5%;
    z-index: 1;
    width: 20%;
    height: 100%;  
    overflow-x:hidden; 
    overflow-y:hidden; 
}
.favorites{
    text-align: initial !important;
    margin-left: 12%;
    margin-top: 12%;
}
.favorites > ul > li:hover{
    background-color: #244988;
}
</style>