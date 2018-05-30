<<<<<<< HEAD
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
=======
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

>>>>>>> 6d0c2464bc4c1a855cc03db4e9b6dc4ad8b6032d
import Signup from '../ui/Signup';
import Login from '../ui/Login';
import NotFound from '../ui/NotFound';
import Dashboard from '../ui/Dashboard';
<<<<<<< HEAD
import About from '../ui/About';
import Landing from '../ui/Landing';

const Routes = () => (
  <BrowserRouter>
    <div>
      <App />
      <AuthButton />
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
=======

const browserHistory = createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];
const onEnterPublicPage = () => {
  if (Meteor.userId) {
    browserHistory.replace('/dashboard');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId) {
    browserHistory.replace('/');
  }
};
export const onAuthChange = (isAuthenticated) => {
  const { pathname } = browserHistory.location;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};
export const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} onEnter={onEnterPublicPage} />
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
      <Route path="/dashboard" componet={Dashboard} onEnter={onEnterPrivatePage()} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

>>>>>>> 6d0c2464bc4c1a855cc03db4e9b6dc4ad8b6032d
