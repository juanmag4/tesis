import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  Link,
} from 'react-router-dom';

const Nivel = () => (
   <div className="pading25">
	   	<span className="pading20">
			<Link to="/dashboard" className="a">Menu</Link>
		</span>
		<span className="pading20">
			<Link to="/about" className="a">Conocenos</Link>
		</span>
		<span className="pading20">
			<Link to="/inscripcion" className="a">Inscribir Participante</Link>
		</span>
   	</div>
);

export default Nivel;