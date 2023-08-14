import express from "express"; //importa o Express.
import livros from "./livrosRoutes.js"; //importa rotas de 'livrosRoutes.js.
import autores from "./autoresRoutes.js"; //importa rotas de 'autoresRoutes.js.

const routes = (app) => { //cria uma const routes para salvar o retorno.
    app.route('/').get((req, res) => { //resposta do endpoint padrão '/home'.
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use( //usa o app.use para dizer que a resposta será via json e a rota disponível atualmente (v.1) é a 'livros'.
        express.json(), //recebe os dados e faz o parse para json.
        livros,
        autores
    )
}

export default routes; ////exporta o 'routes' para fazer o retorno das informações em outras telas.