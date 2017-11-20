import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = {template:'<div>Home....</div>'};
const first = {template:'<div>First</div>'}
const second = {template:'<div>Second</div>'}

const routes=[
  {path:'/',component:Home},
  {path:'/first',component:first},
  {path:'/second',component:second}
];

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:routes
});

new Vue({
  router,
  template:`
    <div id="r">
      <h1>导航</h1>
      <ul>
        <li><router-link to="/">/home</router-link></li>
        <li><router-link to="/first">/first</router-link></li>
        <li><router-link to="/second">/second</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount('#app');

