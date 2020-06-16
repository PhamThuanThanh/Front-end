import Vue from 'vue'
import Router from 'vue-router'
import HomeCustomer from '../components/HomeCustomer.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import ShowInvoice from '../components/home/ShowInvoice.vue'
import HomeAdmin from '../components/home/HomeAdmin.vue'
import CustomerList from '../components/home/CustomerList.vue'
import VoucherList from '../components/home/VoucherList.vue'

// import store from '../store/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeCustomer',
      component: HomeCustomer
    },
    {
      path: '/admin',
      component: HomeAdmin,
      meta: { auth: true },
      children: [
        {
          path: '/showInvoice',
          name: 'ShowInvoice',
          component: ShowInvoice,
          meta: { auth: true },
          visible: true
        },
        {
          path: '/customer',
          name: 'Customer',
          component: CustomerList,
          meta: { auth: true },
          visible: true
        },
        {
          path: '/voucher',
          name: 'Voucher',
          component: VoucherList,
          meta: { auth: true },
          visible: true
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
