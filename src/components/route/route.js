import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '../goods/goods.vue'
import ratings from '../ratings/ratings.vue'
import seller from '../seller/seller.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller },
  { path: '/', redirect: '/goods' }
]
const router = new VueRouter({
  routes
})

export default router
