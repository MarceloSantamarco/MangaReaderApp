<template>
    <div class="container">
        <h4>Leia seus mangas favoritos aqui com a gente!</h4>
        <UserNavbar v-if='this.$store.state.user'/>
        <UserDashboard v-if='this.$store.state.user'/>
        <SignIn v-else/>
    </div>
</template>

<script>
import SignIn from './user/SignIn'
import UserDashboard from '../views/user/UserDashboard'
import UserNavbar from './user/UserNavbar'

export default {
    name: 'Home',
    components: {
        SignIn,
        UserNavbar,
        UserDashboard
    }
}
</script>

<style scoped>
</style>