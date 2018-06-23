import React from 'react';
import Nivel from '../ui/Nivel';

const Topbar = () => (
  <div className="topbar">
  	<div className="container">
			<div className="row">
				<div className="col s12 m3">
					<img src="/img/logo.svg" className="logo" />
				</div>
				<div className="col s12 m9 alignRigth">
					<Nivel />
				</div>
			</div>
		</div>
  </div>
);

export default Topbar;