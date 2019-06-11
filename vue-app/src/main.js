import Vue from 'vue';
import App from './App.vue';
import router from './router'
import './assets/styles/reset.css'
import store from './store'

Vue.config.productionTip = false;

//路由
// import Router from 'vue-router'
// import Home from './views/Home'
// import About from './views/About'
// Vue.use(Router)
// const myRouter = new Router({
//   routes:[
//     {
//       path:'/' ,      //跳转到对应页面
//       component:  Home    //定义一个路径，就要写一个要显示的对应组件
//     },
//     {
//        path:'/about',
//        component:About
//     }
//   ],        //路径
//   mode:'history'             //去掉网址处的#
// })
Vue.prototype.bus=new Vue();   //一个真正的全局实例，每个组件内部的this虽然指的也是那个定义的全局vue实例，但是每个组件内部的this都不一样，是由全局vue的信息加上每个组件内部独有的事件、属性，on监听当前实例，直接用this.$on监听的是当前组件的信息，我们在原型上定义一个新的vue实例，这个就是真正所有组件共有的，我们暂且称为bus。我们用this.bus.$on来监听当前实例，监听的就是全局，就能监听到每个组件，这就是兄弟组件传值
new Vue({
  router,
  store,

  // router:myRouter,
  render: h => h(App)
}).$mount('#app');
