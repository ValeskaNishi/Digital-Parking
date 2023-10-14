import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/Home.css';

const Home = () => {

    return (
    <div className="paginaInicial">
        <h1>Bem Vindo ao Digital Parking</h1>
        <p>Escolha o que deseja:</p> 
        <Link to="/cadastroVagas">
            <button id='btn-cadastro' type="cadastroVaga">Cadastro de Reserva de Vaga</button> 
        </Link>   
        <Link to="/vagaDisponivel">
            <button id='btn-vagas' type="vagaDisponivel">Vagas Disponiveis</button>  
        </Link>
    </div>

  );
}

export default Home;