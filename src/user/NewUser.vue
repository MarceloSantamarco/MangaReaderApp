<template>
  <div class='container'>
    <div class="row">
      <div class="col s12">
        <div class="card-panel">
          <h3>Cadastre-se!</h3>
          <div class='row'>
            <form class='col s12' @submit="sendUser">
              <div class="row">
                <div class="col s6 input-field">
                  <i class="material-icons prefix">account_circle</i>
                  <input type="text" name="name" v-model="user.name">
                  <label for="name" class='active'>Nome</label>
                </div>
                <div class="col s6 input-field">
                  <i class="material-icons prefix">email</i>
                  <input type="email" name="email" v-model="user.email" class='validate'>
                  <label for="email" class='active'>Email</label>
                  <span class="helper-text" data-error="Algo está errado..." data-success="Tudo OK!"></span>
                </div>
              </div>
              <div class="row">
                <div class="col s6 input-field">
                  <i class="material-icons prefix">phone</i>
                  <input type="text" name="phone" v-model="user.phone">
                  <label for="phone" class='active'>Telefone</label>
                </div>
                <div class="col s6 input-field">
                  <i class="material-icons prefix">perm_contact_calendar</i>
                  <input type="text" class="datepicker" placeholder='Data de nascimento' @change="dateChanged">
                </div>
              </div>
              <div class="row">
                <div class="col s6 input-field">
                  <i class="material-icons prefix" @click='showPassword'>{{icon}}</i>
                  <input :type="fieldType" name="password" v-model="user.password">
                  <label for="password" class='active'>Senha</label>
                </div>
                 <div class="col s6 input-field">
                  <i class="material-icons prefix">lock</i>
                  <input type="password" name="password_confirmation" v-model="user.password_confirmation">
                  <label for="password_confirmation" class='active'>Confirmação de senha</label>
                </div>
              </div>
              <button type='submit' class='btn pink right'>Criar<i class="material-icons right">arrow_forward</i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'NewUser',
    mounted(){
      M.updateTextFields();
      M.AutoInit();
    },
    data(){
      return {
        user: {
          name: '',
          email: '',
          phone: '',
          birthdate: '',
          password: '',
          password_confirmation: ''
        },
        visible: 0,
        fieldType: 'password',
        icon: 'visibility_off'
      }
    },
    methods: {
      dateChanged(){
        this.user.birthdate = M.Datepicker.getInstance(document.querySelector('.datepicker')).toString();
      },
      sendUser(e){
        e.preventDefault()
        axios.post(`${baseApiUrl}/users`, this.user).then((res)=>{
          M.toast({html: `${res.message}`, classes: 'rounded green'})
          this.$router.push('Mangas');
        }).catch((error)=>{
          console.log(error)
          M.toast({html: `${error}!`, classes: 'rounded red'})
        })
      },
      showPassword(){
        this.visible = !this.visible

        if(this.visible){
          this.fieldType = 'password'
          this.icon = 'visibility_off'
        }
        else{
          this.fieldType = 'text'
          this.icon = 'visibility'
        }
      }
    }
}
</script>

<style scoped>

</style>