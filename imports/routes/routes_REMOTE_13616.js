import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Signup from '../ui/Signup';
import Login from '../ui/Login';
import NotFound from '../ui/NotFound';
import Dashboard from '../ui/Dashboard';

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

