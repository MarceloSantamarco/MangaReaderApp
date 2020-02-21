<template>
    <div class="row center">
        <div class="col s4"></div>
        <div class="col s4">
            <div class="card-panel">
                <h4>Welcome Back!</h4>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="text" class="validate">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" type="text" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>
                 <div class="row">
                    <div class="input-field col s12">
                        <button class='waves-effect waves-light btn btn-large pink'>Sign In</button>
                    </div>
                 </div>
                 <div class="row">
                    <div class="input-field col s12">
                        <a href='#'>Forgot your password?</a><br>
                        <a href='#'>Create an account</a>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignIn'
}
</script>

<style scoped>
.row{
    color: black;
}
</style>