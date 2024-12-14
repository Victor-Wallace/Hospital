const {
  salvarBancoDeDados,
  bancoDeDados,
  CAMINHO_BANCO,
} = require("../utils/bancoDeDados");
const Incidente = require("./Incidente");

class Maqueiro {
  constructor(id, nome, status) {
    this.id = id;
    this.nome = nome;
    this.status = status;
    this.historicoSolicitacoes = [];
  }

  aceitarSolicitacao(solicitacao) {
    solicitacao.maqueiroId = this.id;
    solicitacao.statusSolicitacao = "Aceita";
    this.historicoSolicitacoes.push(solicitacao);
  }

  recusarSolicitacao(solicitacao) {
    solicitacao.statusSolicitacao = "Recusada";
  }

  registrarIncidente(solicitacao, descricao) {
    const incidente = new Incidente(
      solicitacao.incidentes.length + 1,
      solicitacao.id,
      solicitacao.paciente.nome,
      descricao
    );
    solicitacao.incidentes.push(incidente);
    bancoDeDados.incidentes.push(incidente);
    salvarBancoDeDados(CAMINHO_BANCO, bancoDeDados);
    return incidente;
  }
}

module.exports = Maqueiro;
