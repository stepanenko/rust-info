const express = require('express');
const router = express.Router();

const genres = [
  { id: 1, genre: "horror"},
  { id: 2, genre: "thriller"},
  { id: 3, genre: "fantastic"}
];

router.get('/', (req, res) => {
  res.send(genres)
});

router.post('/', (req, res) => {
  let genre = {};
  genre.id = genres.length + 1;
  genre.genre = req.body.genre;
  genres.push(genre);
  res.send(genre);
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  console.log(id)
  //let deleted = genres.slice(, 1);
  //res.send(deleted);
})

module.exports = router;