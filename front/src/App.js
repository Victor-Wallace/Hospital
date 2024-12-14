import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Solicitacoes from "./pages/Solicitacoes";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/solicitacoes"
          element={
            <PrivateRoute>
              <Solicitacoes />
            </PrivateRoute>
          }
        />
        {/* Adicione outras rotas protegidas aqui */}
      </Routes>
    </Router>
  );
};

export default App;
