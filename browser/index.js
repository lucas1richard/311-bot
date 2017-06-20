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
import Channels from './react/Channels';
import ChannelDetail from './react/Channels/detail';
import UpdateIssue from './react/UpdateIssue';

import Main from './Main';

const app = (
  <Provider store={ store } >
    <Router history={ browserHistory }>

      <Route path="/" component={ Main }>
        <IndexRoute component={ PubForm } />
        <Route path="login" component={ LogInForm } />
        <Route path="channel" component={ Channels }  />
        <Route path="detail/:subject" component={ ChannelDetail } />
        <Route path="update" component={ UpdateIssue }  />
      </Route>

    </Router>
  </Provider>
);

ReactDOM.render( app, document.getElementById( 'app' ) );

