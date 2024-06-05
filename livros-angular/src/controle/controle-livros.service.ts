import { Injectable } from "@angular/core"
import { Livro } from "../modelo/livro"

@Injectable({
  providedIn: "root",
})
export class ControleLivrosService {
  livros: Livro[]

  constructor() {
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: "Use a Cabeça: Java",
        resumo:
          "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orienta a objetos (OO) e Java.",
        autores: ["Bert Bates", "Kathy Sierra"],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: "Java, como Programar",
        resumo:
          "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel",
        autores: ["Paul Deitel", "Harvey Deitel"],
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: "Bootstrap",
        resumo:
          "O conteúdo foi escrito de forma clara e concisa, em linguagem didática, mostrando exemplos práticos e exercícios para ajudá-lo a compreender os conceitos apresentados.",
        autores: ["Maurício Samy Silva"],
      },
    ]
  }

  obterLivros = (): Livro[] => {
    return this.livros
  }

  incluir = (livro: Livro): void => {
    const codigo =
      this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1
    this.livros.push({ ...livro, codigo })
  }

  excluir = (codigo: number): void => {
    const indiceLivro = this.livros.findIndex(
      (livro) => livro.codigo === codigo
    )
    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1)
    }
  }
}
