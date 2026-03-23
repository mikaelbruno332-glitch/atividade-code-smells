// Enum de status
const StatusLivro = {
  DISPONIVEL: "DISPONIVEL",
  EMPRESTADO: "EMPRESTADO"
};

// Classe Livro
class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.status = StatusLivro.DISPONIVEL;
  }

  emprestar() {
    if (this.status === StatusLivro.EMPRESTADO) {
      throw new Error("Livro já emprestado");
    }
    this.status = StatusLivro.EMPRESTADO;
  }
}

// Classe Usuario
class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
    this.ativo = true;
  }
}

// Classe Emprestimo
class Emprestimo {
  constructor(usuario, livro) {
    this.usuario = usuario;
    this.livro = livro;
    this.data = new Date();
  }
}

// Sistema separado (menos responsabilidade)
class SistemaBiblioteca {
  constructor() {
    this.livros = [];
    this.usuarios = [];
  }

  buscarUsuario(email) {
    return this.usuarios.find(u => u.email === email);
  }

  buscarLivro(titulo) {
    return this.livros.find(l => l.titulo === titulo);
  }

  realizarEmprestimo(email, titulo) {
    const usuario = this.buscarUsuario(email);
    const livro = this.buscarLivro(titulo);

    if (!usuario) throw new Error("Usuário não encontrado");
    if (!livro) throw new Error("Livro não encontrado");

    livro.emprestar();

    return new Emprestimo(usuario, livro);
  }
}
