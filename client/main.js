import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Routes from '../imports/routes/routes';

Meteor.startup(() => {
  ReactDOM.render(<Routes />, document.getElementById('app'));
});
