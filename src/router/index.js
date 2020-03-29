import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home2 from '@/views/home2'
import home from '@/views/home'
import teachershow from '@/views/teachershow'
import about from '@/views/about'
import notice from '@/views/notice'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   redirect:"/home",
    // },
    // {
    //   path: '/home',
    //   component: home,
    //   meta: "首页",  
    //   redirect:"/home/teachershow",
    //   children:[
    //     { path: "teachershow", component: teachershow,meta: " "},
    //   ],
    // },
    // {
    //   path: '/home',
    //   component: home, 
    //   children:[
    //     { path: "about", component: about,meta: " "},
    //     { path: "notice", component: notice,meta: " "},
    //   ],
    // }

      {
        path: '/',
        redirect:"/home2",
      },
      {
        path: '/home2',
        component: home2,
      },
      {
        path: '/home2/home',
        component: home,
        meta: "首页",  
        redirect:"/home2/home/teachershow",
        children:[
          { path: "/home2/home/teachershow", component: teachershow,meta: " "},
          { path: "/home2/home/about", component: about,meta: " "},
          { path: "/home2/home/notice", component: notice,meta: " "},
        ],
      },
      // {
      //   path: '/home',
      //   component: home, 
      //   children:[
      //     { path: "about", component: about,meta: " "},
      //     { path: "notice", component: notice,meta: " "},
      //   ],
      //}
  ]
})
