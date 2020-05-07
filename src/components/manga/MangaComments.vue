<template>
    <ul class="collection with-header">
        <li class="collection-header">
            <h4><i class="material-icons inline-icon">comment</i>Comentários</h4>
        </li>
        <li v-for='(com, i) in comments' :key='i' class="collection-item avatar">
            <img v-if='!com.user_id.photo' src="../../assets/user-icon.png" alt="user" class="circle">
            <strong><span class="title">{{com.user_id.name}}</span></strong>
            <p>{{com.text}}</p>
            <span class="secondary-content">
                <i v-if='user && (com.user_id.email == user.email)' @click='deleteComment(com)' class='material-icons' style='color: red'>delete</i>
                <span v-else>{{new Date(com.created_at).toLocaleDateString()}}</span>
            </span>
        </li>
    </ul>  
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'MangaComments',
    props: ['user'],
    mounted(){
        this.getComments()
    },
    data(){
        return {
            comments: []
        }
    },
    methods: {
        getComments(){
            axios.get(`${baseApiUrl}/comments?comic_id=${this.$route.query.comic_id}`).then((res)=>{
                this.comments = res.data
            })
        },
        deleteComment(comment){
            axios.delete(`${baseApiUrl}/comments/${comment._id.$oid}`).then(()=>{
                M.toast({html: 'Comentário excluído!', classess: 'roundded'})
                this.$emit('deleted')
            })
        }
    }
}
</script>

<style scoped>

</style>