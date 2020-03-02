<template>
    <div class="row">
        <div class="input-field col s3">
            <i class='material-icons prefix search'>search</i>
            <input placeholder="Search" class="validate">
        </div>
        <div class="input-field col s3">
            <select multiple>
                <option value="" disabled selected>Genres</option>
                <option value="1">Seinen</option>
                <option value="2">Shounen</option>
                <option value="3">Terror</option>
            </select>
        </div>
        <div class="input-field col s3">
            <select multiple>
                <option value="" disabled selected>Categories</option>
                <option value="1">Manga</option>
                <option value="2">Manhwa</option>
                <option value="3">Web Comic</option>
                <option value="3">HQ</option>
            </select>
        </div>
        <div class="input-field col s3">
            <select>
                <option value="" disabled selected>Order by</option>
                <option value="1">More recent</option>
                <option value="2">More relevant</option>
                <option value="3">A-Z</option>
                <option value="4">Z-A</option>
            </select>
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