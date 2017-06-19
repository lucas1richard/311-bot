import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

import {
  IndexRoute,
  Router,
  Route,
  browserHistory
} from 'react-router';

import PubForm from './react/PubForm';
import LogInForm from './react/LogInForm';
import Main from './Main';

const app = (
  <Provider store={ store } >
    <Router history={ browserHistory }>

      <Route path="/" component={ Main }>
        <IndexRoute component={ PubForm } />
        <Route path="login" component={ LogInForm } />
      </Route>

    </Router>
  </Provider>
);

ReactDOM.render( app, document.getElementById( 'app' ) );

