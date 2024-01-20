import React from 'react';

export default function Puertas() {
  const puertaOpenClose = ['puertaCerrada.jpg', 'puertaAbierta.jpg'];
  const [puertaSelect, setPuertaSelect] = React.useState(false);

  const botonPuerta = () => {
    setPuertaSelect(!puertaSelect);
  };

  return (
    <div>
      <h1>Puerta: Abrir y Cerrar</h1>
      <p>
        <img src={process.env.PUBLIC_URL + '/imagenes/' + (puertaSelect ? puertaOpenClose[1] : puertaOpenClose[0])} alt="puerta"/>
      </p>
      <p>
        <input type="button" value={puertaSelect ? 'Cerrar' : 'Abrir'} onClick={botonPuerta} />
      </p>
    </div>
  );
}
