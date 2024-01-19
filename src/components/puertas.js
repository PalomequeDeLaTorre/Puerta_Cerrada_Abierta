import React from 'react'

export default function Puertas() {
  const puertasCloseOpen = ['puertaCerrada.jpg', 'puertaAbierta.jpg']

  const [puertaSelec, setPuertaSelec] = React.useState(0)

  function puertaSiguiente() {
    if (puertaSelec < puertasCloseOpen.length - 1) {
      setPuertaSelec(puertaSelec + 1)
    }
  }

  function puertaPrevia() {
    if (puertaSelec > 0) {
      setPuertaSelec(puertaSelec - 1)
    }
  }

  return (
    <div>
      <h1>Puertas</h1>
      <p><img src={process.env.PUBLIC_URL + "/imagenes/" + puertasCloseOpen[puertaSelec]} alt="bandera" /></p>
      <p>
        <input type="button" value="<" onClick={puertaPrevia} />
        <input type="button" value=">" onClick={puertaSiguiente} />
        {puertasCloseOpen[puertaSelec]}
      </p>
    </div>
  )
}