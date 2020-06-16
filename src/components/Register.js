import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue, axios, VueAxios)

export default {
  name: 'FileField',
  data () {
    return {
      fullname: '',
      email: '',
      phone: '',
      birthday: '',
      gender: '',
      isRegister: false,
      message: null

    }
  },

  methods: {
    register () {
      var bodyFormData = new FormData()
      bodyFormData.set('fullname', this.fullname)
      bodyFormData.set('email', this.email)
      bodyFormData.set('phone', this.phone)
      bodyFormData.set('birthday', this.birthday)
      bodyFormData.set('gender', this.gender)

      axios.post('http://127.0.0.1:8000/register',
      bodyFormData,
          {
            headers: {
              'Content-Type':'multipart/form-data'
            }
          }
        )
        .then(response => {
          // handle success
          if (response.data['data'] !== 'Fail') {
            this.message = 'Success'
          } else this.isRegister = true
        })
        .catch(function (response) {
          // handle error
          console.log(response)
        })
    }
  }
}
