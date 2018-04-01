import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import router from './router'

const app = new Vue({
  router,
  // render is a Vuejs function that will return an elements
  // This is equivalent to template: '<app></app>'
  render: h => h(AppLayout)
  // ...AppLayout //this part didn't work. I don't know why but
})

export { app, router }
