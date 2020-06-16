<template >
  <div>
    <div class="md-layout md-gutter" style="text-align: center; padding-top: 1%">
    </div>

    <md-toolbar class="md-transparent" :md-elevation="0">
      <div class="md-toolbar-section-start">  
        <h1 class="md-title">List Customer</h1>
      </div>

      <md-field md-clearable class="md-toolbar-section-end">
        <md-input placeholder="Search by ID Customer" v-model="search" @input="searchOnTable" />
      </md-field>
    </md-toolbar>

    <md-table md-card >
      <md-table-row id="headerTMS">
        <md-table-head md-sort-by="id" >STT</md-table-head>
        <md-table-head > ID Customer</md-table-head>
        <md-table-head > Full Name</md-table-head>
        <md-table-head > Gender</md-table-head>
        <md-table-head > Birthday</md-table-head>
        <md-table-head > Email</md-table-head>
        <md-table-head > Phone </md-table-head>
      </md-table-row>
      <md-table-row id ="timesheet-table" v-for="(item) in customers" :key="item.id">
        <md-table-cell >{{item.id }}</md-table-cell>
        <md-table-cell >{{item.customer_id}}</md-table-cell>
        <md-table-cell>{{ item.full_name }}</md-table-cell>
        <md-table-cell>{{ item.gender }}</md-table-cell>
        <md-table-cell>{{ item.birthday }}</md-table-cell>
        <md-table-cell>{{ item.email }}</md-table-cell>
        <md-table-cell>{{ item.phone }}</md-table-cell>

        <md-table-cell></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import format from 'date-fns/format'

Vue.use(VueMaterial, axios, VueAxios)
const toLower = text => {
  return text.toString().toLowerCase()
}

const searchByID = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.id_customer).includes(toLower(term)) ||  toLower(item.id_invoice).includes(toLower(term)))
  }

  return items
}
export default {
  name: "CustomerList",
  data () {
    return {
        search: null,
        searched: [],
        allCustomer: null,
        customers: null,
        user: this.$store.getters.username,
    }
  },
  methods: {
    getCustomerList () {
      const token = localStorage.getItem('user-token')
      console.log("^^^^^^^^^^" + token)
      
      if (token) {
        axios.defaults.headers.common['Authorization'] = token
        axios.get('http://localhost:8000/listCustomer')
          .then(response => {
            // handle success
            if (response.data['username'] === '') {
              this.$router.push('login')
            } else {
              let data = {'success': true,
                'username': response.data['username']}
              this.$store.dispatch('loginSuccess', data)
              this.allCustomer = response.data['data']
              this.customers = this.allCustomer
              this.user = this.$store.getters.username
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .then(function () {
            // always executed
          })
      } else this.$router.push('login')
    },
    searchOnTable () {
      this.customers = searchByID(this.allCustomer, this.search)
    }
  }
};
</script>

<style scoped>
  .md-field {
    max-width: 300px;
  }
  .modal-mask {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    text-align: center;
    width: 405px;
    margin: 90px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-container-leaveRequest {
    width: 600px;
    margin: 60px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: 'Montserrat', sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

</style>