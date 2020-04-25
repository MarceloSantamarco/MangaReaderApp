<template>
    <ul class="collection with-header">
        <li class="collection-header">
            <h4><i class="material-icons inline-icon">library_books</i>Chapters</h4>
        </li>
        <a v-for="n in 14" :key='n' class="collection-item" href='#'>
            {{n}}
            <span class='secondary-content'>27/09/2019</span>
        </a>
    </ul>
</template>

<script>
export default {
    name: 'MangaChapters'
}
</script>

<style>

</style>