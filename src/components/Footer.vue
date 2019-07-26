<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Doniai Admin</strong>
        由
        <a class="text-primary" :href="websiteUrl">Livis Snack编码构建</a>
        源码协议
        <a class="text-primary" :href="livissnackMit">MIT</a>
        -- 善始者众，善终者寡！
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      websiteUrl: "https://doniai.com",
      livissnackMit: "https://livissnack.mit-license.org"
    };
  }
};
</script>
<style lang='less' scoped>
.footer {
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 1rem;
}
</style>