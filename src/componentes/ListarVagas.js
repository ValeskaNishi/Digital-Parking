import React from 'react';
import '../estilos/ListarVagas.css'

function ListarVagas() {
  console.log("Entrei no listarVagas")
    const vagas = [];
  
    for (let i = 1; i <= 10; i++) {
      if (i <= 4) {
        vagas.push(<li key={i} className="vaga-reservada">Vaga {i} - Reservada</li>);
      } else {
        vagas.push(<li key={i} className="vaga-disponivel">Vaga {i} - Disponível</li>);
      }
    }
  
    return (
      <div>
        <h1>Vagas Disponíveis no Estacionamento</h1>
        <ul className="vagas-lista">{vagas}</ul>
      </div>
    );
  }

export default ListarVagas;
