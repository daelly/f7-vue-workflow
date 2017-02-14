export default [
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
  {
      path: '/custom-form/:formId/',
      component: require('./pages/custom-form.vue')
  },
  {
      path: '/form/',
      component: require('./pages/form.vue')
  },
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  },
  {
      path: '/demo/',
      component: require('./pages/demo.vue')
  }
]