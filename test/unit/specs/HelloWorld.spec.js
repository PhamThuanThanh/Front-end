import Vue from 'vue'
import HomeCustomer from '@/components/HomeCustomer'

describe('HomeCustomer.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HomeCustomer)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
