<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <router-link to="/goods">商品</router-link>
      <router-link to="/ratings">评价</router-link>
      <router-link to="/seller">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'

  export default {
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body
        if (response.errno === 0) {
          this.seller = response.data
        }
      })
    },
    components: {
      'v-header': header
    }
  }
</script>

<style>
  .tab {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    flex-direction: row;
  }

  .tab a {
    flex:1 1 10%;
    text-align: center;
  }

  .router-link-active {
    color: #f00;
  }
</style>
