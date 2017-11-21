import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home'
import Name from '../components/name'
import NestRouter from '../components/nestRouter'
import NameProfile from '../components/nameProfile'
import NamePost from '../components/namePost'
import UserHome from '../components/userHome'

Vue.use(VueRouter)

function dynamicPropsFn (route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}
//定义组件

export default new VueRouter({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      components:{
        default:Home,
        first:UserHome,
        second:NamePost
      }

    },
    //动态路径参数 以冒号开头
    {
      /*
       '/name/foo' 和 '/name/bar' 都将映射到相同的路由页面
      */
      path:'/name2', // '/name/foo' params==> { "id": "foo" }
      //path:'/name/:username/post/:post_id',// 'name/foo/post/111'  params==>{"username":"foo" , "post":"111"}
      props:true,
      component:Name
    },
    { path: '/', component: NestRouter }, // No props, no nothing
    { path: '/hello/:name', component: NestRouter, props: true }, // Pass route.params to props
    { path: '/static', component: NestRouter, props: { name: 'world' }}, // static values
    { path: '/dynamic/:years', component: NestRouter, props: dynamicPropsFn }, // custom logic for mapping between route and props
    { path: '/attrs', component: NestRouter, props: { name: 'attrs' }},// 嵌套路由
    {
      path:'/user/:id',//  'user/foo/***'
      component:NestRouter,
      children: [
        {
          path:'',
          component:UserHome,
        },
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
