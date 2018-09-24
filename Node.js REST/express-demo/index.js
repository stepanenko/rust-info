const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: 'course1'},
  { id: 2, name: 'course2'},
  { id: 3, name: 'course3'},
]
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send('The course was not found');
  res.send(course);
});

app.post('/api/courses', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required();
  }
  const result = Joi.validate(req.body, schema);
  console.log(result);

  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send('The name is required and should be more than 3 chars');
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
})
// app.get('/api/posts/:year/:month', (req, res) => {
//   res.send(req.params) // to get parameters like '../posts/2018/1'
// })
// app.get('/api/posts/:year/:month', (req, res) => {
//   res.send(req.query) // to get query like '?sortBy=name'
// })

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//console.log(app);