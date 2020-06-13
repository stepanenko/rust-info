
// === PROMISES APPROACH ===

// Solution 1:
getCustomer(1).then(customer => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies().then(movies => console.log('Top movies: ', movies));
    sendEmail().then(mail => console.log('Mail: ', mail));
  }
});

// Solution 2 (less code but only final result is loged):
getCustomer(1)
  .then(function (customer) {
    if (customer.isGold) getTopMovies()
      .then(movies => sendEmail())
      .then(mail => console.log('Mail from Solution2: ', mail));
  }
  );

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Sergio Stepanenko',
        isGold: true,
        email: 'sergio@step.com'
      });
    }, 1000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Email with movies sent');
    }, 1000);
  });
}