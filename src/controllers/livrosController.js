import livros from "../models/Livro.js"; //importa model 'Livro.js' para utilizar as coleções.

class LivroController { //classe que terá todos os comandos para as rotas de acordo com os verbos HTTP.

    static listarLivros = (req, res) => { //cria método estático 'listarLivros' GET.
        livros.find() //busca os livros gerais.
            .populate('autor') //popula com os dados do 'autor' com base no 'ObjectId'.
            .exec((err, livros) => { //lista todos os livros.
                res.status(200).json(livros) //retorna o status 200 e os livros cadastrados em json.
        })
    }

    static listarLivrosPorId = (req, res) => {
        const id = req.params.id; //cria constante de id para identificar o registro a ser atualizado.
        
        livros.findById(id) //busca os livros por id.
            .populate('autor', 'nome') //popula o 'autor' no campo 'nome'.
            .exec((err, livros) => { //chama a collection 'livros' e busca por id.
            if (err) {
                res.status(400).send({message: `${err.message} - Id do livro não localizado.`}) //retorna o erro 400 (erro de usuário - id errado) e mensagem.
            } else {
                res.status(200).json(livros);
            }
        })
    }

    static cadastrarLivro = (req, res) => { //cria método estático 'cadastrarLivro' POST.
        let livro = new livros(req.body); //cria um novo livro de acordo com os dados passados na requisição.
        
        livro.save((err) => { //salva o novo livro no banco com tratamento de erro 'err'.
            if (err) { //se der um erro, devolve que houve falha junto do código 500.
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
            } else {
                res.status(201).send(livro.toJSON()); //criou o livro com sucesso. envia status '201' e envia um JSON. 201 deu certo o PUT.
            }
        });
    }

    static atualizarLivro = (req, res) => { //cria método estático para 'atualizarLivro' PUT.
        const id = req.params.id; //cria constante de id para identificar o registro a ser atualizado.

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => { //pega a collection 'livros', busca o conteúdo a ser atualizado pelo id e atualiza passando o que existe no corpo da requisição.
            if (!err) { //se não for erro, atualiza a info.
                res.status(200).send({message: 'Livro atualizado com sucesso!'}); //se OK, envia resposta com o status 200 (OK) e a mensagem (Livro atualizado com sucesso!).
            } else {
                res.status(500).send({message: err.message}); //se NÃO OK, envia a resposta com o status 500 e a mensagem de erro com o 'err message'.
            }
        });
    }

    static excluirLivro = (req, res) => { //cria método estático para 'excluirLivro' DELETE.
        const id = req.params.id; //cria constante de id para identificar o registro a ser excluído.

        livros.findByIdAndDelete(id, (err) => { //pega a collection livros e busca o conteúdo a ser excluído pelo ID. Passa o id como parâmetro de exclusão e o 'err' se necessário.
            if (!err) { //se não der erro.
                res.status(200).send({message: 'Livro removido com sucesso!'}); //envia o status 200 (OK) e a mensagem que o livro foi removido com sucesso.
            } else {
                res.status(500).send({message: err.message}); //envia o status 500 (erro no servidor) e mostra a mensagem de erro.
            }
        });
    }

    static listarLivroPorEditora = (req, res) => { //cria método estático para 'listarLivroPorEditora' GET.
        const editora = req.query.editora; //cria constante 'editora' para trazer os registros de acordo com o que for passado no campo editora na req.

        livros.find({'editora': editora}, {}, (err, livros) => { //busca os livros de acordo com o conteúdo passado a editora.
           if (err) {
                res.status(500).send({message: err.message}); //envia o status 500 (erro no servidor) e mostra a mensagem de erro.
           } else {
                res.status(200).send(livros); //envia o status 200 (OK) e lista os livros.
           }
        }) 
    }

}

export default LivroController; //exporta a classe 'LivroController' para utilizar posteriormente no app.js.