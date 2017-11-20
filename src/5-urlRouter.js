import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


/*小知识点****
*
* ':'在vue里表示绑定的意思
*
**/


const routes = [
  {path:'/'},
  {path:'/params/:aaa/:bbb'},
  {path:'/params-regex/:id(\\d+)'}
]

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:routes
});

new Vue({
  router,
  template:`
    <div>
      <h1>Router Url</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/params/111/333">/params/111/333</router-link></li>
        <li><router-link to="/params-regex/222">/params/222</router-link></li>
      </ul>
      <p>Show</p>
      <pre>     
        <code> 
        {{JSON.stringify($route,null,2)}}
        </code>
      </pre>
    </div>
  `
}).$mount('#app');
