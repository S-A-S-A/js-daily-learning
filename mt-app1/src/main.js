import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import './assets/css/main.css';
import store from './store';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.directive('document-click', {
   bind(el,binding,vnode){
     document.addEventListener('click',binding.value,false)
   }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
