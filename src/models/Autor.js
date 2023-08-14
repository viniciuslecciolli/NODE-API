import mongoose from "mongoose"; //importa o mongoose para manipular os dados do MongoDB.

const autorSchema = new mongoose.Schema ( //cria uma constante com o nome 'autorSchema' e instancia um novo schema de dados do MongoDB.
    { //campos do Schema:
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false //versiona o Schema para indicar a partir de qual versão um determinado campo existe por exemplo.
    }
)

const autores = mongoose.model("autores", autorSchema); //cria o Schema 'autores' de acordo com os dados de 'autorSchema'.

export default autores; //exporta a constante 'autores' para ser utilizada em outra parte do código.