const BASE_URL = "http://localhost:5000"; // Substitua pelo URL do seu backend, se necessário

// Função para buscar maqueiros
export const getMaqueiros = async () => {
  const response = await fetch(`${BASE_URL}/maqueiros`);
  return await response.json();
};

// Função para adicionar um maqueiro
export const addMaqueiro = async (maqueiro) => {
  const response = await fetch(`${BASE_URL}/maqueiros`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(maqueiro),
  });
  return await response.json();
};

// Função para buscar solicitações
export const fetchSolicitacoes = async () => {
  const response = await fetch(`${BASE_URL}/solicitacoes`);
  return await response.json();
};

// Função para adicionar uma solicitação
export const addSolicitacao = async (solicitacao) => {
  const response = await fetch(`${BASE_URL}/solicitacoes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(solicitacao),
  });
  return await response.json();
};

// Função para atualizar uma solicitação
export const updateSolicitacao = async (id, status) => {
  const response = await fetch(`${BASE_URL}/solicitacoes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return await response.json();
};

// Função para buscar pacientes
export const fetchPacientes = async () => {
  const response = await fetch(`${BASE_URL}/pacientes`);
  return await response.json();
};

// Função para atualizar status do paciente
export const updatePacienteStatus = async (id, status) => {
  const response = await fetch(`${BASE_URL}/pacientes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return await response.json();
};

// Função para buscar histórico
export const fetchHistorico = async () => {
  const response = await fetch(`${BASE_URL}/historico`);
  return await response.json();
};

// Função para registrar incidente
export const reportarIncidente = async (incidente) => {
  const response = await fetch(`${BASE_URL}/incidentes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(incidente),
  });
  return await response.json();
};


export const autenticarUsuario = async ({ username, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error("Credenciais inválidas");
    }
    const data = await response.json();
    return data; // Por exemplo, retornar o token
  } catch (error) {
    throw error;
  }
};