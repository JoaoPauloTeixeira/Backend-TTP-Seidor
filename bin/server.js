const http = require('http');
const app = require('../src/app');

const port = normalizandoPorta(process.env.PORT || '3333');
app.set('port', port);

const server = http.createServer(app); //Criando o servidor

server.listen(port); //Servidor ouvindo porta configurada
server.on('error', trataError);

console.log(`Aplicação rodando na porta ${port}`);

//O intuito da função é fazer uma espécie de verificação de porta disponível
function normalizandoPorta(valor) {
    const port = parseInt(valor, 10);

    if (port >= 0) {
        return port;
    }

    return false;
}

function trataError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    switch (error.code) {
        //Erro de permissão
        case 'EACCESS':
            console.error(`${bind} é necessário elevar os privilégios.`)
            process.exit(1);
        //Erro de endereço em uso
        case 'EADDRINUSE':
            console.error(`${bind} já está em uso.`)
            process.exit(1);
        default:
            break;
    }
}