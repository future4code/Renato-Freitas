import React from 'react'

function CardPequeno(props) {
  return (
    <div id="card-pequeno">
      <h2>Contato</h2>
      <p>{props.email}</p>
      <p>{props.cidade}</p>
    </div>
  );
}
export default CardPequeno;