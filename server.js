"user strict"

const http = require('http');

const port = 3000;

const rotas = {
    '/': 'Curso de NodeJS',
    '/livros': 'Página de Livros',
    '/autores': 'Página de Autores',
    '/sobre': 'Página sobre'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    console.log(req.url);
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`O servidor está operando em http://localhost:${port}`);
});