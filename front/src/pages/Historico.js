import React, { useState, useEffect } from "react";
import { fetchHistorico } from "../services/api";

const Historico = () => {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    fetchHistorico()
      .then((data) => setHistorico(data))
      .catch((error) => console.error("Erro ao carregar histórico:", error));
  }, []);

  return (
    <div>
      <h1>Histórico de Solicitações</h1>
      <ul>
        {historico.map((h) => (
          <li key={h.id}>
            {h.paciente} - Status: {h.status} - Data: {h.data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Historico;
