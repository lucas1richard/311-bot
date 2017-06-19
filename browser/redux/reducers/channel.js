import axios from 'axios';

const channel = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_CHANNELS':
      state = Object.assign({}, state, action.payload);
      break;
    default:
      break;
  }
  return state;
};

export const getChannels = () => dispatch => {

  return axios.get(`/api/channel`)
    .then(({ data }) => {
      dispatch({ type: 'RECEIVE_CHANNELS', payload: data });
    });
};

export default channel;