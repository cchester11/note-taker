const router = require("express").Router();
const db = require("../../db/db.json");
const fs = require('fs');
const path = require('path');
const createNewNote = require("../../lib/notes");

// get request done.
// need to create a lib folder for the functions used in this get route
router.get('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf8', (err, data) => {
    if(err) throw err
    res.json(JSON.parse(data))
  })
});

// post request done.
// post the new note to JSON by using the req.body in a createNewNote function and post the new note as a response
router.post('/notes', function (req, res) {
  // console.log(notesDb)
  if (db.length == 0) {
    req.body.id = "0";
  } else {
    req.body.id = db.length.toString()
  }
  db.push(req.body)
  res.json(req.body)
  createNewNote(db)

});

router.delete('/notes/:id', (req, res) => {
  const results = db.filter(note => note.id !== req.params.id)

  createNewNote(results);

  res.json(results);
});

module.exports = router;
