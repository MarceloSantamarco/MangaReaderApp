<template>
    <div class="container">
        <h4>Read your favorite mangas here with us!</h4>
        <div class="row center">
            <div class="col s4"></div>
            <div v-if='!this.$store.state.user' class="col s4">
                <SignIn/>
            </div>
        </div>
    </div>
</template>

<script>
import SignIn from './components/SignIn'

export default {
    name: 'Home',
    components: {
        SignIn
    }
}
</script>

<style>
</style>