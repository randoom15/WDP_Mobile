import Vue from 'nativescript-vue'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'

Vue.use(RadSideDrawer)

import Login from './components/Login'

Vue.config.silent = !__DEV__

new Vue({
  render: h => h(Login)
}).$start()
