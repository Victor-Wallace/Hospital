import React, { useState } from "react";
import { reportarIncidente } from "../services/api";

const Incidentes = () => {
  const [pacienteId, setPacienteId] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    reportarIncidente({ pacienteId, descricao })
      .then(() => {
        alert("Incidente reportado com sucesso!");
        setPacienteId("");
        setDescricao("");
      })
      .catch((error) => console.error("Erro ao reportar incidente:", error));
  };

  return (
    <div>
      <h1>Registro de Incidentes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID do Paciente:</label>
          <input
            type="text"
            value={pacienteId}
            onChange={(e) => setPacienteId(e.target.value)}
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Registrar Incidente</button>
      </form>
    </div>
  );
};

export default Incidentes;
