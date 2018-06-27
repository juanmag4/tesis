import React from 'react';

const Landing = () => (
  <div className="panelPrincipal contenidoCentrado z-depth-2 cuadroInterno cuadroCentrado">
    <h1>Bienvenido !!</h1>
    <h3>Seleccióna por donde quieres iniciar:</h3><br/><br/>
    <div className="row">
      <div className="col s12 m6 selectEnable">
        <img src="/img/pollo.png" /><br/>
        <h4>Introducción</h4>
      </div>
      
      <div className="col s12 m6 selectEnable">
        <img src="/img/nivel.png" /><br/>
        <h4>Ponerme a Prueba</h4>
      </div>
    </div>
  </div>
);

export default Landing;
