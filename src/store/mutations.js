export const mutations = {
  auth_request(state) {
    state.status = 'loading';
  },
  auth_success(state, token, user) {
    state.status = 'success';
    state.token = token;
    state.user = user;
  },
  auth_error(state) {
    state.status = 'error';
  },
  logout(state) {
    state.status = '';
    state.token = '';
  },
  loading(state, isLoading) {
    if (isLoading) {
      state.isLoading = true;
    } else {
      state.isLoading = false;
    }
  }
};
