"use strict"

import mongoose from "mongoose";

const LivroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
)

const Livro = mongoose.model('Livro', LivroSchema);

export default Livro;