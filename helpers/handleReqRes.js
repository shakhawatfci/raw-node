// handle all request and response 
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');

const { notFoundHandler } = require('../handlers/routesHandler/notFoundHandler');

const handler = {};
handler.handleReqRes = (req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headerObject = req.headers;


    const requestProperty = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headerObject
    };

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;



    chosenHandler(requestProperty, (statusCode, payload) => {
        statusCode = typeof (statusCode) === 'number' ? statusCode : 500;
        payload = typeof (payload) === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        res.setHeader('Content-Type', 'application/json');
        res.writeHead(statusCode);
        res.end(payloadString);
    });






    // const decoder = new StringDecoder('utf-8');
    // let buffer = '';

    // req.on('data', (data) => {
    //     buffer += decoder.write(data);
    // }
    // ).on('end', () => {
    //     buffer += decoder.end();

    //     console.log(buffer);
    //     res.end('Hello ailsha\n');
    // });


}

module.exports = handler;