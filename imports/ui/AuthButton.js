import React from 'react';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import Button from '@material-ui/core/Button';
import { Button as SButton } from 'semantic-ui-react';

const AuthButton = withRouter(({ history }) =>
  (Meteor.userId() ? (
    <p>
      Welcome!{' '}
      <Button
        variant="raised"
        color="primary"
        onClick={() => {
          Accounts.logout();
          history.push('/');
        }}
      >
        Sign out
      </Button>
      <SButton
        onClick={() => {
          Accounts.logout();
          history.push('/');
        }}
      >
        Sign out
      </SButton>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )));

export default AuthButton;
