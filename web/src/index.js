import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import BaseOnboarding from './pages/BaseOnboarding';
import Form from './pages/Form';
import Finish from './pages/Finish';
import Dashboard from './pages/Dashboard';
import Data from './pages/Data';
import FormBuilder from './pages/FormBuilder';
import InteractionForm from './pages/InteractionForm';

import * as serviceWorker from './serviceWorker';

import './index.css';

library.add(fab, fas);

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={BaseOnboarding} />
      <Route path='/concluido' component={Finish} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/formulario' component={Form} />
      <Route path='/dados' component={Data} />
      <Route path='/construtor' component={FormBuilder} />
      <Route path='/interagir' component={InteractionForm} />
    </React.Fragment>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
