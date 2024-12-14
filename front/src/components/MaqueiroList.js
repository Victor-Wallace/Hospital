import React, { useEffect, useState } from "react";
import { getMaqueiros } from "../services/api";

const MaqueiroList = () => {
  const [maqueiros, setMaqueiros] = useState([]);

  useEffect(() => {
    getMaqueiros()
      .then((response) => setMaqueiros(response.data))
      .catch((error) => console.error("Erro ao carregar maqueiros:", error));
  }, []);

  return (
    <div>
      <h2>Lista de Maqueiros</h2>
      <ul>
        {maqueiros.map((maqueiro) => (
          <li key={maqueiro.id}>
            {maqueiro.nome} - {maqueiro.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaqueiroList;
