import Vue from 'vue';
import ElementUI from 'element-ui';
import Vue2Editor from "vue2-editor";
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios'
// Import Froala Editor css files.


// Import and use Vue Froala lib.

Vue.prototype.$Axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vue2Editor);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
