import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'

// Here we are breaking these up into Async components because if you are only
// visiting one site you don't need all the other components loaded
// WE ARE REVERTING THIS BECAUSE IT IS GREAT FOR CLIENT SIDE rendering
// BUT WE ARE GOING TO DO "SERVER SIDE RENDERING" BY THE END OF THIS
// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Login.vue')
// const NotFound = () => System.import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  // We can use the history API in modern Browsers to avoid seeing # in the urlParams
  mode: 'history',
  // We can change the default router-link-active class for active routes to
  // a class that our CSS library can use
  linkActiveClass: 'is-active',
  // Scroll Behavior is essentionally a method that accepts to path, from path
  // and the scroll position that the page was in
  // Here we are seeting the y position to 0 so that we scroll to the top of the page
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  // In the routes array we can link Routes with Components
  routes: [
    {
      path: '/category/:id', // Here we are going to use dynamic routing
      name: 'category', // this is a naming of the rule it allows us to pass json objects into the router-link to attribute
      component: Category
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/category/front-end'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
}
)

export default router
