/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 - No se encuentra la página</h1>
    <Link to="/">Regresar al Dashboard</Link>
  </div>
);

export default NotFound;

