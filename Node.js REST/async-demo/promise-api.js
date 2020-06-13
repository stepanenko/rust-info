// ===== SETTLED PROMISES ====
const p = Promise.resolve({ id: 1});
p.then(result => console.log(result));

const pr = Promise.reject(new Error('failed'));
pr.catch(err => console.log(err.message));


// ===== PARALLEL PROMISES ====
const p1 = new Promise(resolve => {
  setTimeout(() => {
    console.log('Async operation 1...');
    resolve(1);
  }, 2000);
});

const p2 = new Promise(resolve => {
  setTimeout(() => {
    console.log('Async operation 2 ...');
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2])
  .then(result => console.log(result)); // two promises will run almost at the same time

Promise.race([p1, p2])
  .then(result => console.log(result)); // will show '1' only
