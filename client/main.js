import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Routes from '../imports/routes/routes';
// import '../semantic/dist/semantic.min.css';

Meteor.startup(() => {
  ReactDOM.render(<Routes />, document.getElementById('app'));
});
