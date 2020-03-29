// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// ElementUI: 1.引入element-ui
import ElementUI from  "element-ui";
// ElementUI: 2.element-ui样式导入
import 'element-ui/lib/theme-chalk/index.css';
// ElementUI: 3.全局注册插件
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
