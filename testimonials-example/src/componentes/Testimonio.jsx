import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

export function Testimonio( {props} ) {
  const nombreAlt = `Fotografía de ${props.nombre}`

  let testimonioNegritas = props.testimonio;

  if (props.testimonio.includes(props.negritas)) {
    let testimonioDivido = props.testimonio.split(props.negritas);
    testimonioNegritas = (
      <span>
        {testimonioDivido[0]}
        <strong>{props.negritas}</strong>
        {testimonioDivido[1]}
      </span>
    )
  }
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt= {nombreAlt} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-y-pais-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='puesto-y-empresa-testimonio'>
          {props.puesto} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{testimonioNegritas}"</p>
      </div>
    </div>
  );
}

export default Testimonio;