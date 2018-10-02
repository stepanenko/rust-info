getCustomer(1, customer => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies(movies => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
});

function getCustomer(id, callback) {
  setTimeout(() => {
    callback({
      id: 1,
      name: 'Sergio Stepanenko',
      isGold: true,
      email: 'sergio@step.com'
    })
  }, 3000)
}

function getTopMovies(callback) {
  setTimeout(() => {
    callback(['movie1', 'movie2'])
  }, 2000)
}

function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback()
  }, 1000)
}