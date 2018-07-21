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
import Experience from '../ui/Experience';
import Victorias from '../ui/Victorias';
import InscripcionParticipante from '../ui/InscripcionParticipante'

const Routes = () => (
  <BrowserRouter>
    <div>
      <Topbar />
      <div className="container">
        <div className="row">

        <div className="col s12 m8 panelPrincipal contenidoCentrado z-depth-5">

            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/about" component={About} />
              <Route path="/inscripcion" component={InscripcionParticipante} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
            <br/><br/>
            <App />
            <AuthButton />
          </div>
          <div className="col s0 m1">
          </div>
          <div className="col s0 m3">
            <div className="panelPrincipal marginBot25 contenidoCentrado z-depth-5">
              <Victorias/>
            </div>
            <div className="panelPrincipal marginBot25 contenidoCentrado z-depth-5">
              <Experience />
            </div>
            <div className="panelPrincipal marginBot25 contenidoCentrado z-depth-5">
              <h3>
                Ingresar<br/>Registrarse
              </h3>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </BrowserRouter>
);

export default Routes;
