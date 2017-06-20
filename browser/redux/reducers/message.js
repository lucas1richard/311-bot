
const initialState = {
  messages: [],
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      state = Object.assign({}, state);
      state.messages = state.messages.slice();
      state.messages = state.messages.concat(action.payload);
      break;
    default:
      break;
  }
  return state;
};


export const addMessage = (text) => dispatch => {
  dispatch({ type: 'ADD_MESSAGE', payload: text });
};

export default message;
