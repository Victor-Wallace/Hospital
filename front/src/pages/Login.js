import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { autenticarUsuario } from "../services/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    autenticarUsuario({ username, password })
      .then((response) => {
        localStorage.setItem("token", response.token);
        navigate("/home"); // Redireciona para a página inicial após login
      })
      .catch((error) => alert("Credenciais inválidas!"));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
