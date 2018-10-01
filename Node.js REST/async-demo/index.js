console.log('before');
getUser(1, (user) => {
  console.log('User: ', user);
  
  getRepos(user.githubname, (repos) => {
    console.log(`${user.githubname}'s repos: ${repos}.`)

    getCommits(repos[0], (commits) => {
      console.log(`List of ${repos[0]}'s commits: ${commits}`)
    })
  });

});
console.log('after');

// Named Function to rescue, look in namedFunctions.js...

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from database...');
    callback({ id: id, githubname: 'Sergio'});
  }, 1000);
}

function getRepos(username, callback) {
  setTimeout(() => {
    callback(['repo1', 'repo2', 'repo3']);
  }, 1000) 
}

function getCommits(repoName, callback) {
  setTimeout(() => {
    console.log(`Looking for commits in ${repoName}...`);
    callback(['commit1', 'commit2'])
  }, 1000)
}