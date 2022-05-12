"use strict"

import express from "express";
import LivroController from "../controllers/LivroController.js";

const router = express.Router();

router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/:id', LivroController.buscarLivroPorID)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.deletarLivro)
    .post('/livros', LivroController.cadastrarLivro);

export default router;