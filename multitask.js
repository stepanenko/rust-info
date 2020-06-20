
// process.env.UV_THREADPOOL_SIZE = 5;

const fs = require('fs');
const https = require('https');
const crypto = require('crypto');

const start = Date.now();

function doRequest() {
  https.request('https://www.google.com', res => {
    console.log('HTTPS:', Date.now() - start);
  }).end();
}

function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Hash:', Date.now() - start);
  });
}

doRequest();

fs.readFile('multitask.js', 'utf8', (err, data) => {
  if (err) console.error('ERROR:', err.message)
  // console.log('data', data);   // shows all contents of this file
  console.log('Read File:', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();

