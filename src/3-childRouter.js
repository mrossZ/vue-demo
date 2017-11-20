import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//定义组件
const Home = {template:'<div>Home</div>'}
const First ={template:'<div>First</div>'}
const Second = { template:'<div>Second</div>'}

const Child = {
  template:`
    <div class="child">
      <h2>组件</h2>
      <router-view></router-view>
    </div>
  `
};

const child1={template:'<div>默认子菜单</div>'}
const child2={template:'<div>{{$route.name}} 子菜单1 {{$route.params.id}}</div>'}
const child3={template:'<div>子菜单2</div>'}

//定义路由参数
const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/first',
    component:Child,
    children:[
      {
        path:'/',
        name:'Home-First',
        component:child1
      },
      {
        path:'first',
        name:'Home-First-first',
        component:child2
      },
      {
        path:'second',
        name:'Home-First-second',
        component:child3
      }
    ]
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
      <p>{{$route.name}}</p>
      <ol>
        <li><router-link to="/">/Home</router-link></li>
        <li><router-link to="/first">First</router-link></li>
         <!-- 路由传参数 -->       
        <ol>        
         <li><router-link :to="{name:'Home-First-first',params:{id:123}}">/first/first</router-link></li>
         <li><router-link to="/first/second">/first/second</router-link></li>
        </ol>         
      </ol>
      <router-view></router-view>
    </div>
  `
}).$mount('#app');
