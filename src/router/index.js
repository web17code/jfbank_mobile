import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserAccount from '../pages/userAccount.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserAccount',
      component: UserAccount
    }
  ]
})
