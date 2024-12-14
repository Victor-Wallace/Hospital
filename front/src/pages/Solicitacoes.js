import React, { useState, useEffect } from "react";
import { fetchSolicitacoes, updateSolicitacao } from "../services/api";

const Solicitacoes = () => {
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    fetchSolicitacoes()
      .then((data) => setSolicitacoes(data))
      .catch((error) => console.error("Erro ao carregar solicitações:", error));
  }, []);

  const handleAcao = (id, status) => {
    updateSolicitacao(id, status)
      .then(() => {
        alert(
          `Solicitação ${
            status === "Aceita" ? "aceita" : "recusada"
          } com sucesso!`
        );
        setSolicitacoes((prev) =>
          prev.map((s) => (s.id === id ? { ...s, status } : s))
        );
      })
      .catch((error) => console.error("Erro ao atualizar solicitação:", error));
  };

  return (
    <div>
      <h1>Solicitações de Transporte</h1>
      <ul>
        {solicitacoes.map((s) => (
          <li key={s.id}>
            {/* Renderizando os campos relevantes do paciente */}
            <p>Paciente: {s.paciente.nome}</p>
            <p>Localização: {s.paciente.localizacao}</p>
            <p>Prioridade: {s.prioridade}</p>
            <p>Status: {s.status}</p>
            <button onClick={() => handleAcao(s.id, "Aceita")}>Aceitar</button>
            <button onClick={() => handleAcao(s.id, "Recusada")}>
              Recusar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Solicitacoes;
