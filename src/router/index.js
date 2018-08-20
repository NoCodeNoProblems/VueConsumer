import Vue from 'vue'
import VueRouter from 'vue-router'
import Body from '@/components/Body'
import Teste from '@/components/Teste'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Body',
    component: Body
  },
  {
    path: '/teste',
    name: 'Teste',
    component: Teste
  }

]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
