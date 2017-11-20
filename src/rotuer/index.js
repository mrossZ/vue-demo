import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home'
import Name from '../components/name'
import NestRouter from '../components/nestRouter'
import NameProfile from '../components/nameProfile'
import NamePost from '../components/namePost'

Vue.use(VueRouter)

//定义组件

export default new VueRouter({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    //动态路径参数 以冒号开头
    {
      /*
       '/name/foo' 和 '/name/bar' 都将映射到相同的路由页面
      */
      path:'/name/:id/', // '/name/foo' params==> { "id": "foo" }
      //path:'/name/:username/post/:post_id',// 'name/foo/post/111'  params==>{"username":"foo" , "post":"111"}
      component:Name
    },
    // 嵌套路由
    {
      path:'/user/:id',
      component:NestRouter,
      children: [
        {
          path:'profile',
          component:NameProfile
        },
        {
          path:'posts',
          component:NamePost
        }
      ]
    }
  ]
})
