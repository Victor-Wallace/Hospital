const fs = require("fs");

const CAMINHO_BANCO = "banco_hospital.json";

const carregarBancoDeDados = (caminho) => {
  try {
    const dados = fs.readFileSync(caminho);
    return JSON.parse(dados);
  } catch (err) {
    console.error("Erro ao carregar o banco de dados:", err);
    return { usuarios: [],maqueiros: [], solicitacoes: [], pacientes: [], incidentes: [] };
  }
};

const salvarBancoDeDados = (caminho, dados) => {
  try {
    fs.writeFileSync(caminho, JSON.stringify(dados, null, 4));
    console.log("Banco de dados atualizado com sucesso.");
  } catch (err) {
    console.error("Erro ao salvar o banco de dados:", err);
  }
};

const bancoDeDados = carregarBancoDeDados(CAMINHO_BANCO);

module.exports = {
  carregarBancoDeDados,
  salvarBancoDeDados,
  bancoDeDados,
  CAMINHO_BANCO,
};
