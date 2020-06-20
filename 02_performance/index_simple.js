
const cluster = require('cluster');
const express = require('express');
const app = express();

if (cluster.isMaster) {
  // Cause index.js to be executed 'again' but in a child mode
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  // Im a child, Im going to act like a server and do nothing else
  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {} // simulates long operation
  }
  
  app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hi there');
  });

  app.get('/fast', (req, res) => {
    res.send('That was fast!');
  });
  
  app.listen(3000, () => console.log('server is on...'));
}
