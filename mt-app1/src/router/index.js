import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: () =>import('../layout/Default.vue'),
      redirect:'/index',
      children:[{
        path:'/index',
        name:'index',
        component:()=>import('../page/index.vue')
      },{
        path:'s/:name',
        name:'goods',
        component:()=>import('../page/goodsList.vue')
      },{
        path:'/changeCity',
        name:'changeCity',
        component:()=>import('../page/changeCity.vue')
      }
    ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: () =>import('../layout/Blank.vue'),
      children:[{
        path:'/login',
        name:'login',
        component:()=>import('../page/login.vue')
      },{
        path:'/register',
        name:'register',
        component:()=>import('../page/register.vue')
      }
    ]
    }
  ]
})
