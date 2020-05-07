<template>
    <div class='container'>
        <div class="favorites">
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header">
                        Favoritos
                        <span class="new badge">3</span>
                    </div>
                    <div class="collapsible-body">
                        <ul class="collection">
                            <li v-for='i in 3' :key='i' class="collection-item avatar">
                                <img src="../assets/user-icon.png" alt="cover" class='circle'>
                                <span class="title">Title</span>
                                <a href="#!" class="secondary-content"><span class="new badge">4</span></a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="notifications">
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header">
                        Notificações
                        <span class="new badge">2</span>
                    </div>
                    <div class="collapsible-body">
                        <ul class="collection">
                            <li v-for='i in 2' :key='i' class="collection-item">
                                <span class="title">Title</span>
                                <a href="#!" class="secondary-content"></a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="readig-progress">
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header">
                        Progresso
                        <span class="new badge">3</span>
                    </div>
                    <div class="collapsible-body">
                        <ul class="collection">
                            <li v-for='i in 3' :key='i' class="collection-item avatar">
                                <img src="../assets/user-icon.png" alt="cover" class='circle'>
                                <span class="title">Title</span>
                                <a href="#!" class="secondary-content"><span class="badge green">{{i*2}}%</span></a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
    name: 'UserDashboard',
    mounted(){
        M.Collapsible.init(document.querySelectorAll('.collapsible'))
    }
}
</script>

<style scoped>
.collapsible{
    color: #000;
    margin-top: 8%;
    margin-bottom: 8%;
}
.collapsible-body{
    background-color: #FFF;
    text-align: initial;
}
.badge.green{
    color: #FFF;
}
.container{
    margin-top: 10%;
    margin-bottom: 10%;
}
</style>