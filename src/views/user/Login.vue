<template>
  <section class="dvu-box">
    <div class="sign-main dvu-card-shadow dvu-card">
      <b-field label="电子邮箱" type="is-danger" message="This email is invalid">
        <b-input type="email" icon="email" value="john@" maxlength="30"></b-input>
      </b-field>

      <b-field label="密码" type="is-success" message="This password is invalid">
        <b-input type="password" icon="lock" value="iwantmytreasure" password-reveal></b-input>
      </b-field>

      <b-field type="is-success">
        <b-button
          icon-left="login"
          type="is-success dvu-btn-large"
          @click="jumpHomePage"
        >授权登录到 Doniai Admin</b-button>
      </b-field>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "adsa"
    };
  },
  methods: {
    jumpHomePage() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>


<style lang='less' scoped>
.sign-main {
  width: 400px;
  margin: 15% auto 20% auto;
  padding: 20px 16px;
  background-color: #f2f7f8;
}

.dvu-card-shadow {
  border: 1px solid #dddfe3;
  border-radius: 10px;
}

.dvu-card {
  background: #fff;
  border-radius: 4px;
  font-size: 14px;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.dvu-btn-large {
  width: 100%;
}
</style>