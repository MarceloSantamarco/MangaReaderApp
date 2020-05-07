<template>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5>Popular contributors</h5>
                    <Contributors/>
                </div>
                <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Questions?</h5>
                <p>Please, report your problems and sugestions</p>
                <ul>
                    <li><a class="grey-text text-lighten-3" href="#!">(11) 94566-6745</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">mangashere@example.com</a></li>
                </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                © 2020 Copyright Text
                <a class="grey-text text-lighten-4 right" href="#!">About us</a>
            </div>
        </div>
    </footer>
</template>

<script>
import Contributors from './Contributors'

export default {
    name: 'Footer', 
    components:{
        Contributors
    }
}
</script>

<style scoped>
.page-footer{
    text-align: center;
    background-color: #084d6e;
    margin-top: 12.8%;
}
.carousel{
    height: 180px;
}
</style>