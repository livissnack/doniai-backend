import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BackTop from '@mlqt/vue-back-top'
import YimoVueEditor from 'yimo-vue-editor'
import Buefy from 'buefy'
import echarts from 'echarts'
import 'buefy/dist/buefy.min.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(Buefy)
Vue.use(BackTop)
Vue.use(YimoVueEditor, {
  name: 'v-editor-app', //Custom name
  config: {
    uploadImgUrl: '/api/upload', // upload api
    printLog: false // disabled console.log
  }, //wagnEditor config
  uploadHandler: (type, resTxt) => {
    //Upload processing hook
    if (type === 'success') {
      var res = JSON.parse(resTxt) //Do not process the default look at the return value bit image path
      if (res.status !== 1) {
        return null
      }
      return res.data
    } else if (type === 'error') {
      //todo toast
    } else if (type === 'timeout') {
      //todo toast
    }
    return 'upload failed__'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
