import Vue from 'vue';
import App from './App.vue';
import router from './router';
import FlashMessage from 'vue-flash-message';

import 'semantic-ui-css/semantic.css';

Vue.use(FlashMessage);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
