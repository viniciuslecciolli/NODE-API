import mongoose from "mongoose"; //importa a biblioteca do mongoose para ser usada.

mongoose.connect("mongodb+srv://"); //passa as credenciais do mongodb para conexão.

let db = mongoose.connection; //cria variável com a conexão do banco.

export default db; //exporta essa variável para ser usada em qualquer outro lugar se importada.