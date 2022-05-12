"use strict"

import Livro from "../models/Livro.js";

export default class LivroController {

    static listarLivros = (req, res) => {
    Livro.find((error, livros) => {
            res.status(200).json(livros);
        })
    }
    // static listarLivros() {
    //     return (req, res) => {
    //         Livro.find((error, livros) => {
    //             res.status(200).json(livros);
    //         })
    //     }
    // }

    static cadastrarLivro = (req, res) => {
        let livro = new Livro(req.body);
        livro.save((error) => {
            if (error) {
                res.status(500).send('Erro ao criar um novo livro na base de dados. \n' + error.message);
            }
            else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        Livro.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if (!error) {
                res.status(200).send('Livro atualizado com sucesso!');
            }
            else {
                res.status(500).send('Erro ao atualizar o livro na base de dados. \n' + error.message);
            }
        });
    }

    static buscarLivroPorID = (req, res) => {
        const id = req.params.id;

        Livro.findById(id,(error, livro) => {
            if (!error) {
                res.status(200).send(livro);
            }
            else {
                res.status(400).send('Erro ao buscar o livro na base de dados. \n' + error.message);
            }
        });
    }

    static deletarLivro = (req, res) => {
        const id = req.params.id;

        Livro.findByIdAndDelete(id,(error) => {
            if (!error) {
                res.status(200).send('O livro foi deletado com sucesso!');
            }
            else {
                res.status(400).send('Erro ao buscar o livro na base de dados. \n' + error.message);
            }
        });
    }

}

