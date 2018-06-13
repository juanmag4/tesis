/* eslint-disable react/forbid-prop-types,react/prop-types,jsx-a11y/anchor-is-valid */
import React from 'react';

import {
  Switch,
  Route,
  BrowserRouter,
  Link,
} from 'react-router-dom';

import App from '../ui/App';
import AuthButton from '../ui/AuthButton';
import PrivateRoute from '../ui/PrivateRoute';
import Signup from '../ui/Signup';
import Login from '../ui/Login';
import NotFound from '../ui/NotFound';
import Dashboard from '../ui/Dashboard';
import About from '../ui/About';
import Landing from '../ui/Landing';
import Topbar from '../ui/Topbar';
import Nivel from '../ui/Nivel';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Topbar />
      <div className="container">
        <div className="row">

        <div className="col s12 m8 panelPrincipal">

            <App />
            <AuthButton />
            
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/about" component={About} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route component={NotFound} />
            </Switch>

          </div>
          <div className="col s0 m1">
          </div>
          <div className="col s0 m3 panelPrincipal">
            <Nivel />
          </div>
          
        </div>
        
      </div>
    </div>
  </BrowserRouter>
);

export default Routes;
