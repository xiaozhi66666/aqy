import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
