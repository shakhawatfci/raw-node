

const handler = {};

handler.sampleHandler = (reqestProperty, callback) => {

    return callback(200, {
        message: 'hello Programmer you jus write your first route handler'
    });
}

module.exports = handler;