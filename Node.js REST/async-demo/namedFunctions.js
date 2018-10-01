console.log('before');
getUser(1, showUser);
console.log('after');

// Named Function to rescue:

function displayCommits(repo, commits) {
  console.log(`List of ${repo}'s commits: ${commits}`)
}

function showRepos(user, repos) {
  console.log(`${user}'s repos: ${repos}.`)

  getCommits(repos[0], displayCommits)
}

function showUser(user) {
  console.log('User: ', user);
  
  getRepos(user.githubname, showRepos);
}




function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from database...');
    callback({ id: id, githubname: 'Sergio'});
  }, 1000);
}

function getRepos(username, callback) {
  setTimeout(() => {
    callback(username, ['repo1', 'repo2', 'repo3']);
  }, 1000) 
}

function getCommits(repoName, callback) {
  setTimeout(() => {
    console.log(`Looking for commits in ${repoName}...`);
    callback(repoName, ['commit1', 'commit2'])
  }, 1000)
}

