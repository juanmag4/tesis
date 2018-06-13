import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  Link,
} from 'react-router-dom';

const Nivel = () => (
   <ul>
   		<li>
   			<Link to="/dashboard">Dashboard</Link>
   		</li>
   		<li>
   			<Link to="/about">About</Link>
   		</li>
   	</ul>
);

export default Nivel;