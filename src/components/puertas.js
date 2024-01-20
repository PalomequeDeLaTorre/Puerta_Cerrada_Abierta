import React from 'react';

export default function Puertas() {
  const puertasOpenClose = ['puertaCerrada.jpg', 'puertaAbierta.jpg'];
  const [puertaSelect, setPuertaSelect] = React.useState(0);

  function botonPuerta() {
    if (puertaSelect === 0) {
      setPuertaSelect(1);
    } else {
      setPuertaSelect(0);
    }
  }

  return (
    <div>
      <h1>Puerta: Abrir / Cerrar</h1>
      <p>
        <img src={process.env.PUBLIC_URL + "/imagenes/" + puertasOpenClose[puertaSelect]} alt="puerta" />
      </p>
      <p>
        <input type="button" value="Abrir / Cerrar" onClick={botonPuerta} />
      </p>
    </div>
  );
}
