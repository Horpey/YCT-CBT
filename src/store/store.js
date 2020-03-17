import Vue from 'vue';
import Vuex from 'vuex';

import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export const store = new Vuex.Store({
//   state: {
//     flavor: ''
//   },
//   mutations: {
//     change(state, flavor) {
//       state.flavor = flavor;
//     }
//   },
//   getters: {
//     flavor: state => state.flavor
//   },
//   actions: {
//     login({ commit, dispatch }, user) {
//       return new Promise((resolve, reject) => {
//         // commit('auth_request');
//         console.log(user);
//         let userData = new FormData();
//         userData.append('reg', user.reg);
//         userData.append('password', user.password);
//       });
//     }
//   }
// });
