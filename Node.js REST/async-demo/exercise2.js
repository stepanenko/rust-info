getCustomer(1, showCustomer);

// === Named Functions Approach ===
  function showCustomer(customer) {
    console.log('Customer: ', customer);
    if (customer.isGold) {
      getTopMovies(getTop);
    }
  }
  
function getTop (movies) {
  console.log('Top movies: ', movies);
  sendEmail(movies, mailSender);
}

function mailSender () {
  console.log('Email sent...')
}


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

function sendEmail(movies, callback) {
  setTimeout(() => {
    callback()
  }, 1000)
}