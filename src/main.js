// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/

import FontAwesome from './css/libs/css/font-awesome.min.css'

// Import App Custom Styles
import AppStyles from './css/app.css'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app'

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

Vue.component('text-component', function (resolve) {
    var comp = require('./components/text.vue');
    resolve(comp);
})

Vue.component('select-component', function (resolve) {
    var comp = require('./components/select.vue');
    resolve(comp);
})

Vue.component('textarea-component', function (resolve) {
    var comp = require('./components/textarea.vue');
    resolve(comp);
})

Vue.component('date-component', function (resolve) {
    var comp = require('./components/date.vue');
    resolve(comp);
})

Vue.component('serialNum-component', function (resolve) {
    var comp = require('./components/serialNum.vue');
    resolve(comp);
})

Vue.component('radio-component', function (resolve) {
    var comp = require('./components/radio.vue');
    resolve(comp);
})

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  }
});
