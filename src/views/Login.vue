<template>
  <section class="dvu-box">
    <div class="sign-main dvu-card-shadow dvu-card">
      <b-field label="电子邮箱" :type="rules.email.status" :message="rules.email.message">
        <b-input type="email" icon="email" v-model="form.email" maxlength="30"></b-input>
      </b-field>

      <b-field label="密码" :type="rules.password.status" :message="rules.password.message">
        <b-input
          type="password"
          icon="lock"
          v-model="form.password"
          maxlength="64"
          password-reveal
          @keyup.enter.native="submitLogin"
        ></b-input>
      </b-field>

      <b-field type="is-success">
        <b-button
          icon-left="login"
          type="is-success dvu-btn-large"
          @click="submitLogin"
        >登录到 Doniai Admin</b-button>
      </b-field>
    </div>
  </section>
</template>

<script>
import { userLogin } from "../services/common.js";
export default {
  data () {
    return {
      form: {
        email: 'iv@jilip.gy',
        password: 'abcd'
      },
      rules: {
        email: {
          message: '',
          status: ''
        },
        password: {
          message: '',
          status: ''
        }
      },
      user: {}
    };
  },
  watch: {
    "form.email": function (val) {
      const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (!reg.test(val) || val.length < 6 || val.length > 30) {
        this.rules.email.message = "邮箱格式不正确";
        this.rules.email.status = "is-danger";
      } else {
        this.rules.email.message = "";
        this.rules.email.status = "is-success";
      }
    },
    "form.password": function (val) {
      const reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
      if (!reg.test(val) || val.length < 6 || val.length > 30) {
        this.rules.password.message = "密码最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符";
        this.rules.password.status = "is-danger";
      } else {
        this.rules.password.message = "";
        this.rules.password.status = "is-success";
      }
    }
  },
  methods: {
    async submitLogin () {
      try {
        const { data } = await userLogin(this.form);
        console.log(data);
        this.user = data.data;
        if (data.data) {
          localStorage.setItem("access_token", `${data.data.type} ${data.data.token}`);
          localStorage.setItem("login_status", `logined`);
          this.$router.push({ name: "home" });
        }
      } catch ({ response }) {
        this.$toast.open("user login failure!");
      }
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