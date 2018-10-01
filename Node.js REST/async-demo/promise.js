// ==== CALLBACK APPROACH =====
// getUser(1, (user) => {
//   getRepositories(user.githubname, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log('Commits', commits);
//     })
//   })
// });

// ========= PROMISE APPROACH =======
// My solution:
// console.log('before');
// getUser(1).then(user => console.log('User: ', user));
// getRepositories().then(repos => console.log(`Repos: ${repos}.`));
// getCommits().then(commits => console.log(`List of commits: ${commits}`));
// console.log('after');

// Solution:
// console.log('before');
// getUser(1)
//   .then(user => getRepositories(user.githubname))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log('Commits', commits))
//   .catch(err => console.log('Error', err.message));
// console.log('after');

// ====== ASYNC / AWAIT APPROACH ======
console.log('before');

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.githubname);
    const commits = await getCommits(repos[0]);
    console.log(commits)
  }
  catch (err) {
    console.log('Error: ', err.message)
  }
}

displayCommits();

console.log('after');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from database...');
      resolve({ id: id, githubname: 'Sergio'});
    }, 1000);
  })
}

function getRepositories() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API ...');
      resolve(['repo1', 'repo2', 'repo3']);
      //reject(new Error('Could not load repos'));
    }, 1000)
  })
}

function getCommits() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Calling GitHub API...`);
      resolve(['commit1', 'commit2']);
    }, 1000)
  })
}

