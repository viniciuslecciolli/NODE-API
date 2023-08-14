import autores from "../models/Autor.js"; //importa model 'Autor.js' para utilizar as coleções.

class AutorController { //classe que terá todos os comandos para as rotas de acordo com os verbos HTTP.

    static listarAutores = (req, res) => { //cria método estático 'listarAutores' GET.
        autores.find((err, autores) => { //lista todos os autores.
            res.status(200).json(autores) //retorna o status 200 e os autores cadastrados em json.
        })
    }

    static listarAutoresPorId = (req, res) => {
        const id = req.params.id; //cria constante de id para identificar o registro a ser atualizado.
        
        autores.findById(id, (err, autores) => { //chama a collection 'autores' e busca por id.
            if (err) {
                res.status(400).send({message: `${err.message} - Id do Autor não localizado.`}) //retorna o erro 400 (erro de usuário - id errado) e mensagem.
            } else {
                res.status(200).json(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) => { //cria método estático 'cadastrarAutor' POST.
        let autor = new autores(req.body); //cria um novo autor de acordo com os dados passados na requisição.
        
        autor.save((err) => { //salva o novo autor no banco com tratamento de erro 'err'.
            if (err) { //se der um erro, devolve que houve falha junto do código 500.
                res.status(500).send({message: `${err.message} - falha ao cadastrar Autor.`});
            } else {
                res.status(201).send(autor.toJSON()); //criou o Autor com sucesso. envia status '201' e envia um JSON. 201 deu certo o PUT.
            }
        });
    }

    static atualizarAutor = (req, res) => { //cria método estático para 'atualizarAutor' PUT.
        const id = req.params.id; //cria constante de id para identificar o registro a ser atualizado.

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => { //pega a collection 'autores', busca o conteúdo a ser atualizado pelo id e atualiza passando o que existe no corpo da requisição.
            if (!err) { //se não for erro, atualiza a info.
                res.status(200).send({message: 'Autor atualizado com sucesso!'}); //se OK, envia resposta com o status 200 (OK) e a mensagem (Autor atualizado com sucesso!).
            } else {
                res.status(500).send({message: err.message}); //se NÃO OK, envia a resposta com o status 500 e a mensagem de erro com o 'err message'.
            }
        });
    }

    static excluirAutor = (req, res) => { //cria método estático para 'excluirAutor' DELETE.
        const id = req.params.id; //cria constante de id para identificar o registro a ser excluído.

        autores.findByIdAndDelete(id, (err) => { //pega a collection autores e busca o conteúdo a ser excluído pelo ID. Passa o id como parâmetro de exclusão e o 'err' se necessário.
            if (!err) { //se não der erro.
                res.status(200).send({message: 'Autor removido com sucesso!'}); //envia o status 200 (OK) e a mensagem que o Autor foi removido com sucesso.
            } else {
                res.status(500).send({message: err.message}); //envia o status 500 (erro no servidor) e mostra a mensagem de erro.
            }
        });
    }

}

export default AutorController; //exporta a classe 'AutorController' para utilizar posteriormente no app.js.