import axios from 'axios';

const user = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_USER':
    state = Object.assign({}, state, action.payload);
    break;
  default:
    break;
  }
  return state;
};

export const getToken = () => {
  const token = localStorage.getItem('311-bot-token');
  return token ? token : false;
};

export const login = (email, password) => dispatch => {
  return axios.post(`/api/user`, { email, password })
    .then(({ data }) => {
      localStorage.setItem('311-bot-token', data.token);
      dispatch({ type: 'RECEIVE_USER', payload: data });
    });
};

export const getUser = () => dispatch => {
  const token = getToken();
  if (token) {
    return axios.get('/api/user', { params: { token } })
      .then(({ data }) => {
        dispatch({ type: 'RECEIVE_USER', payload: data });
      });
  }
  console.warn('No user signed-in');
};

export default user;

