// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './components/route/route'
import App from './App'
import vueResource from 'vue-resource'
import './common/css/index.css'
import './common/stylus/style.styl'

Vue.config.productionTip = false
Vue.use(vueResource)
let app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
console.log(app)
