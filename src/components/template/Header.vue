<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo left"><router-link to='/'><img src='#' alt='Logo'></router-link></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/mangas">Mangas</router-link></li>
                <li v-if='this.$store.state.user'><UserDropdown :user='this.$store.state.user'/></li>
            </ul>
        </div>
    </nav>
</template>

<script>
import UserDropdown from './UserDropdown'

export default {
    name: 'Header',
    components: {UserDropdown}
}
</script>

<style scoped>
.nav-wrapper{
    background-color: #084d6e;
    color: white;
}
nav {
    margin-bottom: 3%
}
</style>
