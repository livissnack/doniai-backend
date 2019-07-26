<template>
  <div class="layout">
    <!-- 排行榜展示 -->
    <router-view />

    <div class="columns">
      <div class="column">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Footer from '@/components/Footer.vue'
  export default {
    name: 'layout',
    components: {
      Footer,
    },
  }
</script>

<style lang="less" scoped>
  .layout {
    padding: 10px 20px;
  }
</style>