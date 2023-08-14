import app from './src/app.js'; //importa o arquivo app.js para fazer a conexão com o express.
const port = process.env.port || 3000; //definição de porta para escutar requisições (serviço de hospedagem ou local).

app.listen(port, () => { //função para ouvir as requisições e printar na tela. (assim que for invocado pelo comando 'node server.js').
    console.log(`Servidor escutando em http://localhost:${port}`); //retorno textual do server.
})