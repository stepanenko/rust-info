
const https = require('https');

const start = Date.now();

function doRequest() {
  const req = https.request('https://www.google.com', res => {
    // console.log('statusCode:', res.statusCode);
    // console.log('headers:', res.headers);   // lots of info
    res.on('data', () => {});
    
    res.on('end', () => {
      console.log(Date.now() - start);
    });
  });
  
  req.on('error', (e) => {
    console.error(e);
  });
  
  req.end();
}

// Node's libuv passes all http requests to the OS that actually makes them
// not the Event Loop or Thread Pool

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
