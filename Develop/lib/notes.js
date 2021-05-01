const fs = require('fs');
const path = require('path');

function filterByNote(query, notesArray) {
  results = notesArray;
  if (query.name) {
    results = results.filter(note => note.name === query.name)
  }
}

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../data/db.json'),
    JSON.stringify({notes: notesArray}, null, 2)
  )
  return note;
}

module.exports = {
  filterByNote, 
  createNewNote
}