import axios from 'axios';
import { getToken } from './user';

const initialState = {
  localChannels: [],
  subscribedChannels: []
};

const channel = (state = initialState, action) => {
  switch (action.type) {
  case 'RECEIVE_CHANNELS':
    state = Object.assign({}, state);
    state.localChannels = state.localChannels.slice();
    state.localChannels = state.localChannels.concat(action.payload);
    break;

  case 'RECEIVE_SUBSCRIBED_CHANNELS':
    state = Object.assign({}, state);
    state.subscribedChannels = state.subscribedChannels.slice();
    state.subscribedChannels = state.subscribedChannels.concat(action.payload);
    break;

  case 'MAKE_CHANNEL':
    state = Object.assign({}, state);
    state.localChannels = state.localChannels.slice();
    state.localChannels.push(action.payload);

    state.subscribedChannels = state.subscribedChannels.slice();
    state.subscribedChannels.push(action.payload);
    state.localChannels = state.localChannels.filter(ch => ch.subject !== action.payload.subject);
    break;

  case 'SUBSCRIBE_CHANNEL':
    state.subscribedChannels = state.subscribedChannels.slice();
    state.subscribedChannels.push(action.payload);
    state.localChannels = state.localChannels.filter(ch => ch.subject !== action.payload.subject);
    break;

  default:
    break;
  }
  return state;
};

export const getChannels = () => dispatch => {
  return axios.get(`/api/channel`, { params: { token: getToken() } })
    .then(({ data }) => {
      dispatch({ type: 'RECEIVE_SUBSCRIBED_CHANNELS', payload: data.subscribed });
      dispatch({ type: 'RECEIVE_CHANNELS', payload: data.all });
    });
};

export const makeChannel = channelInfo => dispatch => {

  return axios.post('/api/channel', channelInfo, { params: { token: getToken() } })
    .then(({ data }) => {
      dispatch({ type: 'MAKE_CHANNEL', payload: data });
    });
};

export default channel;

