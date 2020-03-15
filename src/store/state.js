export const state = {
  status: '',
  isLoading: false,
  token: localStorage.getItem('token') || '',
  user: {}
};
