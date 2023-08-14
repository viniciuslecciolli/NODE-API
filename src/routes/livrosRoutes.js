import express from "express"; //importa o Express para conseguir indicar as rotas.
import LivroController from "../controllers/livrosController.js"; //importa a classe 'LivroController' de 'Livro.js' para executar as ações.

const router = express.Router(); //usa a funcionalidade de criar as rotas no Express de acordo com a função Router().

router //indica as rotas.
    .get("/livros", LivroController.listarLivros) //faz o get na rota 'livros' chamando 'listarLivros' em livrosController.js.
    .get("/livros/busca", LivroController.listarLivroPorEditora) //faz o get na rota 'livros/busca' chamando 'listarLivroPorEditora' em livrosController.js.
    .get("/livros/:id", LivroController.listarLivrosPorId) //faz o get por id na rota 'livros' chamando 'listarLivros' em livrosController.js.
    .post("/livros", LivroController.cadastrarLivro) //faz o post na rota 'livros' chamando 'cadastrarLivro' em livrosController.js.
    .put("/livros/:id", LivroController.atualizarLivro) //faz o put por id na rota 'livros' chamando 'atualizarLivro' em livrosController.js.
    .delete("/livros/:id", LivroController.excluirLivro) //faz o delete pelo id na rota 'livros' chamando 'excluirLivro' em livrosController.js.

export default router; //exporta o 'router' para fazer o retorno das informações em outras telas.