console.log('before');
const user = getUser(1);
console.log(user);
console.log('after');

//callbacks
//Promises
//async/await

function getUser(id) {
  setTimeout(() => {
    console.log('Reading a user from database...');
    return { id: id, githubname: 'sergio'};
  }, 2000);

  return 1;
}