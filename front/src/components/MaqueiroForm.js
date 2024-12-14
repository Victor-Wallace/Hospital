import React, { useState } from "react";
import { addMaqueiro } from "../services/api";

const MaqueiroForm = () => {
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("Disponível");

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoMaqueiro = { id: Date.now(), nome, status };

    const forcarAtualizar = () => {
      window.location.reload();
     };

    addMaqueiro(novoMaqueiro)
      .then(() => {
        alert("Maqueiro adicionado com sucesso!");
        setNome("");
        setStatus("Disponível");
        forcarAtualizar();
      })
      .catch((error) => console.error("Erro ao adicionar maqueiro:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Disponível">Disponível</option>
          <option value="Ocupado">Ocupado</option>
        </select>
      </div>
      <button type="submit">Adicionar Maqueiro</button>
    </form>
  );
};

export default MaqueiroForm;
