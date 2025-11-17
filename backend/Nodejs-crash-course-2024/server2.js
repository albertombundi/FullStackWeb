import { createServer, get } from 'http';
import { json } from 'stream/consumers';
const PORT = process.env.PORT;

// Dados simulados de usuários
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' },
];

// Middleware do registrador de requisições
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};


//Middleware JSON
const JsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Manipulador de rota para GET api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Manipulador de rota para GET api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found' }));
    }
    res.end();
};


// Not Found Handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();
};

// Servidor HTTP simples com rotas para obter usuários
const server = createServer((req, res) => {
    logger(req, res, () => {
        JsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res);
            } else if (req.url.match(/\/api\/users\/\d+/) && req.method === 'GET') {
                getUserByIdHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
       });
    });
});


// Iniciar o servidor
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});