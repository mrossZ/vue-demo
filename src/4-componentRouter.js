import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//定义组件
const Home = {template:'<div>Home</div>'}
const First ={template:'<div>First</div>'}
const Second = { template:'<div>Second</div>'}
const Three = {template:'<div>Three</div>'}

//定义路由参数
const routes = [
  {
    path:'/',components:{
      default:Home,
      left:First,
      right:Second
    }
  },
  {
    path:'/first',components:{
      default:Three,
      left:First,
      right:Second
    }
  },
  {
    path:'/second',
    component:Second
  }
];

//实例路由对象
const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:routes
});

//实例化Vue对象
new Vue({
  router,
  template:`
    <div clas="r">
      <h1>导航</h1>     
        <li><router-link to="/">/Home</router-link></li>
        <li><router-link to="/first">/First</router-link></li> 
        <li><router-link to="/second">/Second</router-link></li>             
      <router-view></router-view>
      <router-view name="left" style="float: left;width:50%;height:300px;background-color: aquamarine; "></router-view>
      <router-view name="right" style="float: left;width:50%;height:300px;background-color: antiquewhite; "></router-view>
    </div>
  `
}).$mount('#app');
