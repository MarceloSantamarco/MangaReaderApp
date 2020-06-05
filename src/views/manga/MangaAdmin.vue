<template>
    <div class="container">
        <h3>Here you manage all mangas in the system!</h3>
        <h5>Be careful... ;)</h5>
        <DataFilters/>
        <MangaTable/>
    </div>
</template>

<script>
import MangaTable from '../../components/manga/MangaTable'
import DataFilters from '../../components/DataFilters'

export default {
    name: 'MangaAdmin',
    components:{MangaTable, DataFilters}
}
</script>

<style scoped>
.container{
    margin-top: 5%;
    margin-bottom: 5%;
}
</style>