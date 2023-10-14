import React from 'react';
import '../estilos/CadastroVagas.css'

function CadastroVagas() {
    console.log("entrei no CadastroVagas");
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let json = {};
    
        for (const [key, value] of formData.entries()) {
          json[key] = value;
        }
    
        console.log('Informações da reserva:');
        console.log(json);
    
        alert('Cadastro realizado com sucesso!');
        event.target.reset();
      }
    
      return (
        <div className="cadastro">
        <h1>Cadastro de Reserva</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="placa">Placa do veículo:</label>
          <input type="text" id="placa" required /><br />
  
          <label htmlFor="proprietario">Nome do proprietário:</label>
          <input type="text" id="proprietario" required /><br />
  
          <label htmlFor="apartamento">Número do apartamento:</label>
          <input type="text" id="apartamento" required /><br />
  
          <label htmlFor="bloco">Bloco do apartamento:</label>
          <input type="text" id="bloco" required /><br />
  
          <label htmlFor="modelo">Modelo do veículo:</label>
          <input type="text" id="modelo" required /><br />
  
          <label htmlFor="cor">Cor do veículo:</label>
          <input type="text" id="cor" required /><br />
  
          <label htmlFor="vaga">Número da vaga de estacionamento:</label>
          <input type="text" id="vaga" required /><br />
  
          <button type="submit">Salvar</button>
        </form>
      </div>
      );
    }

export default CadastroVagas;
