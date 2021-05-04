const path = require('path');
const router = require('express').Router();

//res for sending data, files, ect to the browser
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
});

module.exports = router;