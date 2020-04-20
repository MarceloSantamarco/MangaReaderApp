<template>
    <div>
        <DataFilters :type='type' @search='searchMethod'/>
        <div class="container link-rows">
            <div v-if='Object.keys(object).length' class="collection">
                <a v-for='(n, i) in term || object' :key='i' class="collection-item" @click='search(n.name, type)'>
                    {{n.name}}
                </a>
            </div>
            <div v-else class='empty'>
                No records yet
            </div>
        </div>
    </div>
</template>

<script>
import DataFilters from './DataFilters'

export default {
    name: 'LinkRows',
    components: {DataFilters},
    props: ['type', 'object'],
    data(){
        return {
            term: ''
        }
    },
    methods:{
        searchMethod(e){
            switch(this.type){
                case 'category':
                    this.changeCategory(e)
                    break;
                case 'genre':
                    this.changeGenre(e)
                    break;
                case 'author':
                    this.changeAuthor(e)
                    break;
            }
        },
        changeAuthor(e){
            if(e[0]){
                this.term = e
            }
        },
        changeGenre(e){
            if(e[0]){
                this.term = e
            }
        },
        changeCategory(e){
            if(e[0]){
                this.term = e
            }
        },
        search(item, type){
            this.$emit('filtered', [item, type])
        }
    }
}
</script>

<style scoped>
.collection{
    margin-bottom: 8%;
    margin-top: 8%;
}
.container .collection{
    text-align: center;
    width: 65%;
}
.empty {
    background-color: #D3D3D3;
    text-align: center;
    width: 60%;
    margin: 2%;
    padding: 5%;
    font-size: 18px;
    border-radius: 5px;
}
.link-rows{
    display: flex;
    justify-content: center;
}
</style>