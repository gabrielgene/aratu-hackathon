import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import BaseOnboarding from './components/BaseOnboarding';
import Finish from './components/Finish';
import Dashboard from './pages/Dashboard';
import * as serviceWorker from './serviceWorker';

import './index.css';

library.add(fab, fas);

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={BaseOnboarding} />
      <Route path="/finish" component={Finish} />
      <Route path="/dashboard" component={Dashboard} />
    </React.Fragment>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
