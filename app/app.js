import Vue from 'nativescript-vue'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'

Vue.use(RadSideDrawer)

import App from './components/Login'

Vue.config.silent = !__DEV__

new Vue({
  render: h => h(App)
}).$start()
