<template>
  <div class='container'>
    <div class="row">
      <div class="col s12">
        <div class="card-panel">
          <h3>Join Us!</h3>
          <div class='row'>
            <form class='col s12' @submit="sendUser">
              <div class="row">
                <div class="col s6 input-field">
                  <i class="material-icons prefix">account_circle</i>
                  <input type="text" name="name" v-model="name">
                  <label for="name">Name</label>
                </div>
                <div class="col s6 input-field">
                  <i class="material-icons prefix">email</i>
                  <input type="text" name="email" v-model="email">
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="row">
                <div class="col s6 input-field">
                  <i class="material-icons prefix">phone</i>
                  <input type="text" name="phone" v-model="phone">
                  <label for="phone">Phone</label>
                </div>
                <div class="col s6 input-field">
                  <i class="material-icons prefix">perm_contact_calendar</i>
                  <input type="text" class="datepicker" placeholder='Birthdate' @change="dateChanged">
                </div>
              </div>
              <button type='submit' class='btn pink'>Create</button>
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

export default {
    name: 'NewUser',
    mounted(){
      M.AutoInit();
    },
    data(){
      return {
        name: '',
        email: '',
        phone: '',
        birthdate: ''
      }
    },
    methods: {
      dateChanged(){
        this.birthdate = M.Datepicker.getInstance(document.querySelector('.datepicker')).toString();
        console.log(this.birthdate)
      },
      sendUser(e){
        e.preventDefault();

        let user = {name: this.name, email: this.email, phone: this.phone, birthdate: this.birthdate}

        axios.post('http://localhoast:3000/users/new', user).then((res)=>{
          console.log(res)
        }).catch((error)=>{
          console.log(error)
        })
      }
    }
}
</script>

<style>

</style>