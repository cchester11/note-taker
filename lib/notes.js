const fs = require('fs')

function createNewNote(database) {
  database = JSON.stringify(database)
  // console.log(note)

  fs.writeFileSync('db/db.json', database, (note) => {
    if (note) {
      return console.log(note)
    }
  })
}

module.exports = createNewNote