const http = require('http');

const { handleReqRes } = require('./helpers/handleReqRes');

const app = {};

app.config = {
    port: 3001
};

app.createServer = () => {
    const server = http.createServer(app.handleRequest);
    server.listen(app.config.port, () => {
        console.log(`Server running at http://localhost:${app.config.port}/`);
    });

}

app.handleRequest = handleReqRes;

app.createServer();

