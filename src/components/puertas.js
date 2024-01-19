import React from 'react'

export default function Puertas() {
  const puertasCloseOpen = ['puertaCerrada.jpg', 'puertaAbierta.jpg']

  const [puertaSelect, setPuertaSelect] = React.useState(0)

  function puertaSiguiente() {
    if (puertaSelect < puertasCloseOpen.length - 1) {
      setPuertaSelect(puertaSelect + 1)
    }
  }

  function puertaPrevia() {
    if (puertaSelect > 0) {
      setPuertaSelect(puertaSelect - 1)
    }
  }

  return (
    <div>
      <h1>Puertas</h1>
      <p><img src={process.env.PUBLIC_URL + "/imagenes/" + puertasCloseOpen[puertaSelect]} alt="bandera" /></p>
      <p>
        <input type="button" value="<" onClick={puertaPrevia} />
        <input type="button" value=">" onClick={puertaSiguiente} />
        {puertasCloseOpen[puertaSelect]}
      </p>
    </div>
  )
}