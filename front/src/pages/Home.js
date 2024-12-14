import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Sistema de Transporte Hospitalar</h1>
      <nav>
        <ul>
          <li>
            <Link to="/solicitacoes">Solicitações de Transporte</Link>
          </li>
          <li>
            <Link to="/rastreamento">Rastreamento de Pacientes</Link>
          </li>
          <li>
            <Link to="/historico">Histórico de Solicitações</Link>
          </li>
          <li>
            <Link to="/incidentes">Registro de Incidentes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
