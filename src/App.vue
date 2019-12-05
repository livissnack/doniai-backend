<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.text-success {
  color: #23d160;
}

.text-info {
  color: #209cee;
}

.text-warning {
  color: #ffdc57;
}

.text-danger {
  color: #ff3760;
}

.text-primary {
  color: #01d1b2;
}

.font-center {
  line-height: 30px;
}

.mt10 {
  margin-top: 10px;
}

.ml40 {
  margin-left: 40px;
}

.ml10 {
  margin-left: 10px;
}

.form-box {
  padding: 40px;
  background-color: #ffffff;
  border-radius: 5px;
}
</style>
