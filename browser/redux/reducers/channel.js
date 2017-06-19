import axios from 'axios';

const channel = (state = [], action) => {
  switch (action.type) {
  case 'RECEIVE_CHANNELS':
    state = action.payload;
    break;

  case 'MAKE_CHANNEL':
    state = state.slice();
    state.push(action.payload);
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

export const makeChannel = channelInfo => dispatch => {
  return axios.post('/api/channel', channelInfo)
    .then(({ data }) => dispatch({ type: 'MAKE_CHANNEL', payload: data }));
};

export default channel;

