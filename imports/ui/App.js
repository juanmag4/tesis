import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

const unauthenticatedPages = ['/', '/signup', '/login', '/about', '/landing'];
const authenticatedPages = ['/dashboard'];

const onAuthChange = (isAuthenticated, history) => {
  const { pathname } = history.location;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.replace('/');
  }
};

const track = (history) => {
  Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated, history);
  });
};

class App extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const { history } = props;
    track(history);
  }

  render() {
    return null;
  }
}

export default withRouter(App);
