const url = 'http:/google.com';

function log(message) {
    // for now imagine here sending HTTP request
    console.log(message)
}

module.exports.log = log;

//module.exports = log;

//console.log(module.exports); // [Function: log]