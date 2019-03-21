import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

Vue.use(BootstrapVue)

require('./assets/scss/main.scss')

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  render: h => h(App)
}).$mount('#app')
