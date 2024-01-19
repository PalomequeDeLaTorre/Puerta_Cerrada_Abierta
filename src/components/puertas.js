import React from 'react'

export default function Puertas() {
  const puertasOnOff = ['puertaCerrada.jpg', 'puertaAbierta.jpg']

  const [puertaSeleccionada, setPuertaSeleccionada] = React.useState(0)

  function puertaSiguiente() {
    if (puertaSeleccionada < puertasOnOff.length - 1) {
      setPuertaSeleccionada(puertaSeleccionada + 1)
    }
  }

  function puertaPrevia() {
    if (puertaSeleccionada > 0) {
      setPuertaSeleccionada(puertaSeleccionada - 1)
    }
  }

  return (
    <div>
      <h1>Puertas</h1>
      <p><img src={process.env.PUBLIC_URL + "/imagenes/" + puertasOnOff[puertaSeleccionada]} alt="bandera" /></p>
      <p>
        <input type="button" value="<" onClick={puertaPrevia} />
        <input type="button" value=">" onClick={puertaSiguiente} />
        {puertasOnOff[puertaSeleccionada]}
      </p>
    </div>
  )
}