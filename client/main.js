import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { routes } from '../imports/routes/routes';

Meteor.startup(() => {
  Tracker.autorun(() => {
    ReactDOM.render(routes, document.getElementById('app'));
  });
});

