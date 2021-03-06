import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { getUser } from './reducers/user';
import { getChannels } from './reducers/channel';
import reducer from './reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

store.dispatch(getUser())
  .then(() => store.dispatch(getChannels()));

export default store;
