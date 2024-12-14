class SolicitacaoTransporte {
  constructor(id, paciente, origem, destino, prioridade, dataSolicitacao) {
    this.id = id;
    this.paciente = paciente;
    this.origem = origem;
    this.destino = destino;
    this.prioridade = prioridade;
    this.dataSolicitacao = dataSolicitacao;
    this.maqueiroId = null;
    this.statusSolicitacao = "Pendente";
    this.incidentes = [];
  }
}

module.exports = SolicitacaoTransporte;
