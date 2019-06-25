import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: () =>import('./layout/Default.vue' )
    },
    {
      path: '/blank',
      name: 'BlankPage',
      component: () =>import('./layout/Blank.vue' )
    }
  ]
})
