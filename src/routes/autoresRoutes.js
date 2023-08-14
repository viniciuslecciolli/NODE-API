import express from "express"; //importa o Express para conseguir indicar as rotas.
import AutorController from "../controllers/autoresController.js"; //importa a classe 'AutorController' de 'Autor.js' para executar as ações.

const router = express.Router(); //usa a funcionalidade de criar as rotas no Express de acordo com a função Router().

router //indica as rotas.
    .get("/autores", AutorController.listarAutores) //faz o get na rota 'autores' chamando 'listarautores' em autoresController.js.
    .get("/autores/:id", AutorController.listarAutoresPorId) //faz o get por id na rota 'autores' chamando 'listarautores' em autoresController.js.
    .post("/autores", AutorController.cadastrarAutor) //faz o post na rota 'autores' chamando 'cadastrarAutor' em autoresController.js.
    .put("/autores/:id", AutorController.atualizarAutor) //faz o put por id na rota 'autores' chamando 'atualizarAutor' em autoresController.js.
    .delete("/autores/:id", AutorController.excluirAutor) //faz o delete pelo id na rota 'autores' chamando 'excluirAutor' em autoresController.js.

export default router; //exporta o 'router' para fazer o retorno das informações em outras telas.