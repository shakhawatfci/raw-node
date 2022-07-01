// handle all request and response 
const url = require('url');
const { StringDecoder } = require('string_decoder');

const handler = {};
handler.handleReqRes = (req, res) => {

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

module.exports = handler;