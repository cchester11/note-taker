const router = require("express").Router();
const { filterByNote, createNewNote } = require("../../lib/notes");
const { db } = require("../../db/db.json");

//get request done.
//need to create a lib folder for the functions used in this get route
router.get("/notes", (req, res) => {
  let results = db;
  if (req.query) {
    results = filterByNote(req.query, results);
  }
  res.json(results);
});

//post request done.
//post the new note to JSON by using the req.body in a createNewNote function and post the new note as a response
router.post("/notes", (req, res) => {
  req.body.id = db.length.toString();

  if (req.body) {
    const note = createNewNote(req.body, db);
    res.json(note);
  }
});

module.exports = router;
