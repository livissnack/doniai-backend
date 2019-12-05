<template>
  <div class="layout">
    <div id="nav">
      <Navbar />
    </div>
    <!-- 排行榜展示 -->
    <router-view />

    <div class="columns">
      <div class="column">
        <Footer />
      </div>
    </div>

    <back-top color="#409EFF" :size="1.1" :slow="10"></back-top>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import Navbar from "@/components/Navbar.vue";
export default {
  name: 'layout',
  components: {
    Footer,
    Navbar
  },
}
</script>

<style lang="less" scoped>
.layout {
  padding: 10px 20px;
  background-color: #f2f7f8;
}

#nav {
  padding: 0 0 10px 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>