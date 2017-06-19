import axios from 'axios';

const user = ( state = {}, action ) => {
  switch ( action.type ) {
  case 'RECEIVE_USER':
    state = Object.assign( {}, state, action.payload );
    break;
  default:
    break;
  }
  return state;
};

export const login = (email, password) => dispatch => {
  // const token = localStorage.getItem( 'token' );

  return axios.post( `/api/user`, { email, password } )
    .then( ( { data } ) => {
      dispatch( { type: 'RECEIVE_USER', payload: data } );
    } );
};

export default user;

