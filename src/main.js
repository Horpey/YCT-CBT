import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Argon from './plugins/argon-kit';
import './registerServiceWorker';

import { store } from './store/store';

Vue.use(require('vue-moment'));
import VueSkeletonLoading from 'vue-skeleton-loading';
import Axios from 'axios';

import VueNotifications from 'vue-notifications';
import iziToast from 'izitoast'; // https://github.com/dolce/iziToast
import 'izitoast/dist/css/iziToast.min.css';

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueSkeletonLoading);

// Vue Notifications
function toast({ title, message, type, timeout, cb }) {
  if (type === VueNotifications.types.warn) type = 'warning';
  return iziToast[type]({ title, message, timeout });
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
};

Vue.use(VueNotifications, options);

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
