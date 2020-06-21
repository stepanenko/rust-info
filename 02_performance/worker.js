
const express = require('express');
const Worker = require('webworker-threads').Worker;
const app = express();

app.get('/', (req, res) => {

  const worker = new Worker(function () {
    let counter = 0;
    this.onmessage = function () {
      while (counter < 1e9) counter++; // simulates heavy task
      postMessage(counter);
    };
  });

  worker.onmessage = function (myCounter) {
    console.log(myCounter);   // { data: 1000000000 }
    res.send('' + myCounter.data);
  };

  worker.postMessage();
});

app.get('/fast', (req, res) => {
  res.send('That was fast!');
});

//// Example from npmjs.com:
// const worker = new Worker(function () {
//   postMessage("I'm working before postMessage('ali').");
//   this.onmessage = function (event) {
//     postMessage('Hi ' + event.data);
//     self.close();
//   };
// });
// worker.onmessage = function (event) {
//   console.log("Worker said : " + event.data);
// };
// worker.postMessage('ali');

app.listen(3000, () => console.log('server is on...'));
