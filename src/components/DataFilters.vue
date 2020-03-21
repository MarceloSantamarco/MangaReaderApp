<template>
    <div class="row">
        <div class="input-field col s6">
            <i class='material-icons prefix search'>search</i>
            <input placeholder="Search" class="validate">
        </div>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
    name: 'DataFilters',
    mounted(){
        M.AutoInit();
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