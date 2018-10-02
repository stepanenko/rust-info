getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(movies, () => {
        console.log('Email sent...')
      })
    })
  }
});

// === Promises Approach ===
  
function getCustomer(id, callback) {
  setTimeout(() => {
    callback({
      id: 1,
      name: 'Sergio Stepanenko',
      isGold: true,
      email: 'sergio@step.com'
    })
  }, 2000)
}

function getTopMovies(callback) {
  setTimeout(() => {
    callback(['movie1', 'movie2'])
  }, 1500)
}

function sendEmail(movies, callback) {
  setTimeout(() => {
    callback()
  }, 1000)
}