class Paciente {
  constructor(id, nome, localizacao, status) {
    this.id = id;
    this.nome = nome;
    this.localizacao = localizacao;
    this.status = status;
  }

  atualizarStatus(novoStatus) {
    this.status = novoStatus;
  }
}

module.exports = Paciente;
