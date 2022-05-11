"user strict"

import app from "./src/app.js";
// const http = require('http');

//Caso o valor da variável de ambiente seja nula entra o valor 3000
const port = process.env.PORT || 3000;

// const rotas = {
//     '/': 'Curso de NodeJS',
//     '/livros': 'Página de Livros',
//     '/autores': 'Página de Autores',
//     '/sobre': 'Página sobre'
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     console.log(req.url);
//     res.end(rotas[req.url]);
// });

app.listen(port, () => {
    console.log(`O servidor está operando em http://localhost:${port}`);
});