import express from "express"; //importa o framework express.
import db from "./config/dbConnect.js"; //importa a variável de conexão com o banco.
import routes from "./routes/index.js"; //importa a variável router para executar as ações de acordo com os métodos.

db.on("error", console.log.bind(console, 'Erro de conexão')); //traz msg de erro de conexão no banco através do terminal (console).
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso!'); //tenta realizar a conexão com o banco uma vez.
});

const app = express(); //cria instância do express.

app.use(express.json()); //utiliza o express.json para reconhecer os dados de POST e PUT enviados pelo postman.

routes(app); //redireciona para as rotas.

export default app; //exporta o json para ser exibido.