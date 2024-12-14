class Incidente {
  constructor(id, solicitacaoId, paciente, descricao) {
    this.id = id;
    this.solicitacaoId = solicitacaoId;
    this.paciente = paciente;
    this.descricao = descricao;
    this.status = "Pendente";
  }
}

module.exports = Incidente;
