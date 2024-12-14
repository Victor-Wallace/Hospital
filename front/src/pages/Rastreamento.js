import React, { useState, useEffect } from "react";
import { fetchPacientes, updatePacienteStatus } from "../services/api";

const Rastreamento = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    fetchPacientes()
      .then((data) => setPacientes(data))
      .catch((error) => console.error("Erro ao carregar pacientes:", error));
  }, []);

  const atualizarStatus = (id, status) => {
    updatePacienteStatus(id, status)
      .then(() => {
        alert("Status atualizado!");
        setPacientes((prev) =>
          prev.map((p) => (p.id === id ? { ...p, status } : p))
        );
      })
      .catch((error) => console.error("Erro ao atualizar status:", error));
  };

  return (
    <div>
      <h1>Rastreamento de Pacientes</h1>
      <ul>
        {pacientes.map((p) => (
          <li key={p.id}>
            {p.nome} - Status: {p.status}
            <button onClick={() => atualizarStatus(p.id, "Em transporte")}>
              Em transporte
            </button>
            <button onClick={() => atualizarStatus(p.id, "Chegou ao destino")}>
              Chegou ao destino
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rastreamento;
