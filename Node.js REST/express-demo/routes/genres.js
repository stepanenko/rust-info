const express = require('express');
const router = express.Router();
const Joi = require('joi');

const genres = [
  { id: 1, genre: "horror"},
  { id: 2, genre: "thriller"},
  { id: 3, genre: "fantastic"}
];

router.get('/', (req, res) => {
  res.send(genres)
});

router.post('/', (req, res) => {
  let gen = {};
  gen.id = genres.length + 1;
  gen.genre = req.body.genre;
  genres.push(gen);
  res.send(gen);
});

router.put('/:id', (request, response) => {
  const gen = genres.find(g => g.id == request.params.id);
  if (!gen) return response.status(404).send('Such genre was not found');

  const { error } = validateGenre(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  gen.genre = request.body.genre;
  response.send(`Genre with id ${request.params.id} was updated`);
});

router.delete('/:id', (req, res) => {
  const gen = genres.find(g => g.id == req.params.id);
  if (!gen) return res.status(404).send("Such genre was not found");

  let index = genres.indexOf(gen);
  genres.splice(index, 1);
  res.send(`Genre with index ${index} was deleted`);
});

function validateGenre(genre) {
  const schema = {
    genre: Joi.string().min(3).required()
  };

  return Joi.validate(genre, schema);
}

module.exports = router;