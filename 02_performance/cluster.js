
const cluster = require('cluster');
const express = require('express');
const numCPUs = require('os').cpus().length;

const app = express();

if (cluster.isMaster) {
  /// Cause index.js to be executed 'again' but in a child mode
  console.log(`Master ${process.pid} is running`);
  /// Manual adding:
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();

  /// Fork workers:
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
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

  app.listen(3000);
  
  /// Running Node.js will now share port 3000 between the workers
  /// On Windows, it is not yet possible to set up a named pipe server in a worker
  console.log(`Worker ${process.pid} started`);
}
