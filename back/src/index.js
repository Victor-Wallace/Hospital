const express = require("express");
const fs = require("fs");
const cors = require("cors")
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;

// Middleware para processar JSON
app.use(express.json());
app.use(cors())

// Função para carregar e salvar o banco de dados JSON
const carregarBancoDeDados = () => {
  return JSON.parse(fs.readFileSync("./banco_hospital.json", "utf8"));
};

const salvarBancoDeDados = (dados) => {
  fs.writeFileSync(
    "./banco_hospital.json",
    JSON.stringify(dados, null, 2),
    "utf8"
  );
};

// Endpoints
// 1. Obter todos os maqueiros
app.get("/maqueiros", (req, res) => {
  const db = carregarBancoDeDados();
  res.json(db.maqueiros);
});

// 2. Adicionar um maqueiro
app.post("/maqueiros", (req, res) => {
  const db = carregarBancoDeDados();
  const novoMaqueiro = req.body;
  db.maqueiros.push(novoMaqueiro);
  salvarBancoDeDados(db);
  res.status(201).json(novoMaqueiro);
});

// 3. Obter solicitações de transporte
app.get("/solicitacoes", (req, res) => {
  const db = carregarBancoDeDados();
  res.json(db.solicitacoesTransporte);
});

// 4. Criar uma nova solicitação de transporte
app.post("/solicitacoes", (req, res) => {
  const db = carregarBancoDeDados();
  const novaSolicitacao = req.body;
  db.solicitacoesTransporte.push(novaSolicitacao);
  salvarBancoDeDados(db);
  res.status(201).json(novaSolicitacao);
});

// 5. Registrar um incidente
app.post("/solicitacoes/:id/incidentes", (req, res) => {
  const db = carregarBancoDeDados();
  const { id } = req.params;
  const solicitacao = db.solicitacoesTransporte.find(
    (s) => s.id === parseInt(id)
  );
  if (!solicitacao) {
    return res.status(404).json({ error: "Solicitação não encontrada." });
  }

  const novoIncidente = req.body;
  solicitacao.incidentes.push(novoIncidente);
  salvarBancoDeDados(db);
  res.status(201).json(novoIncidente);
});

// 6. Atualizar status do paciente
app.patch("/pacientes/:id/status", (req, res) => {
  const db = carregarBancoDeDados();
  const { id } = req.params;
  const { status } = req.body;
  const paciente = db.pacientes.find((p) => p.id === parseInt(id));
  if (!paciente) {
    return res.status(404).json({ error: "Paciente não encontrado." });
  }

  paciente.status = status;
  salvarBancoDeDados(db);
  res.json(paciente);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});




// Usuários e senhas (em produção, isso deve vir de um banco de dados, não de código)
const usuarios = [
  { username: "admin", password: "123456" },  // Usuário 1
];

// Chave secreta para assinar o token JWT
const SECRET_KEY = "seu_segredo_aqui";  // Use uma chave mais segura em produção



app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Verificar se os campos de login foram enviados
  if (!username || !password) {
    return res.status(400).json({ error: "Username e password são obrigatórios" });
  }

  // Buscar o usuário no array de usuários
  const user = usuarios.find(
    (u) => u.username === username && u.password === password
  );

  // Se o usuário for encontrado, gerar token
  if (user) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ token });
  }

  // Se as credenciais estiverem erradas, retornar erro
  return res.status(401).json({ error: "Credenciais inválidas" });
});