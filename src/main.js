import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-awesome/icons/angle-left'
import 'vue-awesome/icons/ellipsis-h'
import 'vue-awesome/icons/newspaper'
import 'vue-awesome/icons/shield-alt'
import 'vue-awesome/icons/bell'
import 'vue-awesome/icons/angle-right'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.component('v-icon', Icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
