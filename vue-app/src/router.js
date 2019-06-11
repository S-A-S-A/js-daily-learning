import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Learn from './views/Learn.vue'
import Student from './views/Student.vue'
import About from './views/About.vue'
import Community from './views/Community.vue'


import Academic from './components/community/Academic'
import Download from './components/community/Download'
import Personal from './components/community/Personal'

import Question from './components/Question'

import Err from './components/Err'
const Home=()=>import('./views/Home.vue')
const ChangeCourse=()=>import('./components/learn/ChangeCourse')

Vue.use(Router)

const router= new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/home',
      name: 'home',
      // alias:'/'        别名；
      components:{
        default:Home,
        // 'academic':Academic

      }
    },
    {
      path: '/about',
      name: 'about',
     component:About
    },
    {
      path: '/learn',
      name: 'learn',
     component:Learn
    },
    {
      path: '/student',
      name: 'student',
     component:Student
    }, 
    {
      path: '/community',
      name: 'community',
     component:Community,
     redirect:'/community/academic',
     meta:{
         login:false
     },
     children:[
       {
        path: 'academic',           //为了省略可以这样简写，不能写/，因为/代表去根目录下找这个文件，会找不到
        name: 'academic',
       component:Academic,
       //2、路由独享守卫
        // beforeEnter(to,from,next){
        //   const answer=confirm('您还没有登录，要登陆后才能浏览信息，要登录吗'); 
        //    if(answer){                                                        
        //         next({name:'personal'})                                         
        //              }else{
        //                 next(false);
        //             }
        // }
       },
       {
        path: 'download',
        name: 'download',
       component:Download
       },
       {
        path: 'personal',
        name: 'personal',
       component:Personal
       }
     ]
    },
    {
      path:'/question/:id',
      name:'question',
      component:Question
    },
    {
      path:'/err.html',
      name:'err',
      component:Err
    },
    {
      path:'/learn/changeCourse',
      name:'changeCourse',
      component:ChangeCourse
    },
    {
      path:'*',
      redirect(to){
           if(to.path=='/'){
             return '/home'
           }else{
             return {name:'err'}
           }
      }
    }
  ]
})
//导航守卫
//1、全局守卫     全局指的是整个router实例

// router.beforeEach((to,from,next)=>{
//   if(to.path==='/community/academic'){
//     const answer=confirm('您还没有登录，要登陆后才能浏览信息，要登录吗');  //confirm是一个确认消息框， 参数为希望对用户显示的文本字符串，提供“是”“否”两种按钮，confirm 方法的返回值为 true 或 false。该消息框是模式对话框：用户必须在响应该对话框（单击一个按钮）将其关闭后，才能进行下一步操作。
//     if(answer){                                                        //alert是一个警告对话框， 参数为希望对用户显示的文本字符串，提供了一个“确定”按钮让用户关闭该消息框，该消息框是模式对话框，也就是说，用户必须先关闭该消息框然后才能继续进行操作。  
//       next({name:'personal'})                                          //prompt是一个提示消息框，可设置两个参数，第一个参数是希望对用户显示的文本字符串，第二个参数是消息框中的输入框中的辅助字符串，如果不写第二个参数，默认文本为 "<undefined>"
//     }else{
//       next(false);
//     }
//   }else{
//     next()
//   }
// })
export default router;
