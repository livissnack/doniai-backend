<template>
  <nav class="navbar navbar-border navbar-pd10">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img :src="logo" alt="Doniai" />
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <b-dropdown hoverable aria-role="menu">
          <a class="navbar-item" slot="trigger" role="button">
            <span>Doniai管理</span>
            <b-icon icon="menu-down"></b-icon>
          </a>
          <b-dropdown-item aria-role="listitem" @click="jumpRoute('articles')">文章管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem" @click="jumpRoute('blacklists')">黑名单管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem" @click="jumpRoute('books')">书籍管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem" @click="jumpRoute('questions')">提问管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem" @click="jumpRoute('lessons')">课程管理</b-dropdown-item>
        </b-dropdown>

        <b-dropdown hoverable aria-role="menu">
          <a class="navbar-item" slot="trigger" role="button">
            <span>微信管理</span>
            <b-icon icon="menu-down"></b-icon>
          </a>

          <b-dropdown-item aria-role="listitem">公众号管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">小程序管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">支付管理</b-dropdown-item>
        </b-dropdown>

        <b-dropdown hoverable aria-role="menu">
          <a class="navbar-item" slot="trigger" role="button">
            <span>阿里管理</span>
            <b-icon icon="menu-down"></b-icon>
          </a>

          <b-dropdown-item aria-role="listitem">小程序管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">云服务器管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">支付管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">店铺管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">淘宝数据采集</b-dropdown-item>
        </b-dropdown>

        <b-dropdown hoverable aria-role="menu">
          <a class="navbar-item" slot="trigger" role="button">
            <span>其它管理</span>
            <b-icon icon="menu-down"></b-icon>
          </a>

          <b-dropdown-item aria-role="listitem">产品管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">博客管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">系统设置</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">对外接口管理</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">数据统计</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">权限分配</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">数据可视化</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="navbar-end">
        <b-dropdown v-model="navigation" position="is-bottom-left" aria-role="menu">
          <a class="navbar-item" slot="trigger" role="button">
            <span>更多操作</span>
            <b-icon icon="menu-down"></b-icon>
          </a>

          <b-dropdown-item has-link aria-role="menuitem">
            <a href="https://google.com" target="_blank">
              <b-icon icon="link"></b-icon>快速Google
            </a>
          </b-dropdown-item>
          <b-dropdown-item value="home" aria-role="menuitem" @click="jumpRoute('')">
            <b-icon icon="home"></b-icon>回到首页
          </b-dropdown-item>
          <b-dropdown-item value="products" aria-role="menuitem">
            <b-icon icon="cart"></b-icon>产品管理
          </b-dropdown-item>
          <b-dropdown-item value="blog" aria-role="menuitem">
            <b-icon icon="book-open"></b-icon>博客管理
          </b-dropdown-item>
          <b-dropdown-item value="settings">
            <b-icon icon="settings"></b-icon>系统设置
          </b-dropdown-item>
          <b-dropdown-item value="logout" aria-role="menuitem">
            <b-icon icon="logout"></b-icon>系统退出
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navigation: "home",
      logo: require("../assets/logo.png")
    };
  },
  methods: {
    jumpRoute(name) {
      this.$router.push({ path: `/${name}` });
    }
  }
};
</script>

<style lang="less" scoped>
.navbar-pd10 {
  padding-left: 10px;
  padding-right: 10px;
}
.navbar-border {
  border-bottom: 1px solid #f5f5f5;
}
</style>
