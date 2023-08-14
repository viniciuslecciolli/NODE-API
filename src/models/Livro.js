import mongoose from "mongoose"; //importa o mongoose.

const livroSchema = new mongoose.Schema( //cria constante instanciando o 'livroSchema' para representar as tabelas e campos.
    {
        id: {type: String}, //campos do db declarados.
        autor: {type: mongoose.Schema.Types.ObjectId, ref:'autores', required: true}, //informa que o autor é do tipo 'objectid', id do autor que vem do Schema 'autores'.
        editora: {type: String, required: true},
        numeroPaginas: {type: Number},
        titulo: {type: String, required: true}
    }
);

const livros = mongoose.model('livros', livroSchema); //cria a coleção 'livros'.

export default livros; //exporta a constante 'livros' para ser usada em outra parte do software.