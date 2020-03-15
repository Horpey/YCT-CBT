import axios from 'axios';

const baseURL = '';

export const actions = {
  login({ commit, dispatch }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request');
      let userData = new FormData();
      userData.append('email', user.email);
      userData.append('password', user.password);

      axios({
        url: baseURL + '/accounts/login/',
        data: userData,
        method: 'POST'
      })
        .then(resp => {
          const token = resp.data.token;
          const user = resp.data.user;
          localStorage.setItem('token', token);
          axios.defaults.headers.common['Authorization'] = token;
          commit('auth_success', token, user);
          dispatch('getUser');
          commit('loading', false);
          resolve(resp);
        })
        .catch(err => {
          commit('auth_error');
          commit('loading', false);
          localStorage.removeItem('token');
          reject(err);
        });
    });
  },
  getUser({ commit }) {
    return new Promise((resolve, reject) => {
      commit('loading', true);
      let userToken = localStorage.getItem('token');
      axios({
        url: baseURL + '/accounts/user/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + userToken
        }
      })
        .then(resp => {
          localStorage.setItem('user', JSON.stringify(resp.data.data));
          commit('loading', false);
          resolve(resp.data.data);
        })
        .catch(err => {
          commit('loading', false);
          reject(err);
        });
    });
  },
  forgotPassword({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request');

      var emailData = new FormData();
      emailData.append('email', user.email);
      let userEmail = emailData.get('email');

      axios({
        url: baseURL + '/accounts/password-reset/',
        data: userEmail,
        method: 'POST'
      })
        .then(resp => {
          const token = resp.data.token;
          const user = resp.data.user;
          localStorage.setItem('token', token);
          axios.defaults.headers.common['Authorization'] = token;
          commit('auth_success', token, user);
          commit('loading', false);
          resolve(resp);
        })
        .catch(err => {
          commit('auth_error');
          commit('loading', false);
          localStorage.removeItem('token');
          reject(err);
        });
    });
  },
  registerUser({ commit, dispatch }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request');

      var userData = new FormData();
      userData.append('full_name', user.full_name);
      userData.append('email', user.email);
      userData.append('password', user.password);
      userData.append('school', user.school);

      axios({
        url: baseURL + '/accounts/register/',
        data: userData,
        method: 'POST'
      })
        .then(resp => {
          const token = resp.data.data.token;
          const user = resp.data.data.data;
          localStorage.setItem('token', token);
          dispatch('getUser');
          axios.defaults.headers.common['Authorization'] = token;
          commit('auth_success', token, user);
          commit('loading', false);
          resolve(resp);
        })
        .catch(err => {
          commit('auth_error');
          commit('loading', false);
          localStorage.removeItem('token');
          reject(err);
        });
    });
  }
};
