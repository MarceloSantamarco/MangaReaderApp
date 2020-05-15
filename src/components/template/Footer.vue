<template>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5>Contribuidores populares</h5>
                    <Contributors/>
                </div>
                <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Questions?</h5>
                <p>Por favor, reporte seus problemas e sugestões</p>
                <ul>
                    <li><a class="grey-text text-lighten-3" href="#!">(11) 94566-6745</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">mangashere@example.com</a></li>
                </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                Marcelo Santamarco's © 2020 - Todos os direitos reservados
                <a class="grey-text text-lighten-4 right" href="#!">Sobre</a>
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