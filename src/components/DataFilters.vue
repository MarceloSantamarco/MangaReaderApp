<template>
    <div class="row">
        <div class="input-field col s6">
            <i class='material-icons prefix search'>search</i>
            <input placeholder="Search" class="validate" v-model='searched'>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import {baseApiUrl} from '@/global'
import axios from 'axios'

export default {
    name: 'DataFilters',
    props: ['type'],
    data(){
        return {
            searched: ''
        }
    },
    mounted(){
        M.AutoInit();
    },
    methods:{
        search(){
            switch (this.type) {
                case 'comic':
                    axios.get(`${baseApiUrl}/search?comic_name=${this.searched}`).then((res)=>{
                        this.$emit('search', res.data)
                    })
                    break;
                case 'author':
                axios.get(`${baseApiUrl}/search?author_name=${this.searched}`).then((res)=>{
                    this.$emit('search', res.data)
                })
                break;
                case 'category':
                axios.get(`${baseApiUrl}/search?category_name=${this.searched}`).then((res)=>{
                    this.$emit('search', res.data)
                })
                break;
                case 'genre':
                    axios.get(`${baseApiUrl}/search?genre_name=${this.searched}`).then((res)=>{
                        this.$emit('search', res.data)
                    })
                    break;
                default:
                    break;
            }
        }
    },
    watch:{
        searched(){
            this.search();
        }
    }
}
</script>

<style scoped>
.validate{
    border-radius: 5px;
    color: #FFF;
}
.search{
    color: #FFF
}
</style>