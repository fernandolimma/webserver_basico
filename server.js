// Criar um objeto http
const http = require ('http');
// Endereco da aplicação
const hostname = '127.0.0.1';
//Informar a porta da aplicação
const port = 3000;

// Chamando o objeto criado
http.createServer ((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World! - Ola Mundo!");
}).listen(port, hostname,() => {
    console.log("O servidor esta rodando em http://127.0.0.1:3000/");
});
