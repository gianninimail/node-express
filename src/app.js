"use strict"

import express from "express";
import db from "./config/dbcon.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão com a base de dados!!!'));
db.once("open", () => {
    console.log('Conexão com a base de dados feita com sucesso!');
});

const app = express();
app.use(express.json());
routes(app);

export default app;

// const livros = [
//     {id: 1, nome: 'Senhor dos anéis'},
//     {id: 2, nome: 'Avatar'}
// ];

// app.get('/', (req, res) => {
//     res.status(200).send('Curso de Node');
// });
//
// app.get('/livros', (req, res) => {
//
// });

// app.post('/livros', (req, res) => {
//     livros.push(req.body);
//     res.status(201).send('Livro cadastrado com sucesso!');
// });
//
// app.put('/livros/:id', (req, res) => {
//     let index = livros.findIndex(livro => livro.id == req.params.id);
//     let livro = livros[index];
//
//     livro.nome = req.body.nome;
//
//     res.status(200).json(livro);
// });


// app.get('/livros/:id', (req, res) => {
//     let index = livros.findIndex(livro => livro.id == req.params.id);
//     let livro = livros[index];
//     res.status(200).json(livro);
// });
//
// app.delete('/livros/:id', (req, res) => {
//     let {id} = req.params;
//     let index = livros.findIndex(livro => livro.id == id);
//
//     livros.splice(index, 1);
//
//     res.status(200).send(`Livro ${id} deletado com sucesso!`);
// });
