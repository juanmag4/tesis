import React from 'react';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const AuthButton = withRouter(({ history }) =>
  (Meteor.userId() ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          Accounts.logout();
          history.push('/');
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )));

export default AuthButton;
