
//一、 导入vue和vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
//二、使用vueRouter
Vue.use(VueRouter)
//三、定义模板
const first = {
  template:'<div>first.</div>'
};
const second = {
  template:'<div>second.</div>'
};

const Home = {
  template:'<div>Home.</div>'
};

const child1 = {
  template:'<div>child-1.</div>'
};
const child2 = {
  template:'<div>child-2.</div>'
};
const child3 = {
  template:'<div>child-3.</div>'
};

const childView = {
  template:`
    <div class="">
      <h2>组件</h2>
    </div>
  `
}


//四、定义路由参数
const routes=[
  { path:'/'  , component:Home },
  {
    path:'/first' ,
    component:childView,
    children:[
      {path:'/',component:child1},
      {path:'first',component:child2},
      {path:'second',component:child3}

    ]
  },
  { path:'/second'  , component:second },
]

//五、实例化路由对象
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:routes
})
//六、实例化Vue
new Vue({
  router,
  template:`
    <div id='r'>
      <h1>导航</h1>
      <ol>
        <li><router-link to="/">/Home</router-link></li>
        <li><router-link to="/first">/first</router-link> </li>
          <ol>
            <li><router-link to="/first/first">/first/first</router-link></li>
            <li><router-link to="/first/second">/first/second</router-link></li>
          </ol>
       
        <li><router-link to="/second">/second</router-link></li>
      </ol>
      <router-view class=""></router-view>
  </div>`
}).$mount('#app');
