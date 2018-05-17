import React from 'react';
import PropTypes from 'prop-types';

const App = props => (
  <div>
    <h1>{props.title}</h1>
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
