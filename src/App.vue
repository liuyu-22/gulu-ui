<template>
  <div>导航栏|
    <router-link to='/'>Lynn</router-link>|
    <router-link to='/xxx'>Lynn2</router-link>

  </div>
  <hr />
  <router-view />
</template>

<script>
import Lynn from './components/lynn.vue'

export default {
  name: 'App',
}
</script>
