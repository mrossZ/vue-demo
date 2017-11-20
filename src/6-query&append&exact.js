import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//定义组件

const Home ={template:"<div>Home</div>"}
const users={
    template:`
      <div class="user">
        <h2>User</h2>
        <router-view></router-view>
      </div>
    `
};
const user = {
  template:`
    <div>{{$route.params.username}}</div>
  `
}



//定义路由参数
const routes = [
  {path:"/",name:"Home",component:Home},
  {path:"/users",component:users,
      children:[
        {path:"username",name:"user",component:user}
      ]
  },
];

//定义路由对象
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:routes
});

//实例化Vue 并定义模板
new Vue({
  router,
  template:`
    <div id='r'>
      <h1>导航</h1>
      <ol>
        <li><router-link to="/">/home</router-link></li>
        <li><router-link to="/users">/first</router-link></li>
        <ol>
            <li><router-link :to="{path:'/users/zw',query:{aaa:'bbbb'}}">zw</router-link></li>
        </ol>
      </ol>
      <router-view></router-view>
    </div>
  `
}).$mount('#app');



