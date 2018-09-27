const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const log = require('./middleware/logging');
const auth = require('./auth');
const courses = require('./routes/courses');
const home = require('./routes/home');
const genres = require('./routes/genres');
const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
//console.log(`app: ${app.get('env')}`)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);
app.use('/api/genres', genres);

//Configuration
console.log('App Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
//console.log('Mail Password: ' + config.get('mail.password')); //doesnt work coz I cant make 'set' work

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...')
}

// My Middleware functions:
app.use(log);
//app.use(auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on http://localhost:${port}...`));
