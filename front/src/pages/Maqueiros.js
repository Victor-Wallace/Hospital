import React from "react";
import MaqueiroList from "../components/MaqueiroList";
import MaqueiroForm from "../components/MaqueiroForm";

const Maqueiros = () => {
  return (
    <div>
      <h1>Gerenciamento de Maqueiros</h1>
      <MaqueiroForm />
      <MaqueiroList />
    </div>
  );
};

export default Maqueiros;
