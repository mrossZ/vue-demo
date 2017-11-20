<template>
  <div id='r'>
    <h1>导航</h1>
    <ol>
      <li><router-link to="/">/home</router-link></li>
      <li><router-link to="/users">/users</router-link></li>
      <li><router-link to="/name/foo">/name/foo</router-link></li>
      <li><router-link to="/name/bar">/name/bar</router-link></li>
      <ol>
        <li>
          <router-link :to="{path:'/users/zw',query:{aaa:'bbbb'}}">zw</router-link>
        </li>
      </ol>
    </ol>
    <router-view></router-view>
  </div>
</template>
