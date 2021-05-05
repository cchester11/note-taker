const fs = require('fs')

function createNewNote(database) {
  database = JSON.stringify(database)
  // console.log(note)

  fs.writeFileSync('db/db.json', database)
}

module.exports = createNewNote