/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Argon from './plugins/argon-kit';
import './registerServiceWorker';

import { store } from './store/store';

Vue.use(require('vue-moment'));
import VueSkeletonLoading from 'vue-skeleton-loading';
import Axios from 'axios';

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueSkeletonLoading);

// Auth
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
