<template>
  <div id='r'>
    <h1>导航</h1>

    <ol>
      <li><router-link to="/">/home</router-link></li>

      <h4>嵌套路由</h4>
      <li>
        <router-link to="/user">/user</router-link>
        <router-link to="/user/foo">/user/foo</router-link>
        <router-link to="/user/foo/profile">/user/foo/profile</router-link>
        <router-link to="/user/foo/posts">/user/foo/posts</router-link>
      </li>

      <h4>动态路由</h4>
      <li><router-link to="/name/foo">/name/foo</router-link></li>
      <li><router-link to="/name/bar">/name/bar</router-link></li>
    </ol>

    <h4>**************路由出口**************</h4>
    <router-view></router-view>
    <router-view name = "first"></router-view>
    <router-view name = "second"></router-view>
  </div>
</template>
