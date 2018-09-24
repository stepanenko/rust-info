
const os = require('os');

let totalMemory = os.totalmem();

let freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const fs = require('fs');

let files = fs.readdirSync('./'); //sync method

console.log(files);

// async method:
fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

