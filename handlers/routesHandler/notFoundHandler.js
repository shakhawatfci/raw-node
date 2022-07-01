

const handler = {};

handler.notFoundHandler = (reqestProperty, callback) => {
    return callback(404, {
        message: 'Your request was not found'
    })
}

module.exports = handler;