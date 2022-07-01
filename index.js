const http = require('http');
const url = require('url');

const { StringDecoder } = require('string_decoder');

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

app.handleRequest = (req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headerObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    req.on('data', (data) => {
        buffer += decoder.write(data);
    }
    ).on('end', () => {
        buffer += decoder.end();

        console.log(buffer);
        res.end('Hello ailsha\n');
    });


}

app.createServer();

